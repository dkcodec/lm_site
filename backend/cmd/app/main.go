package main

import (
	srvPkg "github.com/dkcodec/lm_site/internal/server"
	"github.com/dkcodec/lm_site/pkg/handler"
	"log"
)

func main() {
	srv := new(srvPkg.Server)
	handlerVar := handler.Handler{}

	if err := srv.Run(8000, handlerVar.InitRouters()); err != nil {
		log.Fatal(err)
	}
}
