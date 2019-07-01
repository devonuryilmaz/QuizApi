using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IKategoriHeaderService
    {
        void Add(AdminPanel message);

        AdminPanel Update(AdminPanel message);

        AdminPanel Get();

        void Delete(int id);
    }
}
