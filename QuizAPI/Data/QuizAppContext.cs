using Microsoft.EntityFrameworkCore;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Data
{
    public class QuizAppContext: DbContext
    {
        public DbSet<Kategori> Kategoriler{ get; set; }
        public DbSet<Kullanici> Kullanicilar { get; set; }
        public DbSet<KullaniciIlerleme> KullaniciIlerlemeler { get; set; }
        public DbSet<Secenek> Secenekler { get; set; }
        public DbSet<Seviye> Seviyeler{ get; set; }
        public DbSet<Soru> Sorular { get; set; }
        public DbSet<FaceToFaceKategori> FaceToFaceKategori { get; set; }
        public DbSet<FaceToFaceSeviye> FaceToFaces { get; set; }
        public DbSet<FaceToFaceSoru> FaceToFaceSoru { get; set; }
        public DbSet<FaceToFacePhoto> FaceToFacePhoto { get; set; }
        public DbSet<FaceToFaceSecenek> FaceToFaceSecenek { get; set; }
        public DbSet<AtıfKategori> AtıfKategori { get; set; }
        public DbSet<Atıf> AtıfSeviye { get; set; }
        public DbSet<AtıfSoru>  AtıfSoru { get; set; }
        public DbSet<AtıfCevap> AtıfCevap { get; set; }
        public DbSet<GazeCastKategori> GazeCastKategori { get; set; }
        public DbSet<GazeCastSeviye> GazeCastSeviye { get; set; }
        public DbSet<GazeCastSoru> GazeCastSoru { get; set; }
        public DbSet<GazeCastCevap> GazeCastCevap { get; set; }
        public DbSet<UserMessages> UserMessages{ get; set; }
        public DbSet<SoruFotograflari> SoruFotograflari { get; set; }
        public DbSet<KullaniciRapor> KullaniciRapor { get; set; }
        public DbSet<KullaniciAtıfRapor> KullaniciAtıfRapor { get; set; }
        public DbSet<AdminPanel> AdminPanel { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
//To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Data Source=85.106.3.33,63134;Initial Catalog=QuizApp;Integrated Security=False;User ID=sa;Password=itina15781578++;");
        }


        public QuizAppContext()
        {

        }

       
    }
}
