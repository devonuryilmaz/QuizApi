using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class Atıf : IEntity
    {
        [Key]
        public int ID { get; set; }

        public int SıraNumara { get; set; }

        public string Aciklama { get; set; }

        public bool isAktif { get; set; }
        public int OturumID { get; set; }
        public int? OturumSirasi { get; set; }

    }
}
