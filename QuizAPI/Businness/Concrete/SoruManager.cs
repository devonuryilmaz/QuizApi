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
    public class SoruManager: ISoruService
    {
        ISoruDal _soruDal;
        public SoruManager(ISoruDal soruDal)
        {
            _soruDal = soruDal;

        }

        public List<SoruFotograflari> SoruFotograflari(int id)
        {
            List<SoruFotograflari> soruFotograflari = new List<SoruFotograflari>();
            using (QuizAppContext ent = new QuizAppContext())
            {
                soruFotograflari = (from s in ent.SoruFotograflari
                                    where s.SoruID == id
                                    select s).ToList();
            }

            return soruFotograflari;
        }

        public void Add(Soru soru)
        {
            _soruDal.Add(soru);
        }

        public void Delete(int id)
        {
            var soru = GetSoruByID(id);
            _soruDal.Delete(soru);
        }

        public List<Soru> GetSoruAll(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _soruDal.GetAll().OrderBy(s => s.SoruNumarasi).Where(s => s.isAktif == true).ToList();
            }

            return _soruDal.GetAll();
        }

        public List<Soru> GetSoruAllBySeviyeIDList(int seviyeID)
        {
            return _soruDal.GetAll(k => k.SeviyeID == seviyeID).OrderBy(s => s.SoruNumarasi).Where(s => s.isAktif == true).ToList();
        }

        public Soru GetSoruByID(int soruID)
        {
            return _soruDal.Get(k => k.SoruID == soruID &&  k.isAktif == true);
        }

        public Soru Update(Soru soru)
        {
            _soruDal.Update(soru);
            return soru;
        }

    }
}
