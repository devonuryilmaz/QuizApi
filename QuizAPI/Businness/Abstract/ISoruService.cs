using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
   public interface ISoruService
    {
        void Add(Soru soru);

        Soru Update(Soru soru);

        Soru GetSoruByID(int soruID);

        List<Soru> GetSoruAll(bool isAdmin);

        void Delete(int id);

        List<Soru> GetSoruAllBySeviyeIDList(int seviyeID);

        List<SoruFotograflari> SoruFotograflari(int soruID);

    }
}
