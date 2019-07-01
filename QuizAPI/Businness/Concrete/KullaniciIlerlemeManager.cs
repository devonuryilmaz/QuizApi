using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class KullaniciIlerlemeManager: IKullaniciIlerlemeService
    {
        IKullaniciIlerlemeDal _kullaniciIlerlemeDal;
        public KullaniciIlerlemeManager(IKullaniciIlerlemeDal kullaniciIlerlemeDal)
        {
            _kullaniciIlerlemeDal = kullaniciIlerlemeDal;

        }

        public void Add(KullaniciIlerleme ilerleme)
        {
            _kullaniciIlerlemeDal.Add(ilerleme);
        }

        public void Delete(int id)
        {
            var ilerleme = GetIlerlemeByID(id);
            _kullaniciIlerlemeDal.Delete(ilerleme);
        }

        public List<KullaniciIlerleme> GetAllIlerleme()
        {
            return _kullaniciIlerlemeDal.GetAll();
        }

        public KullaniciIlerleme GetIlerlemeByID(int kullaniciID)
        {
            return _kullaniciIlerlemeDal.Get(i => i.IlerlemeID == kullaniciID);
        }

        public KullaniciIlerleme Update(KullaniciIlerleme ilerleme)
        {
            _kullaniciIlerlemeDal.Update(ilerleme);
            return ilerleme;
        }
    }
}
