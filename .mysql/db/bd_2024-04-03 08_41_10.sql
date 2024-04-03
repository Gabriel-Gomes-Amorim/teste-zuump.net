-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.30 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para rodeiodigital
DROP DATABASE IF EXISTS `rodeiodigital`;
CREATE DATABASE IF NOT EXISTS `rodeiodigital` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rodeiodigital`;

-- Copiando estrutura para tabela rodeiodigital.competitors
DROP TABLE IF EXISTS `competitors`;
CREATE TABLE IF NOT EXISTS `competitors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela rodeiodigital.competitors: ~29 rows (aproximadamente)
INSERT INTO `competitors` (`id`, `full_name`, `created_at`, `updated_at`) VALUES
	(1, 'RAFAEL BELO MONTE', '2024-03-27 20:44:01', NULL),
	(2, 'MOSIEL JOAQUIM DOS SANTOS', '2024-03-27 20:44:14', NULL),
	(3, 'MATHEUS RECCO', '2024-03-27 20:44:25', NULL),
	(4, 'ANTONIO FERREIRA', '2024-03-27 20:44:50', NULL),
	(5, 'EDUARDO RAUST', '2024-03-27 20:45:03', NULL),
	(6, 'RODRIGO ESTEVÃO', '2024-03-27 20:45:17', NULL),
	(7, 'RODRIGO CAMARGO', '2024-03-27 20:45:34', NULL),
	(8, 'JEFERSON CAMARGO', '2024-03-27 20:45:55', NULL),
	(9, 'GEOVANI DURANTE', '2024-03-27 20:46:25', NULL),
	(10, 'JOÃO TRINDADE', '2024-03-27 20:46:42', NULL),
	(11, 'ANTONIO CONSTANTINO', '2024-03-27 20:47:00', NULL),
	(12, 'JUNIOR GARCIA', '2024-03-27 20:47:44', NULL),
	(13, 'ROBERTO ANTUNES', '2024-03-27 20:47:55', NULL),
	(14, 'ANDRÉ BALDESSAR', '2024-03-27 20:48:08', NULL),
	(15, 'LUIZ GONZAGA', '2024-03-27 20:48:26', NULL),
	(16, 'FELIPE COUTINHO', '2024-03-27 20:48:40', NULL),
	(17, 'CARLINHOS AGUIAR', '2024-03-27 20:49:00', NULL),
	(18, 'JOCA JOCA', '2024-03-27 20:49:11', NULL),
	(19, 'JECA TATU', '2024-03-27 20:49:18', NULL),
	(20, 'PAULA NOKU HIRASHIMA', '2024-03-27 20:49:28', NULL),
	(21, 'TADEU XIMIDES', '2024-03-27 20:50:10', NULL),
	(22, 'JUNIOR JANJÃO', '2024-03-27 20:50:24', NULL),
	(23, 'BARTOLOMEU TOBIAS', '2024-03-27 20:50:43', NULL),
	(24, 'AMARILDO AMAROSO', '2024-03-27 20:50:52', NULL),
	(25, 'ABERTO DEMAIS DE OLIVEIRA', '2024-03-27 20:51:38', NULL),
	(26, 'ÁCIDO ACÉTICO ETÍLICO DA SILVA', '2024-03-27 20:52:01', NULL),
	(27, 'AMÁVEL PINTO DA SILVA', '2024-03-27 20:52:23', NULL),
	(28, 'CARABINO TIRO CERTO', '2024-03-27 20:52:40', NULL),
	(29, 'COLAPSO CARDÍACO DA SILVA', '2024-03-27 20:52:58', NULL),
	(30, 'FARAÓ DO EGITO SOUSA', '2024-03-27 20:53:24', NULL),
	(31, 'JOSÉ PINTO BROCHADO', '2024-03-27 20:54:04', NULL),
	(32, 'ROLANDO ESCADABAIXO', '2024-03-27 20:54:31', NULL);

