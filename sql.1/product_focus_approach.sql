-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 12 Oca 2025, 21:41:46
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
-- Tablo için tablo yapısı `product_focus_approach`
--

CREATE TABLE `product_focus_approach` (
  `Product_ID` int(11) NOT NULL,
  `Product_Group` varchar(50) DEFAULT NULL,
  `Total_Product` int(11) DEFAULT NULL,
  `Total_Waste` int(11) DEFAULT NULL,
  `Sales_Estimation` int(11) DEFAULT NULL,
  `Actual_Sales` int(11) DEFAULT NULL,
  `Second_Quality_Count` int(11) DEFAULT NULL,
  `Produced_Meter` int(11) DEFAULT NULL,
  `Planned_Meter` int(11) DEFAULT NULL,
  `Waste_Rate` decimal(5,2) DEFAULT NULL,
  `Estimation_Accuracy` decimal(5,2) DEFAULT NULL,
  `Meter_Compatibility` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `product_focus_approach`
--

INSERT INTO `product_focus_approach` (`Product_ID`, `Product_Group`, `Total_Product`, `Total_Waste`, `Sales_Estimation`, `Actual_Sales`, `Second_Quality_Count`, `Produced_Meter`, `Planned_Meter`, `Waste_Rate`, `Estimation_Accuracy`, `Meter_Compatibility`) VALUES
(1, 'Group A', 900, 70, 850, 769, 13, 700, 1000, 7.78, 90.47, 70.00),
(2, 'Group B', 800, 35, 1400, 1350, 39, 1480, 1500, 4.38, 96.43, 98.67),
(3, 'Group C', 1200, 40, 1100, 1120, 12, 1190, 1200, 3.33, 101.82, 99.17),
(4, 'Group D', 800, 30, 750, 740, 8, 790, 800, 3.75, 98.67, 98.75),
(5, 'Group E', 2000, 100, 1900, 1850, 20, 1980, 2000, 5.00, 97.37, 99.00),
(6, 'Group F', 1700, 80, 1600, 1580, 18, 1680, 1700, 4.71, 98.75, 98.82),
(7, 'Group G', 900, 45, 850, 830, 9, 890, 900, 5.00, 97.65, 98.89),
(8, 'Group H', 1300, 70, 1250, 1230, 14, 1280, 1500, 5.38, 98.40, 85.33),
(9, 'Group I', 1200, 65, 1350, 1335, 16, 1385, 1500, 5.42, 98.89, 92.33),
(10, 'Group J', 1100, 55, 1050, 1035, 11, 1080, 1100, 5.00, 98.57, 98.18);

--
-- Tetikleyiciler `product_focus_approach`
--
DELIMITER $$
CREATE TRIGGER `update_estimation_accuracy` BEFORE UPDATE ON `product_focus_approach` FOR EACH ROW BEGIN
    -- Estimation Accuracy hesapla
    IF NEW.Sales_Estimation > 0 AND NEW.Actual_Sales >= 0 THEN
        SET NEW.Estimation_Accuracy = (NEW.Actual_Sales / NEW.Sales_Estimation) * 100;
    ELSE
        SET NEW.Estimation_Accuracy = 0;
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_meter_compatibility` BEFORE UPDATE ON `product_focus_approach` FOR EACH ROW BEGIN
    -- Meter Compatibility hesapla
    IF NEW.Planned_Meter > 0 AND NEW.Produced_Meter >= 0 THEN
        SET NEW.Meter_Compatibility = (NEW.Produced_Meter / NEW.Planned_Meter) * 100;
    ELSE
        SET NEW.Meter_Compatibility = 0;
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_waste_rate` BEFORE UPDATE ON `product_focus_approach` FOR EACH ROW BEGIN
    -- Waste Rate hesapla
    IF NEW.Total_Product > 0 AND NEW.Total_Waste >= 0 THEN
        SET NEW.Waste_Rate = (NEW.Total_Waste / NEW.Total_Product) * 100;
    ELSE
        SET NEW.Waste_Rate = 0;
    END IF;
END
$$
DELIMITER ;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `product_focus_approach`
--
ALTER TABLE `product_focus_approach`
  ADD PRIMARY KEY (`Product_ID`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `product_focus_approach`
--
ALTER TABLE `product_focus_approach`
  MODIFY `Product_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
