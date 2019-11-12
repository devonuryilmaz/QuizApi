using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IGazeCastSeviyeService
    {
        void Add(GazeCastSeviye GazeCastSeviye);

        GazeCastSeviye Update(GazeCastSeviye GazeCastSeviye);

        GazeCastSeviye GetGazeCastSeviyeByID(int GazeCastSeviyeId);

        List<GazeCastSeviye> GetAllGazeCastSeviye(bool isAdmin);

        void Delete(int id);

        List<GazeCastSeviye> GetOturumGaze(int oturumID);

    }
}
