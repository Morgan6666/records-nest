--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Ubuntu 15.1-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: morgan
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO morgan;

--
-- Name: doc_meta_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.doc_meta_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doc_meta_seq_id OWNER TO morgan;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: doc_meta; Type: TABLE; Schema: public; Owner: morgan
--

CREATE TABLE public.doc_meta (
    id integer DEFAULT nextval('public.doc_meta_seq_id'::regclass) NOT NULL,
    spec_id integer,
    doc_id integer NOT NULL
);


ALTER TABLE public.doc_meta OWNER TO morgan;

--
-- Name: quests_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.quests_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.quests_seq_id OWNER TO morgan;

--
-- Name: records_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.records_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.records_seq_id OWNER TO morgan;

--
-- Name: specialisation_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.specialisation_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.specialisation_seq_id OWNER TO morgan;

--
-- Name: specialisation; Type: TABLE; Schema: public; Owner: morgan
--

CREATE TABLE public.specialisation (
    id integer DEFAULT nextval('public.specialisation_seq_id'::regclass) NOT NULL,
    name character varying
);


ALTER TABLE public.specialisation OWNER TO morgan;

--
-- Name: user_meat_seq_id; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.user_meat_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_meat_seq_id OWNER TO morgan;

--
-- Name: users; Type: TABLE; Schema: public; Owner: morgan
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    is_doc boolean DEFAULT false
);


ALTER TABLE public.users OWNER TO morgan;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: morgan
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO morgan;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: morgan
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: doc_meta; Type: TABLE DATA; Schema: public; Owner: morgan
--

COPY public.doc_meta (id, spec_id, doc_id) FROM stdin;
1	1	10
\.


--
-- Data for Name: specialisation; Type: TABLE DATA; Schema: public; Owner: morgan
--

COPY public.specialisation (id, name) FROM stdin;
1	Терапевт
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: morgan
--

COPY public.users (id, first_name, last_name, email, password, is_doc) FROM stdin;
49	kekekm4848y8484t84884ijuytytghghgii5575757rjrjkgkgr	Kekerkggkgkkg	kekeututgkg9595kjgjjgjgnjrfvkifjvnftj47747thjtgoruhgborr@gmail.com	$2b$10$PpTI2BrdZZMxyymCexjdwuYWZH1YQgG2tJCKAyMAukBNZoz4IgER2	\N
1	Test	irunhgbg	049494@mail.ru	jjjjjj	\N
2	Test	irunhgbg	04948894@mail.ru	$2b$10$w3w2a9SqZV63xa/ZWajH6.ph8iQj.RedsQRpVlkLUVYBcpUyQZbFm	\N
3	Test	iru585nhgbg	049488945005@mail.ru	$2b$10$L0mxX/UUu.OeBZ6aBY/8bu0ik.Em4zgBtLAFp2nDbLgdcHz1.2CTG	\N
4	test	ger	test@mail.ru	jfnvjfnvjfnjvf	f
5	test	ger	test@mail.ru	jfnvjfnvjfnjvf	f
6	test	ger	test@mail.ru	jfnvjfnvjfnjvf	t
7	Morgan	test	test4@mail.ru	$2b$10$/cCc29xXUTDmDyJIn2/w3.s2rh6ETOik/1lPSZ4q9Zc/Cqa019qg2	t
8	Morgan	test	test4@mail.ru	$2b$10$/cCc29xXUTDmDyJIn2/w3.s2rh6ETOik/1lPSZ4q9Zc/Cqa019qg2	f
9	Morgan	test	test5@mail.ru	$2b$10$i/SHbtgrrnDG/MU563KTz.6NjheV2KILWifbTLOdRxzA9SIrS2XaO	t
10	Morgan	test	test6@mail.ru	$2b$10$dvXV.ayDghAMYfxCCLmDheVjvznCtGzIIn7/.sqR44TPVAX5qjw7u	t
\.


--
-- Name: doc_meta_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.doc_meta_seq_id', 1, true);


--
-- Name: quests_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.quests_seq_id', 1, false);


--
-- Name: records_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.records_seq_id', 1, true);


--
-- Name: specialisation_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.specialisation_seq_id', 1, true);


--
-- Name: user_meat_seq_id; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.user_meat_seq_id', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: morgan
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: doc_meta doc_meta_pk; Type: CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.doc_meta
    ADD CONSTRAINT doc_meta_pk PRIMARY KEY (id);


--
-- Name: specialisation specialisation_pk; Type: CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.specialisation
    ADD CONSTRAINT specialisation_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: doc_meta doc_meta_specialisation_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.doc_meta
    ADD CONSTRAINT doc_meta_specialisation_id_fk FOREIGN KEY (spec_id) REFERENCES public.specialisation(id);


--
-- Name: doc_meta doc_meta_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: morgan
--

ALTER TABLE ONLY public.doc_meta
    ADD CONSTRAINT doc_meta_users_id_fk FOREIGN KEY (doc_id) REFERENCES public.users(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: morgan
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

