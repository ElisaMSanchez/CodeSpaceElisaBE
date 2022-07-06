CREATE USER 'tatydog_admin'@'localhost' IDENTIFIED BY '!TatyDog1234';

create database tatydog;

create table tatydog.customer
(
    id            varchar(36)  not null,
    comments      varchar(255),
    email         varchar(255) not null,
    first_surname varchar(50)  not null,
    last_surname  varchar(50),
    `name`        varchar(50)  not null,
    phone         varchar(20)  not null,
    primary key (id)
)
;

create table tatydog.voucher
(
    id          varchar(36)  not null,
    max_lessons integer      not null,
    `status`    varchar(255) not null,
    customer_id varchar(36)  not null,
    primary key (id)
)
;

create table tatydog.lesson
(
    id               varchar(36)  not null,
    created_at       date         not null,
    external_comment varchar(255),
    internal_comment varchar(255) not null,
    voucher_id       varchar(36)  not null,
    primary key (id)
)
;

alter table tatydog.lesson
    add foreign key (voucher_id)
        references tatydog.voucher (id)
;

alter table tatydog.voucher
    add foreign key (customer_id)
        references tatydog.customer (id)
;

GRANT ALL PRIVILEGES ON tatydog . * TO 'tatydog_admin'@'localhost';
