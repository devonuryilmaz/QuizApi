using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class Secenek: IEntity
    {
        [Key]
        public int SecenekID { get; set; }

        [Required]
        public string Icerik { get; set; }
        [Required]
        public bool isTrue { get; set; }
        [Required]
        [Range(1, Int32.MaxValue)]
        public int SoruID { get; set; }

        public string Url { get; set; }

        public string PublicID { get; set; }

    }
}
