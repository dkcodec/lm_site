package repository

import (
	"fmt"
	"github.com/dkcodec/lm_site/config"
	"github.com/jmoiron/sqlx"
)

func NewPostgresDB(config *config.PostgresSQLConfig) (*sqlx.DB, error) {
	db, err := sqlx.Open("postgres", fmt.Sprintf(
		"host=%s port=%d user=%s password=%s dbname=%s sslmode=%s",
		config.Host, config.Port, config.User, config.Pass,
		config.DBName, config.SslMode))
	if err != nil {
		return nil, err
	}
	err = db.Ping()
	if err != nil {
		return nil, err
	}
	return db, nil
}
