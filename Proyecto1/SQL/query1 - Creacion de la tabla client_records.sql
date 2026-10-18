create table client_records(
id SERIAL primary key, 
username varchar(100) not null,
payment_status varchar(50),
comission_status varchar(50),
deadline DATE
)



