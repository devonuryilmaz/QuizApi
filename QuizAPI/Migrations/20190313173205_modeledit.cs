using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuizAPI.Migrations
{
    public partial class modeledit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Aciklama",
                table: "GazeCastSeviye",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "url",
                table: "AtıfSoru",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Aciklama",
                table: "GazeCastSeviye");

            migrationBuilder.DropColumn(
                name: "url",
                table: "AtıfSoru");
        }
    }
}
