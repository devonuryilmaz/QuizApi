﻿using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class SeviyeManager : ISeviyeService
    {
        ISeviyeDal _seviyeDal;
        public SeviyeManager(ISeviyeDal seviyeDal)
        {
            _seviyeDal = seviyeDal;

        }

        public Seviye GetSeviyeByID(int seviyeID)//örnek olsun
        {
            return _seviyeDal.Get(k => k.SeviyeID == seviyeID);
        }


        public void Add(Seviye seviye)
        {
            _seviyeDal.Add(seviye);
        }

        public Seviye Update(Seviye seviye)
        {
            _seviyeDal.Update(seviye);
            return seviye;
        }

        public List<Seviye> GetSeviyeAll(bool isAdmin)

        {
            if (!isAdmin)
            {
                return _seviyeDal.GetAll().OrderBy(s => s.SiraNumarasi).Where(s => s.isAktif == true).ToList();
            }

            return _seviyeDal.GetAll();
        }

        public void Delete(int id)
        {
            var seviye = GetSeviyeByID(id);
            _seviyeDal.Delete(seviye);
        }

        public List<Seviye> GetSeviyeAllByKategoriIDList(int kategoriID)
        {
            return _seviyeDal.GetAll(k => k.KategoriID == kategoriID).OrderBy(s => s.SiraNumarasi).Where(s => s.isAktif == true).ToList();//_kategoriyDal'daki GetAll()'ın içine delegasyonlar tanımlayıp sql sorgusu gibi kullanabilirsin.
        }
    }
}
