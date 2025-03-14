-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2025 at 09:13 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `username`, `password`, `avatar`) VALUES
(40, 'baba', 'maharjan', 'sd', '1234', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBT0nlxL0IrspWt7F-OtzLl2OrJPLaOUOiaw&s'),
(45, 'rosondangol2', 'asdsadsad', 'rosondangol2', '111111', 'data:image/jpeg;base64,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'),
(46, 'indira', 'dangol', 'indira11', '11111', 'data:image/png;base64,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'),
(47, 'raji v', 'maharjan', 'rajiv11', '1111', 'data:image/png;base64,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');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
