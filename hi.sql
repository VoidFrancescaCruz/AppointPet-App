-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2022 at 09:00 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hi`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlog`
--

CREATE TABLE `adminlog` (
  `id` int(11) NOT NULL,
  `adminUsername` varchar(255) DEFAULT NULL,
  `adminPassword` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminlog`
--

INSERT INTO `adminlog` (`id`, `adminUsername`, `adminPassword`) VALUES
(1, 'cesca@admin', 'a5e911152d3f27e4ac96bcecdba33d1a909ac89a');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `firstName` varchar(40) DEFAULT NULL,
  `lastName` varchar(40) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `phoneNumber` bigint(20) DEFAULT NULL,
  `homeAddress` varchar(100) DEFAULT NULL,
  `petName` varchar(40) DEFAULT NULL,
  `petGender` varchar(40) DEFAULT NULL,
  `petBirthdate` date DEFAULT NULL,
  `petBreed` varchar(40) DEFAULT NULL,
  `petType` varchar(40) DEFAULT NULL,
  `month` varchar(40) DEFAULT NULL,
  `status` varchar(40) DEFAULT NULL,
  `services` varchar(40) DEFAULT NULL,
  `vetsTeam` varchar(40) DEFAULT NULL,
  `schedDate` date DEFAULT NULL,
  `schedTime` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`id`, `firstName`, `lastName`, `email`, `phoneNumber`, `homeAddress`, `petName`, `petGender`, `petBirthdate`, `petBreed`, `petType`, `month`, `status`, `services`, `vetsTeam`, `schedDate`, `schedTime`) VALUES
(1, 'arlene', 'canlas', 'arlene@canlas', 1234567891, 'cute', 'daisy', 'female', '2022-02-17', 'shih tzu', 'dog', '02', 'DONE', 'Pharmacy', 'Dr. Dela Cruz Team 1', '2022-02-24', '15:00'),
(2, 'daisy', 'valentino', 'daisy@dog', 22222222222, 'dito', 'choco', 'male', '2021-07-08', 'shih tzu', 'dog', '03', 'DONE', 'PetGrooming', 'Dr. Dela Cruz Team 2', '2022-03-18', '13:00'),
(3, 'CHe', 'CHe', 'hello@123', 123456789, 'dito sa utak mo', 'hello', 'male', '2022-10-10', 'dog', 'dog', '10', NULL, 'Vaccine', 'Dr. Dela Cruz Team 2', '2022-10-10', '13:00'),
(4, '1', '2', 'arlene@canlas', 123456789, '3', '4', '5', '2022-10-10', '6', '7', '01', NULL, 'Vaccine', 'Dr. Dela Cruz Team 2', '1970-01-01', '15:00'),
(6, 'Arlene', 'canlas', 'arlene@canlas', 1234567891, 'none', 'pakkun', 'male', '2021-06-23', 'beagle', 'dog', '02', 'APPROVED', 'Dentistry', 'Dr. Dela Cruz Team 3', '2022-02-23', '17:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'Cesca', 'Cruz', 'cesca@email.com', '8cb2237d0679ca88db6464eac60da96345513964'),
(2, 'Chelsea', 'Garcia', 'che@email.com', '14f7fd49dc34531d7fb3e90644f2a9d3e614120d'),
(3, 'Daisy', 'Valentino', 'daisy@dog', '5935b7f167d2832a4d47b17aa8a35f67b1c0d952'),
(4, 'Pakkun', 'Valentino', 'pakkun@dog', '14f7fd49dc34531d7fb3e90644f2a9d3e614120d'),
(5, 'Jeco', 'Diff', 'jeco@diff', '14f7fd49dc34531d7fb3e90644f2a9d3e614120d'),
(6, 'Arlene', 'Canlas', 'arlene@canlas', '14f7fd49dc34531d7fb3e90644f2a9d3e614120d'),
(8, 'Admin', '1', 'admin@admin.com', '14f7fd49dc34531d7fb3e90644f2a9d3e614120d'),
(11, 'Juan', 'Dela Cruz', 'juan@email.com', 'ee06bf8bfebe408f1954466bb64ba4d6497629d3'),
(12, 'Juan', 'Dela Cruz', '1@1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminlog`
--
ALTER TABLE `adminlog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminlog`
--
ALTER TABLE `adminlog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
