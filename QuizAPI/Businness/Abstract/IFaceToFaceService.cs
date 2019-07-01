using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IFaceToFaceService
    {
        void Add(FaceToFaceSeviye faceToFace);

        FaceToFaceSeviye Update(FaceToFaceSeviye faceToFace);

        FaceToFaceSeviye GetfaceToFaceByID(int faceToFaceId);

        List<FaceToFaceSeviye> GetAllfaceToFace(bool isAdmin);

        void Delete(int id);
    }
}
