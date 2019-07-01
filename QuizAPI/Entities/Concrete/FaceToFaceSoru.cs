using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class FaceToFaceSoru : IEntity
    {
        public int ID { get; set; }

        public string Aciklama { get; set; }

        public int SiraNumarasi { get; set; }

        public double Sure { get; set; }

        public int FaceToFaceID { get; set; }

        public bool isAktif { get; set; }
    }
}
