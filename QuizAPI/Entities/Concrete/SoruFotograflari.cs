using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class SoruFotograflari : IEntity
    {
        [Key]
        public int ID { get; set; }

        public int SoruID { get; set; }

        public string Url { get; set; }

        public string SecenekAciklama { get; set; }

        public int Sira { get; set; }
    }
}
