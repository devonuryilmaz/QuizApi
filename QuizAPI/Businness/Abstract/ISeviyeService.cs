using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
   public interface ISeviyeService
    {
        void Add(Seviye seviye);

        Seviye Update(Seviye seviye);

        Seviye GetSeviyeByID(int seviyeID);

        List<Seviye> GetSeviyeAll(bool isAdmin);

        void Delete(int id);

        List<Seviye> GetSeviyeAllByKategoriIDList(int kategoriID);
    }
}
