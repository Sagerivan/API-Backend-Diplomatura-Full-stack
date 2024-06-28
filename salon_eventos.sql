-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-06-2024 a las 04:23:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `salon_eventos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `tipo_evento` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL,
  `capacidad` int(11) NOT NULL,
  `organizador` varchar(100) NOT NULL,
  `telefono_organizador` varchar(50) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `estado_abono` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `tipo_evento`, `descripcion`, `fecha`, `hora_inicio`, `hora_fin`, `capacidad`, `organizador`, `telefono_organizador`, `precio`, `estado_abono`) VALUES
(2, 'Cumpleaños', 'Cumpleaños de quince', '2027-02-09', '09:00:00', '05:00:00', 150, 'Luciana', '65464654', 500000.00, '80%'),
(4, 'Casamiento', 'Casamiento pareja joven sin hijos', '2028-07-22', '08:00:00', '04:00:00', 100, 'Ivan Sager', '564654531', 600000.00, 'Abonado 50%'),
(10, 'Concierto', 'Concierto de rock en vivo', '2024-07-15', '20:00:00', '23:00:00', 500, 'Rock Productions', '123-456-7890', 50.00, 'Pagado'),
(11, 'Conferencia', 'Conferencia sobre tecnología y futuro', '2024-08-10', '09:00:00', '17:00:00', 300, 'TechWorld', '234-567-8901', 150.00, 'Pendiente'),
(12, 'Taller', 'Taller de fotografía profesional', '2024-09-05', '10:00:00', '15:00:00', 100, 'FotoMaster', '345-678-9012', 75.00, 'Pagado'),
(13, 'Seminario', 'Seminario sobre finanzas personales', '2024-10-20', '14:00:00', '18:00:00', 200, 'FinancePro', '456-789-0123', 100.00, 'Pendiente'),
(14, 'Festival', 'Festival de comida internacional', '2024-11-25', '12:00:00', '22:00:00', 1000, 'Foodie Events', '567-890-1234', 20.00, 'Pagado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
