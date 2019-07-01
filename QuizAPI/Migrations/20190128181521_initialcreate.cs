using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuizAPI.Migrations
{
    public partial class initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kategoriler",
                columns: table => new
                {
                    KategoriID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    KategoriAdi = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kategoriler", x => x.KategoriID);
                });

            migrationBuilder.CreateTable(
                name: "KullaniciIlerlemeler",
                columns: table => new
                {
                    IlerlemeID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    KullaniciID = table.Column<int>(nullable: false),
                    SoruID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KullaniciIlerlemeler", x => x.IlerlemeID);
                });

            migrationBuilder.CreateTable(
                name: "Kullanicilar",
                columns: table => new
                {
                    KullaniciID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    KullaniciAdi = table.Column<string>(nullable: true),
                    Sifre = table.Column<string>(nullable: true),
                    isAdmin = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kullanicilar", x => x.KullaniciID);
                });

            migrationBuilder.CreateTable(
                name: "Seviyeler",
                columns: table => new
                {
                    SeviyeID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    KategoriID = table.Column<int>(nullable: false),
                    SeviyeNumarasi = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seviyeler", x => x.SeviyeID);
                    table.ForeignKey(
                        name: "FK_Seviyeler_Kategoriler_KategoriID",
                        column: x => x.KategoriID,
                        principalTable: "Kategoriler",
                        principalColumn: "KategoriID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sorular",
                columns: table => new
                {
                    SoruID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SeviyeID = table.Column<int>(nullable: false),
                    SoruCumlesi = table.Column<string>(nullable: true),
                    SoruNumarasi = table.Column<int>(nullable: false),
                    SoruTipi = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sorular", x => x.SoruID);
                    table.ForeignKey(
                        name: "FK_Sorular_Seviyeler_SeviyeID",
                        column: x => x.SeviyeID,
                        principalTable: "Seviyeler",
                        principalColumn: "SeviyeID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Secenekler",
                columns: table => new
                {
                    SecenekID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Icerik = table.Column<string>(nullable: true),
                    SoruID = table.Column<int>(nullable: false),
                    isTrue = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Secenekler", x => x.SecenekID);
                    table.ForeignKey(
                        name: "FK_Secenekler_Sorular_SoruID",
                        column: x => x.SoruID,
                        principalTable: "Sorular",
                        principalColumn: "SoruID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Secenekler_SoruID",
                table: "Secenekler",
                column: "SoruID");

            migrationBuilder.CreateIndex(
                name: "IX_Seviyeler_KategoriID",
                table: "Seviyeler",
                column: "KategoriID");

            migrationBuilder.CreateIndex(
                name: "IX_Sorular_SeviyeID",
                table: "Sorular",
                column: "SeviyeID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KullaniciIlerlemeler");

            migrationBuilder.DropTable(
                name: "Kullanicilar");

            migrationBuilder.DropTable(
                name: "Secenekler");

            migrationBuilder.DropTable(
                name: "Sorular");

            migrationBuilder.DropTable(
                name: "Seviyeler");

            migrationBuilder.DropTable(
                name: "Kategoriler");
        }
    }
}
