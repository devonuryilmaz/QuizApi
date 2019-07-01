using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class RaporAtif
    {
        public int UserId { get; set; }
        public int SeviyeId { get; set; }
        public string SeviyeAdi { get; set; }
        public bool isTamamlandi { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
    }
}
