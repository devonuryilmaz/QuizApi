using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuizAPI.Migrations
{
    public partial class _13mart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AtıfCevap",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AtıfSoruID = table.Column<int>(nullable: false),
                    Cevap = table.Column<string>(nullable: true),
                    UserID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AtıfCevap", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AtıfKategori",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Aciklama = table.Column<string>(nullable: true),
                    isAktif = table.Column<bool>(nullable: false),
                    videoUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AtıfKategori", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AtıfSeviye",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Aciklama = table.Column<string>(nullable: true),
                    SıraNumara = table.Column<int>(nullable: false),
                    isAktif = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AtıfSeviye", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AtıfSoru",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Aciklama = table.Column<string>(nullable: true),
                    AtıfID = table.Column<int>(nullable: false),
                    Sure = table.Column<double>(nullable: false),
                    SıraNumara = table.Column<int>(nullable: false),
                    isAktif = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AtıfSoru", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "FaceToFaceKategori",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Aciklama = table.Column<string>(nullable: true),
                    isAktif = table.Column<bool>(nullable: false),
                    videoUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaceToFaceKategori", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "FaceToFacePhoto",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FaceToFaceSoruID = table.Column<int>(nullable: false),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaceToFacePhoto", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "FaceToFaces",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Aciklama = table.Column<string>(nullable: true),
                    SıraNumarası = table.Column<int>(nullable: false),
                    isAktif = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaceToFaces", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "FaceToFaceSecenek",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FaceToFaceSoruID = table.Column<int>(nullable: false),
                    Url = table.Column<string>(nullable: true),
                    isTrue = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaceToFaceSecenek", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "FaceToFaceSoru",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Aciklama = table.Column<string>(nullable: true),
                    FaceToFaceID = table.Column<int>(nullable: false),
                    SiraNumarasi = table.Column<int>(nullable: false),
                    Sure = table.Column<double>(nullable: false),
                    isAktif = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaceToFaceSoru", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GazeCastCevap",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GazeCastSoruID = table.Column<int>(nullable: false),
                    Photo1Url = table.Column<string>(nullable: true),
                    Photo1isTrue = table.Column<bool>(nullable: false),
                    Photo2Url = table.Column<string>(nullable: true),
                    Photo2isTrue = table.Column<bool>(nullable: false),
                    Photo3Url = table.Column<string>(nullable: true),
                    Photo3isTrue = table.Column<bool>(nullable: false),
                    Photo4Url = table.Column<string>(nullable: true),
                    Photo4isTrue = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GazeCastCevap", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GazeCastKategori",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Aciklama = table.Column<string>(nullable: true),
                    isAktif = table.Column<bool>(nullable: false),
                    videoUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GazeCastKategori", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GazeCastSeviye",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SıraNumarası = table.Column<int>(nullable: false),
                    isAktif = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GazeCastSeviye", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "GazeCastSoru",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Aciklama = table.Column<string>(nullable: true),
                    GazeCastID = table.Column<int>(nullable: false),
                    SıraNumarasi = table.Column<int>(nullable: false),
                    VideoUrl = table.Column<string>(nullable: true),
                    isAktif = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GazeCastSoru", x => x.ID);
                });

           
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AtıfCevap");

            migrationBuilder.DropTable(
                name: "AtıfKategori");

            migrationBuilder.DropTable(
                name: "AtıfSeviye");

            migrationBuilder.DropTable(
                name: "AtıfSoru");

            migrationBuilder.DropTable(
                name: "FaceToFaceKategori");

            migrationBuilder.DropTable(
                name: "FaceToFacePhoto");

            migrationBuilder.DropTable(
                name: "FaceToFaces");

            migrationBuilder.DropTable(
                name: "FaceToFaceSecenek");

            migrationBuilder.DropTable(
                name: "FaceToFaceSoru");

            migrationBuilder.DropTable(
                name: "GazeCastCevap");

            migrationBuilder.DropTable(
                name: "GazeCastKategori");

            migrationBuilder.DropTable(
                name: "GazeCastSeviye");

            migrationBuilder.DropTable(
                name: "GazeCastSoru");

         
        }
    }
}
