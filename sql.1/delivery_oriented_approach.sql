-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 12 Oca 2025, 21:41:26
-- Sunucu sürümü: 10.4.32-MariaDB
-- PHP Sürümü: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `supply_chain`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `delivery_oriented_approach`
--

CREATE TABLE `delivery_oriented_approach` (
  `Order_ID` varchar(255) NOT NULL,
  `Customer_Name` varchar(255) DEFAULT NULL,
  `Order_Date` date DEFAULT NULL,
  `Promised_Date` date DEFAULT NULL,
  `Delivery_Date` date DEFAULT NULL,
  `On_Time` varchar(255) DEFAULT NULL,
  `Delay_Days` int(11) DEFAULT NULL,
  `Flow_Days` int(11) DEFAULT NULL,
  `Urgency_Status` tinyint(1) DEFAULT NULL,
  `Priority` varchar(255) DEFAULT NULL,
  `Distribution_Network` varchar(255) DEFAULT NULL,
  `Tracking_Status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `delivery_oriented_approach`
--

INSERT INTO `delivery_oriented_approach` (`Order_ID`, `Customer_Name`, `Order_Date`, `Promised_Date`, `Delivery_Date`, `On_Time`, `Delay_Days`, `Flow_Days`, `Urgency_Status`, `Priority`, `Distribution_Network`, `Tracking_Status`) VALUES
('ORD_10', 'Customer_12', '2024-01-10', '2024-01-13', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Istanbul', 'In Progress'),
('ORD_100', 'Customer_145', '2024-04-10', '2024-04-10', '2024-04-13', 'No', 3, 3, 0, 'No', 'Ankara', 'Delivered'),
('ORD_101', 'Customer_102', '2024-04-11', '2024-04-19', '2024-04-25', 'No', 6, 14, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_102', 'Customer_97', '2024-04-12', '2024-04-24', '2024-04-25', 'No', 1, 13, 0, 'No', 'Adana', 'Delivered'),
('ORD_103', 'Customer_58', '2024-04-13', '2024-04-18', '2024-04-18', 'Yes', 0, 5, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_104', 'Customer_129', '2024-04-14', '2024-04-18', '2024-04-18', 'Yes', 0, 4, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_105', 'Customer_3', '2024-04-15', '2024-04-16', '2024-04-19', 'No', 3, 4, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_106', 'Customer_11', '2024-04-16', '2024-04-17', '2024-04-23', 'No', 6, 7, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_107', 'Customer_10', '2024-04-17', '2024-04-27', '2024-04-29', 'No', 2, 12, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_108', 'Customer_32', '2024-04-18', '2024-04-22', '2024-04-23', 'No', 1, 5, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_109', 'Customer_1', '2024-04-19', '2024-04-23', '2024-04-23', 'Yes', 0, 4, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_11', 'Customer_11', '2024-01-11', '2024-01-12', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Izmir', 'In Progress'),
('ORD_110', 'Customer_101', '2024-04-20', '2024-04-26', '2024-04-26', 'Yes', 0, 6, 0, 'No', 'Adana', 'Delivered'),
('ORD_111', 'Customer_56', '2024-04-21', '2024-04-23', '2024-04-25', 'No', 2, 4, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_112', 'Customer_16', '2024-04-22', '2024-04-27', '2024-04-27', 'Yes', 0, 5, 0, 'No', 'Istanbul', 'Delivered'),
('ORD_113', 'Customer_83', '2024-04-23', '2024-05-03', '2024-05-03', 'Yes', 0, 10, 0, 'No', 'Samsun', 'Delivered'),
('ORD_114', 'Customer_18', '2024-04-24', '2024-04-26', '2024-04-29', 'No', 3, 5, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_115', 'Customer_116', '2024-04-25', '2024-04-27', '2024-05-01', 'No', 4, 6, 0, 'No', 'Izmir', 'Delivered'),
('ORD_116', 'Customer_146', '2024-04-26', '2024-05-05', '2024-05-05', 'Yes', 0, 9, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_117', 'Customer_107', '2024-04-27', '2024-05-01', '2024-05-05', 'No', 4, 8, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_118', 'Customer_24', '2024-04-28', '2024-05-08', '2024-05-08', 'Yes', 0, 10, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_119', 'Customer_1', '2024-04-29', '2024-05-02', '2024-05-04', 'No', 2, 5, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_12', 'Customer_38', '2024-01-12', '2024-01-18', '2024-01-18', 'Yes', 0, 6, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_120', 'Customer_99', '2024-04-30', '2024-05-04', '2024-05-04', 'Yes', 0, 4, 0, 'No', 'Izmir', 'Delivered'),
('ORD_121', 'Customer_33', '2024-05-01', '2024-05-05', '2024-05-06', 'No', 1, 5, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_122', 'Customer_112', '2024-05-02', '2024-05-09', '2024-05-09', 'Yes', 0, 7, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_123', 'Customer_8', '2024-05-03', '2024-05-09', '2024-05-11', 'No', 2, 8, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_124', 'Customer_84', '2024-05-04', '2024-05-14', '2024-05-14', 'Yes', 0, 10, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_125', 'Customer_165', '2024-05-05', '2024-05-09', '2024-05-09', 'Yes', 0, 4, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_126', 'Customer_117', '2024-05-06', '2024-05-20', '2024-05-20', 'Yes', 0, 14, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_127', 'Customer_35', '2024-05-07', '2024-05-09', '2024-05-13', 'No', 4, 6, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_128', 'Customer_21', '2024-05-08', '2024-05-19', '2024-05-19', 'Yes', 0, 11, 0, 'No', 'Ankara', 'Delivered'),
('ORD_129', 'Customer_23', '2024-05-09', '2024-05-11', '2024-05-17', 'No', 6, 8, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_13', 'Customer_131', '2024-01-13', '2024-01-11', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Erzurum', 'In Progress'),
('ORD_130', 'Customer_8', '2024-05-10', '2024-05-18', '2024-05-18', 'Yes', 0, 8, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_131', 'Customer_135', '2024-05-11', '2024-05-11', '2024-05-15', 'No', 4, 4, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_132', 'Customer_158', '2024-05-12', '2024-05-17', '2024-05-17', 'Yes', 0, 5, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_133', 'Customer_163', '2024-05-13', '2024-05-13', '2024-05-19', 'No', 6, 6, 0, 'No', 'Samsun', 'Delivered'),
('ORD_134', 'Customer_140', '2024-05-14', '2024-05-16', '2024-05-22', 'No', 6, 8, 0, 'No', 'Ankara', 'Delivered'),
('ORD_135', 'Customer_137', '2024-05-15', '2024-05-17', '2024-05-21', 'No', 4, 6, 0, 'No', 'Ankara', 'Delivered'),
('ORD_136', 'Customer_27', '2024-05-16', '2024-05-17', '2024-05-20', 'No', 3, 4, 0, 'No', 'Istanbul', 'Delivered'),
('ORD_137', 'Customer_44', '2024-05-17', '2024-05-21', '2024-05-21', 'Yes', 0, 4, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_138', 'Customer_30', '2024-05-18', '2024-05-30', '2024-06-02', 'No', 3, 15, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_139', 'Customer_66', '2024-05-19', '2024-05-20', '2024-05-26', 'No', 6, 7, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_14', 'Customer_1', '2024-01-14', '2024-01-18', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Samsun', 'In Progress'),
('ORD_140', 'Customer_21', '2024-05-20', '2024-05-22', '2024-05-24', 'No', 2, 4, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_141', 'Customer_138', '2024-05-21', '2024-05-29', '2024-05-29', 'Yes', 0, 8, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_142', 'Customer_5', '2024-05-22', '2024-06-02', '2024-06-06', 'No', 4, 15, 0, 'No', 'Ankara', 'Delivered'),
('ORD_143', 'Customer_105', '2024-05-23', '2024-05-28', '2024-05-28', 'Yes', 0, 5, 0, 'No', 'Izmir', 'Delivered'),
('ORD_144', 'Customer_96', '2024-05-24', '2024-06-01', '2024-06-01', 'Yes', 0, 8, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_145', 'Customer_85', '2024-05-25', '2024-05-30', '2024-05-30', 'Yes', 0, 5, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_146', 'Customer_12', '2024-05-26', '2024-05-29', '2024-06-01', 'No', 3, 6, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_147', 'Customer_14', '2024-05-27', '2024-06-02', '2024-06-02', 'Yes', 0, 6, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_148', 'Customer_103', '2024-05-28', '2024-06-03', '2024-06-03', 'Yes', 0, 6, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_149', 'Customer_48', '2024-05-29', '2024-06-02', '2024-06-02', 'Yes', 0, 4, 0, 'No', 'Izmir', 'Delivered'),
('ORD_15', 'Customer_9', '2024-01-15', '2024-01-19', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Izmir', 'In Progress'),
('ORD_150', 'Customer_132', '2024-05-30', '2024-05-31', '2024-06-06', 'No', 6, 7, 0, 'No', 'Ankara', 'Delivered'),
('ORD_151', 'Customer_53', '2024-05-31', '2024-06-05', '2024-06-05', 'Yes', 0, 5, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_152', 'Customer_69', '2024-06-01', '2024-06-13', '2024-06-14', 'No', 1, 13, 0, 'No', 'Samsun', 'Delivered'),
('ORD_153', 'Customer_8', '2024-06-02', '2024-06-04', '2024-06-06', 'No', 2, 4, 0, 'No', 'Adana', 'Delivered'),
('ORD_154', 'Customer_149', '2024-06-03', '2024-06-08', '2024-06-08', 'Yes', 0, 5, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_155', 'Customer_64', '2024-06-04', '2024-06-08', '2024-06-08', 'Yes', 0, 4, 0, 'No', 'Istanbul', 'Delivered'),
('ORD_156', 'Customer_133', '2024-06-05', '2024-06-10', '2024-06-10', 'Yes', 0, 5, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_157', 'Customer_90', '2024-06-06', '2024-06-10', '2024-06-12', 'No', 2, 6, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_158', 'Customer_7', '2024-06-07', '2024-06-09', '2024-06-13', 'No', 4, 6, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_159', 'Customer_122', '2024-06-08', '2024-06-08', '2024-06-11', 'No', 3, 3, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_16', 'Customer_20', '2024-01-16', '2024-01-24', '2024-01-24', 'Yes', 0, 8, 0, 'No', 'Ankara', 'Delivered'),
('ORD_160', 'Customer_87', '2024-06-09', '2024-06-14', '2024-06-14', 'Yes', 0, 5, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_161', 'Customer_39', '2024-06-10', '2024-06-18', '2024-06-18', 'Yes', 0, 8, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_162', 'Customer_59', '2024-06-11', '2024-06-04', '2024-06-14', 'No', 10, 3, 0, 'No', 'Izmir', 'Delivered'),
('ORD_163', 'Customer_100', '2024-06-12', '2024-06-14', '2024-06-17', 'No', 3, 5, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_164', 'Customer_81', '2024-06-13', '2024-06-14', '2024-06-18', 'No', 4, 5, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_165', 'Customer_7', '2024-06-14', '2024-06-25', '2024-06-27', 'No', 2, 13, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_166', 'Customer_13', '2024-06-15', '2024-06-22', '2024-06-22', 'Yes', 0, 7, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_167', 'Customer_20', '2024-06-16', '2024-06-12', '2024-06-22', 'No', 10, 6, 0, 'No', 'Adana', 'Delivered'),
('ORD_168', 'Customer_151', '2024-06-17', '2024-07-02', '2024-07-02', 'Yes', 0, 15, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_169', 'Customer_41', '2024-06-18', '2024-06-24', '2024-06-24', 'Yes', 0, 6, 0, 'No', 'Adana', 'Delivered'),
('ORD_17', 'Customer_70', '2024-01-17', '2024-01-20', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Gaziantep', 'In Progress'),
('ORD_170', 'Customer_75', '2024-06-19', '2024-06-21', '2024-06-25', 'No', 4, 6, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_171', 'Customer_57', '2024-06-20', '2024-06-24', '2024-06-26', 'No', 2, 6, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_172', 'Customer_93', '2024-06-21', '2024-06-20', '2024-06-26', 'No', 6, 5, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_173', 'Customer_13', '2024-06-22', '2024-06-24', '2024-06-27', 'No', 3, 5, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_174', 'Customer_111', '2024-06-23', '2024-06-22', '2024-06-28', 'No', 6, 5, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_175', 'Customer_128', '2024-06-24', '2024-06-30', '2024-07-02', 'No', 2, 8, 0, 'No', 'Istanbul', 'Delivered'),
('ORD_176', 'Customer_94', '2024-06-25', '2024-07-02', '2024-07-02', 'Yes', 0, 7, 0, 'No', 'Samsun', 'Delivered'),
('ORD_177', 'Customer_89', '2024-06-26', '2024-07-01', '2024-07-03', 'No', 2, 7, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_178', 'Customer_68', '2024-06-27', '2024-07-06', '2024-07-06', 'Yes', 0, 9, 0, 'No', 'Ankara', 'Delivered'),
('ORD_179', 'Customer_5', '2024-06-28', '2024-07-04', '2024-07-04', 'Yes', 0, 6, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_18', 'Customer_6', '2024-01-18', '2024-01-26', '2024-01-26', 'Yes', 0, 8, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_180', 'Customer_71', '2024-06-29', '2024-07-07', '2024-07-07', 'Yes', 0, 8, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_181', 'Customer_80', '2024-06-30', '2024-07-08', '2024-07-08', 'Yes', 0, 8, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_182', 'Customer_109', '2024-07-01', '2024-07-13', '2024-07-13', 'Yes', 0, 12, 0, 'No', 'Samsun', 'Delivered'),
('ORD_183', 'Customer_164', '2024-07-02', '2024-07-04', '2024-07-07', 'No', 3, 5, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_184', 'Customer_49', '2024-07-03', '2024-07-10', '2024-07-10', 'Yes', 0, 7, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_185', 'Customer_55', '2024-07-04', '2024-07-09', '2024-07-09', 'Yes', 0, 5, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_186', 'Customer_125', '2024-07-05', '2024-07-06', '2024-07-09', 'No', 3, 4, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_187', 'Customer_19', '2024-07-06', '2024-07-16', '2024-07-16', 'Yes', 0, 10, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_188', 'Customer_77', '2024-07-07', '2024-07-13', '2024-07-15', 'No', 2, 8, 0, 'No', 'Ankara', 'Delivered'),
('ORD_189', 'Customer_157', '2024-07-08', '2024-07-12', '2024-07-12', 'Yes', 0, 4, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_19', 'Customer_4', '2024-01-19', '2024-01-26', '2024-01-26', 'Yes', 0, 7, 0, 'No', 'Izmir', 'Delivered'),
('ORD_190', 'Customer_14', '2024-07-09', '2024-07-15', '2024-07-16', 'No', 1, 7, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_191', 'Customer_22', '2024-07-10', '2024-07-13', '2024-07-17', 'No', 4, 7, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_192', 'Customer_36', '2024-07-11', '2024-07-19', '2024-07-19', 'Yes', 0, 8, 0, 'No', 'Izmir', 'Delivered'),
('ORD_193', 'Customer_147', '2024-07-12', '2024-07-19', '2024-07-19', 'Yes', 0, 7, 0, 'No', 'Istanbul', 'Delivered'),
('ORD_194', 'Customer_139', '2024-07-13', '2024-07-26', '2024-07-26', 'Yes', 0, 13, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_195', 'Customer_18', '2024-07-14', '2024-07-20', '2024-07-20', 'Yes', 0, 6, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_196', 'Customer_61', '2024-07-15', '2024-07-21', '2024-07-21', 'Yes', 0, 6, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_197', 'Customer_7', '2024-07-16', '2024-07-22', '2024-07-22', 'Yes', 0, 6, 0, 'No', 'Izmir', 'Delivered'),
('ORD_198', 'Customer_10', '2024-07-17', '2024-07-24', '2024-07-24', 'Yes', 0, 7, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_199', 'Customer_10', '2024-07-18', '2024-07-20', '2024-07-24', 'No', 4, 6, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_2', 'Customer_47', '2024-01-02', '2024-01-04', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'In Progress'),
('ORD_20', 'Customer_40', '2024-01-20', '2024-01-27', '2024-01-27', 'Yes', 0, 7, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_200', 'Customer_3', '2024-07-19', '2024-08-02', '2024-08-02', 'Yes', 0, 14, 0, 'No', 'Adana', 'Delivered'),
('ORD_21', 'Customer_15', '2024-01-21', '2024-01-27', '2024-01-27', 'Yes', 0, 6, 0, 'Yes', 'Izmir', 'Delivered'),
('ORD_22', 'Customer_153', '2024-01-22', '2024-01-27', '2024-01-27', 'Yes', 0, 5, 0, 'No', 'Ankara', 'Delivered'),
('ORD_23', 'Customer_88', '2024-01-23', '2024-02-06', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Samsun', 'In Progress'),
('ORD_24', 'Customer_46', '2024-01-24', '2024-01-26', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Ankara', 'In Progress'),
('ORD_25', 'Customer_43', '2024-01-25', '2024-02-01', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Gaziantep', 'In Progress'),
('ORD_26', 'Customer_130', '2024-01-26', '2024-01-30', '2024-01-30', 'Yes', 0, 4, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_27', 'Customer_15', '2024-01-27', '2024-02-08', '2024-02-08', 'Yes', 0, 12, 0, 'No', 'Samsun', 'Delivered'),
('ORD_28', 'Customer_104', '2024-01-28', '2024-02-04', '2024-02-04', 'Yes', 0, 7, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_29', 'Customer_26', '2024-01-29', '2024-02-01', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Adana', 'In Progress'),
('ORD_3', 'Customer_124', '2024-01-03', '2024-01-08', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Izmir', 'In Progress'),
('ORD_30', 'Customer_2', '2024-01-30', '2024-02-03', '2024-02-03', 'Yes', 0, 4, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_31', 'Customer_115', '2024-01-31', '2024-02-05', '2024-02-05', 'Yes', 0, 5, 0, 'No', 'Istanbul', 'Delivered'),
('ORD_32', 'Customer_9', '2024-02-01', '2024-01-30', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Ankara', 'In Progress'),
('ORD_33', 'Customer_78', '2024-02-02', '2024-02-06', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Izmir', 'In Progress'),
('ORD_34', 'Customer_155', '2024-02-03', '2024-02-11', '2024-02-11', 'Yes', 0, 8, 0, 'No', 'Ankara', 'Delivered'),
('ORD_35', 'Customer_161', '2024-02-04', '2024-02-05', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'In Progress'),
('ORD_36', 'Customer_152', '2024-02-05', '2024-02-13', '2024-02-13', 'Yes', 0, 8, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_37', 'Customer_6', '2024-02-06', '2024-02-11', '2024-02-11', 'Yes', 0, 5, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_38', 'Customer_23', '2024-02-07', '2024-02-07', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Izmir', 'In Progress'),
('ORD_39', 'Customer_127', '2024-02-08', '2024-02-18', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Ankara', 'In Progress'),
('ORD_4', 'Customer_150', '2024-01-04', '2024-01-11', '2024-01-11', 'Yes', 0, 7, 0, 'No', 'Adana', 'Delivered'),
('ORD_40', 'Customer_74', '2024-02-09', '2024-02-14', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'In Progress'),
('ORD_41', 'Customer_50', '2024-02-10', '2024-02-18', '2024-02-18', 'Yes', 0, 8, 0, 'No', 'Samsun', 'Delivered'),
('ORD_42', 'Customer_148', '2024-02-11', '2024-02-17', '2024-02-17', 'Yes', 0, 6, 0, 'No', 'Ankara', 'Delivered'),
('ORD_43', 'Customer_134', '2024-02-12', '2024-02-19', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Samsun', 'In Progress'),
('ORD_44', 'Customer_65', '2024-02-13', '2024-02-17', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Adana', 'In Progress'),
('ORD_45', 'Customer_22', '2024-02-14', '2024-02-19', '2024-02-19', 'Yes', 0, 5, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_46', 'Customer_154', '2024-02-15', '2024-02-21', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Adana', 'In Progress'),
('ORD_47', 'Customer_9', '2024-02-16', '2024-02-23', '2024-02-23', 'Yes', 0, 7, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_48', 'Customer_91', '2024-02-17', '2024-02-16', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Ankara', 'In Progress'),
('ORD_49', 'Customer_76', '2024-02-18', '2024-02-23', '2024-02-23', 'Yes', 0, 5, 0, 'No', 'Samsun', 'Delivered'),
('ORD_5', 'Customer_110', '2024-01-05', '2024-01-12', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Istanbul', 'In Progress'),
('ORD_50', 'Customer_3', '2024-02-19', '2024-02-22', '2024-02-22', 'Yes', 0, 3, 0, 'No', 'Ankara', 'Delivered'),
('ORD_51', 'Customer_95', '2024-02-20', '2024-02-23', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'In Progress'),
('ORD_52', 'Customer_126', '2024-02-21', '2024-02-27', '2024-02-27', 'Yes', 0, 6, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_53', 'Customer_142', '2024-02-22', '2024-02-23', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Gaziantep', 'In Progress'),
('ORD_54', 'Customer_25', '2024-02-23', '2024-02-29', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Ankara', 'In Progress'),
('ORD_55', 'Customer_5', '2024-02-24', '2024-03-02', '2024-03-02', 'Yes', 0, 7, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_56', 'Customer_159', '2024-02-25', '2024-03-03', '2024-03-03', 'Yes', 0, 7, 0, 'No', 'Ankara', 'Delivered'),
('ORD_57', 'Customer_60', '2024-02-26', '2024-03-03', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Samsun', 'In Progress'),
('ORD_58', 'Customer_113', '2024-02-27', '2024-03-05', '2024-03-05', 'Yes', 0, 7, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_59', 'Customer_144', '2024-02-28', '2024-03-03', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'In Progress'),
('ORD_6', 'Customer_98', '2024-01-06', '2024-01-13', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'In Progress'),
('ORD_60', 'Customer_54', '2024-03-01', '2024-03-06', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Gaziantep', 'In Progress'),
('ORD_61', 'Customer_2', '2024-03-02', '2024-03-06', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'In Progress'),
('ORD_62', 'Customer_73', '2024-03-03', '2024-03-06', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Adana', 'In Progress'),
('ORD_63', 'Customer_4', '2024-03-04', '2024-03-10', '2024-03-10', 'Yes', 0, 6, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_64', 'Customer_141', '2024-03-05', '2024-03-16', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Istanbul', 'In Progress'),
('ORD_65', 'Customer_51', '2024-03-06', '2024-03-10', '2024-03-10', 'Yes', 0, 4, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_66', 'Customer_67', '2024-03-07', '2024-03-22', '2024-03-22', 'Yes', 0, 15, 0, 'No', 'Samsun', 'Delivered'),
('ORD_67', 'Customer_63', '2024-03-08', '2024-03-13', '2024-03-13', 'Yes', 0, 5, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_68', 'Customer_31', '2024-03-09', '2024-03-14', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Izmir', 'Cancelled'),
('ORD_69', 'Customer_24', '2024-03-10', '2024-03-16', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Gaziantep', 'Cancelled'),
('ORD_7', 'Customer_82', '2024-01-07', '2024-01-14', '2024-01-14', 'Yes', 0, 7, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_70', 'Customer_16', '2024-03-11', '2024-03-18', '2024-03-18', 'Yes', 0, 7, 0, 'Yes', 'Istanbul', 'Delivered'),
('ORD_71', 'Customer_106', '2024-03-12', '2024-03-16', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Adana', 'Cancelled'),
('ORD_72', 'Customer_17', '2024-03-13', '2024-03-25', '2024-03-25', 'Yes', 0, 12, 0, 'Yes', 'Ankara', 'Delivered'),
('ORD_73', 'Customer_2', '2024-03-14', '2024-03-18', '2024-03-18', 'Yes', 0, 4, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_74', 'Customer_79', '2024-03-15', '2024-03-20', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Izmir', 'Cancelled'),
('ORD_75', 'Customer_120', '2024-03-16', '2024-03-20', '2024-03-20', 'Yes', 0, 4, 0, 'No', 'Ankara', 'Delivered'),
('ORD_76', 'Customer_143', '2024-03-17', '2024-03-27', '2024-03-27', 'Yes', 0, 10, 0, 'No', 'Izmir', 'Delivered'),
('ORD_77', 'Customer_25', '2024-03-18', '2024-03-28', '2024-03-28', 'Yes', 0, 10, 0, 'No', 'Erzurum', 'Delivered'),
('ORD_78', 'Customer_4', '2024-03-19', '2024-03-21', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'Cancelled'),
('ORD_79', 'Customer_118', '2024-03-20', '2024-03-24', '2024-03-24', 'Yes', 0, 4, 0, 'Yes', 'Adana', 'Delivered'),
('ORD_8', 'Customer_34', '2024-01-08', '2024-01-13', '2024-01-13', 'Yes', 0, 5, 0, 'No', 'Izmir', 'Delivered'),
('ORD_80', 'Customer_62', '2024-03-21', '2024-03-25', '2024-03-25', 'Yes', 0, 4, 0, 'No', 'Ankara', 'Delivered'),
('ORD_81', 'Customer_37', '2024-03-22', '2024-03-25', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Erzurum', 'Cancelled'),
('ORD_82', 'Customer_136', '2024-03-23', '2024-03-28', '2024-03-28', 'Yes', 0, 5, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_83', 'Customer_160', '2024-03-24', '2024-03-29', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Samsun', 'Cancelled'),
('ORD_84', 'Customer_123', '2024-03-25', '2024-03-19', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Istanbul', 'Cancelled'),
('ORD_85', 'Customer_162', '2024-03-26', '2024-04-03', '2024-04-03', 'Yes', 0, 8, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_86', 'Customer_86', '2024-03-27', '2024-03-29', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Erzurum', 'Cancelled'),
('ORD_87', 'Customer_6', '2024-03-28', '2024-04-02', '2024-04-02', 'Yes', 0, 5, 0, 'No', 'Istanbul', 'Delivered'),
('ORD_88', 'Customer_17', '2024-03-29', '2024-03-30', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Gaziantep', 'Cancelled'),
('ORD_89', 'Customer_92', '2024-03-30', '2024-04-06', '2024-04-06', 'Yes', 0, 7, 0, 'No', 'Gaziantep', 'Delivered'),
('ORD_9', 'Customer_108', '2024-01-09', '2024-01-21', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Samsun', 'In Progress'),
('ORD_90', 'Customer_19', '2024-03-31', '2024-03-31', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Gaziantep', 'Cancelled'),
('ORD_91', 'Customer_72', '2024-04-01', '2024-04-06', '2024-04-06', 'Yes', 0, 5, 0, 'Yes', 'Gaziantep', 'Delivered'),
('ORD_92', 'Customer_28', '2024-04-02', '2024-04-10', '2024-04-10', 'Yes', 0, 8, 0, 'Yes', 'Samsun', 'Delivered'),
('ORD_93', 'Customer_42', '2024-04-03', '2024-04-02', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Izmir', 'Cancelled'),
('ORD_94', 'Customer_45', '2024-04-04', '2024-04-12', '2024-04-12', 'Yes', 0, 8, 0, 'No', 'Adana', 'Delivered'),
('ORD_95', 'Customer_114', '2024-04-05', '2024-04-12', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Erzurum', 'Cancelled'),
('ORD_96', 'Customer_29', '2024-04-06', '2024-04-10', '2024-04-10', 'Yes', 0, 4, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_97', 'Customer_119', '2024-04-07', '2024-04-11', '2024-04-11', 'Yes', 0, 4, 0, 'Yes', 'Erzurum', 'Delivered'),
('ORD_98', 'Customer_52', '2024-04-08', '2024-04-09', NULL, 'Unknown', NULL, NULL, 0, 'Yes', 'Samsun', 'Cancelled'),
('ORD_99', 'Customer_121', '2024-04-09', '2024-04-14', NULL, 'Unknown', NULL, NULL, 0, 'No', 'Ankara', 'Cancelled');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `delivery_oriented_approach`
--
ALTER TABLE `delivery_oriented_approach`
  ADD PRIMARY KEY (`Order_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
