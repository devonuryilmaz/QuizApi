using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class Kullanici:IEntity
    {
        [Key]
        public int KullaniciID { get; set; }

        [Required]
        public bool isAdmin { get; set; }
        [Required]
        public string KullaniciAdi { get; set; }
        [Required]
        public string Sifre { get; set; }
        public string AdSoyad { get; set; }
        public string MailAdresi { get; set; }
    }
}
