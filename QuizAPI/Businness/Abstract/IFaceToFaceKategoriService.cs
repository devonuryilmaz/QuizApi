using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IFaceToFaceKategoriService
    {
        void Add(FaceToFaceKategori FaceToFaceKategori);

        FaceToFaceKategori Update(FaceToFaceKategori FaceToFaceKategori);

        FaceToFaceKategori GetFaceToFaceKategoriByID(int FaceToFaceKategoriId);

        List<FaceToFaceKategori> GetAllFaceToFaceKategori(bool isAdmin);

        void Delete(int id);
    }
}
