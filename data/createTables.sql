DROP TABLE IF EXISTS "messages";
DROP SEQUENCE IF EXISTS messages_id_seq;
CREATE SEQUENCE messages_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."messages" (
    "id" integer DEFAULT nextval('messages_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "firstname" character varying(255) NOT NULL,
    "email" character varying(255) NOT NULL,
    "content" text NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "messages_email_key" UNIQUE ("email"),
    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
) WITH (oids = false);