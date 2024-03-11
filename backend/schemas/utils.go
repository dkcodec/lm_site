package schemas

import (
	"errors"
	"fmt"
	"github.com/dkcodec/lm_site/config"
	"github.com/dkcodec/lm_site/pkg/repository"
	"github.com/lib/pq"
	"os"
)

// SafeDropDBTables If you want to drop tables, usu this functions
func SafeDropDBTables() {
	errs, deletionsCount := DropAllTables()
	fmt.Println(errs)
	if len(errs) != 0 {
		for _, err := range errs {
			fmt.Printf("Error handling (not table is't exist err): %v \n", err)
		}
		fmt.Printf("Tables/Sequenses deleted: %v \n", deletionsCount)
	}
}

// SaveInitDBTables If you want to create tables, use this function
func SaveInitDBTables() {
	errs := CreateTables()
	if len(errs) != 0 {
		for _, err := range errs {
			fmt.Printf("Error handling (not table is't exist err): %v \n", err)
		}
	}
}

func isNotExistErr(err error) bool {
	var pqErr *pq.Error
	errors.As(err, &pqErr)
	return pqErr.Code == "42P01"
}

func DropAllTables() ([]error, int) {
	postgresSQlConfig, err := config.LoadPostgresSQLConfig()
	if err != nil {
		return []error{err}, 0
	}
	db, err := repository.NewPostgresDB(postgresSQlConfig)
	if err != nil {
		return []error{err}, 0
	}

	dbTables := []string{
		"users",
		//...
	}
	dbSequences := []string{
		"users_id_seq",
	}
	var answerErrs []error
	var deletionsCounter int

	// First delete the tables
	for _, tableName := range dbTables {
		query := fmt.Sprintf("DROP TABLE %s;", tableName)
		_, err = db.Exec(query)
		if !(err != nil && isNotExistErr(err)) {
			answerErrs = append(answerErrs, err)
		}
		deletionsCounter++
	}

	// Then ID sequences
	for _, seqName := range dbSequences {
		query := fmt.Sprintf("DROP SEQUENCE %s;", seqName)
		_, err = db.Exec(query)
		if !(err != nil && isNotExistErr(err)) {
			answerErrs = append(answerErrs, err)
		}
		deletionsCounter++
	}

	if err = db.Close(); err != nil {
		answerErrs = append(answerErrs, err)
	}
	return answerErrs, deletionsCounter
}

func CreateTables() []error {
	postgresSQlConfig, err := config.LoadPostgresSQLConfig()
	if err != nil {
		return []error{err}
	}
	db, err := repository.NewPostgresDB(postgresSQlConfig)
	if err != nil {
		return []error{err}
	}

	var answerErrs []error

	f, err := os.Open("schemas/tables.sql")
	fileInfo, err := f.Stat()
	if err != nil {
		return []error{err}
	}

	fileSize := fileInfo.Size()
	buffer := make([]byte, fileSize)
	n, err := f.Read(buffer)
	if err != nil {
		answerErrs = append(answerErrs, err)
	}
	if n == 0 {
		answerErrs = append(answerErrs, errors.New("Empty SQL script"))
	}

	if err = f.Close(); err != nil {
		answerErrs = append(answerErrs, err)
	}

	if len(answerErrs) != 0 {
		return answerErrs
	}
	query := string(buffer)

	if _, err := db.Exec(query); err != nil {
		answerErrs = append(answerErrs, err)
	}
	if err = db.Close(); err != nil {
		answerErrs = append(answerErrs, err)
	}
	return answerErrs
}
