-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 12 Oca 2025, 21:40:42
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
-- Tablo için tablo yapısı `company_attributes`
--

CREATE TABLE `company_attributes` (
  `Year` varchar(4) NOT NULL,
  `previous_year_customers` varchar(255) DEFAULT NULL,
  `current_year_customers` varchar(255) DEFAULT NULL,
  `integrated_projects` varchar(255) DEFAULT NULL,
  `total_sustainability_projects` varchar(255) DEFAULT NULL,
  `investment_in_sustainability` decimal(10,2) DEFAULT NULL,
  `returns_from_investment` decimal(10,2) DEFAULT NULL,
  `rd_employees` int(11) DEFAULT NULL,
  `rd_budget` decimal(10,2) DEFAULT NULL,
  `rd_accepted_projects` int(10) DEFAULT NULL,
  `on_time_and_successful_orders` int(11) DEFAULT NULL,
  `total_orders` int(11) DEFAULT NULL,
  `retention_rate` float(5,2) DEFAULT NULL,
  `sustainability_integration_rate` decimal(5,1) DEFAULT NULL,
  `investment_recovery` decimal(5,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `company_attributes`
--

INSERT INTO `company_attributes` (`Year`, `previous_year_customers`, `current_year_customers`, `integrated_projects`, `total_sustainability_projects`, `investment_in_sustainability`, `returns_from_investment`, `rd_employees`, `rd_budget`, `rd_accepted_projects`, `on_time_and_successful_orders`, `total_orders`, `retention_rate`, `sustainability_integration_rate`, `investment_recovery`) VALUES
('2014', '600', '750', '17', '20', 27688.07, 56016.45, 30, 150.57, 10, 598, 634, 125.00, 85.0, 125.6),
('2015', '1148', '1185', '13', '16', 32531.53, 38156.05, 35, 180.43, 8, 666, 700, 103.22, 81.3, 117.3),
('2016', '1070', '1136', '19', '19', 25416.66, 35637.83, 40, 220.76, 8, 784, 827, 106.17, 100.0, 140.2),
('2017', '906', '955', '13', '15', 10638.65, 13511.75, 37, 250.65, 25, 728, 767, 105.41, 86.7, 127.0),
('2018', '871', '924', '20', '24', 19235.75, 22759.29, 45, 310.29, 15, 896, 917, 106.08, 83.3, 118.3),
('2019', '988', '1068', '18', '20', 19641.02, 26065.21, 50, 360.98, 14, 506, 532, 108.10, 90.0, 132.7),
('2020', '820', '1000', '19', '23', 37330.54, 41531.17, 55, 400.12, 16, 513, 547, 121.95, 82.6, 111.3),
('2021', '902', '904', '15', '15', 34399.87, 49429.65, 60, 450.69, 24, 906, 906, 100.22, 100.0, 143.7),
('2022', '921', '872', '23', '24', 43327.80, 55455.32, 55, 500.84, 19, 527, 561, 94.68, 95.8, 128.0),
('2023', '900', '950', '20', '30', 40090.05, 50563.08, 50, 560.00, 20, 700, 800, 105.56, 66.7, 98.8);

--
-- Tetikleyiciler `company_attributes`
--
DELIMITER $$
CREATE TRIGGER `update_retention_rate` BEFORE UPDATE ON `company_attributes` FOR EACH ROW BEGIN
    -- Retention Rate hesapla
    IF NEW.previous_year_customers > 0 THEN
        SET NEW.retention_rate = (NEW.current_year_customers / NEW.previous_year_customers) * 100;
    ELSE
        SET NEW.retention_rate = 0;
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_sustainability_integration_rate` BEFORE UPDATE ON `company_attributes` FOR EACH ROW BEGIN
    -- Entegrasyon oranını hesapla
    IF NEW.total_sustainability_projects > 0 THEN
        SET NEW.sustainability_integration_rate = (NEW.integrated_projects / NEW.total_sustainability_projects) * 100;
    ELSE
        SET NEW.sustainability_integration_rate = 0;
    END IF;
END
$$
DELIMITER ;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `company_attributes`
--
ALTER TABLE `company_attributes`
  ADD PRIMARY KEY (`Year`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
