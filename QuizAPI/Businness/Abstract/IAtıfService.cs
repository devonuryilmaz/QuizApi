using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IAtıfService
    {
        void Add(Atıf atıf);

        Atıf Update(Atıf atıf);

        Atıf GetAtıfByID(int atıfId);

        List<Atıf> GetAllAtıf(bool isAdmin);

        void Delete(int id);

        List<Atıf> GetOturumAtif(int oturumID);
    }
}
