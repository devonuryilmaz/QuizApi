using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class UserMessages: IEntity
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public int GonderenUserId { get; set; }
        [Required]
        public int AlanUserId { get; set; }
        [Required]
        public string Mesaj { get; set; }
        [Required]
        public DateTime Tarih { get; set; }
        public Boolean isOkundu { get; set; }


    }
}
