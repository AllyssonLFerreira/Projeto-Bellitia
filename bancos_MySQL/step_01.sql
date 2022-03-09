CREATE SCHEMA Bellitia;
USE bellitia;

CREATE TABLE users_cpf (
	id_CPF_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    CPF VARCHAR(15) NOT NULL,
    RG VARCHAR(10) NOT NULL,
    D_Nascimento VARCHAR(10) NOT NULL, 
    Telefone VARCHAR(25) NOT NULL,
    Email VARCHAR(25) NOT NULL
);

CREATE TABLE users_cnpj (
	id_CNPJ_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nome_Fantasia VARCHAR(100) NOT NULL,
    Razao_Social VARCHAR(100) NOT NULL,
    CNPJ VARCHAR(18) NOT NULL,
    Nome_proprietario VARCHAR(100) NOT NULL,
    Telefone VARCHAR(25) NOT NULL,
    Email VARCHAR(25) NOT NULL
);

CREATE TABLE users_CNPJ_adress (
	id_adress_CNPJ INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Logradouro VARCHAR(100) NOT NULL,
    Numero VARCHAR(30) NOT NULL,
    Complemento VARCHAR(100) NOT NULL,
    Bairro VARCHAR(100) NOT NULL,
    Caixa_Postal VARCHAR(25) NOT NULL,
    Cidade VARCHAR(25) NOT NULL,
    Estado VARCHAR(25) NOT NULL
);

CREATE TABLE users_CNPJ_professionals (
	id_professional INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	Nome VARCHAR(100) NOT NULL,
    D_Nascimento VARCHAR(10) NOT NULL, 
    Telefone VARCHAR(25) NOT NULL,
    Email VARCHAR(25) NOT NULL,
    Especialidade VARCHAR(50)
);

CREATE TABLE services (
	id_services INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipo_servico VARCHAR(50) NOT NULL,
    tempo_servico VARCHAR(50) NOT NULL,
    Valor VARCHAR(10) NOT NULL
);

CREATE TABLE agendamentos (
	id_agendamento INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    servico_agendado VARCHAR(100) NOT NULL,
    data_agendada DATETIME NOT NULL,
    valor VARCHAR(100) NOT NULL,
    estabelecimento VARCHAR(100) NOT NULL,
    nome_cliente VARCHAR(100) NOT NULL,
    telefone_contato VARCHAR(100) NOT NULL
);










