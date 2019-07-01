using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class FaceToFacePhoto : IEntity
    {
        public int ID { get; set; }
        public string Url { get; set; }

        public int FaceToFaceSoruID { get; set; }
        public string aciklama { get; set; }

    }
}
