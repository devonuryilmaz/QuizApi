using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class FaceToFaceSecenek : IEntity
    {
        public int ID { get; set; }

        public string Url { get; set; }

        public bool isTrue { get; set; }
        public string Aciklama { get; set; }
        public int FaceToFacePhotoID { get; set; }
    }
}
