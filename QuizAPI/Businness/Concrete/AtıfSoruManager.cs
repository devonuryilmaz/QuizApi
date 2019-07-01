using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class AtıfSoruManager : IAtıfSoruService
    {
        IAtıfSoruDal _atıfSoruDal;

        public AtıfSoruManager(IAtıfSoruDal atıfSoruDal)
        {
            _atıfSoruDal = atıfSoruDal;
        }

        public void Add(AtıfSoru atıfSoru)
        {
            _atıfSoruDal.Add(atıfSoru);
        }

        public void Delete(int id)
        {
            var item = _atıfSoruDal.Get(i => i.ID == id);
            _atıfSoruDal.Delete(item);
        }

        public List<AtıfSoru> GetAllAtıfSoru(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _atıfSoruDal.GetAll().OrderBy(s => s.SıraNumara).Where(s => s.isAktif == true).ToList();
            }

            return _atıfSoruDal.GetAll();
        }

      

        public List<AtıfSoru> GetAllBySeviyeId(int id)
        {
            return _atıfSoruDal.GetAll(i => i.AtıfID == id).OrderBy(s => s.SıraNumara).Where(s => s.isAktif == true).ToList();
        }

        public AtıfSoru GetAtıfSoruByID(int atıfSoruId)
        {
            return _atıfSoruDal.Get(i => i.ID == atıfSoruId && i.isAktif == true);
        }

        public AtıfSoru Update(AtıfSoru atıfSoru)
        {
            _atıfSoruDal.Update(atıfSoru);
            return atıfSoru;
        }
    }
}
