using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IAtıfSoruService
    {
        void Add(AtıfSoru atıfSoru);

        AtıfSoru Update(AtıfSoru atıfSoru);

        AtıfSoru GetAtıfSoruByID(int atıfSoruId);

        List<AtıfSoru> GetAllAtıfSoru(bool isAdmin);
        List<AtıfSoru> GetAllBySeviyeId(int id);
        void Delete(int id);
    }
}
