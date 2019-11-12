using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IOturumService
    {
        void Add(Oturum oturum);

        Oturum Update(Oturum oturum);

        void Delete(int id);

        List<Oturum> GetAll();

        Oturum Get(int oturumID);

        Oturum GetKullaniciOturum(int kullaniciID);

        int SonSeviyeSirasi(int oturumID);
    }
}
