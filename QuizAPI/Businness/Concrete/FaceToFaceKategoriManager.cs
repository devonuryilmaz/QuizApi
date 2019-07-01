using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class FaceToFaceKategoriManager : IFaceToFaceKategoriService
    {
        private IFaceToFaceKategori _faceToFaceKategori;
        public FaceToFaceKategoriManager(IFaceToFaceKategori faceToFaceKategori)
        {
            _faceToFaceKategori = faceToFaceKategori;
        }

        public void Add(FaceToFaceKategori FaceToFaceKategori)
        {
            _faceToFaceKategori.Add(FaceToFaceKategori);
        }

        public void Delete(int id)
        {
            var item = _faceToFaceKategori.Get(i => i.ID == id);
            _faceToFaceKategori.Delete(item);
        }

        public List<FaceToFaceKategori> GetAllFaceToFaceKategori(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _faceToFaceKategori.GetAll().Where(s => s.isAktif == true).ToList();
            }

            return _faceToFaceKategori.GetAll();
        }

        public FaceToFaceKategori GetFaceToFaceKategoriByID(int FaceToFaceKategoriId)
        {
            return _faceToFaceKategori.Get(i=>i.ID==FaceToFaceKategoriId && i.isAktif == true);
        }

        public FaceToFaceKategori Update(FaceToFaceKategori FaceToFaceKategori)
        {
            _faceToFaceKategori.Update(FaceToFaceKategori);
            return FaceToFaceKategori;
        }
    }
}
