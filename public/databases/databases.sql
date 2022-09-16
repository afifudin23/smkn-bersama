-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: smkn_bersama
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumni1s`
--

DROP TABLE IF EXISTS `alumni1s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumni1s` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `opini` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumni1s`
--

LOCK TABLES `alumni1s` WRITE;
/*!40000 ALTER TABLE `alumni1s` DISABLE KEYS */;
INSERT INTO `alumni1s` VALUES (2,'Afif','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/1.jpg','2022-09-14 15:03:16','2022-09-14 15:03:16'),(3,'Karina','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/2.jpg','2022-09-14 15:03:50','2022-09-14 15:03:50'),(4,'Winter','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/3.jpg','2022-09-14 15:04:15','2022-09-14 15:04:15');
/*!40000 ALTER TABLE `alumni1s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumni2s`
--

DROP TABLE IF EXISTS `alumni2s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumni2s` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `opini` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumni2s`
--

LOCK TABLES `alumni2s` WRITE;
/*!40000 ALTER TABLE `alumni2s` DISABLE KEYS */;
INSERT INTO `alumni2s` VALUES (1,'Ningning','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/4.jpg','2022-09-14 15:07:22','2022-09-14 15:07:22'),(2,'Giselle','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/5.jpg','2022-09-14 15:08:34','2022-09-14 15:08:34'),(3,'Hyein','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/6.jpg','2022-09-14 15:09:01','2022-09-14 15:09:01');
/*!40000 ALTER TABLE `alumni2s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumni3s`
--

DROP TABLE IF EXISTS `alumni3s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumni3s` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `opini` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumni3s`
--

LOCK TABLES `alumni3s` WRITE;
/*!40000 ALTER TABLE `alumni3s` DISABLE KEYS */;
INSERT INTO `alumni3s` VALUES (1,'Haerin','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/7.jpeg','2022-09-14 15:10:39','2022-09-14 15:10:39'),(2,'Hanni','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/8.jpeg','2022-09-14 15:10:59','2022-09-14 15:10:59'),(3,'Minji','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','images/photos/9.jpeg','2022-09-14 15:12:21','2022-09-14 15:12:21');
/*!40000 ALTER TABLE `alumni3s` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-16 14:58:34
