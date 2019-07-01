using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class AtıfCevap : IEntity
    {
        [Key]
        public int ID { get; set; }

        public string Cevap { get; set; }

        public int AtıfSoruID { get; set; }
        public int AtıfSeviyeID { get; set; }

        public int UserID { get; set; }

    }
}
