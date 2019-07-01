using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using QuizAPI.Auth;
using QuizAPI.Businness.Abstract;
using QuizAPI.Businness.Concrete;
using QuizAPI.Data;
using QuizAPI.Data.Abstract;
using QuizAPI.Data.Concrete.EntityFramework;
using QuizAPI.Entities.Concrete;
using QuizAPI.Helpers;

namespace QuizAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add servi to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var key = Encoding.ASCII.GetBytes(Configuration.GetSection("Appsettings:Token").Value);

            services.AddScoped<IKullaniciAtıfRaporService, KullaniciAtıfRaporManager>();
            services.AddScoped<IKullanıcıAtıfRaporDal, EfKullanıcıAtıfRaporDal>();

            services.AddScoped<IKullaniciRaporService, KullaniciRaporManager>();
            services.AddScoped<IKullaniciRaporDal, EfKullaniciRaporDal>();

            services.AddScoped<IUserMessagesService, UserMessagesManager>();
            services.AddScoped<IUserMessagesDal, EfUserMessagesDal>();

            services.AddScoped<IGazeCastCevapService, GazeCastCevapManager>();
            services.AddScoped<IGazeCastCevapDal, EfGazeCastCevapDal>();

            services.AddScoped<IAtıfCevapService, AtıfCevapManager>();
            services.AddScoped<IAtıfCevapDal, EfAtıfCevapDal>();



            services.AddScoped<IFaceToFaceSecenekService, FaceToFaceSecenekManager>();
            services.AddScoped<IFaceToFaceSecenek, EfFaceToFaceSecenek>();

            services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));

            services.AddScoped<IAtıfService, AtıfManager>();
            services.AddScoped<IAtıfDal, EfAtıfDal>();

            services.AddScoped<IGazeCastSoruService, GazeCastSoruManager>();
            services.AddScoped<IGazeCastSoruDal, EfGazeCastSoruDal>();

            services.AddScoped<IAtıfSoruService, AtıfSoruManager>();
            services.AddScoped<IAtıfSoruDal, EfAtıfSoruDal>();

            services.AddScoped<IFaceToFacePhotoService, FaceToFacePhotoManager>();
            services.AddScoped<IFaceToFacePhoto, EfFaceToFacePhoto>();

            services.AddScoped<IFaceToFaceService, FaceToFaceSeviyeManager>();
            services.AddScoped<IFaceToFaceSeviye,EfFacetoFaceSeviye>();

            services.AddScoped<IFaceToFaceSoruService, FaceToFaceSoruManager>();
            services.AddScoped<IFaceToFaceSoru, EfFaceToFaceSoru>();

            services.AddScoped<IGazeCastSeviyeService, GazeCastSeviyeManager>();
            services.AddScoped<IGazeCastSeviyeDal, EfGazeCastSeviyeDal>();

            services.AddScoped<IGazeCastKategoriService, GazeCastKategoriManager>();
            services.AddScoped<IGazeCastKategoriDal, EfGazeCastKategoriDal>();
            services.AddScoped<IFaceToFaceKategoriService, FaceToFaceKategoriManager>();
            services.AddScoped<IFaceToFaceKategori, EfFaceToFace>();
            services.AddScoped<IAdminPanelService, AtıfKategoriManager>();
            services.AddScoped<IAtıfKategoriDal, EfAtıfKategoriDal>();
            services.AddScoped<IKategoriDal, EfKategoriDal>();
            services.AddScoped<IKategoriService, KategoriManager>();
            services.AddScoped<IKullaniciDal, EfKullaniciDal>();
            services.AddScoped<IKullaniciService, KullaniciManager>();
            services.AddScoped<ISecenekDal, EfSecenekDal>();
            services.AddScoped<ISecenekService, SecenekManager>();
            services.AddScoped<IKullaniciIlerlemeDal, EfKullaniciIlerlemeDal>();
            services.AddScoped<IKullaniciIlerlemeService, KullaniciIlerlemeManager>();
            services.AddScoped<ISeviyeDal, EfSeviyeDal>();
            services.AddScoped<ISeviyeService, SeviyeManager>();
            services.AddScoped<ISoruDal, EfSoruDal>();
            services.AddScoped<ISoruService, SoruManager>();
            services.AddScoped<ISoruFotograflariDal, EfSoruFotograflariDal>();
            services.AddScoped<ISoruFotograflariService, SoruFotograflariManager>();

            services.AddScoped<IAdminPanelDal, EfAdminPanelDal>();
            services.AddScoped<IKategoriHeaderService, AdminPanelManager>();

            services.AddScoped<IAuthRepository, AuthRepository>();//Auth service
            //var connection = @"Server=(localdb)\mssqllocaldb;Database=QuizApp;Trusted_Connection=true";
            // services.AddDbContext<QuizAppContext>(options => options.UseSqlServer(connection));
            services.AddMvc().AddJsonOptions(opt =>
            {
                opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            });//Dairessel model için(response)
            services.AddCors();//allow origin ayarı(CORS)

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {//jwt ayarları
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseCors(x => 
            x.AllowAnyHeader()
            .AllowAnyMethod().
            AllowAnyOrigin().
            AllowCredentials());
            //Cors public(tüm browserlara açık)
            app.UseMvc();
        }
    }
}
