CREATE DATABASE IF NOT EXISTS DB_BKIS;

SET SQL_MODE= "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `admin` (
    `username` varchar(255) not null primary key,
    `password` varchar(255) not null,
    `full_name` varchar(255) not null,
)

INSERT INTO `admin` (`username`, `password`, `fullname`) VALUES
('admin', 'admin', 'Mai Thanh Phong');