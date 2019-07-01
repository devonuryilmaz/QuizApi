using QuizAPI.Businness.Abstract;
using QuizAPI.Data;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class KullaniciRaporManager : IKullaniciRaporService
    {
        IKullaniciRaporDal  _kullaniciRaporDal;
        IKategoriDal _kategoriDal;
        ISeviyeDal _seviyeDal;
        public KullaniciRaporManager(IKullaniciRaporDal kullaniciRaporDal, IKategoriDal kategoriDal,ISeviyeDal seviyeDal)
        {
            _kullaniciRaporDal = kullaniciRaporDal;
            _kategoriDal = kategoriDal;
            _seviyeDal = seviyeDal;
        }


        public void Add(KullaniciRapor kullaniciRapor)
        {
            _kullaniciRaporDal.Add(kullaniciRapor);
        }

        public List<KullaniciRapor> GetkullaniciRaporAll()
        {
            
            var list = _kullaniciRaporDal.GetAll();

            return list;
        }
        public void Delete(int id)
        {
            var r = GetkullaniciRaporByID(id);
            _kullaniciRaporDal.Delete(r);
        }

        public KullaniciRapor GetkullaniciRaporByID(int kullaniciRaporID)
        {
            var kullaniciRapor = _kullaniciRaporDal.Get(s => s.ID == kullaniciRaporID);
            return kullaniciRapor;
        }
        public List<RaporUser> GetKategoriKullaniciUser(int kategoriId,bool isCustom)
        {
            var context = new QuizAppContext();
            var a = context.KullaniciRapor.Where(x => x.isKategoriCustom == isCustom && x.KategoriID == kategoriId).ToList();
            var result = (from p in context.KullaniciRapor.Where(x => x.isKategoriCustom == isCustom && x.KategoriID == kategoriId)
                          group p by p.KullaniciID into pg
                          // join *after* group
                          join bp in context.Kullanicilar on pg.FirstOrDefault().KullaniciID equals bp.KullaniciID
                          select new RaporUser
                          {
                              isCustom = pg.FirstOrDefault().isKategoriCustom,
                              UserName = bp.AdSoyad,
                              kategoriId = pg.FirstOrDefault().KategoriID,
                              UserId = bp.KullaniciID,
                               endDate = pg.FirstOrDefault().endDate,
                               startDate = pg.FirstOrDefault().startDate
                          }).ToList();


        
            return result;
        }

        public List<RaporCevapAtif> GetAtifCevapUser(int userId, int seviyeId)
        {
            var context = new QuizAppContext();

            var result = (from p in context.AtıfCevap.Where(x => x.AtıfSeviyeID == seviyeId && x.UserID == userId)
                          
                          // join *after* group
                          join bp in context.AtıfSoru on p.AtıfSoruID equals bp.ID
                          select new RaporCevapAtif
                          {
                               Cevap=p.Cevap,
                               Soru = bp.Aciklama
                          }).ToList();



            return result;
        }

       

        public List<RaporUser> GetAtifKullaniciUser()
        {
            var context = new QuizAppContext();

            var result = (from p in context.KullaniciAtıfRapor
                          group p by p.KullaniciID into pg
                          // join *after* group
                          join bp in context.Kullanicilar.Where(d => d.isAdmin == false) on pg.FirstOrDefault().KullaniciID equals bp.KullaniciID
                          select new RaporUser
                          {                          
                              UserName = bp.AdSoyad,                         
                              UserId = bp.KullaniciID
                          }).ToList();



            return result;
        }

        public List<RaporSoru> GetKullaniciRaporSoru(int kullaniciId, int kategoriId, bool isCustom)
        {
            var result = new List<RaporSoru>();
            var context = new QuizAppContext();
            if (isCustom)
            {
                if (kategoriId == 2)
                {
                    result = (from p in context.KullaniciRapor.Where(x => x.KullaniciID == kullaniciId && x.isKategoriCustom == isCustom && x.KategoriID == kategoriId)

                              join bp in context.GazeCastSeviye on p.SeviyeID equals bp.ID
                              select new RaporSoru
                              {
                                  DogruSayisi = p.DogruSayisi,
                                  SeviyeAdi = bp.Aciklama,
                                  YanlisSayisi = p.YanlisSayisi,
                                  isTamamlandi = p.isTamamlandi,
                                  startDate = p.startDate,
                                  endDate = p.endDate
                                   
                              }).ToList();
                }
                else if (kategoriId == 5)
                {
                    result = (from p in context.KullaniciRapor.Where(x => x.KullaniciID == kullaniciId && x.isKategoriCustom == isCustom && x.KategoriID == kategoriId)

                              join bp in context.FaceToFaces on p.SeviyeID equals bp.ID
                              select new RaporSoru
                              {
                                  DogruSayisi = p.DogruSayisi,
                                  SeviyeAdi = bp.Aciklama,
                                  YanlisSayisi = p.YanlisSayisi,
                                  isTamamlandi = p.isTamamlandi,
                                  startDate = p.startDate,
                                  endDate = p.endDate
                              }).ToList();

                }
            }
            else
            {
                result = (from p in context.KullaniciRapor.Where(x => x.KullaniciID == kullaniciId && x.isKategoriCustom == isCustom && x.KategoriID == kategoriId)

                          join bp in context.Seviyeler on p.SeviyeID equals bp.SeviyeID
                          select new RaporSoru
                          {
                              DogruSayisi = p.DogruSayisi,
                              SeviyeAdi = bp.SeviyeNumarasi,
                              YanlisSayisi = p.YanlisSayisi,
                              isTamamlandi = p.isTamamlandi,
                              startDate = p.startDate,
                              endDate = p.endDate
                          }).ToList();
            }


            return result;
        }

        public List<RaporAtif> GetKullaniciAtifRaporSoru(int kullaniciId)
        {
            var result = new List<RaporAtif>();
            var context = new QuizAppContext();
         
                result = (from p in context.KullaniciAtıfRapor.Where(x => x.KullaniciID == kullaniciId)

                          join bp in context.AtıfSeviye on p.SeviyeID equals bp.ID
                          select new RaporAtif
                          {
                             SeviyeId = p.SeviyeID,
                              UserId = p.KullaniciID,
                              SeviyeAdi = bp.Aciklama,
                               endDate = p.endDate,
                               startDate = p.startDate,
                        
                              isTamamlandi = p.isTamamlandi
                          }).ToList();
            

            
            return result;
        }


        public bool KullaniciRaporControl(KullaniciRapor kullaniciRapor)
        {
           
            //foreach (var r in _kullaniciRaporDal.GetAll())
            //{
            //    this.Delete(r.ID);
            //}

            var rapor = _kullaniciRaporDal.GetAll(k => k.isKategoriCustom == kullaniciRapor.isKategoriCustom && k.KategoriID == kullaniciRapor.KategoriID && k.SeviyeID == kullaniciRapor.SeviyeID && k.KullaniciID == kullaniciRapor.KullaniciID);
            if(rapor.Count > 0)
            {
                return true;
            }
            return false;
        }

        public KullaniciRapor KullaniciCompleteControl(KullaniciRapor kullaniciRapor)
        {
            //GetKategoriKullaniciUser(kullaniciRapor.KategoriID, kullaniciRapor.isKategoriCustom);
            //foreach (var r in _kullaniciRaporDal.GetAll())
            //{
            //    this.Delete(r.ID);
            //}

            var rapor = _kullaniciRaporDal.GetAll(k => k.isKategoriCustom == kullaniciRapor.isKategoriCustom && k.KategoriID == kullaniciRapor.KategoriID && k.SeviyeID == kullaniciRapor.SeviyeID && k.KullaniciID == kullaniciRapor.KullaniciID).SingleOrDefault();
            if (rapor != null)
            {
                return rapor;
            }
            return null;
        }


        public KullaniciRapor Update(KullaniciRapor kullaniciRapor)
        {
            _kullaniciRaporDal.Update(kullaniciRapor);
            return kullaniciRapor;
        }
    }
}
