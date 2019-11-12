using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuizAPI.Migrations
{
    public partial class _2909 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "oturumTamamlandi",
                table: "KullaniciRapor",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OturumID",
                table: "KullaniciAtıfRapor",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OturumSirasi",
                table: "KullaniciAtıfRapor",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "oturumTamamlandi",
                table: "KullaniciAtıfRapor",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "oturumTamamlandi",
                table: "KullaniciRapor");

            migrationBuilder.DropColumn(
                name: "OturumID",
                table: "KullaniciAtıfRapor");

            migrationBuilder.DropColumn(
                name: "OturumSirasi",
                table: "KullaniciAtıfRapor");

            migrationBuilder.DropColumn(
                name: "oturumTamamlandi",
                table: "KullaniciAtıfRapor");
        }
    }
}
