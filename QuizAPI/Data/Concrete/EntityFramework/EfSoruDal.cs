using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Data.Concrete.EntityFramework
{
    public class EfSoruDal: EfEntityRepositoryBase<Soru>, ISoruDal
    {

    }
}
