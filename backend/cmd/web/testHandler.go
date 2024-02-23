package main

import (
	"fmt"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Привет!"))
	fmt.Println("Топ 5 смешных пул реквестов...")
}
