using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class AdminPanel:IEntity
    {
        [Key]
        public int ID { get; set; }

        public string kategoriHeaderMessage { get; set; }
        public string src { get; set; }
    }
}
