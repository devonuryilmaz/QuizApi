using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
  public  interface ISecenekService
    {
        void Add(Secenek secenek);

        Secenek Update(Secenek secenek);

        Secenek GetSecenekByID(int soruID);

        List<Secenek> GetSecenekAll();

        void Delete(int id);

        List<Secenek> GetSecenekAllBySoruIDList(int soruID);

    }
}
