-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: Andron
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-06 19:30:31
