using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class FaceToFaceSecenekManager : IFaceToFaceSecenekService
    {
        IFaceToFaceSecenek _secenek;
        public FaceToFaceSecenekManager(IFaceToFaceSecenek secenek)
        {
            _secenek = secenek;
        }

        public void Add(FaceToFaceSecenek faceToFace)
        {
            _secenek.Add(faceToFace);
        }

        public void Delete(int id)
        {
            var item = _secenek.Get(i => i.ID == id);
            _secenek.Delete(item);
        }

        public List<FaceToFaceSecenek> GetAllfaceToFace()
        {
            return _secenek.GetAll();
        }
        public List<FaceToFaceSecenek> GetAllfaceToFaceSecenekByPhotoId(int id)
        {
            return _secenek.GetAll(f => f.FaceToFacePhotoID == id);
        }

        public FaceToFaceSecenek GetFaceToFaceSecenekByID(int FaceToFaceSecenekId)
        {
            return _secenek.Get(i => i.ID == FaceToFaceSecenekId);
        }

        public FaceToFaceSecenek Update(FaceToFaceSecenek FaceToFaceSecenek)
        {
            _secenek.Update(FaceToFaceSecenek);
            return  FaceToFaceSecenek;
        }
    }
}
