-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13/11/2024 às 00:31
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_techvision`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `auth_group`
--

INSERT INTO `auth_group` (`id`, `name`) VALUES
(1, 'Admin');

-- --------------------------------------------------------

--
-- Estrutura para tabela `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `auth_group_permissions`
--

INSERT INTO `auth_group_permissions` (`id`, `group_id`, `permission_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16);

-- --------------------------------------------------------

--
-- Estrutura para tabela `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add permission', 1, 'add_permission'),
(2, 'Can change permission', 1, 'change_permission'),
(3, 'Can delete permission', 1, 'delete_permission'),
(4, 'Can view permission', 1, 'view_permission'),
(5, 'Can add group', 2, 'add_group'),
(6, 'Can change group', 2, 'change_group'),
(7, 'Can delete group', 2, 'delete_group'),
(8, 'Can view group', 2, 'view_group'),
(9, 'Can add content type', 3, 'add_contenttype'),
(10, 'Can change content type', 3, 'change_contenttype'),
(11, 'Can delete content type', 3, 'delete_contenttype'),
(12, 'Can view content type', 3, 'view_contenttype'),
(13, 'Can add session', 4, 'add_session'),
(14, 'Can change session', 4, 'change_session'),
(15, 'Can delete session', 4, 'delete_session'),
(16, 'Can view session', 4, 'view_session'),
(17, 'Can add carrinho item', 16, 'add_carrinhoitem'),
(18, 'Can change carrinho item', 16, 'change_carrinhoitem'),
(19, 'Can delete carrinho item', 16, 'delete_carrinhoitem'),
(20, 'Can view carrinho item', 16, 'view_carrinhoitem'),
(21, 'Can add carrinho', 14, 'add_carrinho'),
(22, 'Can change carrinho', 14, 'change_carrinho'),
(23, 'Can delete carrinho', 14, 'delete_carrinho'),
(24, 'Can view carrinho', 14, 'view_carrinho'),
(25, 'Can add User', 5, 'add_user'),
(26, 'Can change User', 5, 'change_user'),
(27, 'Can delete User', 5, 'delete_user'),
(28, 'Can view User', 5, 'view_user'),
(29, 'Can add endereco', 15, 'add_endereco'),
(30, 'Can change endereco', 15, 'change_endereco'),
(31, 'Can delete endereco', 15, 'delete_endereco'),
(32, 'Can view endereco', 15, 'view_endereco'),
(33, 'Can add produto', 11, 'add_produto'),
(34, 'Can change produto', 11, 'change_produto'),
(35, 'Can delete produto', 11, 'delete_produto'),
(36, 'Can view produto', 11, 'view_produto'),
(37, 'Can add transportadora', 13, 'add_transportadora'),
(38, 'Can change transportadora', 13, 'change_transportadora'),
(39, 'Can delete transportadora', 13, 'delete_transportadora'),
(40, 'Can view transportadora', 13, 'view_transportadora'),
(41, 'Can add pedido', 12, 'add_pedido'),
(42, 'Can change pedido', 12, 'change_pedido'),
(43, 'Can delete pedido', 12, 'delete_pedido'),
(44, 'Can view pedido', 12, 'view_pedido'),
(45, 'Can add log entry', 17, 'add_logentry'),
(46, 'Can change log entry', 17, 'change_logentry'),
(47, 'Can delete log entry', 17, 'delete_logentry'),
(48, 'Can view log entry', 17, 'view_logentry'),
(49, 'Can add cors model', 18, 'add_corsmodel'),
(50, 'Can change cors model', 18, 'change_corsmodel'),
(51, 'Can delete cors model', 18, 'delete_corsmodel'),
(52, 'Can view cors model', 18, 'view_corsmodel'),
(53, 'Can add category', 19, 'add_category'),
(54, 'Can change category', 19, 'change_category'),
(55, 'Can delete category', 19, 'delete_category'),
(56, 'Can view category', 19, 'view_category'),
(57, 'Can add categoria', 20, 'add_categoria'),
(58, 'Can change categoria', 20, 'change_categoria'),
(59, 'Can delete categoria', 20, 'delete_categoria'),
(60, 'Can view categoria', 20, 'view_categoria'),
(61, 'Can add carroussel', 21, 'add_carroussel'),
(62, 'Can change carroussel', 21, 'change_carroussel'),
(63, 'Can delete carroussel', 21, 'delete_carroussel'),
(64, 'Can view carroussel', 21, 'view_carroussel'),
(65, 'Can add pedido itens', 22, 'add_pedidoitens'),
(66, 'Can change pedido itens', 22, 'change_pedidoitens'),
(67, 'Can delete pedido itens', 22, 'delete_pedidoitens'),
(68, 'Can view pedido itens', 22, 'view_pedidoitens'),
(69, 'Can add pedido item', 23, 'add_pedidoitem'),
(70, 'Can change pedido item', 23, 'change_pedidoitem'),
(71, 'Can delete pedido item', 23, 'delete_pedidoitem'),
(72, 'Can view pedido item', 23, 'view_pedidoitem');

-- --------------------------------------------------------

--
-- Estrutura para tabela `carroussel_carroussel`
--

CREATE TABLE `carroussel_carroussel` (
  `carroussel_id` int(11) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `url` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `carroussel_carroussel`
--

INSERT INTO `carroussel_carroussel` (`carroussel_id`, `foto`, `url`) VALUES
(1, 'carroussel/D_NQ_748437-MLA79576182488_102024-OO.webp', 'https://www.mercadolivre.com.br/dia-das-criancas#D'),
(4, 'carroussel/1727102704854-22x.webp', 'https://lista.mercadolivre.com.br/_Container_ddc-games#deal_print_id=0c9bb0d0-85a6-11ef-b4c7-db911e0386b6&c_id=mainslideritem-normal&c_element_order=4&c_campaign=23.09_MS_GAMER&c_uid=0c9bb0d0-85a6-11ef-b4c7-db911e0386b6');

-- --------------------------------------------------------

--
-- Estrutura para tabela `compra_pedido`
--

CREATE TABLE `compra_pedido` (
  `delivery_id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `valor_total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `compra_pedido`
--

INSERT INTO `compra_pedido` (`delivery_id`, `status`, `user_id`, `valor_total`) VALUES
(27, 'Aprovado', 30, 0),
(28, 'Aprovado', 30, 0),
(29, 'Aprovado', 30, 0),
(30, 'Aprovado', 30, 0),
(31, 'Aprovado', 30, 0),
(32, 'Aprovado', 30, 0),
(33, 'Aprovado', 30, 0),
(34, 'Aprovado', 30, 0),
(35, 'Aprovado', 30, 0),
(36, 'Aprovado', 30, 0),
(37, 'Aprovado', 30, 0),
(38, 'Aprovado', 1, 0),
(39, 'Aprovado', 1, 0),
(40, 'Aprovado', 1, 0),
(41, 'Aprovado', 1, 0),
(42, 'Aprovado', 1, 0),
(43, 'Aprovado', 1, 0),
(44, 'Aprovado', 1, 0),
(45, 'Aprovado', 1, 0),
(46, 'Aprovado', 1, 0),
(47, 'Aprovado', 1, 0),
(48, 'Aprovado', 1, 5000),
(49, 'Aprovado', 1, 149.99),
(50, 'Aprovado', 1, 948.99),
(51, 'Aprovado', 1, 948.99),
(52, 'Aprovado', 1, 869.09),
(53, 'Aprovado', 1, 869.09),
(54, 'Aprovado', 1, 869.09),
(55, 'Aprovado', 1, 869.09),
(56, 'Aprovado', 1, 869.09),
(57, 'Aprovado', 1, 869.09),
(58, 'Aprovado', 1, 869.09),
(59, 'Aprovado', 1, 869.09),
(60, 'Aprovado', 1, 869.09),
(61, 'Aprovado', 1, 869.09),
(62, 'Aprovado', 1, 869.09),
(63, 'Aprovado', 1, 869.09),
(64, 'Aprovado', 1, 869.09),
(65, 'Aprovado', 1, 869.09),
(66, 'Aprovado', 1, 869.09),
(67, 'Aprovado', 1, 869.09),
(68, 'Aprovado', 1, 869.09),
(69, 'Aprovado', 1, 869.09),
(70, 'Aprovado', 1, 869.09),
(71, 'Aprovado', 1, 1188.69),
(72, 'Aprovado', 1, 149.99),
(73, 'Aprovado', 1, 1949.79),
(74, 'Aprovado', 1, 3949.69),
(75, 'Aprovado', 1, 4449.59),
(76, 'Aprovado', 1, 5449.39),
(77, 'Aprovado', 1, 5449.39),
(78, 'Aprovado', 1, 5449.39),
(79, 'Aprovado', 1, 2149.89),
(80, 'Aprovado', 1, 2149.89),
(81, 'Aprovado', 1, 2149.89),
(82, 'Aprovado', 1, 2149.89),
(83, 'Aprovado', 1, 2149.89),
(84, 'Aprovado', 1, 2149.89),
(85, 'Aprovado', 1, 2149.89),
(86, 'Aprovado', 1, 2149.89),
(87, 'Aprovado', 1, 2149.89),
(88, 'Aprovado', 1, 3999.8),
(89, 'Aprovado', 1, 5000),
(90, 'Aprovado', 1, 5000),
(91, 'Aprovado', 1, 5000),
(92, 'Aprovado', 1, 5000),
(93, 'Aprovado', 1, 5000),
(94, 'Aprovado', 1, 5000),
(95, 'Aprovado', 1, 3999.8),
(96, 'Aprovado', 1, 5999.7),
(97, 'Aprovado', 1, 13999.3),
(98, 'Aprovado', 1, 13999.3),
(99, 'Aprovado', 1, 15299.2),
(100, 'Aprovado', 1, 149.99),
(101, 'Aprovado', 1, 1999.9),
(102, 'Aprovado', 1, 1999.9),
(103, 'Aprovado', 1, 1299.9),
(104, 'Aprovado', 1, 1299.9),
(105, 'Aprovado', 1, 79.9),
(106, 'Aprovado', 1, 79.9),
(107, 'Aprovado', 1, 499.9),
(108, 'Aprovado', 1, 15299.2),
(109, 'Aprovado', 1, 1999.9),
(110, 'Aprovado', 1, 1299.9),
(111, 'Aprovado', 1, 1999.9),
(112, 'Aprovado', 1, 179.9),
(113, 'Aprovado', 1, 179.9),
(114, 'Aprovado', 1, 179.9),
(115, 'Aprovado', 1, 149.99),
(116, 'Aprovado', 1, 1299.9),
(117, 'Aprovado', 1, 1999.9),
(118, 'Aprovado', 1, 499.9),
(119, 'Aprovado', 1, 4999.9),
(120, 'Aprovado', 1, 2059),
(121, 'Aprovado', 1, 499.9),
(122, 'Aprovado', 1, 499.9),
(123, 'Aprovado', 1, 199.99),
(124, 'Aprovado', 1, 19.9),
(125, 'Aprovado', 1, 39.9),
(126, 'Aprovado', 1, 199.99),
(127, 'Aprovado', 1, 1999.9),
(128, 'Aprovado', 1, 499.9),
(129, 'Aprovado', 31, 2599.8),
(130, 'Aprovado', 31, 149.99),
(131, 'Aprovado', 32, 199.99),
(132, 'Aprovado', 32, 799.95),
(133, 'Aprovado', 32, 1699.88),
(134, 'Aprovado', 32, 1699.88),
(135, 'Aprovado', 32, 1699.88),
(136, 'Aprovado', 2, 400),
(137, 'Aprovado', 2, 400),
(138, 'Aprovado', 2, 200),
(139, 'Aprovado', 2, 400),
(140, 'Aprovado', 2, 200),
(141, 'Aprovado', 2, 400),
(142, 'Aprovado', 2, 40),
(143, 'Aprovado', 2, 1299.9),
(144, 'Aprovado', 2, 199.99),
(145, 'Aprovado', 2, 4999.9),
(146, 'Aprovado', 2, 400),
(147, 'Aprovado', 2, 4999.9),
(148, 'Aprovado', 2, 400),
(149, 'Aprovado', 2, 400),
(150, 'Aprovado', 2, 400),
(151, 'Aprovado', 2, 4999.9),
(152, 'Aprovado', 2, 40),
(153, 'Aprovado', 2, 1299.9),
(154, 'Aprovado', 2, 200),
(155, 'Aprovado', 2, 40),
(156, 'Aprovado', 2, 400),
(157, 'Aprovado', 2, 4999.9),
(158, 'Aprovado', 2, 400);

-- --------------------------------------------------------

--
-- Estrutura para tabela `compra_pedidoitem`
--

CREATE TABLE `compra_pedidoitem` (
  `pedidoItem_id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `compra_pedidoitem`
--

INSERT INTO `compra_pedidoitem` (`pedidoItem_id`, `pedido_id`, `produto_id`, `quantity`) VALUES
(1, 120, 13, 7),
(2, 120, 17, 3),
(3, 121, 17, 1),
(4, 122, 17, 1),
(5, 123, 9, 1),
(6, 124, 20, 1),
(7, 125, 23, 1),
(8, 126, 9, 1),
(9, 127, 16, 1),
(10, 128, 17, 1),
(11, 129, 10, 2),
(12, 130, 12, 1),
(13, 131, 9, 1),
(14, 132, 9, 1),
(15, 132, 12, 4),
(16, 133, 9, 2),
(17, 133, 10, 1),
(18, 134, 9, 2),
(19, 134, 10, 1),
(20, 135, 9, 2),
(21, 135, 10, 1),
(22, 136, 26, 1),
(23, 137, 26, 1),
(24, 138, 25, 1),
(25, 139, 26, 1),
(26, 140, 25, 1),
(27, 141, 26, 1),
(28, 142, 24, 1),
(29, 143, 10, 1),
(30, 144, 9, 1),
(31, 145, 11, 1),
(32, 146, 26, 1),
(33, 147, 11, 1),
(34, 148, 26, 1),
(35, 149, 26, 1),
(36, 150, 26, 1),
(37, 151, 11, 1),
(38, 152, 24, 1),
(39, 153, 10, 1),
(40, 154, 25, 1),
(41, 155, 24, 1),
(42, 156, 26, 1),
(43, 157, 11, 1),
(44, 158, 26, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `corsheaders_corsmodel`
--

CREATE TABLE `corsheaders_corsmodel` (
  `id` bigint(20) NOT NULL,
  `cors` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `object_id` text NOT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(6) NOT NULL,
  `change_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `user_id`, `content_type_id`, `object_id`, `object_repr`, `action_flag`, `change_message`) VALUES
(1, '2024-08-27 12:15:35', 2, 6, '1', 'Product object (1)', 1, '[{\"added\": {}}]'),
(2, '2024-08-27 13:42:22', 2, 6, '2', 'Product object (2)', 1, '[{\"added\": {}}]'),
(3, '2024-08-27 15:53:08', 2, 6, '2', 'Product object (2)', 3, ''),
(4, '2024-08-27 15:53:17', 2, 6, '1', 'Product object (1)', 3, ''),
(5, '2024-08-27 16:01:27', 2, 6, '3', 'Product object (3)', 1, '[{\"added\": {}}]'),
(6, '2024-08-27 16:07:53', 2, 6, '4', 'Product object (4)', 1, '[{\"added\": {}}]'),
(7, '2024-08-27 16:12:45', 2, 6, '5', 'Product object (5)', 1, '[{\"added\": {}}]'),
(8, '2024-08-27 16:17:12', 2, 6, '6', 'Product object (6)', 1, '[{\"added\": {}}]'),
(9, '2024-08-29 11:14:11', 2, 2, '1', 'Admin', 1, '[{\"added\": {}}]'),
(10, '2024-08-29 11:14:25', 2, 5, '2', 'usuariosuper@exemplo.com', 2, '[{\"changed\": {\"fields\": [\"Groups\", \"User permissions\"]}}]'),
(11, '2024-08-29 11:23:25', 2, 5, '5', 'lucas.leite4@aluno.senai.br', 2, '[{\"changed\": {\"fields\": [\"Is staff\"]}}]'),
(12, '2024-08-29 11:33:24', 2, 7, '1', 'Adress object (1)', 1, '[{\"added\": {}}]'),
(13, '2024-08-29 11:39:42', 2, 7, '2', 'Adress object (2)', 1, '[{\"added\": {}}]'),
(14, '2024-09-05 13:21:49', 1, 8, '1', 'Carrier object (1)', 1, '[{\"added\": {}}]'),
(15, '2024-09-05 13:25:37', 1, 9, '1', 'Delivery object (1)', 1, '[{\"added\": {}}]'),
(16, '2024-09-05 13:34:08', 1, 8, '1', 'Carrier object (1)', 3, ''),
(17, '2024-09-05 13:34:20', 1, 8, '2', 'Carrier object (2)', 1, '[{\"added\": {}}]'),
(18, '2024-09-05 13:34:30', 1, 9, '2', 'Delivery object (2)', 1, '[{\"added\": {}}]'),
(19, '2024-09-05 13:34:42', 1, 8, '2', 'Carrier object (2)', 3, ''),
(20, '2024-09-05 13:41:09', 1, 8, '1', 'Carrier object (1)', 1, '[{\"added\": {}}]'),
(21, '2024-09-05 13:41:17', 1, 9, '3', 'Delivery object (3)', 1, '[{\"added\": {}}]'),
(22, '2024-09-05 13:41:35', 1, 8, '1', 'Carrier object (1)', 3, ''),
(23, '2024-09-05 13:43:41', 1, 8, '1', 'Carrier object (1)', 3, ''),
(24, '2024-09-05 13:44:03', 1, 9, '3', 'Delivery object (3)', 3, ''),
(25, '2024-09-05 14:06:56', 1, 10, '1', 'Cart object (1)', 1, '[{\"added\": {}}]'),
(26, '2024-09-05 14:07:02', 1, 10, '2', 'Cart object (2)', 1, '[{\"added\": {}}]'),
(27, '2024-09-05 14:08:12', 1, 10, '3', 'Cart object (3)', 1, '[{\"added\": {}}]'),
(28, '2024-09-05 16:05:34', 1, 11, '7', 'Produto object (7)', 1, '[{\"added\": {}}]'),
(29, '2024-09-05 16:05:44', 1, 11, '7', 'Produto object (7)', 3, ''),
(30, '2024-09-05 16:11:07', 1, 11, '7', 'Produto object (7)', 3, ''),
(31, '2024-09-05 16:11:13', 1, 11, '7', 'Produto object (7)', 3, ''),
(32, '2024-09-05 16:12:02', 1, 11, '7', 'Produto object (7)', 3, ''),
(33, '2024-09-05 16:13:58', 1, 13, '2', 'Transportadora object (2)', 1, '[{\"added\": {}}]'),
(34, '2024-09-05 16:14:01', 1, 12, '4', 'Pedido object (4)', 1, '[{\"added\": {}}]'),
(35, '2024-09-05 16:14:12', 1, 13, '2', 'Transportadora object (2)', 3, ''),
(36, '2024-09-05 16:14:19', 1, 12, '4', 'Pedido object (4)', 3, ''),
(37, '2024-09-05 16:14:46', 1, 14, '3', 'Carrinho object (3)', 3, ''),
(38, '2024-09-10 11:41:52', 1, 14, '6', 'Carrinho object (6)', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"carrinho item\", \"object\": \"Fone de Ouvido sem fio JBL Wave Buds - 1\"}}, {\"added\": {\"name\": \"carrinho item\", \"object\": \"TV Box XPlus - 1\"}}, {\"added\": {\"name\": \"carrinho item\", \"object\": \"TV Box XPlus - 1\"}}]'),
(39, '2024-09-10 11:43:22', 1, 14, '6', 'Carrinho object (6)', 2, '[{\"changed\": {\"name\": \"carrinho item\", \"object\": \"Fone de Ouvido sem fio JBL Wave Buds - 2\", \"fields\": [\"Quantity\"]}}]'),
(40, '2024-09-10 11:44:40', 1, 14, '6', 'Carrinho object (6)', 2, '[{\"changed\": {\"name\": \"carrinho item\", \"object\": \"Fone de Ouvido sem fio JBL Wave Buds - 3\", \"fields\": [\"Quantity\"]}}]'),
(41, '2024-09-15 17:24:59', 2, 11, '8', 'iphone bom e legal', 1, '[{\"added\": {}}]'),
(42, '2024-09-15 17:25:42', 2, 11, '8', 'iphone bom e legal', 2, '[{\"changed\": {\"fields\": [\"Foto 1\"]}}]'),
(43, '2024-09-19 16:30:44', 1, 20, '1', 'Categoria object (1)', 1, '[{\"added\": {}}]'),
(44, '2024-09-19 16:33:32', 1, 20, '1', 'Categoria object (1)', 2, '[]'),
(45, '2024-09-19 16:55:57', 1, 20, '2', 'Categoria object (2)', 1, '[{\"added\": {}}]'),
(46, '2024-09-19 16:58:01', 1, 20, '3', 'Categoria object (3)', 1, '[{\"added\": {}}]'),
(47, '2024-09-26 21:03:51', 1, 11, '8', 'iphone bom e legal', 3, ''),
(48, '2024-09-26 21:03:51', 1, 11, '4', 'Rodo de Cozinha Inox', 3, ''),
(49, '2024-09-26 21:03:51', 1, 11, '3', 'Ralo Inox para Banheiro 10x10cm', 3, ''),
(50, '2024-09-26 21:03:51', 1, 11, '2', 'TV Box XPlus', 3, ''),
(51, '2024-09-26 21:03:51', 1, 11, '1', 'Fone de Ouvido sem fio JBL Wave Buds', 3, ''),
(52, '2024-09-26 21:06:21', 1, 11, '9', 'Fone de Ouvido Bluetooth', 1, '[{\"added\": {}}]'),
(53, '2024-09-26 21:09:32', 1, 11, '10', 'Monitor 4K Ultra HD', 1, '[{\"added\": {}}]'),
(54, '2024-09-26 21:11:14', 1, 11, '11', 'Notebook Gamer', 1, '[{\"added\": {}}]'),
(55, '2024-09-26 21:13:03', 1, 11, '12', 'Câmera de Segurança Wi-Fi', 1, '[{\"added\": {}}]'),
(56, '2024-09-26 21:14:20', 1, 11, '13', 'Carregador Rápido USB-C', 1, '[{\"added\": {}}]'),
(57, '2024-09-26 21:15:37', 1, 11, '14', 'Geladeira Frost Free', 1, '[{\"added\": {}}]'),
(58, '2024-09-26 21:16:41', 1, 11, '15', 'Aspirador de Pó Robô', 1, '[{\"added\": {}}]'),
(59, '2024-09-26 21:17:48', 1, 11, '12', 'Câmera de Segurança Wi-Fi', 2, '[{\"changed\": {\"fields\": [\"Foto 1\", \"Foto 2\", \"Foto 3\", \"Foto 4\"]}}]'),
(60, '2024-09-26 21:18:09', 1, 11, '15', 'Aspirador de Pó Robô', 2, '[{\"changed\": {\"fields\": [\"Foto 1\", \"Foto 2\", \"Foto 3\", \"Foto 4\"]}}]'),
(61, '2024-09-26 21:18:44', 1, 11, '13', 'Carregador Rápido USB-C', 2, '[{\"changed\": {\"fields\": [\"Foto 1\", \"Foto 2\", \"Foto 3\", \"Foto 4\"]}}]'),
(62, '2024-09-26 21:20:30', 1, 11, '16', 'Máquina de Lavar 12kg', 1, '[{\"added\": {}}]'),
(63, '2024-09-26 21:21:33', 1, 11, '17', 'Forno Micro-ondas', 1, '[{\"added\": {}}]'),
(64, '2024-09-26 21:22:25', 1, 11, '18', 'Ventilador de Mesa 40cm', 1, '[{\"added\": {}}]'),
(65, '2024-09-26 21:24:13', 1, 11, '19', 'Detergente Líquido 5L', 1, '[{\"added\": {}}]'),
(66, '2024-09-26 21:24:56', 1, 11, '20', 'Desinfetante Multiuso', 1, '[{\"added\": {}}]'),
(67, '2024-09-26 21:25:48', 1, 11, '21', 'Esfregão Giratório', 1, '[{\"added\": {}}]'),
(68, '2024-09-26 21:26:29', 1, 11, '22', 'Limpa Vidros Spray', 1, '[{\"added\": {}}]'),
(69, '2024-09-26 21:27:16', 1, 11, '23', 'Sabão em Pó 2kg', 1, '[{\"added\": {}}]'),
(70, '2024-09-26 21:28:07', 1, 11, '14', 'Geladeira Frost Free', 2, '[{\"changed\": {\"fields\": [\"Foto 1\", \"Foto 2\", \"Foto 3\", \"Foto 4\"]}}]'),
(71, '2024-10-03 11:20:57', 1, 14, '7', 'Carrinho object (7)', 1, '[{\"added\": {}}]'),
(72, '2024-10-08 18:16:20', 2, 21, '1', 'https://www.mercadolivre.com.br/dia-das-criancas#D', 2, '[{\"changed\": {\"fields\": [\"Foto\"]}}]'),
(73, '2024-10-08 18:49:58', 2, 21, '4', 'https://lista.mercadolivre.com.br/_Container_ddc-games#deal_print_id=0c9bb0d0-85a6-11ef-b4c7-db911e0386b6&c_id=mainslideritem-normal&c_element_order=4&c_campaign=23.09_MS_GAMER&c_uid=0c9bb0d0-85a6-11e', 1, '[{\"added\": {}}]'),
(74, '2024-11-05 13:20:10', 1, 11, '15', 'Aspirador de Pó Robô', 3, ''),
(75, '2024-11-12 20:28:35', 2, 11, '24', 'Assinatura Mensal', 1, '[{\"added\": {}}]'),
(76, '2024-11-12 20:31:10', 2, 11, '25', 'Assinatura Semestral', 1, '[{\"added\": {}}]'),
(77, '2024-11-12 20:31:27', 2, 11, '24', 'Assinatura Mensal', 2, '[{\"changed\": {\"fields\": [\"Description\"]}}]'),
(78, '2024-11-12 20:32:21', 2, 11, '26', 'Plano Anual', 1, '[{\"added\": {}}]'),
(79, '2024-11-12 20:32:31', 2, 11, '25', 'Plano Semestral', 2, '[{\"changed\": {\"fields\": [\"Name\"]}}]'),
(80, '2024-11-12 20:32:45', 2, 11, '24', 'Plano Mensal', 2, '[{\"changed\": {\"fields\": [\"Name\"]}}]'),
(81, '2024-11-12 20:53:18', 2, 11, '25', 'Plano Semestral', 2, '[{\"changed\": {\"fields\": [\"Url name\"]}}]'),
(82, '2024-11-12 20:53:26', 2, 11, '24', 'Plano Mensal', 2, '[{\"changed\": {\"fields\": [\"Url name\"]}}]');

-- --------------------------------------------------------

--
-- Estrutura para tabela `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(17, 'admin', 'logentry'),
(2, 'auth', 'group'),
(1, 'auth', 'permission'),
(21, 'carroussel', 'carroussel'),
(8, 'compra', 'carrier'),
(9, 'compra', 'delivery'),
(12, 'compra', 'pedido'),
(23, 'compra', 'pedidoitem'),
(22, 'compra', 'pedidoitens'),
(13, 'compra', 'transportadora'),
(3, 'contenttypes', 'contenttype'),
(18, 'corsheaders', 'corsmodel'),
(20, 'produtos', 'categoria'),
(19, 'produtos', 'category'),
(6, 'produtos', 'product'),
(11, 'produtos', 'produto'),
(4, 'sessions', 'session'),
(7, 'usuario', 'adress'),
(14, 'usuario', 'carrinho'),
(16, 'usuario', 'carrinhoitem'),
(10, 'usuario', 'cart'),
(15, 'usuario', 'endereco'),
(5, 'usuario', 'user');

-- --------------------------------------------------------

--
-- Estrutura para tabela `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-08-22 16:35:38.254758'),
(2, 'contenttypes', '0002_remove_content_type_name', '2024-08-22 16:35:38.288685'),
(3, 'auth', '0001_initial', '2024-08-22 16:35:38.413389'),
(4, 'auth', '0002_alter_permission_name_max_length', '2024-08-22 16:35:38.437432'),
(5, 'auth', '0003_alter_user_email_max_length', '2024-08-22 16:35:38.437432'),
(6, 'auth', '0004_alter_user_username_opts', '2024-08-22 16:35:38.447454'),
(7, 'auth', '0005_alter_user_last_login_null', '2024-08-22 16:35:38.450384'),
(8, 'auth', '0006_require_contenttypes_0002', '2024-08-22 16:35:38.452377'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2024-08-22 16:35:38.455367'),
(10, 'auth', '0008_alter_user_username_max_length', '2024-08-22 16:35:38.455367'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2024-08-22 16:35:38.455367'),
(12, 'auth', '0010_alter_group_name_max_length', '2024-08-22 16:35:38.455367'),
(13, 'auth', '0011_update_proxy_permissions', '2024-08-22 16:35:38.470318'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2024-08-22 16:35:38.470318'),
(15, 'sessions', '0001_initial', '2024-08-22 17:02:10.500317'),
(16, 'compra', '0001_initial', '2024-09-05 13:40:53.720978'),
(17, 'produtos', '0001_initial', '2024-09-10 11:24:56.290775'),
(18, 'usuario', '0001_initial', '2024-09-10 11:24:56.306404'),
(19, 'admin', '0001_initial', '2024-09-10 11:26:01.466806'),
(20, 'admin', '0002_logentry_remove_auto_add', '2024-09-10 11:26:01.466806'),
(21, 'admin', '0003_logentry_add_action_flag_choices', '2024-09-10 11:26:01.482517'),
(22, 'corsheaders', '0001_initial', '2024-09-15 16:45:51.754169'),
(23, 'corsheaders', '0002_alter_corsmodel_id', '2024-09-15 16:45:51.779730'),
(24, 'produtos', '0002_alter_produto_url_name', '2024-09-15 17:24:11.771854'),
(25, 'produtos', '0003_alter_produto_foto_1_alter_produto_foto_2_and_more', '2024-09-15 17:24:52.749943'),
(26, 'produtos', '0002_category', '2024-09-19 16:21:16.081527'),
(27, 'usuario', '0002_alter_carrinho_user_remove_carrinhoitem_produto_and_more', '2024-10-03 12:09:27.328436'),
(28, 'carroussel', '0001_initial', '2024-10-08 12:07:25.083451'),
(29, 'carroussel', '0002_alter_carroussel_url', '2024-10-08 18:15:04.828688');

-- --------------------------------------------------------

--
-- Estrutura para tabela `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('0oti68b8iacpm7os58a5ckc66emc5vjh', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1swJsh:WfKnA6yS_iU6HEKjobKzt4O_YHdKmlVbY_JIwkghZ-8', '2024-10-17 11:20:27.972767'),
('21512wjrhdedbrsalilq50dboqx0ltni', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1sny1N:paKFe5XD62wkAAj4GNHexeAPylbnplIdqEpXgcP176A', '2024-09-24 10:22:53.560445'),
('8ajl262uzxyrg435vdijlxuymga9z2ye', '.eJxVjEEOwiAQRe_C2pCWKTC4dO8ZmhkYbNVAUtqV8e7apAvd_vfef6mRtnUatybLOCd1VgDq9DsyxYeUnaQ7lVvVsZZ1mVnvij5o09ea5Hk53L-Didr0rcWgYM7oO-fBMKc-RfSQMQB5FjTspA9DtC5A6Iy14hktZSGILqZBvT8O0zhZ:1tB0KQ:-X-48R258YhWmorpPfC-xiqebStUU7OBJB7-9xkfMZU', '2024-11-26 23:29:46.670752'),
('b0ydl5x4k2zlyeeoyldn81rgfs68ujgf', '.eJxVjDsOwjAQBe_iGln2shtjSnrOEO36gwPIluKkQtwdIqWA9s3Me6mR16WMa0_zOEV1VqAOv5tweKS6gXjnems6tLrMk-hN0Tvt-tpiel529--gcC_feohoJIA4F62QMQzgCdFKZLYhA3sSIM4n7wiZ_TFT8IORjIBAjtT7A-H-N48:1syAfV:ufFuBIz0HfUAKjUfjNaHErE91vows7J_aaR7sTyeAbo', '2024-10-22 13:54:29.436172'),
('b80ehir8jysfrtyk8ghu9y5gva0ilyas', '.eJxVjEEOwiAQRe_C2hCgDAwu3XsGMsBUqoYmpV0Z765NutDtf-_9l4i0rTVunZc4FXEWQZx-t0T5wW0H5U7tNss8t3WZktwVedAur3Ph5-Vw_w4q9fqtgZnBMAafMIN3puSEgRw6O9iB2EAoCrUDHUY_omeXkIlUyUEBWi3eH-XEN6M:1sj0wE:w3l-tstaDpgO3oUO7dTBdpLPpaj-Mth7miZK-rgjqFI', '2024-09-10 18:29:06.843108'),
('c1xgy9bcp228p6pqcf4ainmb8ry5jc1s', '.eJxVjMEOwiAQRP-FsyEsWAoevfsNZNndStXQpLQn47_bJj3oZQ7z3sxbJVyXktYmcxpZXZRVp98uIz2l7oAfWO-Tpqku85j1ruiDNn2bWF7Xw_07KNjKtgYRGwYZJADGaL0XQw6jD0R99hByDADBkLdbROjY-T4ax2zP7KRj9fkC5Gk3iQ:1shBNh:lnL_kNUtPaJscKjiNm7b5nBOX0cgrFGRI4Ts3V5M8MA', '2024-09-05 17:13:53.038053'),
('c60ir59vz41lsp0klr4g4phdtunt63mx', '.eJxVjMEOwiAQRP-FsyEsWAoevfsNZNndStXQpLQn47_bJj3oZQ7z3sxbJVyXktYmcxpZXZRVp98uIz2l7oAfWO-Tpqku85j1ruiDNn2bWF7Xw_07KNjKtgYRGwYZJADGaL0XQw6jD0R99hByDADBkLdbROjY-T4ax2zP7KRj9fkC5Gk3iQ:1siuxu:0pXmvK-6uRUSpalY29C71uln7g3rwxNcDG0xRUCep8U', '2024-09-10 12:06:26.231567'),
('cprfscjtrmuq5kg75rra1fpn1h4w7wa2', '.eJxVjDsOwjAQBe_iGln2shtjSnrOEO36gwPIluKkQtwdIqWA9s3Me6mR16WMa0_zOEV1VqAOv5tweKS6gXjnems6tLrMk-hN0Tvt-tpiel529--gcC_feohoJIA4F62QMQzgCdFKZLYhA3sSIM4n7wiZ_TFT8IORjIBAjtT7A-H-N48:1syADl:GdynYGcvQSD73TvlWFGYP3Z9q6zKRYOhymcwBxxvq-w', '2024-10-22 13:25:49.411385'),
('edeowszhehzl5dsv3scfkfcgcoo5xt8e', '.eJxVjDsOgzAQRO_iOrLwZ21ImZ4zWLvedSCJQMJQRbl7QKJIypn3Zt4q4bYOaauypJHVVVl1-e0I81OmA_ADp_us8zyty0j6UPRJq-5nltftdP8OBqzDvkaKTSSOXBxY05IXn6NtIbDHLkQGBxQMueyKLWINNAX2JNh5b6WL6vMF5fg31w:1siwXr:nQdUi7POBfGyExmmBiKYphSQ7aQPdDQV-nS2qpqTmUQ', '2024-09-10 13:47:39.772701'),
('f1zznuf0v3htkwasutmlsxn1f7a1j6c6', '.eJxVjDsOwjAQBe_iGln2shtjSnrOEO36gwPIluKkQtwdIqWA9s3Me6mR16WMa0_zOEV1VqAOv5tweKS6gXjnems6tLrMk-hN0Tvt-tpiel529--gcC_feohoJIA4F62QMQzgCdFKZLYhA3sSIM4n7wiZ_TFT8IORjIBAjtT7A-H-N48:1spsuw:kksh13WFv7OXnFCO8JRfVcFYtEIF7bIoD_Iy9mFK7t0', '2024-09-29 17:20:10.932756'),
('gdg5p9j0r14d2b6e58i21fjfw94wgody', '.eJxVjEsOAiEQBe_C2pBGaD4u3XsG0g0oowaSYWZlvLtOMgvdvqp6LxFpXWpcR5njlMVJaBCH35EpPUrbSL5Tu3WZelvmieWmyJ0Oeem5PM-7-3dQadRvrVAjOUsFDSBmUsUcQ1J8Zc3GY0DrNdhgDWVWDryDXAgZMYEzwCzeH-nMN2U:1swJhA:gjpvo7Z3lXak-doXei2_1rmFqRuIQL2lTZePcenpnWE', '2024-10-17 11:08:32.214277'),
('hucy6nguukccyx3twvqub3kkk2vmwumv', '.eJxVjMEOwiAQRP-FsyFAQViP3v0GsruAVE2blPZk_HdL0oMeZ96beYuI21rj1vISxyQuwojTb0fIzzx1kB443WfJ87QuI8muyIM2eZtTfl0P9--gYqv72tlcnIZM3pLTgwY1cCBWATKQDYa8Z0A4l6QAvUHDrueB92iwWPH5AtndN-E:1shBCm:uz4Na60KD0HeRENpVAVrif_NdAPh9Om-jN_QK0zHZcA', '2024-09-05 17:02:36.627676'),
('iipg2tr9p3jixaqtu2335zovkn4jaldi', '.eJxVjDsOgzAQRO_iOrLwZ21ImZ4zWLvedSCJQMJQRbl7QKJIypn3Zt4q4bYOaauypJHVVVl1-e0I81OmA_ADp_us8zyty0j6UPRJq-5nltftdP8OBqzDvkaKTSSOXBxY05IXn6NtIbDHLkQGBxQMueyKLWINNAX2JNh5b6WL6vMF5fg31w:1sjdHD:EoE7DhfUVl4gX1tNmb3taB17QktKWrLe48e6BL4o80g', '2024-09-12 11:25:19.993473'),
('jab4dlxyr7eyoa34p25daakp0zf7kqu0', '.eJxVjEsOAiEQBe_C2pBGaD4u3XsG0g0oowaSYWZlvLtOMgvdvqp6LxFpXWpcR5njlMVJaBCH35EpPUrbSL5Tu3WZelvmieWmyJ0Oeem5PM-7-3dQadRvrVAjOUsFDSBmUsUcQ1J8Zc3GY0DrNdhgDWVWDryDXAgZMYEzwCzeH-nMN2U:1t8Jg4:xBlD3SDbT_E0KdvJzfxqqAKAbCgaRHSjnEmceHk0pL8', '2024-11-19 13:33:00.037534'),
('jd1x1pphsjn176h59gm46cmoiignydli', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1stve6:7pliRlkyl-Ym83UO33OkbW9ZMDJsRlEZDRwk6J74TUc', '2024-10-10 21:03:30.140033'),
('mqusnu05jnlhcrevsghiig0tddgb3b01', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1t8MFE:SsO5wqBFDEDozg_EJNs8NZJlI-foY288wTgkgqRRRj4', '2024-11-19 16:17:28.921479'),
('uap8aj77kgjjju5mzocguvao8qlm3wee', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1t94o0:2iADbhGrZAX5knGiPkaP4zrEL5kLwSpjCRuU_3lAP4k', '2024-11-21 15:52:20.566529'),
('uccrk9cw3mgjt2moaz8clki7n44ftc0l', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1srJx0:wjeqkgacjboVaLVhh40AL9fQTq-AX3QfwbUalDHVWuU', '2024-10-03 16:24:14.578052'),
('uin2mv9dx8mu4lgxgrl4iabn7sqebo8v', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1t9134:P0F7SPmqbKilgPlNliWOEyYdxx4uOEnsBVRhFQi3Flk', '2024-11-21 11:51:38.392484'),
('vv9oiy7dbg8mxmxm0dc017nftlbxbo0s', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1smCP9:JwROeA8IGzeLPtvCzovm2CwsBNAOnID8zKZsZmFhk78', '2024-09-19 13:20:07.960941');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos_categoria`
--

CREATE TABLE `produtos_categoria` (
  `category_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos_categoria`
--

INSERT INTO `produtos_categoria` (`category_id`, `name`) VALUES
(1, 'Eletrônico'),
(2, 'Doméstico'),
(3, 'Limpeza');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos_produto`
--

CREATE TABLE `produtos_produto` (
  `product_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `sub_category` varchar(40) NOT NULL,
  `description` varchar(150) NOT NULL,
  `url_name` varchar(40) DEFAULT NULL,
  `estoque` int(100) NOT NULL,
  `price` double NOT NULL,
  `promotion` tinyint(1) NOT NULL,
  `foto_1` varchar(100) DEFAULT NULL,
  `foto_2` varchar(100) DEFAULT NULL,
  `foto_3` varchar(100) DEFAULT NULL,
  `foto_4` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos_produto`
--

INSERT INTO `produtos_produto` (`product_id`, `name`, `categoria_id`, `sub_category`, `description`, `url_name`, `estoque`, `price`, `promotion`, `foto_1`, `foto_2`, `foto_3`, `foto_4`) VALUES
(9, 'Fone de Ouvido Bluetooth', 1, 'Áudio', 'Fone de ouvido sem fio com cancelamento de ruído.', 'fone-de-ouvido-bluetooth', 100, 199.99, 1, 'produtos/514YIKc7Y6L._AC_SY606_.jpg', 'produtos/51gDExNnUxL._AC_SY450_.jpg', 'produtos/41Ujnaq-hHL._AC_SY450_.jpg', 'produtos/61cqPw6yDL._AC_SX450_.jpg'),
(10, 'Monitor 4K Ultra HD', 1, 'Monitores', 'Monitor com resolução 4K e suporte a HDR.', 'monitor-4k-ultra-hd', 50, 1299.9, 0, 'produtos/monitor-samsung-4k.jpeg', 'produtos/monitor-samsung-4k_2.jpeg', 'produtos/monitor-samsung-4k_3.jpeg', 'produtos/monitor-samsung-4k_4.jpeg'),
(11, 'Notebook Gamer', 1, 'Computadores', 'Notebook potente com placa de vídeo dedicada para jogos.', 'notebook-gamer', 30, 4999.9, 1, 'produtos/51Xrp8x7KzL._AC_SX522_.jpg', 'produtos/519QIaXBGjL._AC_SX522_.jpg', 'produtos/61GKHNMNLxL._AC_SX522_.jpg', 'produtos/613PZt698DL._AC_SX522_.jpg'),
(12, 'Câmera de Segurança Wi-Fi', 1, 'Segurança', 'Câmera de vigilância com visualização remota pelo celular.', 'camera-de-seguranca-wi-fi', 150, 149.99, 0, 'produtos/61XZlLdPRbL.__AC_SX300_SY300_QL70_ML2__Kalp8z7.jpg', 'produtos/71vwRhR1VL._AC_SX522__hxUEz2S.jpg', 'produtos/71StAp6vUsL._AC_SX522__xIXr10U.jpg', 'produtos/71loafHd-0L._AC_SX522__8LCXzYW.jpg'),
(13, 'Carregador Rápido USB-C', 1, 'Acessórios', 'Carregador com tecnologia de carga rápida para smartphones e tablets.', 'carregador-rapido-usb-c', 200, 79.9, 1, 'produtos/512Ai3vCMDL._AC_SX522__K5SUuBt.jpg', 'produtos/615UirVVvBL._AC_SX522__c0jVm1p.jpg', 'produtos/61zf9gV3StL._AC_SX522__aZJRKBU.jpg', 'produtos/61RtJKoUn4L._AC_SX522__2vBkHkz.jpg'),
(14, 'Geladeira Frost Free', 2, 'Eletrodomésticos', 'Geladeira moderna com tecnologia Frost Free e controle de temperatura.', 'geladeira-frost-free', 40, 2999.9, 0, 'produtos/41mpGL3MMOL._AC_SX522_.jpg', 'produtos/317DDhSXx2L.__AC_SX300_SY300_QL70_ML2_.jpg', 'produtos/61hWpeDr5ZL._AC_SX522_.jpg', 'produtos/51shegYAL1L._AC_SX522_.jpg'),
(16, 'Máquina de Lavar 12kg', 2, 'Lavanderia', 'Máquina de lavar roupas com capacidade de 12kg e várias opções de lavagem.', 'maquina-de-lavar-12kg', 30, 1999.9, 1, 'produtos/41Jz0XwOq6L._AC_SX466_.jpg', 'produtos/51XUZUaX32L._AC_SX466_.jpg', 'produtos/51RAdrX3QL._AC_SX466_.jpg', 'produtos/61SwlKumjcL._AC_SX466_.jpg'),
(17, 'Forno Micro-ondas', 2, 'Cozinha', 'Micro-ondas com diversas funções de aquecimento e descongelamento.', 'forno-micro-ondas', 100, 499.9, 1, 'produtos/41BhqMPBn3L._AC_SX466_.jpg', 'produtos/51ckxzyH6WL._AC_SX466_.jpg', 'produtos/519NZRstKWL._AC_SX466_.jpg', 'produtos/51yO4XnZsYL._AC_SX466_.jpg'),
(18, 'Ventilador de Mesa 40cm', 2, 'Climatização', 'Ventilador de mesa com três velocidades e oscilação automática.', 'ventilador-de-mesa-40cm', 150, 179.9, 0, 'produtos/81r2JLRu5L._AC_SY300_SX300_.jpg', 'produtos/61qlYmnBfEL._AC_SY606_.jpg', 'produtos/71DC19eYVL._AC_SX425_.jpg', 'produtos/71L-61yOQZL._AC_SX425_.jpg'),
(19, 'Detergente Líquido 5L', 3, 'Cozinha', 'Detergente biodegradável para limpeza de louças.', 'detergente-liquido-5l', 500, 29.9, 1, 'produtos/71iwc-kCN6L.__AC_SX300_SY300_QL70_ML2_.jpg', '', '', ''),
(20, 'Desinfetante Multiuso', 3, 'Produtos de Limpeza', 'Desinfetante para superfícies com ação bactericida.', 'desinfetante-multiuso', 300, 19.9, 0, 'produtos/41JMkvdEsNL._AC_SX425_.jpg', 'produtos/51zAkd4QDWL._AC_SX425_.jpg', 'produtos/51lLrVkfqAL._AC_SX425_.jpg', ''),
(21, 'Esfregão Giratório', 3, 'Acessórios', 'Esfregão com balde giratório para facilitar a limpeza do chão.', 'esfregao-giratorio', 120, 99.9, 1, 'produtos/6162CgGP0L._AC_SY300_SX300_.jpg', 'produtos/71HNLLouJML._AC_SY450_.jpg', 'produtos/71hFjaDD9rL._AC_SY450_.jpg', ''),
(22, 'Limpa Vidros Spray', 3, 'Produtos de Limpeza', 'Produto especial para limpeza e brilho em vidros.', 'limpa-vidros-spray', 200, 24.9, 0, 'produtos/61GWEj0j16L.__AC_SX300_SY300_QL70_ML2_.jpg', 'produtos/71UcJK2a40L._AC_SY355_.jpg', 'produtos/71ZzlrutfnL._AC_SY355_.jpg', ''),
(23, 'Sabão em Pó 2kg', 3, 'Lavanderia', 'Sabão em pó eficaz para remoção de manchas e sujeiras.', 'sabao-em-po-2kg', 400, 39.9, 1, 'produtos/71Gb18PPs5L.__AC_SX300_SY300_QL70_ML2_.jpg', 'produtos/61AMsdP9XtL._AC_SX425_.jpg', 'produtos/71-ygFAW97L._AC_SX425_.jpg', ''),
(24, 'Plano Mensal', NULL, 'Assinatura', 'Acesso mensal a todos os conteúdos.', 'plano-mensal', 999999999, 40, 0, '', '', '', ''),
(25, 'Plano Semestral', NULL, 'Assinatura', 'Acesso por 6 meses com desconto.', 'plano-semestral', 999999999, 200, 0, '', '', '', ''),
(26, 'Plano Anual', NULL, 'Assinatura', 'Acesso por 1 ano com o maior desconto.', 'plano-anual', 999999999, 400, 0, '', '', '', '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(400) NOT NULL,
  `is_verified` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `last_login` datetime DEFAULT current_timestamp(),
  `is_superuser` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `first_name`, `last_name`, `email`, `password`, `is_verified`, `is_active`, `is_staff`, `last_login`, `is_superuser`) VALUES
(1, 'Felipe', 'Marques', 'usuariosuper@exemplo.com', 'pbkdf2_sha256$720000$6LFXfD6nztx3Wh9CHTtP0R$wT7n0xeVAAM/YuomqIz6wvrQmgitHJWVfKzbA8TLJRY=', 0, 1, 1, '2024-11-07 15:52:20', 1),
(2, 'Lucas', 'Miguel Leite', 'lucasleite.miguel10@gmail.com', 'pbkdf2_sha256$720000$dmseukqxuGzFwxInFzgtu6$JOKTQtZ+KLPoca9+wdc1W7W/nwjg4i5OtcNCoSFWsVI=', 0, 1, 1, '2024-11-12 20:25:46', 1),
(11, 'teste', 'ssss', 'teste222@gmail.com', 'pbkdf2_sha256$720000$ksLoofM4g4xuK8R5aqMMJZ$nSbQjwjDtjyLtJxI3Y2QNN7RXOn3qeYtXNwJgOhoJMM=', 0, 1, 0, NULL, 0),
(29, 'afd', 'adsf', 'lucas1@gmail.com', 'pbkdf2_sha256$720000$PkeIrbMFiFTkHJyvFEy8ux$MHumSXU+X2wcO5O0VokLjwT+fL2G6MXjVWHLI+60338=', 0, 1, 0, '2024-09-15 17:19:01', 0),
(30, 'lucas', 'leite', 'felipe12345@gmail.com', 'pbkdf2_sha256$720000$7RdcvoTqStaHcs9EaQ1sFs$E2s8wIm/oO47P4zicyi8Dy2LhifFSLBCFtJlg4WVZHo=', 0, 1, 1, '2024-11-05 16:04:23', 0),
(31, 'Lucas', 'Miguel', 'l@gmail.com', 'pbkdf2_sha256$720000$anVuOFTBmYYqFGUzOZ0RHt$WMJK9JCqQnVztqh4Zmde9cckvuIk7ymKvbcT/2c9NWQ=', 0, 1, 0, '2024-11-08 21:55:43', 0),
(32, 'Lucas', 'Miguel', 'lucas@gmail.com', 'pbkdf2_sha256$720000$5Rw5uX1ZiNzXYIXGkGo9jL$Rc3XDp6NObRH8J05OYx+o64vi1fY1W2HOSo5JXKbIJo=', 0, 1, 0, '2024-11-08 22:27:12', 0),
(33, 'teste', 'jr', 'teste@gmail.com', 'pbkdf2_sha256$720000$lXjP9DU5Tr88CNyauF0RvW$FJTJOO25Sfy9XEXTa3vVYpzf/X7Ue2k0qWHuCr7QX/Q=', 0, 1, 0, '2024-11-12 23:29:46', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_carrinho`
--

CREATE TABLE `usuario_carrinho` (
  `cart_id` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario_carrinho`
--

INSERT INTO `usuario_carrinho` (`cart_id`, `produto_id`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 1, 2, '2024-09-10 10:24:51', '2024-09-10 10:26:09'),
(5, 0, 11, '2024-09-10 14:19:01', '2024-09-10 14:19:01'),
(6, 0, 1, '2024-09-10 14:41:52', '2024-09-10 14:44:40'),
(7, 0, 30, '2024-10-03 14:20:57', '2024-10-03 14:20:57'),
(8, 0, 31, '2024-11-09 00:55:43', '2024-11-09 00:55:43'),
(9, 0, 32, '2024-11-09 01:07:12', '2024-11-09 01:07:12'),
(10, 0, 33, '2024-11-12 23:23:18', '2024-11-12 23:23:18');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_carrinhoitem`
--

CREATE TABLE `usuario_carrinhoitem` (
  `cartitem_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price_ind` double(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_groups`
--

CREATE TABLE `usuario_groups` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario_groups`
--

INSERT INTO `usuario_groups` (`id`, `user_id`, `group_id`) VALUES
(1, 2, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_user_permissions`
--

CREATE TABLE `usuario_user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario_user_permissions`
--

INSERT INTO `usuario_user_permissions` (`id`, `user_id`, `permission_id`) VALUES
(1, 2, 7);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices de tabela `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Índices de tabela `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Índices de tabela `carroussel_carroussel`
--
ALTER TABLE `carroussel_carroussel`
  ADD PRIMARY KEY (`carroussel_id`),
  ADD UNIQUE KEY `url` (`url`) USING HASH;

--
-- Índices de tabela `compra_pedido`
--
ALTER TABLE `compra_pedido`
  ADD PRIMARY KEY (`delivery_id`),
  ADD KEY `user_id_id` (`user_id`);

--
-- Índices de tabela `compra_pedidoitem`
--
ALTER TABLE `compra_pedidoitem`
  ADD PRIMARY KEY (`pedidoItem_id`),
  ADD KEY `produto` (`produto_id`),
  ADD KEY `pedido_id` (`pedido_id`);

--
-- Índices de tabela `corsheaders_corsmodel`
--
ALTER TABLE `corsheaders_corsmodel`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `content_type_id` (`content_type_id`);

--
-- Índices de tabela `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Índices de tabela `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Índices de tabela `produtos_categoria`
--
ALTER TABLE `produtos_categoria`
  ADD PRIMARY KEY (`category_id`);

--
-- Índices de tabela `produtos_produto`
--
ALTER TABLE `produtos_produto`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `categoria` (`categoria_id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuario_carrinho`
--
ALTER TABLE `usuario_carrinho`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`produto_id`);

--
-- Índices de tabela `usuario_carrinhoitem`
--
ALTER TABLE `usuario_carrinhoitem`
  ADD PRIMARY KEY (`cartitem_id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `produto_id` (`produto_id`);

--
-- Índices de tabela `usuario_groups`
--
ALTER TABLE `usuario_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `group_id` (`group_id`);

--
-- Índices de tabela `usuario_user_permissions`
--
ALTER TABLE `usuario_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `permission_id` (`permission_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de tabela `carroussel_carroussel`
--
ALTER TABLE `carroussel_carroussel`
  MODIFY `carroussel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `compra_pedido`
--
ALTER TABLE `compra_pedido`
  MODIFY `delivery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT de tabela `compra_pedidoitem`
--
ALTER TABLE `compra_pedidoitem`
  MODIFY `pedidoItem_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de tabela `corsheaders_corsmodel`
--
ALTER TABLE `corsheaders_corsmodel`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de tabela `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `produtos_categoria`
--
ALTER TABLE `produtos_categoria`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `produtos_produto`
--
ALTER TABLE `produtos_produto`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de tabela `usuario_carrinho`
--
ALTER TABLE `usuario_carrinho`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `usuario_carrinhoitem`
--
ALTER TABLE `usuario_carrinhoitem`
  MODIFY `cartitem_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de tabela `usuario_groups`
--
ALTER TABLE `usuario_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `usuario_user_permissions`
--
ALTER TABLE `usuario_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Restrições para tabelas `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Restrições para tabelas `compra_pedido`
--
ALTER TABLE `compra_pedido`
  ADD CONSTRAINT `user_id_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`);

--
-- Restrições para tabelas `compra_pedidoitem`
--
ALTER TABLE `compra_pedidoitem`
  ADD CONSTRAINT `pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `compra_pedido` (`delivery_id`),
  ADD CONSTRAINT `produto` FOREIGN KEY (`produto_id`) REFERENCES `produtos_produto` (`product_id`);

--
-- Restrições para tabelas `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `django_admin_log_ibfk_2` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Restrições para tabelas `produtos_produto`
--
ALTER TABLE `produtos_produto`
  ADD CONSTRAINT `categoria` FOREIGN KEY (`categoria_id`) REFERENCES `produtos_categoria` (`category_id`);

--
-- Restrições para tabelas `usuario_carrinhoitem`
--
ALTER TABLE `usuario_carrinhoitem`
  ADD CONSTRAINT `cart_id` FOREIGN KEY (`cart_id`) REFERENCES `usuario_carrinho` (`cart_id`),
  ADD CONSTRAINT `produto_id` FOREIGN KEY (`produto_id`) REFERENCES `produtos_produto` (`product_id`);

--
-- Restrições para tabelas `usuario_groups`
--
ALTER TABLE `usuario_groups`
  ADD CONSTRAINT `usuario_groups_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `usuario_groups_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Restrições para tabelas `usuario_user_permissions`
--
ALTER TABLE `usuario_user_permissions`
  ADD CONSTRAINT `usuario_user_permissions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `usuario_user_permissions_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
