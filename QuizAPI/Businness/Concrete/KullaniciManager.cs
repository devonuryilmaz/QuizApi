using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class KullaniciManager : IKullaniciService
    {
        IKullaniciDal _kullaniciyDal;
        public KullaniciManager(IKullaniciDal kullaniciyDal)
        {
            _kullaniciyDal = kullaniciyDal;

        }

        public void Add(Kullanici kullanici)
        {
            _kullaniciyDal.Add(kullanici);
        }

        public void Delete(int id)
        {
            var kullanici = GetKullaniciByID(id);
            _kullaniciyDal.Delete(kullanici);
        }

        public List<Kullanici> GetChatUsers(List<int> ids)
        {
            var users = new List<Kullanici>();
            foreach (var id in ids)
            {
               var user = _kullaniciyDal.Get(u => u.KullaniciID == id);
                users.Add(user);

            }
            return users;
        }

        public List<Kullanici> GetKullaniciAll()
        {
            return _kullaniciyDal.GetAll();
        }

        public Kullanici GetKullaniciByID(int kullaniciID)
        {
            return _kullaniciyDal.Get(k => k.KullaniciID == kullaniciID);
        }

        public Kullanici Update(Kullanici kullanici)
        {
            _kullaniciyDal.Update(kullanici);
            return kullanici;
        }
    }
}
