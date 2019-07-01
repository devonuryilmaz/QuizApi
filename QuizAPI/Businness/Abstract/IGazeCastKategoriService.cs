using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
        public   interface IGazeCastKategoriService
    {
        void Add(GazeCastKategori GazeCastKategori);

        GazeCastKategori Update(GazeCastKategori GazeCastKategori);

        GazeCastKategori GetGazeCastKategoriByID(int GazeCastKategoriId);

        List<GazeCastKategori> GetAllGazeCastKategori(bool isAdmin);

        void Delete(int id);
    }
}
