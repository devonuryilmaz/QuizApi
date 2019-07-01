using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class AtıfKategoriManager : IAdminPanelService
    {
        IAtıfKategoriDal _atıfKategoriDal;
        public AtıfKategoriManager(IAtıfKategoriDal atıfKategoriDal)
        {
            _atıfKategoriDal = atıfKategoriDal;
        }

        public void Add(AtıfKategori atıfKategori)
        {
            _atıfKategoriDal.Add(atıfKategori);
        }

        public void Delete(int id)
        {
            var item = _atıfKategoriDal.Get(i => i.ID == id);
            _atıfKategoriDal.Delete(item);
        }

        public List<AtıfKategori> GetAllAtıfKategori(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _atıfKategoriDal.GetAll().Where(s => s.isAktif == true).ToList();
            }

            return _atıfKategoriDal.GetAll();
        }

        public AtıfKategori GetAtıfKategoriByID(int atıfKategoriId)
        {
            return _atıfKategoriDal.Get(i => i.ID == atıfKategoriId && i.isAktif == true);
        }

        public AtıfKategori Update(AtıfKategori atıfKategori)
        {
            _atıfKategoriDal.Update(atıfKategori);
            return atıfKategori;
        }
    }
}
