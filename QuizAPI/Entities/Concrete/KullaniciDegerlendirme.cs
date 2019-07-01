using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class KullaniciDegerlendirme
    {
        public int ID { get; set; }
        public string SeviyeAdi { get; set; }
        public int DogruSayisi { get; set; }
        public int YanlisSayisi { get; set; }
        public bool isTamamlandi { get; set; }

    }
}
