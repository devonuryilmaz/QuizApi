using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuizAPI.Migrations
{
    public partial class _2209 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "OturumID",
                table: "Seviyeler",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "OturumID",
                table: "KullaniciRapor",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "oturumID",
                table: "GazeCastSeviye",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OturumID",
                table: "FaceToFaces",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OturumID",
                table: "AtıfSeviye",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "oturumID",
                table: "GazeCastSeviye");

            migrationBuilder.DropColumn(
                name: "OturumID",
                table: "FaceToFaces");

            migrationBuilder.DropColumn(
                name: "OturumID",
                table: "AtıfSeviye");

            migrationBuilder.AlterColumn<int>(
                name: "OturumID",
                table: "Seviyeler",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "OturumID",
                table: "KullaniciRapor",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
