using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class GazeCastKategoriManager : IGazeCastKategoriService
    {
        IGazeCastKategoriDal _gazeCastKategoriDal;

        public GazeCastKategoriManager(IGazeCastKategoriDal gazeCastKategoriDal)
        {
            _gazeCastKategoriDal = gazeCastKategoriDal;
        }

        public void Add(GazeCastKategori GazeCastKategori)
        {
            _gazeCastKategoriDal.Add(GazeCastKategori);
        }

        public void Delete(int id)
        {
            var item = _gazeCastKategoriDal.Get(i => i.ID == id);
            _gazeCastKategoriDal.Delete(item);
        }

        public List<GazeCastKategori> GetAllGazeCastKategori(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _gazeCastKategoriDal.GetAll().Where(s => s.isAktif == true).ToList();
            }

            return _gazeCastKategoriDal.GetAll();
        }

        public GazeCastKategori GetGazeCastKategoriByID(int GazeCastKategoriId)
        {
            return _gazeCastKategoriDal.Get(i=>i.ID==GazeCastKategoriId && i.isAktif == true);
        }

        public GazeCastKategori Update(GazeCastKategori GazeCastKategori)
        {
            _gazeCastKategoriDal.Update(GazeCastKategori);
            return GazeCastKategori;
        }
    }
}
