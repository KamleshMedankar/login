package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

var db *sql.DB

func init() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Set up MySQL connection
	dsn := fmt.Sprintf("%s:%s@tcp(127.0.0.1:3306)/%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASS"),
		os.Getenv("DB_NAME"),
	)

	var err2 error
	db, err2 = sql.Open("mysql", dsn)
	if err2 != nil {
		log.Fatal(err2)
	}

	// Test database connection
	if err := db.Ping(); err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connected to the database!")
}

func GetDB() *sql.DB {
	return db
}
