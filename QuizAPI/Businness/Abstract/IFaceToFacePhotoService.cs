using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IFaceToFacePhotoService
    {
        void Add(FaceToFacePhoto faceToFace);

        FaceToFacePhoto Update(FaceToFacePhoto FaceToFacePhoto);

        FaceToFacePhoto GetFaceToFacePhotoByID(int FaceToFacePhotoId);

        List<FaceToFacePhoto> GetAllfaceToFace();
        List<FaceToFacePhoto> GetAllFacetoFaceBySoruId(int id);

        void Delete(int id);
    }
}
