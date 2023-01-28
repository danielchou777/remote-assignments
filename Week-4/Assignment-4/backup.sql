-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (arm64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `authorID` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `authorID` (`authorID`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`authorID`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,5,'dictum eleifend, nunc risus varius','lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna.'),(2,2,'Donec dignissim magna a tortor.','gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam'),(3,1,'eleifend nec, malesuada ut, sem.','sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris'),(4,2,'elit, dictum eu, eleifend nec,','mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin'),(5,1,'Vivamus molestie dapibus ligula. Aliquam','Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio.'),(6,5,'a mi fringilla mi lacinia','Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus'),(7,2,'natoque penatibus et magnis dis','in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper'),(8,1,'vitae dolor. Donec fringilla. Donec','est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu'),(9,1,'rhoncus. Donec est. Nunc ullamcorper,','feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum'),(10,2,'auctor non, feugiat nec, diam.','vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec,'),(11,1,'Curabitur vel lectus. Cum sociis','Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam'),(12,5,'lorem, auctor quis, tristique ac,','adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum.'),(13,2,'diam at pretium aliquet, metus','eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris'),(14,5,'nunc est, mollis non, cursus','nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio.'),(15,2,'Phasellus nulla. Integer vulputate, risus','semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras'),(16,5,'pharetra nibh. Aliquam ornare, libero','a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare,'),(17,1,'diam vel arcu. Curabitur ut','interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus'),(18,2,'vulputate, nisi sem semper erat,','Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque'),(19,2,'malesuada fames ac turpis egestas.','ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc'),(20,1,'fringilla. Donec feugiat metus sit','leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non'),(21,5,'luctus et ultrices posuere cubilia','nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci'),(22,1,'dictum placerat, augue. Sed molestie.','nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed'),(23,2,'lectus pede, ultrices a, auctor','vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu,'),(24,5,'et magnis dis parturient montes,','tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus.'),(25,5,'Donec tempor, est ac mattis','nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit'),(26,5,'risus. Nunc ac sem ut','tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus.'),(27,5,'imperdiet ullamcorper. Duis at lacus.','egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus'),(28,5,'libero. Proin sed turpis nec','sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget,'),(29,2,'accumsan laoreet ipsum. Curabitur consequat,','et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet'),(30,1,'mollis. Phasellus libero mauris, aliquam','et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim.'),(31,5,'nec tempus mauris erat eget','in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus.'),(32,1,'lorem vitae odio sagittis semper.','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu'),(33,2,'velit. Aliquam nisl. Nulla eu','libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit.'),(34,2,'tristique senectus et netus et','purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id'),(35,2,'eu erat semper rutrum. Fusce','nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'123@gmail.com','123'),(2,'abc@gmail.com','abc'),(5,'daniel@gmail.com','123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-28 17:37:09
