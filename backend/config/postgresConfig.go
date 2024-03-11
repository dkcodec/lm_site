package config

import (
	"os"
	"strconv"
)

type PostgresSQLConfig struct {
	Host    string
	Port    int
	User    string
	Pass    string
	DBName  string
	SslMode string
}

func LoadPostgresSQLConfig() (*PostgresSQLConfig, error) {
	postgresqlHost := os.Getenv("POSTGRES_DB_HOST")
	postgresqlPort, err := strconv.Atoi(os.Getenv("POSTGRES_DB_PORT"))
	postgresqlUser := os.Getenv("POSTGRES_DB_USER")
	postgresqlPass := os.Getenv("POSTGRES_DB_PASS")
	postgresqlDbname := os.Getenv("POSTGRES_DB_DBName")
	postgresqlSslMode := os.Getenv("POSTGRES_DB_SSL")
	if err != nil {
		return nil, err
	}
	return &PostgresSQLConfig{
		postgresqlHost,
		postgresqlPort,
		postgresqlUser,
		postgresqlPass,
		postgresqlDbname,
		postgresqlSslMode,
	}, nil
}
