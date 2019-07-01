using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class AtıfCevapManager : IAtıfCevapService
    {
        IAtıfCevapDal _atıfCevapDal;
        public AtıfCevapManager(IAtıfCevapDal atıfCevapDal)
        {
            _atıfCevapDal = atıfCevapDal;
        }


        public void Add(AtıfCevap atıfCevap)
        {
            _atıfCevapDal.Add(atıfCevap);
        }

        public void Delete(int id)
        {
            var item = _atıfCevapDal.Get(i => i.ID == id);
            _atıfCevapDal.Delete(item);
        }

        public List<AtıfCevap> GetAllAtıfCevap()
        {
            return _atıfCevapDal.GetAll();
        }

        public AtıfCevap GetAtıfCevapByID(int atıfCevapId)
        {
            return _atıfCevapDal.Get(i=>i.ID==atıfCevapId);
        }

        public AtıfCevap Update(AtıfCevap atıfCevap)
        {
            _atıfCevapDal.Update(atıfCevap);
            return atıfCevap;
        }
    }
}
