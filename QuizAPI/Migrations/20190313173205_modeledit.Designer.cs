﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using QuizAPI.Data;
using System;

namespace QuizAPI.Migrations
{
    [DbContext(typeof(QuizAppContext))]
    [Migration("20190313173205_modeledit")]
    partial class modeledit
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Atıf", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<int>("SıraNumara");

                    b.Property<bool>("isAktif");

                    b.HasKey("ID");

                    b.ToTable("AtıfSeviye");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.AtıfCevap", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AtıfSoruID");

                    b.Property<string>("Cevap");

                    b.Property<int>("UserID");

                    b.HasKey("ID");

                    b.ToTable("AtıfCevap");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.AtıfKategori", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<bool>("isAktif");

                    b.Property<string>("videoUrl");

                    b.HasKey("ID");

                    b.ToTable("AtıfKategori");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.AtıfSoru", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<int>("AtıfID");

                    b.Property<double>("Sure");

                    b.Property<int>("SıraNumara");

                    b.Property<bool>("isAktif");

                    b.Property<string>("url");

                    b.HasKey("ID");

                    b.ToTable("AtıfSoru");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.FaceToFace", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<int>("SıraNumarası");

                    b.Property<bool>("isAktif");

                    b.HasKey("ID");

                    b.ToTable("FaceToFaces");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.FaceToFaceKategori", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<bool>("isAktif");

                    b.Property<string>("videoUrl");

                    b.HasKey("ID");

                    b.ToTable("FaceToFaceKategori");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.FaceToFacePhoto", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("FaceToFaceSoruID");

                    b.Property<string>("Url");

                    b.HasKey("ID");

                    b.ToTable("FaceToFacePhoto");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.FaceToFaceSecenek", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("FaceToFaceSoruID");

                    b.Property<string>("Url");

                    b.Property<bool>("isTrue");

                    b.HasKey("ID");

                    b.ToTable("FaceToFaceSecenek");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.FaceToFaceSoru", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<int>("FaceToFaceID");

                    b.Property<int>("SiraNumarasi");

                    b.Property<double>("Sure");

                    b.Property<bool>("isAktif");

                    b.HasKey("ID");

                    b.ToTable("FaceToFaceSoru");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.GazeCastCevap", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("GazeCastSoruID");

                    b.Property<string>("Photo1Url");

                    b.Property<bool>("Photo1isTrue");

                    b.Property<string>("Photo2Url");

                    b.Property<bool>("Photo2isTrue");

                    b.Property<string>("Photo3Url");

                    b.Property<bool>("Photo3isTrue");

                    b.Property<string>("Photo4Url");

                    b.Property<bool>("Photo4isTrue");

                    b.HasKey("ID");

                    b.ToTable("GazeCastCevap");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.GazeCastKategori", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<bool>("isAktif");

                    b.Property<string>("videoUrl");

                    b.HasKey("ID");

                    b.ToTable("GazeCastKategori");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.GazeCastSeviye", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<int>("SıraNumarası");

                    b.Property<bool>("isAktif");

                    b.HasKey("ID");

                    b.ToTable("GazeCastSeviye");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.GazeCastSoru", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama");

                    b.Property<int>("GazeCastID");

                    b.Property<int>("SıraNumarasi");

                    b.Property<string>("VideoUrl");

                    b.Property<bool>("isAktif");

                    b.HasKey("ID");

                    b.ToTable("GazeCastSoru");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Kategori", b =>
                {
                    b.Property<int>("KategoriID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Aciklama")
                        .IsRequired();

                    b.Property<string>("KategoriAdi")
                        .IsRequired();

                    b.Property<string>("PublicID");

                    b.Property<int>("SıraNo");

                    b.Property<string>("Url");

                    b.Property<bool>("isAktif");

                    b.HasKey("KategoriID");

                    b.ToTable("Kategoriler");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Kullanici", b =>
                {
                    b.Property<int>("KullaniciID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("KullaniciAdi")
                        .IsRequired();

                    b.Property<string>("Sifre")
                        .IsRequired();

                    b.Property<bool>("isAdmin");

                    b.HasKey("KullaniciID");

                    b.ToTable("Kullanicilar");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.KullaniciIlerleme", b =>
                {
                    b.Property<int>("IlerlemeID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("KullaniciID");

                    b.Property<int>("SeviyeID");

                    b.HasKey("IlerlemeID");

                    b.ToTable("KullaniciIlerlemeler");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Secenek", b =>
                {
                    b.Property<int>("SecenekID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Icerik")
                        .IsRequired();

                    b.Property<string>("PublicID");

                    b.Property<int>("SoruID");

                    b.Property<string>("Url");

                    b.Property<bool>("isTrue");

                    b.HasKey("SecenekID");

                    b.HasIndex("SoruID");

                    b.ToTable("Secenekler");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Seviye", b =>
                {
                    b.Property<int>("SeviyeID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("KategoriID");

                    b.Property<string>("SeviyeNumarasi")
                        .IsRequired();

                    b.HasKey("SeviyeID");

                    b.HasIndex("KategoriID");

                    b.ToTable("Seviyeler");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Soru", b =>
                {
                    b.Property<int>("SoruID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("PublicID");

                    b.Property<double>("Saniye");

                    b.Property<int>("SeviyeID");

                    b.Property<string>("SoruCumlesi")
                        .IsRequired();

                    b.Property<string>("SoruIcerik")
                        .IsRequired();

                    b.Property<int>("SoruNumarasi");

                    b.Property<int>("SoruTipi");

                    b.Property<string>("Url");

                    b.HasKey("SoruID");

                    b.HasIndex("SeviyeID");

                    b.ToTable("Sorular");
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Secenek", b =>
                {
                    b.HasOne("QuizAPI.Entities.Concrete.Soru")
                        .WithMany("Secenekler")
                        .HasForeignKey("SoruID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Seviye", b =>
                {
                    b.HasOne("QuizAPI.Entities.Concrete.Kategori", "Kategori")
                        .WithMany("Seviyeler")
                        .HasForeignKey("KategoriID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("QuizAPI.Entities.Concrete.Soru", b =>
                {
                    b.HasOne("QuizAPI.Entities.Concrete.Seviye")
                        .WithMany("Sorular")
                        .HasForeignKey("SeviyeID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}