using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
   public interface IKullaniciService
    {
        void Add(Kullanici kullanici);

        Kullanici Update(Kullanici kullanici);

        Kullanici GetKullaniciByID(int kullaniciID);

        List<Kullanici> GetKullaniciAll();

        List<Kullanici> GetChatUsers(List<int> ids);

        void Delete(int id);

    }
}
