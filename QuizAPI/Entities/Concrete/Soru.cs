using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class Soru: IEntity
    {
        [Key]
        public int SoruID { get; set; }

        [Required]
        public int SoruTipi { get; set; }
        [Required]
        public string SoruIcerik { get; set; }

        public double Saniye { get; set; }
        public bool isAktif { get; set; }
        [Required]
        public int SoruNumarasi { get; set; }
        [Required]
        public string SoruCumlesi { get; set; }
        [Required]
        [Range(1, Int32.MaxValue)]
        public int SeviyeID { get; set; }
        public ICollection<Secenek> Secenekler { get; set; }

        public string Url { get; set; }

        public string PublicID { get; set; }

    }

}