-- Copiando estrutura para tabela rodeiodigital.enrollment_numbers
DROP TABLE IF EXISTS `enrollment_numbers`;
CREATE TABLE IF NOT EXISTS `enrollment_numbers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_competitor` int DEFAULT NULL,
  `id_rodeo` int DEFAULT NULL,
  `enrollment_number` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela rodeiodigital.enrollment_numbers: ~0 rows (aproximadamente)

-- Copiando estrutura para tabela rodeiodigital.rodeos
DROP TABLE IF EXISTS `rodeos`;
CREATE TABLE IF NOT EXISTS `rodeos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rodeo_name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela rodeiodigital.rodeos: ~0 rows (aproximadamente)
INSERT INTO `rodeos` (`id`, `rodeo_name`, `start`, `end`, `created_at`, `updated_at`) VALUES
	(1, 'Campeonato de Vacaria | 3ª Etapa | Sábado', '2024-04-02 22:31:21', '2024-04-08 22:31:23', '2024-04-03 01:31:32', NULL);

-- Copiando estrutura para tabela rodeiodigital.ropes
DROP TABLE IF EXISTS `ropes`;
CREATE TABLE IF NOT EXISTS `ropes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_team_roper` int DEFAULT NULL,
  `ropes` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela rodeiodigital.ropes: ~16 rows (aproximadamente)
INSERT INTO `ropes` (`id`, `id_team_roper`, `ropes`, `created_at`, `updated_at`) VALUES
	(1, 1, '[{"1": "X", "2": "Z", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:06:48', NULL),
	(2, 2, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:07:05', NULL),
	(3, 3, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:07:31', NULL),
	(4, 4, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:07:37', NULL),
	(5, 5, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:07:41', NULL),
	(6, 6, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:07:45', NULL),
	(7, 7, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:07:51', NULL),
	(8, 8, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:07:55', NULL),
	(9, 9, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:08:01', NULL),
	(10, 10, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:08:07', NULL),
	(11, 11, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:08:11', NULL),
	(12, 12, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:08:15', NULL),
	(13, 13, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:08:19', NULL),
	(14, 14, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:08:22', NULL),
	(15, 15, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:08:25', NULL),
	(16, 16, '[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]', '2024-04-03 02:08:32', NULL);

-- Copiando estrutura para tabela rodeiodigital.team_ropers
DROP TABLE IF EXISTS `team_ropers`;
CREATE TABLE IF NOT EXISTS `team_ropers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_competitors` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_rodeo` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela rodeiodigital.team_ropers: ~0 rows (aproximadamente)
INSERT INTO `team_ropers` (`id`, `id_competitors`, `id_rodeo`, `created_at`, `updated_at`) VALUES
	(1, '1,2', 1, '2024-04-03 01:31:48', NULL),
	(2, '3,4', 1, '2024-04-03 01:32:01', NULL),
	(3, '5,6', 1, '2024-04-03 01:32:13', NULL),
	(4, '7,8', 1, '2024-04-03 01:32:22', NULL),
	(5, '9,10', 1, '2024-04-03 01:32:33', NULL),
	(6, '11,12', 1, '2024-04-03 01:32:42', NULL),
	(7, '13,14', 1, '2024-04-03 01:32:51', NULL),
	(8, '15,16', 1, '2024-04-03 01:33:55', NULL),
	(9, '17,18', 1, '2024-04-03 01:34:02', NULL),
	(10, '19,20', 1, '2024-04-03 01:34:10', NULL),
	(11, '21,22', 1, '2024-04-03 01:34:19', NULL),
	(12, '23,24', 1, '2024-04-03 01:34:26', NULL),
	(13, '25,26', 1, '2024-04-03 01:34:33', NULL),
	(14, '27,28', 1, '2024-04-03 01:34:41', NULL),
	(15, '29,30', 1, '2024-04-03 01:34:49', NULL),
	(16, '31,32', 1, '2024-04-03 01:35:02', NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
