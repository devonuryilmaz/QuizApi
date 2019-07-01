using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class KullaniciAtıfRaporManager : IKullaniciAtıfRaporService
    {

        IKullanıcıAtıfRaporDal  _kullanıcıAtıfRaporDal;

        public KullaniciAtıfRaporManager(IKullanıcıAtıfRaporDal kullanıcıAtıfRaporDal)
        {
            _kullanıcıAtıfRaporDal = kullanıcıAtıfRaporDal;

        }


        public void Add(KullaniciAtıfRapor kullaniciAtifRapor)
        {
            _kullanıcıAtıfRaporDal.Add(kullaniciAtifRapor);
        }

        public void Delete(int id)
        {
            var r = GetkullaniciRaporByID(id);
            _kullanıcıAtıfRaporDal.Delete(r);
        }
        public KullaniciAtıfRapor GetkullaniciRaporByID(int kullaniciRaporID)
        {
            var kullaniciRapor = _kullanıcıAtıfRaporDal.Get(s => s.ID == kullaniciRaporID);
            return kullaniciRapor;
        }

        public List<KullaniciAtıfRapor> GetkullaniciAtıfRaporAll()
        {
            var list = _kullanıcıAtıfRaporDal.GetAll();

            return list;
        }

        public KullaniciAtıfRapor GetkullaniciAtıfRaporByID(int kullaniciAtıfRaporID)
        {
            var kullaniciRapor = _kullanıcıAtıfRaporDal.Get(s => s.ID == kullaniciAtıfRaporID);
            return kullaniciRapor;
        }

        public bool KullaniciAtıfRaporControl(KullaniciAtıfRapor kullaniciAtifRapor)
        {
            var rapor = _kullanıcıAtıfRaporDal.GetAll(k =>k.SeviyeID == kullaniciAtifRapor.SeviyeID && k.KullaniciID == kullaniciAtifRapor.KullaniciID);
            if (rapor.Count > 0)
            {
                return true;
            }
            return false;
        }

        public KullaniciAtıfRapor KullaniciCompleteControl(KullaniciAtıfRapor kullaniciAtifRapor)
        {
            var rapor = _kullanıcıAtıfRaporDal.GetAll(k => k.SeviyeID == kullaniciAtifRapor.SeviyeID && k.KullaniciID == kullaniciAtifRapor.KullaniciID).SingleOrDefault();
            if (rapor != null)
            {
                return rapor;
            }
            return null;
        }

        public KullaniciAtıfRapor Update(KullaniciAtıfRapor kullaniciAtifRapor)
        {
            _kullanıcıAtıfRaporDal.Update(kullaniciAtifRapor);
            return kullaniciAtifRapor;
        }
    }
}
