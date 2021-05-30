CREATE TABLE public.page_info (
    id SERIAL PRIMARY KEY,
    tenant_id INTEGER,
    title character varying(255),
    description character varying(255),
    contact character varying(255)
);