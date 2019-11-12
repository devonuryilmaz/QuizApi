using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using System.Timers;
using QuizAPI.Data;
using QuizAPI.Data.Abstract;
using QuizAPI.Data.Concrete.EntityFramework;
using System.Net.Mail;
using System.Net;

namespace QuizAPI.Helpers
{
    public static class TimerScheduler
    {
        static Timer _timer; 
        static List<DateTime> _l;
        private  static IKategoriDal _kategoriDal = new EfKategoriDal();
        private static ISeviyeDal _seviyeDal = new EfSeviyeDal();
        private static IKullaniciRaporDal _kullaniciRaporDal = new EfKullaniciRaporDal();
        private static IFaceToFaceSeviye _faceToFaceSeviye = new EfFacetoFaceSeviye();
        private static IKullaniciDal _kullaniciDal = new EfKullaniciDal();
        private static IKullanıcıAtıfRaporDal  _kullanıcıAtıfRaporDal = new EfKullanıcıAtıfRaporDal();
        private static IGazeCastSeviyeDal  _gazeCastSeviyeDal = new EfGazeCastSeviyeDal();
        private static IAtıfDal  _atıfDal = new EfAtıfDal();
        public static List<DateTime> DateList 
        {
            get
            {
                if (_l == null) 
                {
                    Start(); 
                }
                return _l; 
            }
        }

