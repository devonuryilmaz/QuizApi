using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class KategoriManager : IKategoriService
    {
        IKategoriDal _kategoriyDal;
        public KategoriManager(IKategoriDal kategoriDal)
        {
            _kategoriyDal = kategoriDal;
            
        }

        public Kategori GetKategoriByID(int kategoriId)//örnek olsun
        {
            return _kategoriyDal.Get(k => k.KategoriID == kategoriId && k.isAktif == true);//_kategoriyDal'daki GetAll()'ın içine delegasyonlar tanımlayıp sql sorgusu gibi kullanabilirsin.
        }


        public void Add(Kategori kategori)
        {     
            _kategoriyDal.Add(kategori);
        }

        public Kategori Update(Kategori kategori)
        {
            _kategoriyDal.Update(kategori);
            return kategori;
        }

        public List<Kategori> GetAllKategori(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _kategoriyDal.GetAll().Where(s => s.isAktif == true).ToList();
            }

            return _kategoriyDal.GetAll();
        }

        public void Delete(int id)
        {
            var kategori = GetKategoriByID(id);
            _kategoriyDal.Delete(kategori);
        }
    }
}
