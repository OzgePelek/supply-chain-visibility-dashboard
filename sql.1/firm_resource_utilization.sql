-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 12 Oca 2025, 21:41:34
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
-- Tablo için tablo yapısı `firm_resource_utilization`
--

CREATE TABLE `firm_resource_utilization` (
  `Year` varchar(4) NOT NULL,
  `Renewable_Energy_Use` float DEFAULT NULL,
  `Water_Consumption` float DEFAULT NULL,
  `GHG_Emissions_Reduction` float DEFAULT NULL,
  `Waste_Reduction_Efforts` int(11) DEFAULT NULL,
  `EMS_Existence` varchar(10) DEFAULT NULL,
  `Eco_Innovations_Count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `firm_resource_utilization`
--

INSERT INTO `firm_resource_utilization` (`Year`, `Renewable_Energy_Use`, `Water_Consumption`, `GHG_Emissions_Reduction`, `Waste_Reduction_Efforts`, `EMS_Existence`, `Eco_Innovations_Count`) VALUES
('2014', 22, 46512, 197, 6, 'No', 1),
('2015', 10.2, 43507, 165, 8, 'No', 5),
('2016', 22.6, 36260, 137, 5, 'No', 2),
('2017', 59.6, 23570, 330, 15, 'Yes', 11),
('2018', 79.5, 28688, 386, 13, 'Yes', 10),
('2019', 58.7, 20084, 238, 17, 'Yes', 12),
('2020', 79.1, 20785, 320, 13, 'Yes', 12),
('2021', 60, 26799, 348, 11, 'Yes', 8),
('2022', 72.3, 28912, 355, 16, 'Yes', 5),
('2023', 70, 29963, 345, 20, 'Yes', 12),
('2024', 78, 4563, 344, 45, 'No', 7);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `firm_resource_utilization`
--
ALTER TABLE `firm_resource_utilization`
  ADD PRIMARY KEY (`Year`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
