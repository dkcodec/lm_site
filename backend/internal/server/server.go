package server

import (
	"context"
	"github.com/dkcodec/lm_site/config"
	"net/http"
	"strconv"
)

type Server struct {
	httpServer *http.Server
}

func (s *Server) Run(conf *config.ServerConfig) error {
	s.httpServer = &http.Server{
		Addr:           ":" + strconv.Itoa(conf.Port),
		Handler:        conf.Handler,
		MaxHeaderBytes: 1 << 20,
		ReadTimeout:    conf.ReadTimeout,
		WriteTimeout:   conf.WriteTimeout,
	}

	return s.httpServer.ListenAndServe()
}

func (s *Server) ShutDown(ctxt context.Context) error {
	return s.httpServer.Shutdown(ctxt)
}
