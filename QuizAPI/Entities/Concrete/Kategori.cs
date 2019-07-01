using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class Kategori:IEntity
    {
        [Key]
        public int KategoriID { get; set; }

        public ICollection<Seviye> Seviyeler { get; set; }

        [Required]
        public string KategoriAdi { get; set; }

        public bool isAktif { get; set; }

        public int SıraNo { get; set; }

        public int? Tema { get; set; }


        public string Aciklama { get; set; }

        public string Url { get; set; }

        public string PublicID { get; set; }

    }
}
