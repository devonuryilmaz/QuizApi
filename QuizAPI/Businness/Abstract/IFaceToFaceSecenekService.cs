using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IFaceToFaceSecenekService
    {
        void Add(FaceToFaceSecenek faceToFace);

        FaceToFaceSecenek Update(FaceToFaceSecenek FaceToFaceSecenek);

        FaceToFaceSecenek GetFaceToFaceSecenekByID(int FaceToFaceSecenekId);

        List<FaceToFaceSecenek> GetAllfaceToFace();

        List<FaceToFaceSecenek> GetAllfaceToFaceSecenekByPhotoId(int id);

        void Delete(int id);
    }
}
