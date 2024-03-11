package models

type User struct {
	Id       int    `json:"-"`
	Email    string `json:"email"`
	Username string `json:"username"`
	LCHandle string `json:"lc_handle"`
	Password string `json:"password"`
}
