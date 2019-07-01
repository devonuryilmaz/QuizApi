using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
   public  interface IGazeCastCevapService
    {
        void Add(GazeCastCevap GazeCastCevap);

        GazeCastCevap Update(GazeCastCevap GazeCastCevap);

        GazeCastCevap GetGazeCastCevapByID(int GazeCastCevapId);

        List<GazeCastCevap> GetAllGazeCastCevap();

        void Delete(int id);
        GazeCastCevap GetAllGazeCastCevavpBySoruId(int id);
    }
}
