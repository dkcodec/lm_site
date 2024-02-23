package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/home", home)

	log.Print("Start Server on port 8000:")
	err := http.ListenAndServe(":8000", mux)
	log.Fatal(err)
}
