using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IFaceToFaceSoruService
    {
        void Add(FaceToFaceSoru FaceToFaceSoru);

        FaceToFaceSoru Update(FaceToFaceSoru FaceToFaceSoru);

        FaceToFaceSoru GetFaceToFaceSoruByID(int FaceToFaceSoruId);

        List<FaceToFaceSoru> GetAllFaceToFaceSoru(bool isAdmin);

        List<FaceToFaceSoru> GetAllFaceToFaceSoruBySeviyeId(int id);

        void Delete(int id);
    }
}
