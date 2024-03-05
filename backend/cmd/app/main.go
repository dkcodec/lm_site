package main

import (
	"github.com/dkcodec/lm_site/config"
	srvPkg "github.com/dkcodec/lm_site/internal/server"
	"github.com/dkcodec/lm_site/pkg/handler"
	"github.com/joho/godotenv"
	"log"
)

func main() {
	loadDotEnv()
	
	srv := new(srvPkg.Server)
	handlerVar := handler.Handler{}

	serverConfig, err := config.InitServerConfig(handlerVar.InitRouters())
	if err != nil {
		log.Fatal(err)
	}
	if err := srv.Run(serverConfig); err != nil {
		log.Fatal(err)
	}
}

// Load .env
func loadDotEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal(err)
	}
}
