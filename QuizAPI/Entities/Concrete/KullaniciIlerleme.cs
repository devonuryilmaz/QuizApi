using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class KullaniciIlerleme:IEntity
    {
        [Key]
        public int IlerlemeID { get; set; }

        [Required]
        [Range(1, Int32.MaxValue)]
        public int KullaniciID { get; set; }

        [Required]
        [Range(1, Int32.MaxValue)]
        public int SeviyeID { get; set; }
    }
}
