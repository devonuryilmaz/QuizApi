using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IGazeCastSoruService
    {
        void Add(GazeCastSoru GazeCastSoru);

        GazeCastSoru Update(GazeCastSoru GazeCastSoru);

        GazeCastSoru GetGazeCastSoruByID(int GazeCastSoruId);

        List<GazeCastSoru> GetAllGazeCastSoru(bool isAdmin);

        void Delete(int id);
        List<GazeCastSoru> GetAllGazeSeviyeBySeviyeId(int id);
    }
}
