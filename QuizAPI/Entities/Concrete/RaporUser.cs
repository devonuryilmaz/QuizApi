using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Entities.Concrete
{
    public class RaporUser
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int kategoriId { get; set; }
        public bool isCustom { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
    }
}
