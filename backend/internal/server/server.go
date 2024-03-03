package server

import (
	"context"
	"net/http"
	"strconv"
	"time"
)

type Server struct {
	httpServer *http.Server
}

func (s *Server) Run(port int, handler http.Handler) error {
	s.httpServer = &http.Server{
		Addr:    ":" + strconv.Itoa(port),
		Handler: handler,
		//MaxHeaderBytes: 1 << 20,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	return s.httpServer.ListenAndServe()
}

func (s *Server) ShutDown(ctxt context.Context) error {
	return s.httpServer.Shutdown(ctxt)
}
