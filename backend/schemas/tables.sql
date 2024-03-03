CREATE TABLE IF NOT EXISTS public.users
(
    id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    username text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    hashed_pass text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT usersone_pkey PRIMARY KEY (id)
);