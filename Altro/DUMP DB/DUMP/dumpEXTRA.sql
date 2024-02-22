-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: Andron
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

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
-- Table structure for table `Beni`
--

DROP TABLE IF EXISTS `Beni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Beni` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `impresa` int unsigned NOT NULL,
  `nome` varchar(30) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `descrizione` varchar(300) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `andron` int NOT NULL,
  `quantita` int NOT NULL,
  `accettato` tinyint(1) NOT NULL DEFAULT '0',
  `rifiutato` tinyint(1) NOT NULL DEFAULT '0',
  `eliminato` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `impresa` (`impresa`),
  CONSTRAINT `Beni_ibfk_1` FOREIGN KEY (`impresa`) REFERENCES `Impresa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Beni`
--

LOCK TABLES `Beni` WRITE;
/*!40000 ALTER TABLE `Beni` DISABLE KEYS */;
INSERT INTO `Beni` VALUES (8,38,'Converse Basse','Converse','Scarpe basse comode','Scarpe',5,3,1,0,0);
/*!40000 ALTER TABLE `Beni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bisogni`
--

DROP TABLE IF EXISTS `Bisogni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bisogni` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `utente` int unsigned NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descrizione` varchar(500) NOT NULL,
  `citta` varchar(30) NOT NULL,
  `indirizzo` varchar(60) NOT NULL,
  `posizione` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `accettato` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `utente` (`utente`),
  CONSTRAINT `Bisogni_ibfk_1` FOREIGN KEY (`utente`) REFERENCES `Utente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bisogni`
--

LOCK TABLES `Bisogni` WRITE;
/*!40000 ALTER TABLE `Bisogni` DISABLE KEYS */;
INSERT INTO `Bisogni` VALUES (23,37,'Emergenza rifiuti!','Abbiamo bisogno di persone che aiutino a pulire la zona','Città ','Via sporca n°2','False',1),(24,37,'prova','provaGPS','asdff','fasdf','{\'latidute\': 38.0881338, \'longitude\': 15.652994499999998, \'accuracy\': 6975}',0),(25,37,'PROVA GPS','asdasd','fsafsadf','asdfasdf','{\"latitude\": 38.0881338, \"longitude\": 15.65299449999999}',0),(26,37,'asdasdas','asdasddas','asdasd','asdasdas','{\"latidute\": 37.4218556, \"longitude\": -122.0838268}',0),(27,37,'asdfasdf','asdfasdf','asdfasdf','asdfasdf','{\'latidute\': 37.4218556, \'longitude\': -122.0838268}',0),(28,37,'asdfasdf','asdfasdf','asdfasdf','asdfasdf','False',0),(29,37,'prova','prova','asdfasdf','asdfasdf','{\"latidute\": 37.4218556, \"longitude\": -122.0838268}',0),(31,37,'fsdfsdf','NO GPS','fsdfs','sdfsdf','{\"latitude\": 37.4218556, \"longitude\": -122.0838268}',0),(32,37,'dasdasd','GPS','fdafadf','dafadfadf','{\"latitude\": 37.4218556, \"longitude\": -122.0838268}',0);
/*!40000 ALTER TABLE `Bisogni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ente`
--

DROP TABLE IF EXISTS `Ente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ente` (
  `id` int unsigned NOT NULL,
  `nome` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `regione` varchar(30) NOT NULL,
  `citta` varchar(30) NOT NULL,
  `firstLog` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  CONSTRAINT `Ente_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Login` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ente`
--

LOCK TABLES `Ente` WRITE;
/*!40000 ALTER TABLE `Ente` DISABLE KEYS */;
INSERT INTO `Ente` VALUES (41,'prova','anto_pip23@hotmail.it','23432','asdasdasd','dasdasdd',1),(46,'Ente001','itn45561@cuoly.com','001123','Sicilia','Messina',1);
/*!40000 ALTER TABLE `Ente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FeedbackOrdini`
--

DROP TABLE IF EXISTS `FeedbackOrdini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FeedbackOrdini` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `valutazione` int unsigned NOT NULL,
  `messaggio` varchar(300) NOT NULL,
  `da` int unsigned NOT NULL,
  `a` int unsigned NOT NULL,
  `ordine` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `da` (`da`),
  KEY `a` (`a`),
  KEY `ordine` (`ordine`),
  CONSTRAINT `FeedbackOrdini_ibfk_1` FOREIGN KEY (`da`) REFERENCES `Login` (`id`),
  CONSTRAINT `FeedbackOrdini_ibfk_2` FOREIGN KEY (`a`) REFERENCES `Impresa` (`id`),
  CONSTRAINT `FeedbackOrdini_ibfk_3` FOREIGN KEY (`ordine`) REFERENCES `Ordini` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FeedbackOrdini`
--

LOCK TABLES `FeedbackOrdini` WRITE;
/*!40000 ALTER TABLE `FeedbackOrdini` DISABLE KEYS */;
/*!40000 ALTER TABLE `FeedbackOrdini` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FeedbackServizi`
--

DROP TABLE IF EXISTS `FeedbackServizi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FeedbackServizi` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `valutazione` int unsigned NOT NULL,
  `messaggio` varchar(300) NOT NULL,
  `da` int unsigned NOT NULL,
  `a` int unsigned NOT NULL,
  `richiesta` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `da` (`da`),
  KEY `a` (`a`),
  KEY `servizio` (`richiesta`),
  CONSTRAINT `FeedbackServizi_ibfk_1` FOREIGN KEY (`da`) REFERENCES `Utente` (`id`),
  CONSTRAINT `FeedbackServizi_ibfk_2` FOREIGN KEY (`a`) REFERENCES `Utente` (`id`),
  CONSTRAINT `FeedbackServizi_ibfk_3` FOREIGN KEY (`richiesta`) REFERENCES `Richieste` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FeedbackServizi`
--

LOCK TABLES `FeedbackServizi` WRITE;
/*!40000 ALTER TABLE `FeedbackServizi` DISABLE KEYS */;
INSERT INTO `FeedbackServizi` VALUES (6,5,'Bravissimo Mario! Molto disponibile!',45,37,19);
/*!40000 ALTER TABLE `FeedbackServizi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Impresa`
--

DROP TABLE IF EXISTS `Impresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Impresa` (
  `id` int unsigned NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cf` varchar(16) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `iva` varchar(50) NOT NULL,
  `stato` varchar(20) NOT NULL,
  `regione` varchar(20) NOT NULL,
  `citta` varchar(30) NOT NULL,
  `via` varchar(50) NOT NULL,
  `cap` varchar(10) NOT NULL,
  `attivo` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  CONSTRAINT `Impresa_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Login` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Impresa`
--

LOCK TABLES `Impresa` WRITE;
/*!40000 ALTER TABLE `Impresa` DISABLE KEYS */;
INSERT INTO `Impresa` VALUES (38,'ScarpeBelle','305dfu11kasd','Impresa','321251435423','scarpebelle@email.it','pfasdofu3423','Italia','Sicilia','Messina','Via scarpe belle n° 2','82130',1),(40,'asdadasd','asdasd','asdasda','asdasd','adssad','asdasd','asdasd','asdasd','asdasd','asasd','asdasd',1),(42,'dfsdffsd','guiogioug','ougigio','iugiugiug','anto_pip23@hotmail.it','iugiogui','agdsasd','afasdfasd','asfsdaf','asdfasdf','asdfsadff',1),(44,'asdfsadf','asdfasdf','asdfasdf','asdfasdf','anto_pip23@hotmail.it','asdfasdf','asdfasdf','asdfasdf','asdfasdf','asfsadf','asdfasdf',0);
/*!40000 ALTER TABLE `Impresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Intermediario`
--

DROP TABLE IF EXISTS `Intermediario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Intermediario` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `utente` int unsigned NOT NULL,
  `andron` int NOT NULL,
  `causale` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `utente` (`utente`),
  CONSTRAINT `Intermediario_ibfk_1` FOREIGN KEY (`utente`) REFERENCES `Login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Intermediario`
--

LOCK TABLES `Intermediario` WRITE;
/*!40000 ALTER TABLE `Intermediario` DISABLE KEYS */;
INSERT INTO `Intermediario` VALUES (42,37,10,'Saldo iniziale per la creazione dell\'Utente'),(43,45,20,'Saldo iniziale per la creazione dell\'Utente'),(44,45,20,'Rimozione preventiva Andron all\'utente Alice Rossi per la richiesta del servizio \'Babysitter \': Posso occuparmi dei vostri figli se avete bisogno all\'utente Mario Rossi del : 2021-04-22T16:00:34.359+02:00. Numero di ore richieste: 1');
/*!40000 ALTER TABLE `Intermediario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Login`
--

DROP TABLE IF EXISTS `Login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Login` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pass` varchar(50) NOT NULL,
  `salt` varchar(50) NOT NULL,
  `tipo` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Login`
--

LOCK TABLES `Login` WRITE;
/*!40000 ALTER TABLE `Login` DISABLE KEYS */;
INSERT INTO `Login` VALUES (37,'MarioRossi','eb99076a1c9d1b3cf010c319cfec4338','l8U9zX2RyB','utente'),(38,'ScarpeBelle','4ee9f57ee2958a1713da317e71cc1e46','BVVcg5XlsY','impresa'),(40,'Impresa001','70b144c8f601b53d71c1308fc49885eb','jbke6aOYTr','impresa'),(41,'Prova','699b9ab58289ab1ce3a0cf8b1e9541c1','gyLdRHOUTQ','ente'),(42,'provino','5b39153a64cb8aace0ab862a11405881','Yp6VJasG7V','impresa'),(43,'PROVELLA','3be0d487de1c639a8a4fab3d0dd0f71d','DjcMRzGW3o','utente'),(44,'PROVINAAAA','9d1c5c95183053e75f6b31b75bcc8c4d','BrdtiHHDp2','impresa'),(45,'AliceRossi','7183e7f9326b422d71867bfd656e5dc1','RxQWoT9mfe','utente'),(46,'Ente001','d4b60c3a1df90fa82db144a67560dce6','YqDgPyaENk','ente');
/*!40000 ALTER TABLE `Login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ordini`
--

DROP TABLE IF EXISTS `Ordini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ordini` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `transazione` int unsigned NOT NULL,
  `utente` int unsigned NOT NULL,
  `impresa` int unsigned NOT NULL,
  `bene` int unsigned NOT NULL,
  `quantita` int unsigned NOT NULL,
  `checkOrdine` tinyint(1) NOT NULL DEFAULT '0',
  `confermato` tinyint(1) NOT NULL DEFAULT '0',
  `segnalato` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `transazione` (`transazione`),
  KEY `utente` (`utente`),
  KEY `impresa` (`impresa`),
  KEY `bene` (`bene`),
  CONSTRAINT `Ordini_ibfk_1` FOREIGN KEY (`transazione`) REFERENCES `Transazioni` (`id`),
  CONSTRAINT `Ordini_ibfk_2` FOREIGN KEY (`utente`) REFERENCES `Login` (`id`),
  CONSTRAINT `Ordini_ibfk_3` FOREIGN KEY (`impresa`) REFERENCES `Impresa` (`id`),
  CONSTRAINT `Ordini_ibfk_4` FOREIGN KEY (`bene`) REFERENCES `Beni` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ordini`
--

LOCK TABLES `Ordini` WRITE;
/*!40000 ALTER TABLE `Ordini` DISABLE KEYS */;
INSERT INTO `Ordini` VALUES (17,24,37,38,8,1,1,0,0);
/*!40000 ALTER TABLE `Ordini` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Richieste`
--

DROP TABLE IF EXISTS `Richieste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Richieste` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `richiedente` int unsigned NOT NULL,
  `esponente` int unsigned NOT NULL,
  `servizio` int unsigned NOT NULL,
  `messaggio` varchar(200) NOT NULL,
  `stato` varchar(10) NOT NULL DEFAULT 'attesa',
  `data` date NOT NULL,
  `orario` varchar(5) NOT NULL,
  `ore` int NOT NULL DEFAULT '1',
  `segnalazioneRichiedente` tinyint(1) NOT NULL DEFAULT '0',
  `sagnalazioneEsponente` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `richiedente` (`richiedente`),
  KEY `esponente` (`esponente`),
  KEY `servizio` (`servizio`),
  CONSTRAINT `Richieste_ibfk_1` FOREIGN KEY (`richiedente`) REFERENCES `Utente` (`id`),
  CONSTRAINT `Richieste_ibfk_2` FOREIGN KEY (`esponente`) REFERENCES `Utente` (`id`),
  CONSTRAINT `Richieste_ibfk_3` FOREIGN KEY (`servizio`) REFERENCES `Servizi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Richieste`
--

LOCK TABLES `Richieste` WRITE;
/*!40000 ALTER TABLE `Richieste` DISABLE KEYS */;
INSERT INTO `Richieste` VALUES (19,45,37,24,'Ciao Mario! Potresti aiutarmi?','confermato','2021-04-22','16:00',1,0,1);
/*!40000 ALTER TABLE `Richieste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RichiesteEnte`
--

DROP TABLE IF EXISTS `RichiesteEnte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RichiesteEnte` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `richiedente` int unsigned NOT NULL,
  `citta` varchar(30) NOT NULL,
  `regione` varchar(30) NOT NULL,
  `via` varchar(30) NOT NULL,
  `servizio` varchar(200) NOT NULL,
  `eseguito` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `richiedente` (`richiedente`),
  CONSTRAINT `RichiesteEnte_ibfk_1` FOREIGN KEY (`richiedente`) REFERENCES `Ente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RichiesteEnte`
--

LOCK TABLES `RichiesteEnte` WRITE;
/*!40000 ALTER TABLE `RichiesteEnte` DISABLE KEYS */;
/*!40000 ALTER TABLE `RichiesteEnte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RichiesteEnteSvolte`
--

DROP TABLE IF EXISTS `RichiesteEnteSvolte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RichiesteEnteSvolte` (
  `servizioComunita` int unsigned NOT NULL,
  `richiesta` int unsigned NOT NULL,
  PRIMARY KEY (`servizioComunita`),
  KEY `richiesta` (`richiesta`),
  CONSTRAINT `RichiesteEnteSvolte_ibfk_1` FOREIGN KEY (`servizioComunita`) REFERENCES `ServiziComunita` (`id`),
  CONSTRAINT `RichiesteEnteSvolte_ibfk_2` FOREIGN KEY (`richiesta`) REFERENCES `RichiesteEnte` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RichiesteEnteSvolte`
--

LOCK TABLES `RichiesteEnteSvolte` WRITE;
/*!40000 ALTER TABLE `RichiesteEnteSvolte` DISABLE KEYS */;
/*!40000 ALTER TABLE `RichiesteEnteSvolte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Saldo`
--

DROP TABLE IF EXISTS `Saldo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Saldo` (
  `id` int unsigned NOT NULL,
  `andron` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  CONSTRAINT `Saldo_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Login` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Saldo`
--

LOCK TABLES `Saldo` WRITE;
/*!40000 ALTER TABLE `Saldo` DISABLE KEYS */;
INSERT INTO `Saldo` VALUES (37,45),(38,5),(40,0),(41,30),(42,0),(44,0),(45,0),(46,0);
/*!40000 ALTER TABLE `Saldo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SegnalazioniOrdini`
--

DROP TABLE IF EXISTS `SegnalazioniOrdini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SegnalazioniOrdini` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `messaggio` varchar(300) NOT NULL,
  `da` int unsigned NOT NULL,
  `a` int unsigned NOT NULL,
  `ordine` int unsigned NOT NULL,
  `gestito` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `da` (`da`),
  KEY `a` (`a`),
  KEY `ordine` (`ordine`),
  CONSTRAINT `SegnalazioniOrdini_ibfk_1` FOREIGN KEY (`da`) REFERENCES `Login` (`id`),
  CONSTRAINT `SegnalazioniOrdini_ibfk_2` FOREIGN KEY (`a`) REFERENCES `Impresa` (`id`),
  CONSTRAINT `SegnalazioniOrdini_ibfk_3` FOREIGN KEY (`ordine`) REFERENCES `Ordini` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SegnalazioniOrdini`
--

LOCK TABLES `SegnalazioniOrdini` WRITE;
/*!40000 ALTER TABLE `SegnalazioniOrdini` DISABLE KEYS */;
/*!40000 ALTER TABLE `SegnalazioniOrdini` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SegnalazioniServizi`
--

DROP TABLE IF EXISTS `SegnalazioniServizi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SegnalazioniServizi` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `messaggio` varchar(300) NOT NULL,
  `da` int unsigned NOT NULL,
  `a` int unsigned NOT NULL,
  `gestito` tinyint(1) NOT NULL DEFAULT '0',
  `richiesta` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `da` (`da`),
  KEY `a` (`a`),
  KEY `richiesta` (`richiesta`),
  CONSTRAINT `SegnalazioniServizi_ibfk_1` FOREIGN KEY (`da`) REFERENCES `Utente` (`id`),
  CONSTRAINT `SegnalazioniServizi_ibfk_2` FOREIGN KEY (`a`) REFERENCES `Utente` (`id`),
  CONSTRAINT `SegnalazioniServizi_ibfk_3` FOREIGN KEY (`richiesta`) REFERENCES `Richieste` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SegnalazioniServizi`
--

LOCK TABLES `SegnalazioniServizi` WRITE;
/*!40000 ALTER TABLE `SegnalazioniServizi` DISABLE KEYS */;
INSERT INTO `SegnalazioniServizi` VALUES (13,'L\'utente al quale ho fornito un servizio non sta confermando l\'esecuzione di questo! Non ho ricevuto il mio compenso!',37,45,0,19);
/*!40000 ALTER TABLE `SegnalazioniServizi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Servizi`
--

DROP TABLE IF EXISTS `Servizi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Servizi` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `utente` int unsigned NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descrizione` varchar(300) NOT NULL,
  `andron` int unsigned NOT NULL,
  `ore` int NOT NULL,
  `preavviso` int NOT NULL,
  `accettato` tinyint(1) NOT NULL DEFAULT '0',
  `rifiutato` tinyint(1) NOT NULL DEFAULT '0',
  `eliminato` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `utente` (`utente`),
  CONSTRAINT `Servizi_ibfk_1` FOREIGN KEY (`utente`) REFERENCES `Utente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Servizi`
--

LOCK TABLES `Servizi` WRITE;
/*!40000 ALTER TABLE `Servizi` DISABLE KEYS */;
INSERT INTO `Servizi` VALUES (23,37,'Giardinaggio','Sono disponibile per aiutare a gestire un giardino, pulizia, potatura, etc...',10,3,3,1,0,0),(24,37,'Babysitter ','Posso occuparmi dei vostri figli se avete bisogno',20,5,3,1,0,0);
/*!40000 ALTER TABLE `Servizi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiziComunita`
--

DROP TABLE IF EXISTS `ServiziComunita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiziComunita` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `utente` int unsigned NOT NULL,
  `ente` int unsigned NOT NULL,
  `messaggio` varchar(300) NOT NULL,
  `data` date NOT NULL,
  `orario` time NOT NULL,
  `richiestaBisogno` tinyint(1) NOT NULL,
  `bisogno` int unsigned DEFAULT NULL,
  `certificato` tinyint(1) NOT NULL DEFAULT '0',
  `rifiutato` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `utente` (`utente`),
  KEY `ente` (`ente`),
  KEY `bisogno` (`bisogno`),
  CONSTRAINT `ServiziComunita_ibfk_1` FOREIGN KEY (`utente`) REFERENCES `Utente` (`id`),
  CONSTRAINT `ServiziComunita_ibfk_2` FOREIGN KEY (`ente`) REFERENCES `Ente` (`id`),
  CONSTRAINT `ServiziComunita_ibfk_3` FOREIGN KEY (`bisogno`) REFERENCES `Bisogni` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiziComunita`
--

LOCK TABLES `ServiziComunita` WRITE;
/*!40000 ALTER TABLE `ServiziComunita` DISABLE KEYS */;
INSERT INTO `ServiziComunita` VALUES (8,37,41,'prova','2021-04-08','21:31:48',1,23,1,0),(9,37,46,'Ho pulito tutto!','2021-04-10','15:52:15',1,23,0,0);
/*!40000 ALTER TABLE `ServiziComunita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Transazioni`
--

DROP TABLE IF EXISTS `Transazioni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Transazioni` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `andron` int unsigned NOT NULL,
  `emittente` int unsigned NOT NULL,
  `ricevente` int unsigned NOT NULL,
  `causale` varchar(300) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `emittente` (`emittente`),
  KEY `ricevente` (`ricevente`),
  CONSTRAINT `Transazioni_ibfk_1` FOREIGN KEY (`emittente`) REFERENCES `Login` (`id`),
  CONSTRAINT `Transazioni_ibfk_2` FOREIGN KEY (`ricevente`) REFERENCES `Login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Transazioni`
--

LOCK TABLES `Transazioni` WRITE;
/*!40000 ALTER TABLE `Transazioni` DISABLE KEYS */;
INSERT INTO `Transazioni` VALUES (24,'2021-04-02 06:15:18',5,37,38,'Acquisto di 1 pezzo/pezzi del prodotto Converse Basse'),(25,'2021-04-10 11:19:13',20,45,37,'Esecuzione del Servizio: Babysitter ');
/*!40000 ALTER TABLE `Transazioni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Utente`
--

DROP TABLE IF EXISTS `Utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Utente` (
  `id` int unsigned NOT NULL,
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `data_nascita` date NOT NULL,
  `cf` varchar(16) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `stato` varchar(20) NOT NULL,
  `regione` varchar(20) NOT NULL,
  `citta` varchar(30) NOT NULL,
  `via` varchar(50) NOT NULL,
  `cap` varchar(10) NOT NULL,
  `attivo` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  CONSTRAINT `Utente_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Login` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Utente`
--

LOCK TABLES `Utente` WRITE;
/*!40000 ALTER TABLE `Utente` DISABLE KEYS */;
INSERT INTO `Utente` VALUES (37,'Mario','Rossi','2008-12-01','MRRSS1234','341495498332','mariorossi@email.it','Italia','Sicilia','Messina','Via di mario rossi n°21','912340',1),(43,'asdfasdf','asdfasdf','2021-04-08','asdfasdf','asdfasdf','anto_pip23@hotmail.it','asdfasdf','asdfasdf','asdfasdf','asdfasdf','asdfasdf',0),(45,'Alice','Rossi','2021-04-10','adusa9duad','430483808','anto_pip23@hotmail.it','Italia','Sicilia','Messina','Via alice n 20','28100',1);
/*!40000 ALTER TABLE `Utente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notAdministration`
--

DROP TABLE IF EXISTS `notAdministration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notAdministration` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `salt` varchar(100) NOT NULL,
  `JsonValue` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notAdministration`
--

LOCK TABLES `notAdministration` WRITE;
/*!40000 ALTER TABLE `notAdministration` DISABLE KEYS */;
INSERT INTO `notAdministration` VALUES (1,'Admin','bbe650cffb31458838fffb0824d84f41','a\"kf?Sq&FOP4_D??sj5Q°I£bu3/ZimqoQ+£{C+rjz^9tdwJTR/z=s7F/h^)X2PlMP%=UMv$hJ^dDIMJ3av=wd(0MjMI*_c6$^Ycv','{\"andron\": 20, \"percentuale\": 50}');
/*!40000 ALTER TABLE `notAdministration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-15 10:54:24
