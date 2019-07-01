using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IKullaniciAtıfRaporService
    {
        void Add(KullaniciAtıfRapor kullaniciAtifRapor);

        KullaniciAtıfRapor Update(KullaniciAtıfRapor kullaniciAtifRapor);
        KullaniciAtıfRapor KullaniciCompleteControl(KullaniciAtıfRapor kullaniciAtifRapor);
        KullaniciAtıfRapor GetkullaniciAtıfRaporByID(int kullaniciAtıfRaporID);

        List<KullaniciAtıfRapor> GetkullaniciAtıfRaporAll();
        bool KullaniciAtıfRaporControl(KullaniciAtıfRapor kullaniciAtifRapor);

        void Delete(int id);
    }
}
