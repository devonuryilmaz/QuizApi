using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuizAPI.Migrations
{
    public partial class _2909v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "oturumTamamlandi",
                table: "KullaniciRapor",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<bool>(
                name: "oturumTamamlandi",
                table: "KullaniciAtıfRapor",
                nullable: false,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "oturumTamamlandi",
                table: "KullaniciRapor",
                nullable: false,
                oldClrType: typeof(bool));

            migrationBuilder.AlterColumn<int>(
                name: "oturumTamamlandi",
                table: "KullaniciAtıfRapor",
                nullable: false,
                oldClrType: typeof(bool));
        }
    }
}
