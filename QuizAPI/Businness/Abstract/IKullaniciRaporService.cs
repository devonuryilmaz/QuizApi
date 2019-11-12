using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IKullaniciRaporService 
    {

        void Add(KullaniciRapor kullaniciRapor);
        List<RaporCevapAtif> GetAtifCevapUser(int userId, int seviyeId);
        KullaniciRapor Update(KullaniciRapor kullaniciRapor);
        KullaniciRapor KullaniciCompleteControl(KullaniciRapor kullaniciRapor);
        KullaniciRapor GetkullaniciRaporByID(int kullaniciRaporID);
        List<RaporAtif> GetKullaniciAtifRaporSoru(int kullaniciId);
        List<KullaniciRapor> GetkullaniciRaporAll();
        bool KullaniciRaporControl(KullaniciRapor kullaniciRapor);
        List<RaporUser> GetAtifKullaniciUser();
        void Delete(int id);
        List<RaporUser> GetKategoriKullaniciUser(int kategoriId, bool isCustom);
        List<RaporSoru> GetKullaniciRaporSoru(int kullaniciId, int kategoriId, bool isCustom);

        KullaniciRapor GetOturumKullanici(int kullaniciID);
    }
}
