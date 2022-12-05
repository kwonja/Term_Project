create database term_project;

use term_project

create table Lecture(
L_id INTEGER AUTO_INCREMENT PRIMARY KEY,
Name varchar(20),
Lecture_time varchar(20),
Date varchar(20),
Level varchar(10) );


insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','06:00~06:50','월/수/금','중급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','07:00~07:50','월/수/금','상급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','09:00~09:50','월/수/금','초급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','10:00~10:50','월/수/금','중급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','11:00~11:50','월/수/금','상급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','18:00~18:50','월/수/금','초급');


insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','06:00~06:50','화/목','중급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','07:00~07:50','화/목','상급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','09:00~09:50','화/목','초급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','10:00~10:50','화/목','중급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','11:00~11:50','화/목','상급');

insert into Lecture(Name,Lecture_time,Date,Level)
VALUES ('수영','18:00~18:50','화/목','초급');


create table Member(
M_id INTEGER AUTO_INCREMENT PRIMARY KEY,
Name varchar(10),
Job varchar(10),
Pnumber varchar(20),
Bdate varchar(20),
Start_date varchar(20)
);

insert into Member(Name,Job,Pnumber,Bdate,Start_date)VALUES
('김카카오','학생','010-2514-6843','1998-09-19','2022-12-04');

insert into Member(Name,Job,Pnumber,Bdate,Start_date)VALUES
('김비빔','학생','010-3333-6666','2000-11-19','2022-12-04');

insert into Member(Name,Job,Pnumber,Bdate,Start_date)VALUES
('슬기로운 인절미','학생','010-1114-6233','2001-07-19','2022-12-04');

insert into Member(Name,Job,Pnumber,Bdate,Start_date)VALUES
('권자몬','학생','010-3611-8923','1998-05-20','2022-12-01');

insert into Member(Name,Job,Pnumber,Bdate,Start_date)VALUES
('상어악어','일반','010-2514-6843','1998-09-19','2022-12-01');

insert into Member(Name,Job,Pnumber,Bdate,Start_date)VALUES
('노바대장','일반','010-2514-6233','1998-09-19','2022-12-02');

create table Locker(
Locker_id INTEGER AUTO_INCREMENT PRIMARY KEY,
M_id INTEGER UNIQUE NOT NULL,
Password varchar(10) NOT NULL,
FOREIGN KEY (M_id) REFERENCES Member(M_id) ON DELETE CASCADE);

insert into Locker(M_id,Password)
VALUES(3,'1234');

insert into Locker(M_id,Password)
VALUES(2,'2568');

insert into Locker(M_id,Password)
VALUES(1,'2345');

insert into Locker(M_id,Password)
VALUES(4,'9999');

insert into Locker(M_id,Password)
VALUES(5,'8888');

insert into Locker(M_id,Password)
VALUES(6,'1234');

create table Enroll(
M_id INTEGER NOT NULL,
L_id INTEGER NOT NULL,
Price INTEGER NOT NULL,
PRIMARY KEY(M_id,L_id),
FOREIGN KEY (M_id) REFERENCES Member(M_id) ON DELETE CASCADE,
FOREIGN KEY (L_id) REFERENCES Lecture(L_id) ON DELETE CASCADE);


insert into Enroll(M_id,L_id,Price)
VALUES('1','12',75000);
insert into Enroll(M_id,L_id,Price)
VALUES('2','12',75000);
insert into Enroll(M_id,L_id,Price)
VALUES('3','11',75000);
insert into Enroll(M_id,L_id,Price)
VALUES('4','10',75000);
insert into Enroll(M_id,L_id,Price)
VALUES('5','9',85000);
insert into Enroll(M_id,L_id,Price)
VALUES('6','8',85000);
insert into Enroll(M_id,L_id,Price)
VALUES('1','11',75000);

create table Center(
C_id INTEGER AUTO_INCREMENT PRIMARY KEY,
Name VARCHAR(10),
Tel VARCHAR(20) );

insert into Center(Name,Tel)VALUES('스포츠센터','043-254-2456');
insert into Center(Name,Tel)VALUES('청주체육관','043-325-8156');

create table Instructor(
I_id INTEGER AUTO_INCREMENT PRIMARY KEY,
Name VARCHAR(10),
Lecture VARCHAR(10),
Year VARCHAR(10),
C_id INTEGER NOT NULL,
FOREIGN KEY (C_id) REFERENCES Center(C_id) ON DELETE CASCADE);

insert into Instructor(Name,Lecture,Year,C_id)VALUES('권성민','수영','3년',1);
insert into Instructor(Name,Lecture,Year,C_id)VALUES('김보라','수영','7년',1);
insert into Instructor(Name,Lecture,Year,C_id)VALUES('김수영','수영','4년',2);

create table Certificate(
I_id INTEGER AUTO_INCREMENT,
Certificate varchar(20),
PRIMARY KEY(I_id,Certificate),
FOREIGN KEY (I_id) REFERENCES Instructor(I_id) ON DELETE CASCADE);

insert into Certificate(I_id,Certificate)VALUES(1,'라이프가드');
insert into Certificate(I_id,Certificate)VALUES(1,'생활스포츠지도사 2급');

insert into Certificate(I_id,Certificate)VALUES(2,'라이프가드');
insert into Certificate(I_id,Certificate)VALUES(2,'생활스포츠지도사 2급');

insert into Certificate(I_id,Certificate)VALUES(3,'라이프가드');
insert into Certificate(I_id,Certificate)VALUES(3,'생활스포츠지도사 2급');

create table Teach(
L_id INTEGER NOT NULL,
I_id INTEGER NOT NULL,
Hours INTEGER NOT NULL,
PRIMARY KEY(L_id,I_id),
FOREIGN KEY (L_id) REFERENCES Lecture(L_id) ON DELETE CASCADE,
FOREIGN KEY (I_id) REFERENCES Instructor(I_id) ON DELETE CASCADE);

insert into Teach(L_id,I_id,Hours)VALUES(11,1,1);
insert into Teach(L_id,I_id,Hours)VALUES(12,1,1);
insert into Teach(L_id,I_id,Hours)VALUES(9,2,1);
insert into Teach(L_id,I_id,Hours)VALUES(10,2,1);