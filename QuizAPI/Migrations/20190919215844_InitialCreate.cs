using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuizAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
            name: "src",
            table: "AdminPanel",
            nullable:true
        );

            migrationBuilder.AddColumn<int>(
            name: "OturumID",
            table: "Seviyeler",
                        nullable: true

        );
            migrationBuilder.AddColumn<int>(
            name: "OturumID",
            table: "KullaniciRapor",
                        nullable: true

        );

            migrationBuilder.CreateTable(
                name: "Oturum",
                columns: table => new
                {
                    OturumID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    OturumAdi = table.Column<string>(nullable: true),
                    SeviyelerID = table.Column<string>(nullable: true),
                    isAktif = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Oturum", x => x.OturumID);
                });
         
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Oturum");

        }
    }
}