       public static void Start()
        {
            _l = new List<DateTime>(); 
            _timer = new Timer(1000 * 60); 
                                    
            _timer.Elapsed += new ElapsedEventHandler(_timer_Elapsed);
            _timer.Enabled = true; 
        }
        public static void deneme()
        {

        }
        static void _timer_Elapsed(object sender, ElapsedEventArgs e)
        {

            var context = new QuizAppContext();
            var kullanicilar = _kullaniciDal.GetAll();
            var kategoriler = _kategoriDal.GetAll();
            var seviyeler = _seviyeDal.GetAll();
            var facetoFactSeviyeler = _faceToFaceSeviye.GetAll();
            var gazeCastSebiyeler = _gazeCastSeviyeDal.GetAll();
            var atifSeviyeler = _atıfDal.GetAll();
            var msg = "";
            var notcustomKategoriMail = new HashSet<KeyValuePair<int, int>>();
            var notcustomUserMail = new HashSet<KeyValuePair<int, int>>();

            var FacecustomKategoriMail = new HashSet<KeyValuePair<int, int>>();
            var FacecustomUserMail = new HashSet<KeyValuePair<int, int>>();

            var GazecustomKategoriMail = new HashSet<KeyValuePair<int, int>>();
            var GazecustomUserMail = new HashSet<KeyValuePair<int, int>>();

            var AtifcustomKategoriMail = new HashSet<KeyValuePair<int, int>>();
            var AtifcustomUserMail = new HashSet<KeyValuePair<int, int>>();


            var kullaniciAtıfRaporlar = _kullanıcıAtıfRaporDal.GetAll(r => r.isTamamlandi == false);
            var customKategoriesRaporGaze = _kullaniciRaporDal.GetAll(r => r.isTamamlandi == false && r.isKategoriCustom == true && r.KategoriID == 2);
            var customKategoriesRaporFace = _kullaniciRaporDal.GetAll(r => r.isTamamlandi == false && r.isKategoriCustom == true && r.KategoriID == 5);

            foreach (var r in kullaniciAtıfRaporlar)
            {
                AtifcustomKategoriMail.Add(new KeyValuePair<int, int>(1, r.SeviyeID));
            }
            foreach (var r in kullaniciAtıfRaporlar)
            {
                AtifcustomUserMail.Add(new KeyValuePair<int, int>(r.KullaniciID, 1));
            }


            foreach (var r in customKategoriesRaporGaze)
            {
                GazecustomKategoriMail.Add(new KeyValuePair<int, int>(2, r.SeviyeID));
            }
            foreach (var r in customKategoriesRaporGaze)
            {
                GazecustomUserMail.Add(new KeyValuePair<int, int>(r.KullaniciID, 2));
            }

            foreach (var r in customKategoriesRaporFace)
            {
                FacecustomKategoriMail.Add(new KeyValuePair<int, int>(5, r.SeviyeID));
            }
            foreach (var r in customKategoriesRaporFace)
            {
                FacecustomUserMail.Add(new KeyValuePair<int, int>(r.KullaniciID, 5));
            }

            var facecustomKategoriMailLookup = FacecustomKategoriMail.ToLookup(kvp => kvp.Key, kvp => kvp.Value);
            var facecustomUserMailLookup = FacecustomUserMail.ToLookup(kvp => kvp.Key, kvp => kvp.Value);

            var gazecustomKategoriMailLookup = GazecustomKategoriMail.ToLookup(kvp => kvp.Key, kvp => kvp.Value);
            var gazecustomUserMailLookup = GazecustomUserMail.ToLookup(kvp => kvp.Key, kvp => kvp.Value);

            var AtifcustomKategoriMailLookup = AtifcustomKategoriMail.ToLookup(kvp => kvp.Key, kvp => kvp.Value);
            var AtifcustomUserMailLookup = AtifcustomUserMail.ToLookup(kvp => kvp.Key, kvp => kvp.Value);

            var notcustomKategoriesRapor = _kullaniciRaporDal.GetAll(r => r.isTamamlandi == false && r.isKategoriCustom == false);
            foreach (var r in notcustomKategoriesRapor)
            {
                if (context.Kategoriler.FirstOrDefault(k => k.KategoriID == r.KategoriID) != null)
                {
                    notcustomKategoriMail.Add(new KeyValuePair<int, int>(r.KategoriID, r.SeviyeID));
                }
                else
                {
                    continue;
                }
            }
            foreach (var r in notcustomKategoriesRapor)
            {
                if (context.Kategoriler.FirstOrDefault(k => k.KategoriID == r.KategoriID) != null)
                {
                    notcustomUserMail.Add(new KeyValuePair<int, int>(r.KullaniciID, r.KategoriID));

                }
                else
                {
                    continue;
                }
            }
            var notcustomKategoriMailLookup = notcustomKategoriMail.ToLookup(kvp => kvp.Key, kvp => kvp.Value);
            var notcustomUserMailLookup = notcustomUserMail.ToLookup(kvp => kvp.Key, kvp => kvp.Value);

            foreach (var kullanici in kullanicilar)
            {

                foreach (var userMail in facecustomUserMailLookup)
                {
                    var userId = userMail.Key;
                    if (kullanici.KullaniciID == userId)
                    {
                        foreach (var item in userMail)
                        {
                            foreach (var a in facecustomKategoriMailLookup.Where(x => x.Key == item))
                            {
                                var kategoriId = a.Key;
                                msg += " Face to Fact kategorisinde";
                                var seviyeCount = 0;
                                foreach (var seviyeId in a)
                                {
                                    try
                                    {
                                        msg += " " + facetoFactSeviyeler.Where(s => s.ID == seviyeId).Single().Aciklama.ToString() + " ";
                                        seviyeCount++;
                                    }
                                    catch (Exception)
                                    {
                                        continue;
                                    }

                                }
                                if (seviyeCount == 1)
                                {
                                    msg += " seviyesi";
                                }
                                else if (seviyeCount > 1)
                                {
                                    msg += "seviyeleri";
                                }
                                seviyeCount = 0;
                                msg += " ,";

                            }
                        }

                        break;
                    }


                }


                foreach (var userMail in AtifcustomUserMailLookup)
                {
                    var userId = userMail.Key;
                    if (kullanici.KullaniciID == userId)
                    {
                        foreach (var item in userMail)
                        {
                            foreach (var a in AtifcustomKategoriMailLookup.Where(x => x.Key == item))
                            {
                                var kategoriId = a.Key;
                                msg += " Atıf kategorisinde";
                                var seviyeCount = 0;
                                foreach (var seviyeId in a)
                                {
                                    try
                                    {
                                        msg += " " + atifSeviyeler.Where(s => s.ID == seviyeId).Single().Aciklama.ToString() + " ";
                                        seviyeCount++;
                                    }
                                    catch (Exception)
                                    {
                                        continue;
                                    }

                                }
                                if (seviyeCount == 1)
                                {
                                    msg += " seviyesi";
                                }
                                else if (seviyeCount > 1)
                                {
                                    msg += "seviyeleri";
                                }
                                seviyeCount = 0;
                                msg += " ,";

                            }
                        }

                        break;
                    }


                }


                //
                foreach (var userMail in gazecustomUserMailLookup)
                {
                    var userId = userMail.Key;
                    if (kullanici.KullaniciID == userId)
                    {

                        foreach (var item in userMail)
                        {
                            foreach (var a in gazecustomKategoriMailLookup.Where(x => x.Key == item))
                            {
                                var kategoriId = a.Key;
                                msg += " Gaze Cast kategorisinde ";
                                var seviyeCount = 0;
                                foreach (var seviyeId in a)
                                {
                                    try
                                    {
                                        msg += " " + gazeCastSebiyeler.Where(s => s.ID == seviyeId).Single().Aciklama.ToString() + " ";
                                        seviyeCount++;
                                    }
                                    catch (Exception)
                                    {
                                        continue;
                                    }

                                }
                                if (seviyeCount == 1)
                                {
                                    msg += " seviyesi";
                                }
                                else if (seviyeCount > 1)
                                {
                                    msg += "seviyeleri";
                                }
                                seviyeCount = 0;
                                msg += " ,";

                            }
                        }
                        break;
                    }

                }


                foreach (var userMail in notcustomUserMailLookup)
                {
                    var userId = userMail.Key;
                    if (kullanici.KullaniciID == userId)
                    {
                        foreach (var item in userMail)
                        {
                            foreach (var a in notcustomKategoriMailLookup.Where(x => x.Key == item))
                            {
                                var kategoriId = a.Key;
                                msg += " " + kategoriler.Where(k => k.KategoriID == kategoriId).Single().KategoriAdi.ToString() + " kategorisinde";
                                var seviyeCount = 0;
                                foreach (var seviyeId in a)
                                {
                                    try
                                    {
                                        msg += " " + seviyeler.Where(s => s.SeviyeID == seviyeId).Single().SeviyeNumarasi.ToString() + " ";
                                        seviyeCount++;
                                    }
                                    catch (Exception)
                                    {
                                        continue;
                                    }

                                }
                                if (seviyeCount == 1)
                                {
                                    msg += " seviyesi";
                                }
                                else if (seviyeCount > 1)
                                {
                                    msg += "seviyeleri";
                                }
                                seviyeCount = 0;
                                msg += " ,";

                            }
                        }
                        break;
                    }


                }

                if (msg != "")
                {
                    msg += " tamamlanmamıştır.Lütfen en kısa sürede ilgili quizleri tamamlayınız.";
                    var userMailAddress = kullanicilar.Where(k => k.KullaniciID == kullanici.KullaniciID).Single().MailAdresi.ToString();
                    var userAdSoyad = kullanicilar.Where(k => k.KullaniciID == kullanici.KullaniciID).Single().AdSoyad.ToString();
                    try
                    {
                        using (var message = new MailMessage())
                        {
                            message.To.Add(new MailAddress(userMailAddress, userAdSoyad));
                            message.From = new MailAddress("onuryilmaz.cbu@gmail.com", "Sosyal Biliş");


                            message.Subject = "Egzersiz Hatırlat";
                            message.Body = msg;
                            message.IsBodyHtml = true;

                            using (var client = new SmtpClient("smtp.gmail.com"))
                            {
                                client.Port = 465;
                                client.Credentials = new NetworkCredential("onuryilmaz.cbu@gmail.com", "32573257");
                                client.EnableSsl = true;
                                client.Send(message);
                            }
                        }
                    }
                    catch
                    {


                    }
                }
                msg = "";
            }

        }
    }
}
