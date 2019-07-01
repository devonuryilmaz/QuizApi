using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class GazeCastSoru :IEntity
    {
        [Key]
        public int ID { get; set; }

        public int GazeCastID { get; set; }

        public string VideoUrl { get; set; }

        public string Aciklama { get; set; }

        public bool isAktif { get; set; }

        public int SıraNumarasi { get; set; }

    }
}
