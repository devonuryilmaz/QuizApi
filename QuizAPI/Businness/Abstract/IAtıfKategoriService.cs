using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
   public interface IAdminPanelService
    { 
    void Add(AtıfKategori atıfKategori);

    AtıfKategori Update(AtıfKategori atıfKategori);

    AtıfKategori GetAtıfKategoriByID(int atıfKategoriId);

    List<AtıfKategori> GetAllAtıfKategori(bool isAdmin);

    void Delete(int id);

    }
}
