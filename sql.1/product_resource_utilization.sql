-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 12 Oca 2025, 21:41:54
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
-- Tablo için tablo yapısı `product_resource_utilization`
--

CREATE TABLE `product_resource_utilization` (
  `Product ID` varchar(9) NOT NULL,
  `Capacity Utilization` varchar(23) DEFAULT NULL,
  `Eco Materials Use` varchar(19) DEFAULT NULL,
  `Rare Products Reduction` varchar(25) DEFAULT NULL,
  `Waste Reuse` varchar(14) DEFAULT NULL,
  `Recyclable Packaging Use` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `product_resource_utilization`
--

INSERT INTO `product_resource_utilization` (`Product ID`, `Capacity Utilization`, `Eco Materials Use`, `Rare Products Reduction`, `Waste Reuse`, `Recyclable Packaging Use`) VALUES
('PRD0001', '65.08', '34.5', '45.7', '67.4', '43.05'),
('PRD0002', '83.8', '70.4', '44.8', '30.6', '46.6'),
('PRD0003', '97.8', '54.8', '26.7', '38.4', '44.8'),
('PRD0004', '84.1', '51.9', '22.1', '71.1', '62.8'),
('PRD0005', '74.5', '77.9', '34.1', '66', '70.4'),
('PRD0006', '56.2', '33.2', '13.7', '65.06', '79.1'),
('PRD0007', '52.8', '70.3', '13.1', '55.9', '42.5'),
('PRD0008', '86.8', '65.9', '18.9', '58.4', '72.8'),
('PRD0009', '84.9', '22.5', '25', '41.9', '81'),
('PRD0010', '80.7', '24.5', '13', '58.2', '68.6');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `product_resource_utilization`
--
ALTER TABLE `product_resource_utilization`
  ADD PRIMARY KEY (`Product ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
