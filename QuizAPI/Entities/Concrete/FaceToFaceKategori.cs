using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class FaceToFaceKategori :IEntity
    {
        [Key]
        public int ID { get; set; }

        public string Aciklama { get; set; }

        public string videoUrl { get; set; }

        public bool isAktif { get; set; }
    }
}
