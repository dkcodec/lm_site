package main

import (
	"github.com/dkcodec/lm_site/config"
	srvPkg "github.com/dkcodec/lm_site/internal/server"
	"github.com/dkcodec/lm_site/pkg/handler"
	"github.com/dkcodec/lm_site/schemas"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"log"
)

func main() {
	loadDotEnv()
	schemas.SaveInitDBTables()

	srv := new(srvPkg.Server)
	handlerVar := handler.Handler{}

	serverConfig, err := config.LoadServerConfig(handlerVar.InitRouters())
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
