using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IKullaniciIlerlemeService
    {
        void Add(KullaniciIlerleme ilerleme);

        KullaniciIlerleme Update(KullaniciIlerleme ilerleme);

        KullaniciIlerleme GetIlerlemeByID(int kullaniciID);

        List<KullaniciIlerleme> GetAllIlerleme();

        void Delete(int id);
    }
}
