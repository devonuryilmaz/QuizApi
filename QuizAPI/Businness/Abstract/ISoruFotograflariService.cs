using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface ISoruFotograflariService
    {
        void Add(SoruFotograflari soruFotograflari);

        SoruFotograflari Update(SoruFotograflari soruFotograflari);

        SoruFotograflari GetSoruFotograflariByID(int soruFotoId);

        List<SoruFotograflari> GetAllSoruFotograflari();

        void Delete(int id);
    }
}
