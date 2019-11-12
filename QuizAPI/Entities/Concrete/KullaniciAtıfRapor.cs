using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class KullaniciAtıfRapor:IEntity
    {
        public int ID { get; set; }
        public int KullaniciID { get; set; }
        public int SeviyeID { get; set; }
        public bool isTamamlandi { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public int? OturumID { get; set; }
        public int? OturumSirasi { get; set; }
        public bool oturumTamamlandi { get; set; }
    }
}
