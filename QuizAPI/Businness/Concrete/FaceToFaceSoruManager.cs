using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class FaceToFaceSoruManager : IFaceToFaceSoruService
    {
        IFaceToFaceSoru _soru;
        public FaceToFaceSoruManager(IFaceToFaceSoru soru)
        {
            _soru = soru;
        }

        public void Add(FaceToFaceSoru FaceToFaceSoru)
        {
            _soru.Add(FaceToFaceSoru);
        }

        public void Delete(int id)
        {
            var item = _soru.Get(i => i.ID == id);
            _soru.Delete(item);
        }

        public List<FaceToFaceSoru> GetAllFaceToFaceSoru(bool isAdmin)
        {
            if (!isAdmin)
            {
                return _soru.GetAll().OrderBy(s => s.SiraNumarasi).Where(s => s.isAktif == true).ToList();
            }

            return _soru.GetAll();
        }
        public List<FaceToFaceSoru> GetAllFaceToFaceSoruBySeviyeId(int id)
        {
            return _soru.GetAll(i => i.FaceToFaceID == id).OrderBy(s => s.SiraNumarasi).Where(s => s.isAktif == true).ToList();
        }

        public FaceToFaceSoru GetFaceToFaceSoruByID(int FaceToFaceSoruId)
        {
            return _soru.Get(i => i.ID == FaceToFaceSoruId && i.isAktif == true);
        }

        public FaceToFaceSoru Update(FaceToFaceSoru FaceToFaceSoru)
        {
            _soru.Update(FaceToFaceSoru);
            return FaceToFaceSoru;
        }
    }
}
