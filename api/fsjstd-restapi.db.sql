CREATE TABLE IF NOT EXISTS Users ( 
  `id` INTEGER AUTO_INCREMENT, 
 `firstname` varchar(255) NOT NULL DEFAULT '',
 `lastname` varchar(255) NOT NULL DEFAULT '', 
 `emailaddress` varchar(255) NOT NULL DEFAULT '' UNIQUE, 
 `password` varchar(255) NOT NULL DEFAULT '', 
 `created_at` DATETIME NOT NULL, 
 `updated_at` DATETIME NOT NULL,
  PRIMARY KEY  (`id`) );
  
  CREATE TABLE IF NOT EXISTS Courses (
	`id` INTEGER AUTO_INCREMENT,
	`title`	VARCHAR(255) NOT NULL DEFAULT '',
	`description` TEXT NOT NULL DEFAULT '',
	`estimatedTime` VARCHAR(255),
	`materialsNeeded` VARCHAR(255),
	`created_at` DATETIME NOT NULL,
	`updated_at` DATETIME NOT NULL,
	`userId` INTEGER NOT NULL DEFAULT -1,
	PRIMARY KEY(`id` ),
	FOREIGN KEY(`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO `Users` VALUES (1,'Joe','Smith','joe@smith.com','$2a$10$VLr4r1sZGeUyQ.VS2PP3f.qbzBlbvacJ0n3Rpiluk/us4eHK9ZaC6','2021-11-30 19:02:06','2021-11-30 19:02:06');
INSERT INTO `Users` VALUES (2,'Sally','Jones','sally@jones.com','$2a$10$H5M300cHtDnKQA/u7GDD9eYAh2HH8PRyw629FZ/UNyzLoeeZAHDky','2021-11-30 19:02:06','2021-11-30 19:02:06');
INSERT INTO `Users` VALUES (3,'Dean','Y','deany@gmail.com','$2a$10$gsJabG.dwXIhrJUeM3U4veZnIWka9sOPtteLDnhJTiAvQPtthyXou','2021-11-30 19:04:05.985 +00:00','2021-11-30 19:04:05.985 +00:00');
INSERT INTO `Users` VALUES (4,'Pal','You','pal@gmail.com','$2a$10$4zq/Oao.2y65xGXC5tD6xem54cAtQh/qs66NQIbFmBHrSjDfq5Fju','2021-12-07 17:48:53.442 +00:00','2021-12-07 17:48:53.442 +00:00');
INSERT INTO `Courses` VALUES (1,'Build a Basic Bookcase','High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.

Not every piece of furniture needs to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.

Our pine bookcase, for example, features simple construction and it''s designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it''s meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.

We made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you''re done with construction you have the option of a painted or clear finish.

As for basic tools, you''ll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.

The specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.','12 hours','* 1/2 x 3/4 inch parting strip
* 1 x 2 common pine
* 1 x 4 common pine
* 1 x 10 common pine
* 1/4 inch thick lauan plywoodcourses
* Finishing Nails
* Sandpaper
* Wood Glue
* Wood Filler
* Minwax Oil Based Polyurethane
','2021-11-30 19:02:06','2021-11-30 19:02:06',1);
INSERT INTO `Courses` VALUES (2,'Learn How to Program','In this course, you''ll learn how to write code like a pro!','6 hours','* Notebook computer running Mac OS X or Windows
* Text editor','2021-11-30 19:02:06','2021-11-30 19:02:06',2);
INSERT INTO `Courses` VALUES (3,'Learn How to Test Programs','In this course, you''ll learn how to test programs.',NULL,NULL,'2021-11-30 19:02:06','2021-11-30 19:02:06',2);
INSERT INTO `Courses` VALUES (4,'New Title','stuff',NULL,NULL,'2021-11-30 19:04:25.088 +00:00','2021-12-03 23:54:08.693 +00:00',3);
COMMIT;