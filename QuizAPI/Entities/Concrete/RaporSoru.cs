using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class RaporSoru
    {
        public int DogruSayisi { get; set; }
        public int YanlisSayisi { get; set; }
        public string SeviyeAdi { get; set; }
        public bool isTamamlandi { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }

    }
}
