using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class FaceToFaceSeviyeManager : IFaceToFaceService
    {
        IFaceToFaceSeviye _face;
        public FaceToFaceSeviyeManager(IFaceToFaceSeviye face)
        {
            _face = face;
        }

        public void Add(FaceToFaceSeviye faceToFace)
        {
            _face.Add(faceToFace);
        }

        public void Delete(int id)
        {
            var item = _face.Get(i => i.ID == id);
            _face.Delete(item);
        }

        public List<FaceToFaceSeviye> GetAllfaceToFace(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _face.GetAll().OrderBy(s => s.SıraNumarası).Where(s => s.isAktif == true).ToList();
            }

            return _face.GetAll();
        }

        public FaceToFaceSeviye GetfaceToFaceByID(int faceToFaceId)
        {
            return _face.Get(i => i.ID == faceToFaceId && i.isAktif == true);
        }

        public FaceToFaceSeviye Update(FaceToFaceSeviye faceToFace)
        {
            _face.Update(faceToFace);
            return faceToFace;
        }
    }
}
