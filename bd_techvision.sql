-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27/08/2024 às 20:47
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
-- Estrutura para tabela `adress`
--

CREATE TABLE `adress` (
  `adress_id` int(11) NOT NULL,
  `street` varchar(20) NOT NULL,
  `block` varchar(20) NOT NULL,
  `reference` varchar(30) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `state` varchar(2) NOT NULL,
  `number` int(5) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(16, 'Can view session', 4, 'view_session');

-- --------------------------------------------------------

--
-- Estrutura para tabela `carrier`
--

CREATE TABLE `carrier` (
  `carrier_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `description` varchar(150) NOT NULL,
  `frete` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `quantity` int(5) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `delivery`
--

CREATE TABLE `delivery` (
  `delivery_id` int(11) NOT NULL,
  `adress_id` int(11) NOT NULL,
  `carrier_id` int(11) NOT NULL
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
(8, '2024-08-27 16:17:12', 2, 6, '6', 'Product object (6)', 1, '[{\"added\": {}}]');

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
(2, 'auth', 'group'),
(1, 'auth', 'permission'),
(3, 'contenttypes', 'contenttype'),
(6, 'produtos', 'product'),
(4, 'sessions', 'session'),
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
(15, 'sessions', '0001_initial', '2024-08-22 17:02:10.500317');

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
('b80ehir8jysfrtyk8ghu9y5gva0ilyas', '.eJxVjEEOwiAQRe_C2hCgDAwu3XsGMsBUqoYmpV0Z765NutDtf-_9l4i0rTVunZc4FXEWQZx-t0T5wW0H5U7tNss8t3WZktwVedAur3Ph5-Vw_w4q9fqtgZnBMAafMIN3puSEgRw6O9iB2EAoCrUDHUY_omeXkIlUyUEBWi3eH-XEN6M:1sj0wE:w3l-tstaDpgO3oUO7dTBdpLPpaj-Mth7miZK-rgjqFI', '2024-09-10 18:29:06.843108'),
('c1xgy9bcp228p6pqcf4ainmb8ry5jc1s', '.eJxVjMEOwiAQRP-FsyEsWAoevfsNZNndStXQpLQn47_bJj3oZQ7z3sxbJVyXktYmcxpZXZRVp98uIz2l7oAfWO-Tpqku85j1ruiDNn2bWF7Xw_07KNjKtgYRGwYZJADGaL0XQw6jD0R99hByDADBkLdbROjY-T4ax2zP7KRj9fkC5Gk3iQ:1shBNh:lnL_kNUtPaJscKjiNm7b5nBOX0cgrFGRI4Ts3V5M8MA', '2024-09-05 17:13:53.038053'),
('c60ir59vz41lsp0klr4g4phdtunt63mx', '.eJxVjMEOwiAQRP-FsyEsWAoevfsNZNndStXQpLQn47_bJj3oZQ7z3sxbJVyXktYmcxpZXZRVp98uIz2l7oAfWO-Tpqku85j1ruiDNn2bWF7Xw_07KNjKtgYRGwYZJADGaL0XQw6jD0R99hByDADBkLdbROjY-T4ax2zP7KRj9fkC5Gk3iQ:1siuxu:0pXmvK-6uRUSpalY29C71uln7g3rwxNcDG0xRUCep8U', '2024-09-10 12:06:26.231567'),
('edeowszhehzl5dsv3scfkfcgcoo5xt8e', '.eJxVjDsOgzAQRO_iOrLwZ21ImZ4zWLvedSCJQMJQRbl7QKJIypn3Zt4q4bYOaauypJHVVVl1-e0I81OmA_ADp_us8zyty0j6UPRJq-5nltftdP8OBqzDvkaKTSSOXBxY05IXn6NtIbDHLkQGBxQMueyKLWINNAX2JNh5b6WL6vMF5fg31w:1siwXr:nQdUi7POBfGyExmmBiKYphSQ7aQPdDQV-nS2qpqTmUQ', '2024-09-10 13:47:39.772701'),
('hucy6nguukccyx3twvqub3kkk2vmwumv', '.eJxVjMEOwiAQRP-FsyFAQViP3v0GsruAVE2blPZk_HdL0oMeZ96beYuI21rj1vISxyQuwojTb0fIzzx1kB443WfJ87QuI8muyIM2eZtTfl0P9--gYqv72tlcnIZM3pLTgwY1cCBWATKQDYa8Z0A4l6QAvUHDrueB92iwWPH5AtndN-E:1shBCm:uz4Na60KD0HeRENpVAVrif_NdAPh9Om-jN_QK0zHZcA', '2024-09-05 17:02:36.627676');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos_product`
--

CREATE TABLE `produtos_product` (
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
-- Despejando dados para a tabela `produtos_product`
--

INSERT INTO `produtos_product` (`product_id`, `name`, `category`, `sub_category`, `description`, `estoque`, `price`, `promotion`, `foto_1`, `foto_2`, `foto_3`, `foto_4`) VALUES
(3, 'Fone de Ouvido sem fio JBL Wave Buds', 'Eletrônicos', 'Fones de Ouvido', 'Fone de ouvido sem fio via bluetooth, carregamento com contato. Acompanha fio de carregamento e manual de instruções.', 100, 400, 0, 'produtos/fone_jbl_1.jpg', 'produtos/fone_jbl_2.jpg', 'produtos/fone_jbl_3.jpg', 'produtos/fone_jbl_4.jfif'),
(4, 'TV Box XPlus', 'Eletrônicos', 'Assinatura', 'Tv Box XPlus com sistema Android imbutido e controle com sensor de movimento. Assinatura mensal e anual com valores acessíveis.', 150, 300, 0, 'produtos/tvbox_1.jpeg', 'produtos/tvbox_2.jpg', 'produtos/tvbox_3.jfif', 'produtos/tvbox_4.jpg'),
(5, 'Ralo Inox para Banheiro 10x10cm', 'Domésticos', 'Banheiro', 'Ralo Inox com proporção 10x10 centímetros.', 200, 30, 0, 'produtos/ralo_1.jpg', 'produtos/ralo_2.webp', 'produtos/ralo_3.webp', 'produtos/ralo4.jpg'),
(6, 'Rodo de Cozinha Inox', 'Domésticos', 'Cozinha', 'Rodo de mão Inox, com suporte de parede.', 50, 25, 0, 'produtos/rodo1.jpg', 'produtos/rodo2.webp', 'produtos/rodo3.webp', 'produtos/rodo4.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(128) NOT NULL,
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
(2, 'Nome', 'Sobrenome', 'usuariosuper@exemplo.com', 'pbkdf2_sha256$720000$6LFXfD6nztx3Wh9CHTtP0R$wT7n0xeVAAM/YuomqIz6wvrQmgitHJWVfKzbA8TLJRY=', 0, 1, 1, '2024-08-27 15:52:23', 1),
(3, 'Lucas', 'Leite', 'lucasleite.miguel10@gmail.com', 'pbkdf2_sha256$720000$dmseukqxuGzFwxInFzgtu6$JOKTQtZ+KLPoca9+wdc1W7W/nwjg4i5OtcNCoSFWsVI=', 0, 1, 1, '2024-08-27 18:22:23', 1),
(5, 'Lucas', 'Leite', 'lucas.leite4@aluno.senai.br', 'pbkdf2_sha256$720000$F4tinjN1FfBo5BOQ1oupHT$JRcr/TapZdrVHs3uMSCHpVRCldM33ZKWfIL8GxrXcXQ=', 0, 1, 0, '2024-08-27 17:03:52', 0),
(6, 'adsf', 'asdf', 'teste@gmail.com', 'pbkdf2_sha256$720000$pUrz3odG7368gdKjDuoHm6$b+RS6G8/Xj5piYKfSVj9aWbCos2zOdiO6ehmZbNYpns=', 0, 1, 0, '2024-08-27 18:26:15', 0),
(7, 'asdf', 'adffa', 'testse@gmail.com', 'pbkdf2_sha256$720000$FjpgtjKAslzXm0aDLP9xf0$ZMvJQZD8CNcrSFif2dh/2vV7zAbLShIFxU7YpA+zMzI=', 0, 1, 0, '2024-08-27 18:28:21', 0),
(8, 'afdadsfad', 'asdfasdfasd', 'lucasleite.miaguel10@gmail.com', 'pbkdf2_sha256$720000$3DCewdksvU1nFyFp74pGfz$QpYJ0LQpkv0LNcCAb18D/CjHnNyT1a/vBRF2eKOymjw=', 0, 1, 0, '2024-08-27 18:28:40', 0),
(9, 'adsfadsfa', 'adsfsdfas', 'tdseste@gmail.com', 'pbkdf2_sha256$720000$fSPeCgXfBJnUFTRuVtCnKF$tk4C12d7ttdo4a31tx0xQMUpurrTqCN6VK3Y7TvfmnM=', 0, 1, 0, '2024-08-27 18:29:06', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_groups`
--

CREATE TABLE `usuario_groups` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `adress`
--
ALTER TABLE `adress`
  ADD PRIMARY KEY (`adress_id`),
  ADD KEY `user_id` (`user_id`);

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
-- Índices de tabela `carrier`
--
ALTER TABLE `carrier`
  ADD PRIMARY KEY (`carrier_id`);

--
-- Índices de tabela `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `cart_user_id` (`user_id`);

--
-- Índices de tabela `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`delivery_id`),
  ADD KEY `adress_id` (`adress_id`),
  ADD KEY `carrier_id` (`carrier_id`);

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
-- Índices de tabela `produtos_product`
--
ALTER TABLE `produtos_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de tabela `adress`
--
ALTER TABLE `adress`
  MODIFY `adress_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `carrier`
--
ALTER TABLE `carrier`
  MODIFY `carrier_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `delivery`
--
ALTER TABLE `delivery`
  MODIFY `delivery_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `produtos_product`
--
ALTER TABLE `produtos_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `usuario_groups`
--
ALTER TABLE `usuario_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario_user_permissions`
--
ALTER TABLE `usuario_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `adress`
--
ALTER TABLE `adress`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`);

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
-- Restrições para tabelas `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_user_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `produtos_product` (`product_id`);

--
-- Restrições para tabelas `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `adress_id` FOREIGN KEY (`adress_id`) REFERENCES `adress` (`adress_id`),
  ADD CONSTRAINT `carrier_id` FOREIGN KEY (`carrier_id`) REFERENCES `carrier` (`carrier_id`);

--
-- Restrições para tabelas `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `django_admin_log_ibfk_2` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

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
