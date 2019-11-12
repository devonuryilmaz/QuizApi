using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class AtıfManager : IAtıfService
    {
        IAtıfDal _atıfDal;
        public AtıfManager(IAtıfDal atıfDal)
        {
            _atıfDal = atıfDal;
        }

        public void Add(Atıf atıf)
        {
            _atıfDal.Add(atıf);
        }

        public void Delete(int id)
        {
            var item = _atıfDal.Get(i => i.ID == id);
            _atıfDal.Delete(item);
        }

        public List<Atıf> GetAllAtıf(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _atıfDal.GetAll().OrderBy(s => s.SıraNumara).Where(s => s.isAktif == true).ToList();
            }

            return _atıfDal.GetAll();
        }

        public Atıf GetAtıfByID(int atıfId)
        {
            return _atıfDal.Get(i=>i.ID==atıfId && i.isAktif == true);
            //.OrderBy(s => s.SiraNumarasi).Where(s => s.isAktif == true).ToList();
        }

        public List<Atıf> GetOturumAtif(int oturumID)
        {
            return _atıfDal.GetAll(a => a.OturumID == oturumID && a.isAktif == true).ToList();
        }

        public Atıf Update(Atıf atıf)
        {
            _atıfDal.Update(atıf);
            return atıf;
        }
    }
}
