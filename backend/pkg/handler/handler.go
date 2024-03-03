package handler

import "github.com/gin-gonic/gin"

type Handler struct{}

func (h *Handler) InitRouters() *gin.Engine {
	router := gin.New()

	auth := router.Group("/auth")
	{
		auth.POST("/sign-up", h.SingUp)
		auth.POST("/sign-in", h.SingIn)
	}

	return router
}
