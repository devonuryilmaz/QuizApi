using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class Seviye:IEntity
    {
        [Key]
        public int SeviyeID { get; set; }

        public bool isAktif { get; set; }
        public int SiraNumarasi { get; set; }
        [Required]
        public string SeviyeNumarasi { get; set; }


        public int? SoruSuresi { get; set; }
        public ICollection<Soru> Sorular { get; set; }
       
        [Required]
        [Range(1,Int32.MaxValue)]
        public int KategoriID { get; set; }
        public Kategori Kategori { get; set; }
    }
}
