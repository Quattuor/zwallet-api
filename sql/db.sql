-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 04, 2021 at 12:04 AM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `B2eYgafiqn`
--

-- --------------------------------------------------------

--
-- Table structure for table `blacklist`
--

CREATE TABLE `blacklist` (
  `id_token` int(11) NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id_user` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_contact` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id_user`, `id_contact`) VALUES
('22', '23'),
('22', '1'),
('1', '13'),
('1', '22'),
('1', '23'),
('1', '24'),
('1', '28');

-- --------------------------------------------------------

--
-- Table structure for table `HistoryOther`
--

CREATE TABLE `HistoryOther` (
  `id_history` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_instance` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `balance` bigint(20) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `HistoryOther`
--

INSERT INTO `HistoryOther` (`id_history`, `id_user`, `id_instance`, `balance`, `type`, `createdAt`) VALUES
('top-1612332987476', '22', 'bank-bri', 35000, 'Top up', '2021-02-10 06:27:26'),
('top-1612333041959', '22', 'bank-bri', 35000, 'Top up', '2021-02-03 00:00:00'),
('top-1612396393643', '1', 'bank-bri', 35000, 'Top up', '2021-02-04 06:53:14'),
('top-1612396404806', '1', 'bank-bri', 35000, 'Top up', '2021-02-04 06:53:25'),
('top-1612396417925', '1', 'bank-bri', 35000, 'Top up', '2021-02-04 06:53:38'),
('top-1612396779287', '1', 'bank-bri', 35000, 'Top up', '2021-02-04 06:59:39'),
('top-1612396783263', '1', 'bank-bri', 35000, 'Top up', '2021-02-04 06:59:43'),
('top-1612396890342', '1', 'bank-bri', 35000, 'Top up', '2021-02-04 07:01:31'),
('top-1612396897456', '1', 'bank-bri', 35000, 'Top up', '2021-02-04 07:01:38'),
('top-1612396906616', '1', 'bank-bri', 35000, 'Top up', '2021-02-04 07:01:47');

-- --------------------------------------------------------

--
-- Table structure for table `HistoryUser`
--

CREATE TABLE `HistoryUser` (
  `id_history` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_contact` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `balance` bigint(20) NOT NULL,
  `notes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `HistoryUser`
--

INSERT INTO `HistoryUser` (`id_history`, `id_user`, `id_contact`, `balance`, `notes`, `type`) VALUES
('1612332987476', '22', '23', 100, NULL, 'Top Up'),
('r-1612391356699', '13', '1', 100000, '123', 'Received'),
('r-1612391506526', '23', '1', 123000, '', 'Received'),
('r-1612391508140', '23', '1', 123000, '', 'Received'),
('r-1612391551213', '23', '1', 123000, '1230000', 'Received'),
('r-1612391618514', '23', '1', 123000, '1230000', 'Received'),
('r-1612391764505', '23', '1', 123000, '1230000', 'Received'),
('r-1612391784982', '23', '1', 123000, '1230000', 'Received'),
('r-1612391801851', '23', '1', 123000, '1230000', 'Received'),
('r-1612391807101', '23', '1', 123000, '1230000', 'Received'),
('r-1612391911228', '23', '1', 123000, '1230000', 'Received'),
('r-1612392075647', '23', '1', 123000, '1230000', 'Received'),
('r-1612396569386', '23', '1', 123000, '1230000', 'Received'),
('r-1612396600550', '23', '1', 123000, '1230000', 'Received'),
('r-1612396684638', '23', '1', 123000, '1230000', 'Received'),
('r-1612396717806', '23', '1', 123000, '1230000', 'Received'),
('r-1612396737588', '23', '1', 123000, '1230000', 'Received'),
('r-1612396742839', '23', '1', 123000, '1230000', 'Received'),
('t-1612391356699', '1', '13', 100000, '123', 'Transfer'),
('t-1612391506526', '1', '23', 123000, '', 'Transfer'),
('t-1612391508140', '1', '23', 123000, '', 'Transfer'),
('t-1612391551213', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612391618514', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612391764505', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612391784982', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612391801851', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612391807101', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612391911228', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612392075647', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612396569386', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612396600550', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612396684638', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612396717806', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612396737588', '1', '23', 123000, '1230000', 'Transfer'),
('t-1612396742839', '1', '23', 123000, '1230000', 'Transfer');

-- --------------------------------------------------------

--
-- Table structure for table `Instance`
--

CREATE TABLE `Instance` (
  `id_instance` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Instance`
--

INSERT INTO `Instance` (`id_instance`, `name`, `image`) VALUES
('bank-bca', 'Bank BCA', '/images/bca.png'),
('bank-bni', 'Bank BNI', '/images/bni.png'),
('bank-bri', 'Bank BRI', '/images/bri.png'),
('bank-mandiri', 'Bank Mandiri', '/images/mandiri.png'),
('sub-netflix', 'Netflix', '/images/netflix.png'),
('sub-spotify', 'Spotify', '/images/spotify.png'),
('sub-youtube', 'Youtube Premium', '/images/youtube.png');

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id_otp` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `kode` char(6) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id_otp`, `email`, `kode`) VALUES
(34, 'tester@gmail.com', 'A05oS4'),
(35, 'cocowel393@poetred.com', '8k1VUm');

-- --------------------------------------------------------

--
-- Table structure for table `token_whitelist`
--

CREATE TABLE `token_whitelist` (
  `id` int(11) NOT NULL,
  `token` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `token_whitelist`
--

INSERT INTO `token_whitelist` (`id`, `token`) VALUES
(60, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiTXVoYW1tYWQiLCJlbWFpbCI6InNob2hpYkBnbWFpbC5jb20iLCJwaW4iOjIyMjIyMiwiaWF0IjoxNjEyMzU1MzI1LCJleHAiOjE2MTIzOTEzMjV9.zW5FfxhysflzkJsqM34dfHaLZTI2mtZnr1yuWIXeldg'),
(61, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiTXVoYW1tYWQiLCJlbWFpbCI6InNob2hpYkBnbWFpbC5jb20iLCJwaW4iOjIyMjIyMiwiaWF0IjoxNjEyMzU1Njg1LCJleHAiOjE2MTIzOTE2ODV9.MsxbtV1te0GbGH_FU1wE7lQTiG64R4TtvBS1IzOQI1Q'),
(62, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoiTXVoYW1tYWQiLCJlbWFpbCI6InNob2hpYkBnbWFpbC5jb20iLCJwaW4iOjIyMjIyMiwiaWF0IjoxNjEyMzU1NzUyLCJleHAiOjE2MTIzOTE3NTJ9.dOM86oPYWFtpx9E6nQrhl99sFrkZxAqk3KyQWvwzDKU'),
(69, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsInVzZXJuYW1lIjoiYW1hcmRpdG8iLCJlbWFpbCI6ImFtYXJkaXRvMzdAZ21haWwuY29tIiwicGluIjozMDEwMjAsImlhdCI6MTYxMjM2NTU3NywiZXhwIjoxNjEyNDAxNTc3fQ.j_W3T65y_CbMUVIziv5wCOOI5W8qPP5FyYBvwRLPR9o'),
(90, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInVzZXJuYW1lIjoiU2hoYiIsImVtYWlsIjoic2hvaGliMDUxMkBnbWFpbC5jb20iLCJwaW4iOjEyMzQ1NiwiaWF0IjoxNjEyMzc1NjI3LCJleHAiOjE2MTI0MTE2Mjd9.yW7HT0FCixmV3KZSgLcdg0KUSa9Z0onOGPg4FgsRWAM'),
(92, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJCYXl1IEVyaWNoIiwiZW1haWwiOiJiYXl1LmVyaWNoQGdtYWlsLmNvbSIsInBob25lIjoiMDgxMjMyMTIzMjg3IiwiaWRfdmlydHVhbCI6IjIzODkwODEyMzIxMjMyODciLCJwaG90byI6Ii9pbWFnZXMvcGhvdG8tMTYxMjMyMjQ5MzA5NS5qcGciLCJiYWxhbmNlIjo5OTk5OTk5OTksIm5vdGlmaWNhdGlvbiI6MCwicGluIjo5OTk5OTksImlhdCI6MTYxMjM3NjM4OCwiZXhwIjoxNjEyNDEyMzg4fQ.oZVZmVHjwhsiT34YwTGg1y0fWpeDl0-t-9YfsL6aLGs'),
(95, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsInVzZXJuYW1lIjoiRWx3YW5keSIsImxhc3RuYW1lIjoiVGlydGFuYSIsInBob3RvIjpudWxsLCJiYWxhbmNlIjoxMjAwMCwicGhvbmUiOiIwODQ0NDk4NDQ1NjMiLCJpZF92aXJ0dWFsIjoiMjIgMDg0NDQ5ODQ0NTYzIiwiaXNfbm90aWZpY2F0aW9uIjowLCJlbWFpbCI6ImVsd2FuZGl0aXJ0YW5hMTk0NWFAZ21haWwuY29tIiwicGluIjo2OTY1ODUsImlhdCI6MTYxMjM3ODk5MCwiZXhwIjoxNjEyNDE0OTkwfQ.6oijhxwqW7BtMEVsO0vOmwUWmRQSPpypXJ_RibLGrwY'),
(96, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInVzZXJuYW1lIjoiU2hoYiIsImVtYWlsIjoic2hvaGliMDUxMkBnbWFpbC5jb20iLCJwaG9uZSI6IjA4OTc2NTQzMjEwMSIsImlkX3ZpcnR1YWwiOiIyMzg5MDg5NzY1NDMyMTAxIiwicGhvdG8iOm51bGwsImJhbGFuY2UiOjAsIm5vdGlmaWNhdGlvbiI6MCwicGluIjoxMjM0NTYsImlhdCI6MTYxMjM3OTgyMCwiZXhwIjoxNjEyNDE1ODIwfQ.MQCDQwvziNCfno_bHsZBiX06FMil4_mrxbQ5Ypc70WM'),
(97, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInVzZXJuYW1lIjoiU2hoYiIsImVtYWlsIjoic2hvaGliMDUxMkBnbWFpbC5jb20iLCJwaG9uZSI6IjA4OTc2NTQzMjEwMSIsImlkX3ZpcnR1YWwiOiIyMzg5MDg5NzY1NDMyMTAxIiwicGhvdG8iOm51bGwsImJhbGFuY2UiOjAsIm5vdGlmaWNhdGlvbiI6MCwicGluIjoxMjM0NTYsImlhdCI6MTYxMjM3OTg3MiwiZXhwIjoxNjEyNDE1ODcyfQ.TwM33GM6lnghcm1NuNsSK9XBRUKpxCVJcGvtblEHNjA'),
(98, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInVzZXJuYW1lIjoiU2hoYiIsImVtYWlsIjoic2hvaGliMDUxMkBnbWFpbC5jb20iLCJwaG9uZSI6IjA4OTc2NTQzMjEwMSIsImlkX3ZpcnR1YWwiOiIyMzg5MDg5NzY1NDMyMTAxIiwicGhvdG8iOm51bGwsImJhbGFuY2UiOjAsIm5vdGlmaWNhdGlvbiI6MCwicGluIjoxMjM0NTYsImlhdCI6MTYxMjM3OTg3OCwiZXhwIjoxNjEyNDE1ODc4fQ.uAAj4D6C45B7CRJwTyElhNimVlZ8mbJTFXs6UJsa08g'),
(99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInVzZXJuYW1lIjoiU2hoYiIsImVtYWlsIjoic2hvaGliMDUxMkBnbWFpbC5jb20iLCJwaG9uZSI6IjA4OTc2NTQzMjEwMSIsImlkX3ZpcnR1YWwiOiIyMzg5MDg5NzY1NDMyMTAxIiwicGhvdG8iOm51bGwsImJhbGFuY2UiOjAsIm5vdGlmaWNhdGlvbiI6MCwicGluIjoxMjM0NTYsImlhdCI6MTYxMjM3OTg5MSwiZXhwIjoxNjEyNDE1ODkxfQ.cmmBNUlZ0TWd2gFltd8jvUgRzq-Q6sZJcFQ6XvjC2WY'),
(100, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJCYXl1IEVyaWNoIiwibGFzdG5hbWUiOiJEZXdhbmdnYSIsImVtYWlsIjoiYmF5dS5lcmljaEBnbWFpbC5jb20iLCJwaG9uZSI6IjA4MTIzMjEyMzI4NyIsImlkX3ZpcnR1YWwiOiIyMzg5MDgxMjMyMTIzMjg3IiwicGhvdG8iOiIvaW1hZ2VzL3Bob3RvLTE2MTIzMjI0OTMwOTUuanBnIiwiYmFsYW5jZSI6OTk5OTk5OTk5LCJub3RpZmljYXRpb24iOjAsInBpbiI6OTg3NjU0LCJpYXQiOjE2MTIzODAyMTQsImV4cCI6MTYxMjQxNjIxNH0.Bw472OY3MIb7tOWPLWs4OZ3-gJAcdNq8NXSFqH6eUp8'),
(103, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJCYXl1IEVyaWNoIiwibGFzdG5hbWUiOiJEZXdhbmdnYSIsImVtYWlsIjoiYmF5dS5lcmljaEBnbWFpbC5jb20iLCJwaG9uZSI6IjA4MTIzMjEyMzI4NyIsImlkX3ZpcnR1YWwiOiIyMzg5MDgxMjMyMTIzMjg3IiwicGhvdG8iOiIvaW1hZ2VzL3Bob3RvLTE2MTIzMjI0OTMwOTUuanBnIiwiYmFsYW5jZSI6OTk5OTk5OTk5LCJub3RpZmljYXRpb24iOjAsInBpbiI6OTk5OTk5LCJpYXQiOjE2MTIzODMxMzQsImV4cCI6MTYxMjQxOTEzNH0.lCWbx8PSZ5Q8du1enQ947DJDdD4aDIixxp8mrg0OApA');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pin` int(11) NOT NULL DEFAULT '0',
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `balance` int(11) NOT NULL DEFAULT '0',
  `id_virtual` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_notification` tinyint(1) NOT NULL DEFAULT '0',
  `is_verified` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `lastname`, `email`, `password`, `pin`, `phone`, `photo`, `balance`, `id_virtual`, `is_notification`, `is_verified`) VALUES
(1, 'Bayu Erich', 'Dewangga', 'bayu.erich@gmail.com', '$2b$04$RveXUUYDN4okMPuT8f6Hn.cRm2JaFiJ0Le/fhsXGzgn7n5.inj75u', 999999, '081232123287', '/images/photo-1612322493095.jpg', -217000, '2389081232123287', 0, 1),
(13, 'test', NULL, 'xerow37992@laklica.com', '$2b$10$DUD72WaciNEc7iUnVR8Y1ujhEfpa2YGZhbjh9PjHGRo0znp4alNjK', 777777, '081234567890', NULL, 198000, '2389081234567890', 0, 1),
(22, 'Elwandy', 'Tirtana', 'elwanditirtana1945a@gmail.com', '$2b$10$jyYTYaVRjSUVD91DNXv4M.fAk7RQRRq0Pdzif8R0lXPJAsGpT7pF.', 696585, '084449844563', NULL, 12000, '22 084449844563', 0, 1),
(23, 'Muhammad', 'Shohib', 'shohib@gmail.com', '$2b$04$9aR4bY2Vs40ZqY5DYqU3bOHyh.ITXLbqfj68EbibbJ2wYOFqk.u1y', 555555, '08522580852', '/images/photo-1612378680375.jpg', 1107000, '238908522580852', 0, 1),
(24, 'Shhb', NULL, 'shohib0512@gmail.com', '$2b$08$VFZmgE.cOCfBK/PcqnBiiOqUf8TmG5.MP34tSwg..KSYIwllN.svu', 666666, '089765432101', NULL, 0, '2389089765432101', 0, 1),
(28, 'amardito', NULL, 'amar@mail.mail', '$2b$10$Bj2uK0NtU61at9NEx/ambO2HJMQRYbmUn01RuxjE3lvGhgWMrIi8e', 111111, '08997599401', '/images/photo-1612381706931.jpg', 0, '28 08997599401', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blacklist`
--
ALTER TABLE `blacklist`
  ADD PRIMARY KEY (`id_token`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_contact` (`id_contact`);

--
-- Indexes for table `HistoryOther`
--
ALTER TABLE `HistoryOther`
  ADD PRIMARY KEY (`id_history`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_instance` (`id_instance`);

--
-- Indexes for table `HistoryUser`
--
ALTER TABLE `HistoryUser`
  ADD PRIMARY KEY (`id_history`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_contact` (`id_contact`);

--
-- Indexes for table `Instance`
--
ALTER TABLE `Instance`
  ADD PRIMARY KEY (`id_instance`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`id_otp`);

--
-- Indexes for table `token_whitelist`
--
ALTER TABLE `token_whitelist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blacklist`
--
ALTER TABLE `blacklist`
  MODIFY `id_token` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id_otp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `token_whitelist`
--
ALTER TABLE `token_whitelist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
