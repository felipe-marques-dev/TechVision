-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08/10/2024 às 16:22
-- Versão do servidor: 11.5.2-MariaDB
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
(60, 'Can view categoria', 20, 'view_categoria');

-- --------------------------------------------------------

--
-- Estrutura para tabela `compra_pedido`
--

CREATE TABLE `compra_pedido` (
  `delivery_id` int(11) NOT NULL,
  `endereco_id` int(11) DEFAULT NULL,
  `transportadora_id` int(11) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `frete` double NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `compra_transportadora`
--

CREATE TABLE `compra_transportadora` (
  `carrier_id` int(11) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `cnpj` varchar(14) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(71, '2024-10-03 11:20:57', 1, 14, '7', 'Carrinho object (7)', 1, '[{\"added\": {}}]');

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
(8, 'compra', 'carrier'),
(9, 'compra', 'delivery'),
(12, 'compra', 'pedido'),
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
(28, 'usuario', '0002_carrinhoitem_price_ind', '2024-10-08 14:16:01.084249');

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
('ajc4h4w8983x2rimbfwe9xj7bfx6nx23', '.eJxVjEsOAiEQBe_C2pBGaD4u3XsG0g0oowaSYWZlvLtOMgvdvqp6LxFpXWpcR5njlMVJaBCH35EpPUrbSL5Tu3WZelvmieWmyJ0Oeem5PM-7-3dQadRvrVAjOUsFDSBmUsUcQ1J8Zc3GY0DrNdhgDWVWDryDXAgZMYEzwCzeH-nMN2U:1syAcm:X2tFlJqQjvCWyMHss56CfqTHnQScsC4_kojYkh4jWtg', '2024-10-22 13:51:40.634469'),
('b80ehir8jysfrtyk8ghu9y5gva0ilyas', '.eJxVjEEOwiAQRe_C2hCgDAwu3XsGMsBUqoYmpV0Z765NutDtf-_9l4i0rTVunZc4FXEWQZx-t0T5wW0H5U7tNss8t3WZktwVedAur3Ph5-Vw_w4q9fqtgZnBMAafMIN3puSEgRw6O9iB2EAoCrUDHUY_omeXkIlUyUEBWi3eH-XEN6M:1sj0wE:w3l-tstaDpgO3oUO7dTBdpLPpaj-Mth7miZK-rgjqFI', '2024-09-10 18:29:06.843108'),
('c1xgy9bcp228p6pqcf4ainmb8ry5jc1s', '.eJxVjMEOwiAQRP-FsyEsWAoevfsNZNndStXQpLQn47_bJj3oZQ7z3sxbJVyXktYmcxpZXZRVp98uIz2l7oAfWO-Tpqku85j1ruiDNn2bWF7Xw_07KNjKtgYRGwYZJADGaL0XQw6jD0R99hByDADBkLdbROjY-T4ax2zP7KRj9fkC5Gk3iQ:1shBNh:lnL_kNUtPaJscKjiNm7b5nBOX0cgrFGRI4Ts3V5M8MA', '2024-09-05 17:13:53.038053'),
('c60ir59vz41lsp0klr4g4phdtunt63mx', '.eJxVjMEOwiAQRP-FsyEsWAoevfsNZNndStXQpLQn47_bJj3oZQ7z3sxbJVyXktYmcxpZXZRVp98uIz2l7oAfWO-Tpqku85j1ruiDNn2bWF7Xw_07KNjKtgYRGwYZJADGaL0XQw6jD0R99hByDADBkLdbROjY-T4ax2zP7KRj9fkC5Gk3iQ:1siuxu:0pXmvK-6uRUSpalY29C71uln7g3rwxNcDG0xRUCep8U', '2024-09-10 12:06:26.231567'),
('edeowszhehzl5dsv3scfkfcgcoo5xt8e', '.eJxVjDsOgzAQRO_iOrLwZ21ImZ4zWLvedSCJQMJQRbl7QKJIypn3Zt4q4bYOaauypJHVVVl1-e0I81OmA_ADp_us8zyty0j6UPRJq-5nltftdP8OBqzDvkaKTSSOXBxY05IXn6NtIbDHLkQGBxQMueyKLWINNAX2JNh5b6WL6vMF5fg31w:1siwXr:nQdUi7POBfGyExmmBiKYphSQ7aQPdDQV-nS2qpqTmUQ', '2024-09-10 13:47:39.772701'),
('f1zznuf0v3htkwasutmlsxn1f7a1j6c6', '.eJxVjDsOwjAQBe_iGln2shtjSnrOEO36gwPIluKkQtwdIqWA9s3Me6mR16WMa0_zOEV1VqAOv5tweKS6gXjnems6tLrMk-hN0Tvt-tpiel529--gcC_feohoJIA4F62QMQzgCdFKZLYhA3sSIM4n7wiZ_TFT8IORjIBAjtT7A-H-N48:1spsuw:kksh13WFv7OXnFCO8JRfVcFYtEIF7bIoD_Iy9mFK7t0', '2024-09-29 17:20:10.932756'),
('gdg5p9j0r14d2b6e58i21fjfw94wgody', '.eJxVjEsOAiEQBe_C2pBGaD4u3XsG0g0oowaSYWZlvLtOMgvdvqp6LxFpXWpcR5njlMVJaBCH35EpPUrbSL5Tu3WZelvmieWmyJ0Oeem5PM-7-3dQadRvrVAjOUsFDSBmUsUcQ1J8Zc3GY0DrNdhgDWVWDryDXAgZMYEzwCzeH-nMN2U:1swJhA:gjpvo7Z3lXak-doXei2_1rmFqRuIQL2lTZePcenpnWE', '2024-10-17 11:08:32.214277'),
('hucy6nguukccyx3twvqub3kkk2vmwumv', '.eJxVjMEOwiAQRP-FsyFAQViP3v0GsruAVE2blPZk_HdL0oMeZ96beYuI21rj1vISxyQuwojTb0fIzzx1kB443WfJ87QuI8muyIM2eZtTfl0P9--gYqv72tlcnIZM3pLTgwY1cCBWATKQDYa8Z0A4l6QAvUHDrueB92iwWPH5AtndN-E:1shBCm:uz4Na60KD0HeRENpVAVrif_NdAPh9Om-jN_QK0zHZcA', '2024-09-05 17:02:36.627676'),
('iipg2tr9p3jixaqtu2335zovkn4jaldi', '.eJxVjDsOgzAQRO_iOrLwZ21ImZ4zWLvedSCJQMJQRbl7QKJIypn3Zt4q4bYOaauypJHVVVl1-e0I81OmA_ADp_us8zyty0j6UPRJq-5nltftdP8OBqzDvkaKTSSOXBxY05IXn6NtIbDHLkQGBxQMueyKLWINNAX2JNh5b6WL6vMF5fg31w:1sjdHD:EoE7DhfUVl4gX1tNmb3taB17QktKWrLe48e6BL4o80g', '2024-09-12 11:25:19.993473'),
('jd1x1pphsjn176h59gm46cmoiignydli', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1stve6:7pliRlkyl-Ym83UO33OkbW9ZMDJsRlEZDRwk6J74TUc', '2024-10-10 21:03:30.140033'),
('uccrk9cw3mgjt2moaz8clki7n44ftc0l', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1srJx0:wjeqkgacjboVaLVhh40AL9fQTq-AX3QfwbUalDHVWuU', '2024-10-03 16:24:14.578052'),
('uijp1cps4du8ov2h9wauq4u1fts1gm9r', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1sy8TR:EZJilCL2dmRpmtE4-vp7v4RbMsnVgGQ0mq5khc_vEOk', '2024-10-22 11:33:53.250792'),
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
  `categoria_id` int(11) NOT NULL,
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
(15, 'Aspirador de Pó Robô', 2, 'Limpeza', 'Aspirador robô que limpa automaticamente sua casa.', 'aspirador-de-po-robo', 80, 1199.9, 1, 'produtos/41qZ-qhBWL._AC_SX522__EehB8Fd.jpg', 'produtos/41Lxpzp0i1L._AC_SX522__cj6MEAp.jpg', 'produtos/41dIHJQEoOL._AC_SX522__E3qBPPN.jpg', 'produtos/61Njenu4dHL._AC_SX522__A01UPMx.jpg'),
(16, 'Máquina de Lavar 12kg', 2, 'Lavanderia', 'Máquina de lavar roupas com capacidade de 12kg e várias opções de lavagem.', 'maquina-de-lavar-12kg', 30, 1999.9, 1, 'produtos/41Jz0XwOq6L._AC_SX466_.jpg', 'produtos/51XUZUaX32L._AC_SX466_.jpg', 'produtos/51RAdrX3QL._AC_SX466_.jpg', 'produtos/61SwlKumjcL._AC_SX466_.jpg'),
(17, 'Forno Micro-ondas', 2, 'Cozinha', 'Micro-ondas com diversas funções de aquecimento e descongelamento.', 'forno-micro-ondas', 100, 499.9, 1, 'produtos/41BhqMPBn3L._AC_SX466_.jpg', 'produtos/51ckxzyH6WL._AC_SX466_.jpg', 'produtos/519NZRstKWL._AC_SX466_.jpg', 'produtos/51yO4XnZsYL._AC_SX466_.jpg'),
(18, 'Ventilador de Mesa 40cm', 2, 'Climatização', 'Ventilador de mesa com três velocidades e oscilação automática.', 'ventilador-de-mesa-40cm', 150, 179.9, 0, 'produtos/81r2JLRu5L._AC_SY300_SX300_.jpg', 'produtos/61qlYmnBfEL._AC_SY606_.jpg', 'produtos/71DC19eYVL._AC_SX425_.jpg', 'produtos/71L-61yOQZL._AC_SX425_.jpg'),
(19, 'Detergente Líquido 5L', 3, 'Cozinha', 'Detergente biodegradável para limpeza de louças.', 'detergente-liquido-5l', 500, 29.9, 1, 'produtos/71iwc-kCN6L.__AC_SX300_SY300_QL70_ML2_.jpg', '', '', ''),
(20, 'Desinfetante Multiuso', 3, 'Produtos de Limpeza', 'Desinfetante para superfícies com ação bactericida.', 'desinfetante-multiuso', 300, 19.9, 0, 'produtos/41JMkvdEsNL._AC_SX425_.jpg', 'produtos/51zAkd4QDWL._AC_SX425_.jpg', 'produtos/51lLrVkfqAL._AC_SX425_.jpg', ''),
(21, 'Esfregão Giratório', 3, 'Acessórios', 'Esfregão com balde giratório para facilitar a limpeza do chão.', 'esfregao-giratorio', 120, 99.9, 1, 'produtos/6162CgGP0L._AC_SY300_SX300_.jpg', 'produtos/71HNLLouJML._AC_SY450_.jpg', 'produtos/71hFjaDD9rL._AC_SY450_.jpg', ''),
(22, 'Limpa Vidros Spray', 3, 'Produtos de Limpeza', 'Produto especial para limpeza e brilho em vidros.', 'limpa-vidros-spray', 200, 24.9, 0, 'produtos/61GWEj0j16L.__AC_SX300_SY300_QL70_ML2_.jpg', 'produtos/71UcJK2a40L._AC_SY355_.jpg', 'produtos/71ZzlrutfnL._AC_SY355_.jpg', ''),
(23, 'Sabão em Pó 2kg', 3, 'Lavanderia', 'Sabão em pó eficaz para remoção de manchas e sujeiras.', 'sabao-em-po-2kg', 400, 39.9, 1, 'produtos/71Gb18PPs5L.__AC_SX300_SY300_QL70_ML2_.jpg', 'produtos/61AMsdP9XtL._AC_SX425_.jpg', 'produtos/71-ygFAW97L._AC_SX425_.jpg', '');

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
(1, 'Nome', 'Sobrenome', 'usuariosuper@exemplo.com', 'pbkdf2_sha256$720000$6LFXfD6nztx3Wh9CHTtP0R$wT7n0xeVAAM/YuomqIz6wvrQmgitHJWVfKzbA8TLJRY=', 0, 1, 1, '2024-10-08 11:33:53', 1),
(2, 'Lucas', 'Leite', 'lucasleite.miguel10@gmail.com', 'pbkdf2_sha256$720000$dmseukqxuGzFwxInFzgtu6$JOKTQtZ+KLPoca9+wdc1W7W/nwjg4i5OtcNCoSFWsVI=', 0, 1, 1, '2024-09-15 17:20:10', 1),
(11, 'teste', 'ssss', 'teste222@gmail.com', 'pbkdf2_sha256$720000$ksLoofM4g4xuK8R5aqMMJZ$nSbQjwjDtjyLtJxI3Y2QNN7RXOn3qeYtXNwJgOhoJMM=', 0, 1, 0, NULL, 0),
(29, 'afd', 'adsf', 'lucas1@gmail.com', 'pbkdf2_sha256$720000$PkeIrbMFiFTkHJyvFEy8ux$MHumSXU+X2wcO5O0VokLjwT+fL2G6MXjVWHLI+60338=', 0, 1, 0, '2024-09-15 17:19:01', 0),
(30, 'lucas', 'leite', 'felipe12345@gmail.com', 'pbkdf2_sha256$720000$7RdcvoTqStaHcs9EaQ1sFs$E2s8wIm/oO47P4zicyi8Dy2LhifFSLBCFtJlg4WVZHo=', 0, 1, 1, '2024-10-08 13:51:40', 0);

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
(1, 1, 2, '2024-09-10 10:24:51', '2024-09-10 10:26:09'),
(2, 1, 2, '2024-09-10 10:24:51', '2024-09-10 10:26:09'),
(5, 0, 11, '2024-09-10 14:19:01', '2024-09-10 14:19:01'),
(6, 0, 1, '2024-09-10 14:41:52', '2024-09-10 14:44:40'),
(7, 0, 30, '2024-10-03 14:20:57', '2024-10-03 14:20:57');

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

--
-- Despejando dados para a tabela `usuario_carrinhoitem`
--

INSERT INTO `usuario_carrinhoitem` (`cartitem_id`, `cart_id`, `produto_id`, `quantity`, `price_ind`) VALUES
(6, 7, 15, 2, 200),
(11, 7, 12, 1, 150);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_endereco`
--

CREATE TABLE `usuario_endereco` (
  `adress_id` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  `street` varchar(20) NOT NULL,
  `block` varchar(20) NOT NULL,
  `reference` varchar(30) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `state` varchar(2) NOT NULL,
  `number` int(5) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario_endereco`
--

INSERT INTO `usuario_endereco` (`adress_id`, `city`, `street`, `block`, `reference`, `cep`, `state`, `number`, `user_id`) VALUES
(2, 'asdad', 'asdadd', 'adadas', 'sdadad', 'asdasds', 'ad', 213213, 2);

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
-- Índices de tabela `compra_pedido`
--
ALTER TABLE `compra_pedido`
  ADD PRIMARY KEY (`delivery_id`),
  ADD KEY `adress_id` (`endereco_id`),
  ADD KEY `carrier_id` (`transportadora_id`),
  ADD KEY `user_id_id` (`user_id`);

--
-- Índices de tabela `compra_transportadora`
--
ALTER TABLE `compra_transportadora`
  ADD PRIMARY KEY (`carrier_id`);

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
-- Índices de tabela `usuario_endereco`
--
ALTER TABLE `usuario_endereco`
  ADD PRIMARY KEY (`adress_id`),
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de tabela `compra_pedido`
--
ALTER TABLE `compra_pedido`
  MODIFY `delivery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `compra_transportadora`
--
ALTER TABLE `compra_transportadora`
  MODIFY `carrier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `corsheaders_corsmodel`
--
ALTER TABLE `corsheaders_corsmodel`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de tabela `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de tabela `produtos_categoria`
--
ALTER TABLE `produtos_categoria`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `produtos_produto`
--
ALTER TABLE `produtos_produto`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `usuario_carrinho`
--
ALTER TABLE `usuario_carrinho`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `usuario_carrinhoitem`
--
ALTER TABLE `usuario_carrinhoitem`
  MODIFY `cartitem_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `usuario_endereco`
--
ALTER TABLE `usuario_endereco`
  MODIFY `adress_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  ADD CONSTRAINT `adress_id` FOREIGN KEY (`endereco_id`) REFERENCES `usuario_endereco` (`adress_id`),
  ADD CONSTRAINT `carrier_id` FOREIGN KEY (`transportadora_id`) REFERENCES `compra_transportadora` (`carrier_id`),
  ADD CONSTRAINT `user_id_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`);

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
-- Restrições para tabelas `usuario_endereco`
--
ALTER TABLE `usuario_endereco`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`);

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
