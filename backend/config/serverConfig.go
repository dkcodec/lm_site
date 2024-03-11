package config

import (
	"net/http"
	"os"
	"strconv"
	"time"
)

type ServerConfig struct {
	Port         int
	Handler      http.Handler
	ReadTimeout  time.Duration
	WriteTimeout time.Duration
}

func LoadServerConfig(hdr http.Handler) (*ServerConfig, error) {
	port, err := strconv.Atoi(os.Getenv("SERVER_PORT"))
	readTimeout, err := strconv.Atoi(os.Getenv("SERVER_READ_TIMEOUT"))
	writeTimeout, err := strconv.Atoi(os.Getenv("SERVER_WRITE_TIMEOUT"))
	if err != nil {
		return nil, err
	}
	return &ServerConfig{
		Port:         port,
		Handler:      hdr,
		ReadTimeout:  time.Duration(readTimeout) * time.Second,
		WriteTimeout: time.Duration(writeTimeout) * time.Second,
	}, nil
}
