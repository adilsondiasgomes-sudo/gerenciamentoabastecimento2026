const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'abastecimento_v2'
});

app.use(cors());
app.use(express.json());

app.get('/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true, database: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.get('/api/dashboard', async (_req, res) => {
  try {
    const total = await pool.query('SELECT COUNT(*)::int AS total, COALESCE(SUM(qtd_litros),0) AS litros, COALESCE(SUM(valor_total),0) AS valor FROM abastecimentos');
    const veiculos = await pool.query('SELECT COUNT(*)::int AS ativos FROM veiculos WHERE ativo = TRUE');
    res.json({
      totalRegistros: total.rows[0].total,
      totalLitros: Number(total.rows[0].litros),
      totalValor: Number(total.rows[0].valor),
      veiculosAtivos: veiculos.rows[0].ativos
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/abastecimentos', async (_req, res) => {
  try {
    const sql = `
      SELECT a.id, a.data_lancamento, a.data_abastecimento, a.hora_abastecimento,
             a.autorizacao, a.km_atual, a.valor_unitario, a.qtd_litros, a.valor_total,
             s.nome AS setor, v.descricao AS veiculo, v.prefixo, v.placa, m.nome AS motorista, m.matricula
      FROM abastecimentos a
      INNER JOIN setores s ON s.id = a.setor_id
      INNER JOIN veiculos v ON v.id = a.veiculo_id
      INNER JOIN motoristas m ON m.id = a.motorista_id
      ORDER BY a.id DESC
    `;
    const result = await pool.query(sql);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/abastecimentos', async (req, res) => {
  const client = await pool.connect();
  try {
    const {
      setor_id, veiculo_id, motorista_id, usuario_id,
      data_lancamento, data_abastecimento, hora_abastecimento,
      autorizacao, km_atual, valor_unitario, qtd_litros, observacao
    } = req.body;

    const valorTotal = Number(valor_unitario) * Number(qtd_litros);

    await client.query('BEGIN');
    const insert = await client.query(
      `INSERT INTO abastecimentos (
        setor_id, veiculo_id, motorista_id, usuario_id,
        data_lancamento, data_abastecimento, hora_abastecimento,
        autorizacao, km_atual, valor_unitario, qtd_litros, valor_total, observacao
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
      RETURNING *`,
      [setor_id, veiculo_id, motorista_id, usuario_id || null, data_lancamento, data_abastecimento, hora_abastecimento, autorizacao || null, km_atual, valor_unitario, qtd_litros, valorTotal, observacao || null]
    );

    await client.query('UPDATE veiculos SET km_atual = GREATEST(km_atual, $1) WHERE id = $2', [km_atual, veiculo_id]);
    await client.query('COMMIT');

    res.status(201).json(insert.rows[0]);
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
