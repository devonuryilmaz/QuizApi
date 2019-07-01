using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
  public  interface IKategoriService
    {
        void Add(Kategori kategori);

        Kategori Update(Kategori kategori);

        Kategori GetKategoriByID(int kategoriId);

        List<Kategori> GetAllKategori(bool isAdmin);

        void Delete(int id);

    }
}
