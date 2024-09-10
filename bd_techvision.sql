-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10/09/2024 às 20:56
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
(48, 'Can view log entry', 17, 'view_logentry');

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
(40, '2024-09-10 11:44:40', 1, 14, '6', 'Carrinho object (6)', 2, '[{\"changed\": {\"name\": \"carrinho item\", \"object\": \"Fone de Ouvido sem fio JBL Wave Buds - 3\", \"fields\": [\"Quantity\"]}}]');

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
(21, 'admin', '0003_logentry_add_action_flag_choices', '2024-09-10 11:26:01.482517');

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
('21512wjrhdedbrsalilq50dboqx0ltni', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1sny1N:paKFe5XD62wkAAj4GNHexeAPylbnplIdqEpXgcP176A', '2024-09-24 10:22:53.560445'),
('b80ehir8jysfrtyk8ghu9y5gva0ilyas', '.eJxVjEEOwiAQRe_C2hCgDAwu3XsGMsBUqoYmpV0Z765NutDtf-_9l4i0rTVunZc4FXEWQZx-t0T5wW0H5U7tNss8t3WZktwVedAur3Ph5-Vw_w4q9fqtgZnBMAafMIN3puSEgRw6O9iB2EAoCrUDHUY_omeXkIlUyUEBWi3eH-XEN6M:1sj0wE:w3l-tstaDpgO3oUO7dTBdpLPpaj-Mth7miZK-rgjqFI', '2024-09-10 18:29:06.843108'),
('c1xgy9bcp228p6pqcf4ainmb8ry5jc1s', '.eJxVjMEOwiAQRP-FsyEsWAoevfsNZNndStXQpLQn47_bJj3oZQ7z3sxbJVyXktYmcxpZXZRVp98uIz2l7oAfWO-Tpqku85j1ruiDNn2bWF7Xw_07KNjKtgYRGwYZJADGaL0XQw6jD0R99hByDADBkLdbROjY-T4ax2zP7KRj9fkC5Gk3iQ:1shBNh:lnL_kNUtPaJscKjiNm7b5nBOX0cgrFGRI4Ts3V5M8MA', '2024-09-05 17:13:53.038053'),
('c60ir59vz41lsp0klr4g4phdtunt63mx', '.eJxVjMEOwiAQRP-FsyEsWAoevfsNZNndStXQpLQn47_bJj3oZQ7z3sxbJVyXktYmcxpZXZRVp98uIz2l7oAfWO-Tpqku85j1ruiDNn2bWF7Xw_07KNjKtgYRGwYZJADGaL0XQw6jD0R99hByDADBkLdbROjY-T4ax2zP7KRj9fkC5Gk3iQ:1siuxu:0pXmvK-6uRUSpalY29C71uln7g3rwxNcDG0xRUCep8U', '2024-09-10 12:06:26.231567'),
('edeowszhehzl5dsv3scfkfcgcoo5xt8e', '.eJxVjDsOgzAQRO_iOrLwZ21ImZ4zWLvedSCJQMJQRbl7QKJIypn3Zt4q4bYOaauypJHVVVl1-e0I81OmA_ADp_us8zyty0j6UPRJq-5nltftdP8OBqzDvkaKTSSOXBxY05IXn6NtIbDHLkQGBxQMueyKLWINNAX2JNh5b6WL6vMF5fg31w:1siwXr:nQdUi7POBfGyExmmBiKYphSQ7aQPdDQV-nS2qpqTmUQ', '2024-09-10 13:47:39.772701'),
('hucy6nguukccyx3twvqub3kkk2vmwumv', '.eJxVjMEOwiAQRP-FsyFAQViP3v0GsruAVE2blPZk_HdL0oMeZ96beYuI21rj1vISxyQuwojTb0fIzzx1kB443WfJ87QuI8muyIM2eZtTfl0P9--gYqv72tlcnIZM3pLTgwY1cCBWATKQDYa8Z0A4l6QAvUHDrueB92iwWPH5AtndN-E:1shBCm:uz4Na60KD0HeRENpVAVrif_NdAPh9Om-jN_QK0zHZcA', '2024-09-05 17:02:36.627676'),
('iipg2tr9p3jixaqtu2335zovkn4jaldi', '.eJxVjDsOgzAQRO_iOrLwZ21ImZ4zWLvedSCJQMJQRbl7QKJIypn3Zt4q4bYOaauypJHVVVl1-e0I81OmA_ADp_us8zyty0j6UPRJq-5nltftdP8OBqzDvkaKTSSOXBxY05IXn6NtIbDHLkQGBxQMueyKLWINNAX2JNh5b6WL6vMF5fg31w:1sjdHD:EoE7DhfUVl4gX1tNmb3taB17QktKWrLe48e6BL4o80g', '2024-09-12 11:25:19.993473'),
('vv9oiy7dbg8mxmxm0dc017nftlbxbo0s', '.eJxVjDsOgzAQRO_iOrLwH6dMzxmsXe86JolAwlBFuXtAokjKmfdm3iLBtta0NV7SSOIqlLj8dgj5ydMB6AHTfZZ5ntZlRHko8qRNDjPx63a6fwcVWt3XgKELSIGKcVr1aNnmoHvnyUL0gZxx6BWabIourJXritsTQ7RWcwzi8wXlXzfW:1smCP9:JwROeA8IGzeLPtvCzovm2CwsBNAOnID8zKZsZmFhk78', '2024-09-19 13:20:07.960941');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos_produto`
--

CREATE TABLE `produtos_produto` (
  `product_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `category` varchar(40) NOT NULL,
  `sub_category` varchar(40) NOT NULL,
  `description` varchar(150) NOT NULL,
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

INSERT INTO `produtos_produto` (`product_id`, `name`, `category`, `sub_category`, `description`, `estoque`, `price`, `promotion`, `foto_1`, `foto_2`, `foto_3`, `foto_4`) VALUES
(1, 'Fone de Ouvido sem fio JBL Wave Buds', 'Eletrônicos', 'Fones de Ouvido', 'Fone de ouvido sem fio via bluetooth, carregamento com contato. Acompanha fio de carregamento e manual de instruções.', 100, 400, 0, 'produtos/fone_jbl_1.jpg', 'produtos/fone_jbl_2.jpg', 'produtos/fone_jbl_3.jpg', 'produtos/fone_jbl_4.jfif'),
(2, 'TV Box XPlus', 'Eletrônicos', 'Assinatura', 'Tv Box XPlus com sistema Android imbutido e controle com sensor de movimento. Assinatura mensal e anual com valores acessíveis.', 150, 300, 0, 'produtos/tvbox_1.jpeg', 'produtos/tvbox_2.jpg', 'produtos/tvbox_3.jfif', 'produtos/tvbox_4.jpg'),
(3, 'Ralo Inox para Banheiro 10x10cm', 'Domésticos', 'Banheiro', 'Ralo Inox com proporção 10x10 centímetros.', 200, 30, 0, 'produtos/ralo_1.jpg', 'produtos/ralo_2.webp', 'produtos/ralo_3.webp', 'produtos/ralo4.jpg'),
(4, 'Rodo de Cozinha Inox', 'Domésticos', 'Cozinha', 'Rodo de mão Inox, com suporte de parede.', 50, 25, 0, 'produtos/rodo1.jpg', 'produtos/rodo2.webp', 'produtos/rodo3.webp', 'produtos/rodo4.jpg');

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
(1, 'Nome', 'Sobrenome', 'usuariosuper@exemplo.com', 'pbkdf2_sha256$720000$6LFXfD6nztx3Wh9CHTtP0R$wT7n0xeVAAM/YuomqIz6wvrQmgitHJWVfKzbA8TLJRY=', 0, 1, 1, '2024-09-10 14:12:54', 1),
(2, 'Lucas', 'Leite', 'lucasleite.miguel10@gmail.com', 'pbkdf2_sha256$720000$dmseukqxuGzFwxInFzgtu6$JOKTQtZ+KLPoca9+wdc1W7W/nwjg4i5OtcNCoSFWsVI=', 0, 1, 1, '2024-08-27 18:22:23', 1),
(11, 'teste', 'ssss', 'teste222@gmail.com', 'pbkdf2_sha256$720000$ksLoofM4g4xuK8R5aqMMJZ$nSbQjwjDtjyLtJxI3Y2QNN7RXOn3qeYtXNwJgOhoJMM=', 0, 1, 0, NULL, 0),
(25, 'lucas', 'leite', 'lucas.leite15@aluno.senai.br', 'password', 0, 1, 0, NULL, 0),
(26, 'dsadsadas', 'dadasdasd', 'bootdoff@gmail.com', 'b\'$2b$12$9atdulrn1.5bOfHkZO/15esE7Ej.sGIdCn5rhFeudNjUD1ybvDk7a\'', 0, 1, 0, NULL, 0),
(27, 'lucas', 'leite', 'felipe1234@gmail.com', 'b\'$2b$12$6cnExHvl/w/80eyDMNI/9eoT5hhounrfhaslcTWP5z0inC5f3SUa6\'', 0, 1, 0, NULL, 0),
(28, 'lucas', 'leite', 'felipe12347@gmail.com', '$2b$12$0OBjesb9JpXDvZE/PZkcKe0BgitJj7tke5aA498U.eGM.c8DF8Ie6', 0, 1, 0, NULL, 0);

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
(6, 0, 1, '2024-09-10 14:41:52', '2024-09-10 14:44:40');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_carrinhoitem`
--

CREATE TABLE `usuario_carrinhoitem` (
  `cartitem_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario_carrinhoitem`
--

INSERT INTO `usuario_carrinhoitem` (`cartitem_id`, `cart_id`, `produto_id`, `quantity`, `price`) VALUES
(1, 5, 1, 2, 400),
(2, 6, 1, 3, 0),
(3, 6, 2, 1, 0),
(4, 6, 2, 1, 0),
(5, 1, 3, 12, 22);

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
-- Índices de tabela `produtos_produto`
--
ALTER TABLE `produtos_produto`
  ADD PRIMARY KEY (`product_id`);

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
  ADD KEY `product_id` (`produto_id`),
  ADD KEY `cart_user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

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
-- AUTO_INCREMENT de tabela `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de tabela `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `produtos_produto`
--
ALTER TABLE `produtos_produto`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de tabela `usuario_carrinho`
--
ALTER TABLE `usuario_carrinho`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuario_carrinhoitem`
--
ALTER TABLE `usuario_carrinhoitem`
  MODIFY `cartitem_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
-- Restrições para tabelas `usuario_carrinho`
--
ALTER TABLE `usuario_carrinho`
  ADD CONSTRAINT `cart_user_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`);

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
