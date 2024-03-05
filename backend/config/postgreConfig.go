package config

type PostgreSQLConfig struct {
	Host    string
	Name    string
	Pass    string
	Sslmode string
	Port    int
}

func InitPostgreSQLConfig() (*PostgreSQLConfig, error) {
	return nil, nil
}
