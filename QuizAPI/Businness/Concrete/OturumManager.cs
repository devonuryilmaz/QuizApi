using QuizAPI.Businness.Abstract;
using QuizAPI.Data;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class OturumManager : IOturumService
    {
        IOturumDal _oturumDal;
        IKullaniciRaporDal _raporDal;
        ISeviyeDal _seviyeDal;

        public OturumManager(IOturumDal oturumDal, IKullaniciRaporDal raporDal, ISeviyeDal seviyeDal)
        {
            _oturumDal = oturumDal;
            _raporDal = raporDal;
            _seviyeDal = seviyeDal;
        }
        public void Add(Oturum oturum)
        {
            _oturumDal.Add(oturum);
        }

        public void Delete(int id)
        {
            var item = _oturumDal.Get(i => i.OturumID == id);
            _oturumDal.Delete(item);
        }

        public List<Oturum> GetAll()
        {
            return _oturumDal.GetAll();
        }

        public Oturum GetKullaniciOturum(int kullaniciID)
        {
            using (var db = new QuizAppContext())
            {
                try
               {
                    int oturumID = _raporDal.GetAll(k => k.KullaniciID == kullaniciID).Max(k => k.OturumID).Value;
                    int sira = _raporDal.GetAll(r => r.OturumID == oturumID && r.KullaniciID == kullaniciID).Max(r => r.OturumSirasi).Value;
                    DateTime bitisTarihi = DateTime.Now;
                    try
                    {
                        bitisTarihi = _raporDal.GetAll(r => r.OturumID == oturumID && r.KullaniciID == kullaniciID && r.oturumTamamlandi == true).Max(r => r.endDate);

                    }
                    catch
                    {
                    }
                    if (sira == SonSeviyeSirasi(oturumID))
                    {
                        var oturumlar = _oturumDal.Get(o => o.OturumID == oturumID);
                        var oturum = _oturumDal.GetAll(o=> o.OturumID > oturumID).First();
                        if (DateTime.Now > bitisTarihi.AddHours(24))
                        {
                            return oturum;
                        }
                        else
                        {
                            return oturumlar;
                        }

                    }
                    else
                    {
                        var oturumlar = _oturumDal.Get(o => o.OturumID == oturumID);
                        return oturumlar;
                    }
                }
                catch (Exception ex)
                {
                    return _oturumDal.GetAll().First(o=> o.isAktif);
                }
                
            }
        }

        public int SonSeviyeSirasi(int oturumID)
        {
            int max = 0;

            using (QuizAppContext db = new QuizAppContext())
            {
                int? bulunan = 0;
                try
                {
                    bulunan = db.Seviyeler.Where(s => s.OturumID == oturumID && s.isAktif == true).OrderByDescending(s => s.OturumSirasi).FirstOrDefault().OturumSirasi;
                    if (bulunan != null && bulunan > max)
                        max = (Int32)bulunan;
                }
                catch 
                { }
                try
                {
                    bulunan = db.GazeCastSeviye.Where(s => s.oturumID == oturumID && s.isAktif == true).OrderByDescending(s => s.OturumSirasi).FirstOrDefault().OturumSirasi;
                    if (bulunan != null && bulunan > max)
                        max = (Int32)bulunan;
                }
                catch 
                { }
                try
                {
                    bulunan = db.FaceToFaces.Where(s => s.OturumID == oturumID && s.isAktif == true).OrderByDescending(s => s.OturumSirasi).FirstOrDefault().OturumSirasi;
                    if (bulunan != null && bulunan > max)
                        max = (Int32)bulunan;
                }
                catch 
                {}
                try
                {
                    bulunan = db.AtıfSeviye.Where(s => s.OturumID == oturumID && s.isAktif == true).OrderByDescending(s => s.OturumSirasi).FirstOrDefault().OturumSirasi;
                    if (bulunan != null && bulunan > max)
                        max = (Int32)bulunan;
                }
                catch 
                {}


            }
            return max;
        }

        public Oturum Update(Oturum oturum)
        {
            _oturumDal.Update(oturum);
            return oturum;
        }

        Oturum IOturumService.Get(int oturumID)
        {
            return _oturumDal.Get(o => o.OturumID == oturumID);
        }

    }
}
