using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class GazeCastCevap :IEntity
    {
        [Key]
        public int ID { get; set; }

        public int GazeCastSoruID { get; set; }

        public string Photo1Url { get; set; }
        public bool Photo1isTrue { get; set; }

        public string Photo2Url { get; set; }
        public bool Photo2isTrue { get; set; }

        public string Photo3Url { get; set; }
        public bool Photo3isTrue { get; set; }

        public string Photo4Url { get; set; }
        public bool Photo4isTrue { get; set; }

        public string Photo5Url { get; set; }
        public bool Photo5isTrue { get; set; }

        public string Photo6Url { get; set; }
        public bool Photo6isTrue { get; set; }

        public string Photo7Url { get; set; }
        public bool Photo7isTrue { get; set; }

        public string Photo8Url { get; set; }
        public bool Photo8isTrue { get; set; }

    }
}
