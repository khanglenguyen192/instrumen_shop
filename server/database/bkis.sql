CREATE DATABASE IF NOT EXISTS DB_BKIS;
use DB_BKIS;
SET @@auto_increment_increment = 1;

SET SQL_MODE= "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
-- SET SQL_SAFE_UPDATES = 0;

SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `admin` (
    `username` varchar(128) not null primary key,
    `password` varchar(128) not null,
    `full_name` text not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `admin` (`username`, `password`, `full_name`) VALUES
('admin', 'admin', 'Mai Thanh Phong');

CREATE TABLE IF NOT EXISTS `feedback`(
    `productID` int(11) not null,
	`feedbackID` int(11) not null,
    `customer_name` text not null,
    `customer_email` text not null,
    `detail` text not null,
    `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `rating` int,
    constraint primary key (`feedbackID`, `productID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `feedback` (`productID`, `feedbackID`, `customer_name`, `customer_email`, `detail`, `time`) VALUES
(1, 1, 'Nguyen Van A', 'nva@gmail.com', 'Đàn có âm thanh tốt', '2021-11-15 7:44:14'),
(1, 2, 'Le Van B', 'lvb@gmail.com', 'Đàn đẹp', '2021-10-15 7:44:14');
ALTER TABLE `feedback` MODIFY `feedbackID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 3;

CREATE TABLE IF NOT EXISTS `category` (
	`categoryID` int(11) not null primary key,
    `categoryName` text not null,
    `categoryImg` text not null,
    `titleImg` text not null
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `category` (`categoryID`, `categoryName`, `categoryImg`, `titleImg`) VALUES
('1', 'Đàn piano', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/027-piano.svg', 'https://www.cunninghampiano.com/wp-content/uploads/2018/12/cunninghampiano-piano-digital-piano-silent-piano-banner-img.jpg'),
('2', 'Đàn organ', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/034-organ.svg', 'https://i.pinimg.com/564x/11/9e/04/119e041c543fedfc5bf17451d2db27e6.jpg'),
('3', 'Đàn guitar', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/015-electric-guitar.svg', 'https://thumbs.dreamstime.com/b/retro-electric-guitar-banner-image-wood-background-copy-space-154929991.jpg'),
('4', 'Đàn ukulele', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/022-guitar.svg', 'https://cdn.shopify.com/s/files/1/0550/6737/collections/collection_banner_opt2_1800x.jpg?v=1616633858'),
('5', 'Đàn violin', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/018-violin.svg', 'https://previews.123rf.com/images/rclassenlayouts/rclassenlayouts1801/rclassenlayouts180100009/93198865-old-violin-and-notes-banner-size.jpg'),
('6', 'Trống', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/038-drums.svg', 'https://www.jazz.qld.edu.au/wp-content/uploads/2017/10/jmi-how-to-apply-banner.jpg'),
('7', 'Amplifier', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/008-amplifier.svg', 'https://sonodyneimage.s3.ap-south-1.amazonaws.com/banner/146_99_SLA-Series-banner.jpg'),
('8', 'Âm thanh', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/019-speaker.svg', 'https://topstore.vn/uploads/banner_alpha_&_akg_1586755598.webp'),
('9', 'Nhạc cụ hơi', 'https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/016-flute.svg', 'https://cdn.shopify.com/s/files/1/1474/4396/collections/flute_banner.jpg?v=1477012561');

CREATE TABLE IF NOT EXISTS `order`(
    `orderID` int not null primary key,
    `customerName` varchar(255) not null,
    `customerPhone` text not null,
    `customerEmail` text default null,
    `customerAddress` text not null,
    `detail` text default null,
    `paymentMethod` text not null,
    `status` text not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `order` (`orderID`, `customerName`, `customerPhone`, `customerEmail`, `customerAddress`, `detail`, `paymentMethod`, `status`) VALUES
(1, 'Nguyễn Văn A', '0987654321', 'nva@gmail.com', '268 Lý Thường Kiệt, phường 14, quận 10, Thành phố Hồ Chí Minh', '', 'Tiền mặt', 'đã nhận');
ALTER TABLE `order` MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

CREATE TABLE IF NOT EXISTS `order_item`(
	`orderID` int(11) not null,
    `productID` int(11) not null,
    `quantity` int(11) not null,
    constraint primary key (`orderID`, `productID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `order_item` (`orderID`, `productID`, `quantity`) VALUES
(1, 1, '1');


CREATE TABLE IF NOT EXISTS `product` (
	`id`int(11) not null primary key auto_increment,
    `name` text not null,
    `img` text not null,
    `origin` text,
    `brand` text not null,
    `price` bigint not null,
    `style` text,
    `category` int(11) not null,
    `material` text,
    `size` text,
    `weight` float,
    `accessories` text,
    `insurance` text not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `product` (`id`, `name`, `img`, `origin`, `brand`, `price`, `style`, `category`, `material`, `size`, `weight`, `accessories`, `insurance`) VALUES
(1, 'Taylor GTE-ASH', 'https://vietthuongshop.vn/image/cache/catalog/taylor-Gte-Ash-400x400.jpg', 'USA', 'Taylor', '45470000', 'Dáng D', '3', 'gỗ', 'D', '2', 'capo', '12 tháng');

ALTER TABLE `product` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

ALTER TABLE `product` ADD CONSTRAINT `category` FOREIGN KEY (`category`) REFERENCES `category`(`categoryID`);

ALTER TABLE `feedback` ADD CONSTRAINT `in` FOREIGN KEY (`productID`) REFERENCES `product`(`id`);

ALTER TABLE `order_item` ADD CONSTRAINT `has` FOREIGN KEY (`productID`) REFERENCES `product`(`id`);

ALTER TABLE `order_item` ADD CONSTRAINT `orderID` FOREIGN KEY (`orderID`) REFERENCES `order`(`orderID`);
