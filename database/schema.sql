CREATE TABLE perfis (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao VARCHAR(255)
);

CREATE TABLE usuarios (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    login VARCHAR(80) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    perfil_id BIGINT NOT NULL REFERENCES perfis(id),
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE setores (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(120) NOT NULL UNIQUE,
    sigla VARCHAR(20),
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE combustiveis (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motoristas (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(180) NOT NULL,
    matricula VARCHAR(30) NOT NULL UNIQUE,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE veiculos (
    id BIGSERIAL PRIMARY KEY,
    descricao VARCHAR(150) NOT NULL,
    prefixo_tipo VARCHAR(10) NOT NULL DEFAULT 'Vtr',
    prefixo_numero VARCHAR(3) NOT NULL,
    prefixo VARCHAR(10) NOT NULL UNIQUE,
    placa VARCHAR(12) NOT NULL UNIQUE,
    combustivel_id BIGINT NOT NULL REFERENCES combustiveis(id),
    km_atual INTEGER NOT NULL DEFAULT 0,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_prefixo_tipo CHECK (prefixo_tipo IN ('Vtr', 'MP')),
    CONSTRAINT chk_prefixo_numero CHECK (prefixo_numero ~ '^[0-9]{3}$')
);

CREATE TABLE abastecimentos (
    id BIGSERIAL PRIMARY KEY,
    setor_id BIGINT NOT NULL REFERENCES setores(id),
    veiculo_id BIGINT NOT NULL REFERENCES veiculos(id),
    motorista_id BIGINT NOT NULL REFERENCES motoristas(id),
    usuario_id BIGINT REFERENCES usuarios(id),
    data_lancamento DATE NOT NULL,
    data_abastecimento DATE NOT NULL,
    hora_abastecimento TIME NOT NULL,
    autorizacao VARCHAR(6),
    km_atual INTEGER NOT NULL,
    valor_unitario NUMERIC(12,2) NOT NULL,
    qtd_litros NUMERIC(12,3) NOT NULL,
    valor_total NUMERIC(12,2) NOT NULL,
    observacao TEXT,
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_autorizacao_tamanho CHECK (autorizacao IS NULL OR LENGTH(autorizacao) <= 6),
    CONSTRAINT chk_km_atual_nonnegative CHECK (km_atual >= 0),
    CONSTRAINT chk_valor_unitario_positive CHECK (valor_unitario >= 0),
    CONSTRAINT chk_qtd_litros_positive CHECK (qtd_litros >= 0),
    CONSTRAINT chk_valor_total_positive CHECK (valor_total >= 0)
);

CREATE TABLE auditoria_abastecimentos (
    id BIGSERIAL PRIMARY KEY,
    abastecimento_id BIGINT NOT NULL REFERENCES abastecimentos(id),
    usuario_id BIGINT REFERENCES usuarios(id),
    acao VARCHAR(20) NOT NULL,
    dados_anteriores JSONB,
    dados_novos JSONB,
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_abastecimentos_data_abastecimento ON abastecimentos(data_abastecimento);
CREATE INDEX idx_abastecimentos_data_lancamento ON abastecimentos(data_lancamento);
CREATE INDEX idx_abastecimentos_setor ON abastecimentos(setor_id);
CREATE INDEX idx_abastecimentos_veiculo ON abastecimentos(veiculo_id);
CREATE INDEX idx_abastecimentos_motorista ON abastecimentos(motorista_id);
CREATE INDEX idx_veiculos_placa ON veiculos(placa);
CREATE INDEX idx_veiculos_prefixo ON veiculos(prefixo);

CREATE OR REPLACE FUNCTION atualizar_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.atualizado_em = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_usuarios_updated_at BEFORE UPDATE ON usuarios
FOR EACH ROW EXECUTE FUNCTION atualizar_updated_at();
CREATE TRIGGER trg_setores_updated_at BEFORE UPDATE ON setores
FOR EACH ROW EXECUTE FUNCTION atualizar_updated_at();
CREATE TRIGGER trg_combustiveis_updated_at BEFORE UPDATE ON combustiveis
FOR EACH ROW EXECUTE FUNCTION atualizar_updated_at();
CREATE TRIGGER trg_motoristas_updated_at BEFORE UPDATE ON motoristas
FOR EACH ROW EXECUTE FUNCTION atualizar_updated_at();
CREATE TRIGGER trg_veiculos_updated_at BEFORE UPDATE ON veiculos
FOR EACH ROW EXECUTE FUNCTION atualizar_updated_at();
CREATE TRIGGER trg_abastecimentos_updated_at BEFORE UPDATE ON abastecimentos
FOR EACH ROW EXECUTE FUNCTION atualizar_updated_at();
