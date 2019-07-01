using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class SoruFotograflariManager : ISoruFotograflariService
    {
        ISoruFotograflariDal _soruFotograflari;
        public SoruFotograflariManager(ISoruFotograflariDal soruFotograflariDal)
        {
            _soruFotograflari = soruFotograflariDal;
        }

        public void Add(SoruFotograflari soruFotograflari)
        {
            _soruFotograflari.Add(soruFotograflari);
        }

        public void Delete(int id)
        {
            var soruFoto = _soruFotograflari.Get(sf => sf.ID == id);
            _soruFotograflari.Delete(soruFoto);
        }

        public List<SoruFotograflari> GetAllSoruFotograflari()
        {
            return _soruFotograflari.GetAll();
        }

        public SoruFotograflari GetSoruFotograflariByID(int soruFotoId)
        {
            return _soruFotograflari.Get(sf=>sf.ID==soruFotoId);
        }

        public SoruFotograflari Update(SoruFotograflari soruFotograflari)
        {
            _soruFotograflari.Update(soruFotograflari);
            return soruFotograflari;
        }
    }
}
