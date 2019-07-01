using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IAtıfCevapService
    {
        void Add(AtıfCevap atıfCevap);

        AtıfCevap Update(AtıfCevap atıfCevap);

        AtıfCevap GetAtıfCevapByID(int atıfCevapId);

        List<AtıfCevap> GetAllAtıfCevap();

        void Delete(int id);
    }
}
