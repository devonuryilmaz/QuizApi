using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class FaceToFacePhotoManager : IFaceToFacePhotoService
    {
        IFaceToFacePhoto _photo;
        public FaceToFacePhotoManager(IFaceToFacePhoto photo)
        {
            _photo = photo;
        }
        public void Add(FaceToFacePhoto faceToFace)
        {
            _photo.Add(faceToFace);
        }

        public void Delete(int id)
        {
            var item = _photo.Get(i => i.ID == id);
            _photo.Delete(item);
        }

        public List<FaceToFacePhoto> GetAllfaceToFace()
        {
            return _photo.GetAll();
        }
        public List<FaceToFacePhoto> GetAllFacetoFaceBySoruId(int id)
        {
            return _photo.GetAll(p => p.FaceToFaceSoruID == id);
        }

        public FaceToFacePhoto GetFaceToFacePhotoByID(int FaceToFacePhotoId)
        {
            return _photo.Get(i => i.ID == FaceToFacePhotoId);
        }

        public FaceToFacePhoto Update(FaceToFacePhoto FaceToFacePhoto)
        {
            _photo.Update(FaceToFacePhoto);
            return FaceToFacePhoto;
        }
    }
}
