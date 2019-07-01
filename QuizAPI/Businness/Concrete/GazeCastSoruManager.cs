using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class GazeCastSoruManager : IGazeCastSoruService
    {
        IGazeCastSoruDal _gazeCastSoruDal;
        public GazeCastSoruManager(IGazeCastSoruDal gazeCastSoruDal)
        {
            _gazeCastSoruDal = gazeCastSoruDal;
        }

        public void Add(GazeCastSoru GazeCastSoru)
        {
            _gazeCastSoruDal.Add(GazeCastSoru);
        }

        public void Delete(int id)
        {
            var item = _gazeCastSoruDal.Get(i=>i.ID==id);
            _gazeCastSoruDal.Delete(item);
        }

        public List<GazeCastSoru> GetAllGazeCastSoru(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _gazeCastSoruDal.GetAll().OrderBy(s => s.SıraNumarasi).Where(s => s.isAktif == true).ToList();
            }

            return _gazeCastSoruDal.GetAll();
        }
        public List<GazeCastSoru> GetAllGazeSeviyeBySeviyeId(int id)
        {
            return _gazeCastSoruDal.GetAll(i => i.GazeCastID == id).OrderBy(s => s.SıraNumarasi).Where(s => s.isAktif == true).ToList();
        }

        public GazeCastSoru GetGazeCastSoruByID(int GazeCastSoruId)
        {
            return _gazeCastSoruDal.Get(i => i.ID == GazeCastSoruId && i.isAktif == true);
        }

        public GazeCastSoru Update(GazeCastSoru GazeCastSoru)
        {
            _gazeCastSoruDal.Update(GazeCastSoru);
            return GazeCastSoru;
        }
    }
}
