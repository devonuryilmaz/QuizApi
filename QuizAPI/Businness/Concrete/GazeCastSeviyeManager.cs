using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class GazeCastSeviyeManager : IGazeCastSeviyeService
    {
        IGazeCastSeviyeDal _gazeCastSeviyeDal;
        public GazeCastSeviyeManager(IGazeCastSeviyeDal gazeCastSeviyeDal)
        {
            _gazeCastSeviyeDal = gazeCastSeviyeDal;
        }

        public void Add(GazeCastSeviye GazeCastSeviye)
        {
            _gazeCastSeviyeDal.Add(GazeCastSeviye);
        }

        public void Delete(int id)
        {
            var item = _gazeCastSeviyeDal.Get(i => i.ID == id);
            _gazeCastSeviyeDal.Delete(item);
        }

        public List<GazeCastSeviye> GetAllGazeCastSeviye(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _gazeCastSeviyeDal.GetAll().OrderBy(s => s.SıraNumarası).Where(s => s.isAktif == true).ToList();
            }

            return _gazeCastSeviyeDal.GetAll();
        }

        public GazeCastSeviye GetGazeCastSeviyeByID(int GazeCastSeviyeId)
        {
            return _gazeCastSeviyeDal.Get(i=>i.ID==GazeCastSeviyeId && i.isAktif == true); 
        }

        public GazeCastSeviye Update(GazeCastSeviye GazeCastSeviye)
        {
            _gazeCastSeviyeDal.Update(GazeCastSeviye);
            return GazeCastSeviye;
        }
    }
}
