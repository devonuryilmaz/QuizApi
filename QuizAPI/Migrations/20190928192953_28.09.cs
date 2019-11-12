using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuizAPI.Migrations
{
    public partial class _2809 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OturumSirasi",
                table: "Seviyeler",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OturumSirasi",
                table: "KullaniciRapor",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OturumSirasi",
                table: "GazeCastSeviye",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OturumSirasi",
                table: "FaceToFaces",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OturumSirasi",
                table: "AtıfSeviye",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OturumSirasi",
                table: "Seviyeler");

            migrationBuilder.DropColumn(
                name: "OturumSirasi",
                table: "KullaniciRapor");

            migrationBuilder.DropColumn(
                name: "OturumSirasi",
                table: "GazeCastSeviye");

            migrationBuilder.DropColumn(
                name: "OturumSirasi",
                table: "FaceToFaces");

            migrationBuilder.DropColumn(
                name: "OturumSirasi",
                table: "AtıfSeviye");
        }
    }
}
