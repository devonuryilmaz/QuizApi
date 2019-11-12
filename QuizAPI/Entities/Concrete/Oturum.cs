using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class Oturum : IEntity
    {
        [Key]
        public int OturumID { get; set; }

        public string OturumAdi { get; set; }
        [Required]
        public bool isAktif { get; set; }
        public string SeviyelerID { get; set; }
    }
}
