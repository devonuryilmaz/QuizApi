using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class GazeCastCevapManager : IGazeCastCevapService
    {
        IGazeCastCevapDal _gazeCastCevapDal;
        public GazeCastCevapManager(IGazeCastCevapDal gazeCastCevapDal)
        {
            _gazeCastCevapDal = gazeCastCevapDal;
        }


        public void Add(GazeCastCevap GazeCastCevap)
        {
            _gazeCastCevapDal.Add(GazeCastCevap);
        }

        public void Delete(int id)
        {
            var item = _gazeCastCevapDal.Get(i => i.ID == id);
            _gazeCastCevapDal.Delete(item);
        }

        public List<GazeCastCevap> GetAllGazeCastCevap()
        {
            return _gazeCastCevapDal.GetAll();
        }
        public GazeCastCevap GetAllGazeCastCevavpBySoruId(int id)
        {
            return _gazeCastCevapDal.Get(g => g.GazeCastSoruID == id);
        }

        public GazeCastCevap GetGazeCastCevapByID(int GazeCastCevapId)
        {
            return _gazeCastCevapDal.Get(i=>i.ID==GazeCastCevapId);
        }

        public GazeCastCevap Update(GazeCastCevap GazeCastCevap)
        {
            _gazeCastCevapDal.Update(GazeCastCevap);
            return GazeCastCevap;
        }
    }
}
