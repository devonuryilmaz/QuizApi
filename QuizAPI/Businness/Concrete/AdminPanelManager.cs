using QuizAPI.Businness.Abstract;
using QuizAPI.Data;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class AdminPanelManager : IKategoriHeaderService
    {
        IAdminPanelDal _adminPanelDal;
        public AdminPanelManager(IAdminPanelDal adminPanelDal)
        {
            _adminPanelDal = adminPanelDal;

        }
        public void Add(AdminPanel message)
        {
            _adminPanelDal.Add(message);
        }

        public void Delete(int id)
        {
            var message = _adminPanelDal.Get(m => m.ID==id);
            _adminPanelDal.Delete(message);
        }

        public AdminPanel Get()
        {
            using (QuizAppContext ent = new QuizAppContext())
            {
                return ent.AdminPanel.OrderByDescending(m => m.ID).First();
            }
        }

        public AdminPanel Update(AdminPanel message)
        {
            _adminPanelDal.Update(message);
            return message;
        }
    }
}
