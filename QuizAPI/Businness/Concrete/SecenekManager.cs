using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class SecenekManager:ISecenekService
    {
        ISecenekDal _secenekDal;
        public SecenekManager(ISecenekDal secenekeDal)
        {
            _secenekDal = secenekeDal;

        }

        public void Add(Secenek secenek)
        {
            _secenekDal.Add(secenek);
        }

        public void Delete(int id)
        {
            var secenek = GetSecenekByID(id);
            _secenekDal.Delete(secenek);
        }

        public List<Secenek> GetSecenekAll()
        {
            var list = _secenekDal.GetAll();

            return list;
        }

        public List<Secenek> GetSecenekAllBySoruIDList(int soruID)
        {
            return _secenekDal.GetAll(s => s.SoruID == soruID);
        }

        public Secenek GetSecenekByID(int SecenekID)
        {
            var secenek = _secenekDal.Get(s => s.SecenekID == SecenekID);
            return secenek;
        }

        public Secenek Update(Secenek secenek)
        {
            _secenekDal.Update(secenek);
            return secenek;
        }
    }
}
