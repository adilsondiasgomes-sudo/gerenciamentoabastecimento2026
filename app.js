const STORAGE_KEY = 'abastecimento-v8-storage';
const RESPONSAVEIS_ABASTECIMENTO = [
  'Inspetor Estelisson',
  'Inspetor Wallas',
  'Inspetor Gilberto',
  'Inspetor Pereira'
];

const seedState = {
  perfis: [
    { id: 1, nome: 'ADMIN' },
    { id: 2, nome: 'OPERADOR' },
    { id: 3, nome: 'CONSULTA' }
  ],
  usuarios: [
    { id: 1, nome: 'Administrador do Sistema', login: 'admin', perfilId: 1, ativo: true }
  ],
  combustiveis: [
    { id: 1, nome: 'Gasolina', ativo: true },
    { id: 2, nome: 'Diesel', ativo: true },
    { id: 3, nome: 'Etanol', ativo: true },
    { id: 4, nome: 'Elétrico', ativo: true }
  ],
  setores: [
    { id: 1, nome: 'Guarda Municipal de Ipatinga', sigla: 'GMI', ativo: true },
    { id: 2, nome: 'SESCON', sigla: 'SESCON', ativo: true },
    { id: 3, nome: 'Administração', sigla: 'ADM', ativo: true },
    { id: 4, nome: 'Obras', sigla: 'OBR', ativo: true }
  ],
  motoristas: [
    { id: 1, nome: 'ADALTON MARTINS DORNELAS', matricula: '140218-2', ativo: true },
    { id: 2, nome: 'ADANY LUIZA SOUZA SILVA', matricula: '140166-2', ativo: true },
    { id: 3, nome: 'ALESSANDRO BARBOSA GOMES', matricula: '140191-8', ativo: true },
    { id: 4, nome: 'ALEXANDRE JUDAY COSTA ALKIMIM', matricula: '140205-7', ativo: true },
    { id: 5, nome: 'AMANDA CRISTINA GOMES MACIEL', matricula: '140135-5', ativo: true },
    { id: 6, nome: 'AMAURY MARTINS BRAGA', matricula: '140227-3', ativo: true },
    { id: 7, nome: 'ANDRE LUIZ ARAUJO SANTOS', matricula: '141009-7', ativo: true },
    { id: 8, nome: 'ANDRE SOARES RODRIGUES', matricula: '140179-8', ativo: true },
    { id: 9, nome: 'ANTONIO JOSE SOUZA FREITAS', matricula: '140223-9', ativo: true },
    { id: 10, nome: 'BRENDA SILVA SANTOS', matricula: '140132-4', ativo: true },
    { id: 11, nome: 'CAIO CESAR CARVALHO FERREIRA', matricula: '140183-0', ativo: true },
    { id: 12, nome: 'CAMILA DO OURO COSTA SOARES', matricula: '140131-0', ativo: true },
    { id: 13, nome: 'CARLYLE RIBEIRO DE CARVALHO', matricula: '140222-5', ativo: true },
    { id: 14, nome: 'CHAYDER FELIPE DA CUNHA MIRANDA', matricula: '140190-4', ativo: true },
    { id: 15, nome: 'CINTIA HELENA SOARES GOMES PEREIRA', matricula: '140125-0', ativo: true },
    { id: 16, nome: 'CLAYBER GABRIEL DA SILVA RODRIGUES', matricula: '140170-5', ativo: true },
    { id: 17, nome: 'CLEVERSON RIBEIRO FERNANDES', matricula: '140177-0', ativo: true },
    { id: 18, nome: 'CRISTIANO PEREIRA ALVES PEDROSO', matricula: '140172-2', ativo: true },
    { id: 19, nome: 'DANIEL FERREIRA SOARES', matricula: '140162-8', ativo: true },
    { id: 20, nome: 'DANIEL GUILHERME DE ASSIS SOARES', matricula: '140171-9', ativo: true },
    { id: 21, nome: 'DAYANE LUIZA PACHECO AGUILAR OLIVEIRA', matricula: '140134-1', ativo: true },
    { id: 22, nome: 'DEIVISON BENVINDO DA CUNHA', matricula: '140189-2', ativo: true },
    { id: 23, nome: 'DENILTON QUINTINO DE ARAUJO', matricula: '140184-4', ativo: true },
    { id: 24, nome: 'DHEIMISON GOMES DE SOUZA', matricula: '140149-4', ativo: true },
    { id: 25, nome: 'DOUGLAS FILIPE FERNANDES LISBOA', matricula: '140200-9', ativo: true },
    { id: 26, nome: 'EDGAR IGOR FREITAS ANDRADE', matricula: '140511-3', ativo: true },
    { id: 27, nome: 'EDILSON RODRIGUES DOS SANTOS', matricula: '140173-6', ativo: true },
    { id: 28, nome: 'ELIELSON CARLOS NEVES', matricula: '140231-6', ativo: true },
    { id: 29, nome: 'FABIO JUNIO DUTRA DA CUNHA', matricula: '140157-1', ativo: true },
    { id: 30, nome: 'FABRICIO GONCALVES CLAUDINO', matricula: '140212-0', ativo: true },
    { id: 31, nome: 'FELIPE RIBEIRO FERNANDES', matricula: '140159-9', ativo: true },
    { id: 32, nome: 'FELIX MATIAS DE OLIVEIRA', matricula: '140226-X', ativo: true },
    { id: 33, nome: 'FILIPE GUILHERME CARVALHO DE SA', matricula: '140214-8', ativo: true },
    { id: 34, nome: 'FRANCIELLE MACIEL DE SOUZA', matricula: '140957-5', ativo: true },
    { id: 35, nome: 'GABRIEL TEODORO DA SILVA GONCALVES', matricula: '140224-2', ativo: true },
    { id: 36, nome: 'GERVESON GONCALVES LOPES ROSADO', matricula: '140206-0', ativo: true },
    { id: 37, nome: 'GLEICIMARA MONTEIRO MARTINS LOPES', matricula: '140122-X', ativo: true },
    { id: 38, nome: 'GREIGUIMAR PEREIRA DA SILVA', matricula: '140156-8', ativo: true },
    { id: 39, nome: 'GUILHERME DANTAS DA MOTA CAMPOS', matricula: '140178-4', ativo: true },
    { id: 40, nome: 'GUILHERME SALGADO GOMES FURTADO', matricula: '140151-X', ativo: true },
    { id: 41, nome: 'GUILHERME SOARES BARBOSA', matricula: '140188-9', ativo: true },
    { id: 42, nome: 'GUSTAVO HENRIQUE LISBOA', matricula: '140158-5', ativo: true },
    { id: 43, nome: 'GUSTAVO HENRIQUE SILVA DOS SANTOS', matricula: '140221-1', ativo: true },
    { id: 44, nome: 'HARAN FELIPE CONCEICAO SOUZA', matricula: '140202-6', ativo: true },
    { id: 45, nome: 'HEBERTON BARBOSA RIBEIRO', matricula: '140180-X', ativo: true },
    { id: 46, nome: 'HIAGO MATEUS ALVES LOPES', matricula: '140211-7', ativo: true },
    { id: 47, nome: 'IGOR PHILIPE SANTOS ANICIO', matricula: '140213-4', ativo: true },
    { id: 48, nome: 'ISMAEL CAMILO LOPES', matricula: '140167-6', ativo: true },
    { id: 49, nome: 'JAQUELINE SANTOS DOS REIS', matricula: '140141-5', ativo: true },
    { id: 50, nome: 'JOAO EVERTON BRANDAO COLARES', matricula: '140154-0', ativo: true },
    { id: 51, nome: 'JOAO VITOR CORREIA JACINTO', matricula: '140208-8', ativo: true },
    { id: 52, nome: 'JOSANE MONTEIRO DA CRUZ', matricula: '140133-8', ativo: true },
    { id: 53, nome: 'JOSE ALBERTO DE OLIVEIRA MENDES', matricula: '140176-7', ativo: true },
    { id: 54, nome: 'JOSIMAR RIBEIRO DOMINGOS', matricula: '140137-2', ativo: true },
    { id: 55, nome: 'KAILAN CARLOS MIRANDA', matricula: '140192-1', ativo: true },
    { id: 56, nome: 'KENNEDY NUNES SENA', matricula: '140728-4', ativo: true },
    { id: 57, nome: 'KYVIA FERREIRA ALVES', matricula: '140123-3', ativo: true },
    { id: 58, nome: 'LAISA VITORIA FERNANDES REIS', matricula: '140142-9', ativo: true },
    { id: 59, nome: 'LEONARDO AUGUSTO SOUSA', matricula: '140216-5', ativo: true },
    { id: 60, nome: 'LIDIANE DE CASTRO MOREIRA', matricula: '140130-7', ativo: true },
    { id: 61, nome: 'LORRAINY KARINE RODRIGUES', matricula: '140148-0', ativo: true },
    { id: 62, nome: 'LUAN VICTOR LOPES DE OLIVEIRA', matricula: '140204-3', ativo: true },
    { id: 63, nome: 'LUCAS BARONI OLIVEIRA', matricula: '140217-9', ativo: true },
    { id: 64, nome: 'LUCAS MOREIRA DA SILVA', matricula: '140138-6', ativo: true },
    { id: 65, nome: 'LUDIMARA SANTOS COSTA', matricula: '140129-5', ativo: true },
    { id: 66, nome: 'LUIZ CARLOS PEREIRA DE OLIVEIRA', matricula: '140207-4', ativo: true },
    { id: 67, nome: 'LUIZ EDUARDO SILVA NASCIMENTO', matricula: '140160-0', ativo: true },
    { id: 68, nome: 'LUIZ GUSTAVO OLIVEIRA DRUMOND', matricula: '140182-7', ativo: true },
    { id: 69, nome: 'LUNO DE SOUZA SANTOS', matricula: '140187-5', ativo: true },
    { id: 70, nome: 'MARCELY SILVA ALMEIDA', matricula: '140146-3', ativo: true },
    { id: 71, nome: 'MARIA APARECIDA BOSCO SOUSA', matricula: '140126-4', ativo: true },
    { id: 72, nome: 'MARIANA MARA COSTA MIRANDA', matricula: '140128-1', ativo: true },
    { id: 73, nome: 'MARKELE AMARAL BARBOSA', matricula: '140161-4', ativo: true },
    { id: 74, nome: 'MAX MULLER RAMALHO ANDRE', matricula: '140174-X', ativo: true },
    { id: 75, nome: 'MAXSUEL ANICIO GONZAGA', matricula: '140169-3', ativo: true },
    { id: 76, nome: 'MESSIAS HENRIQUE CAMPOS MIRANDA', matricula: '140186-1', ativo: true },
    { id: 77, nome: 'MIGUEL CHRISTIAN DIAS', matricula: '140196-6', ativo: true },
    { id: 78, nome: 'NICODEMOS FERREIRA COELHO', matricula: '140195-2', ativo: true },
    { id: 79, nome: 'PEDRO GUILHERME SOUZA GOMES', matricula: '140385-9', ativo: true },
    { id: 80, nome: 'PEDRO HENRIQUE DARE LEANDRO', matricula: '140185-8', ativo: true },
    { id: 81, nome: 'PEDRO HENRIQUE DE SOUZA BRAGA', matricula: '140197-X', ativo: true },
    { id: 82, nome: 'PEDRO HENRIQUE RODRIGUES DUARTE', matricula: '140210-3', ativo: true },
    { id: 83, nome: 'PRISCILLA DE ALMEIDA FERNANDES', matricula: '140136-9', ativo: true },
    { id: 84, nome: 'RAFAEL MENESES SILVA', matricula: '140163-1', ativo: true },
    { id: 85, nome: 'RAMON GABRIEL CERQUEIRA', matricula: '140273-1', ativo: true },
    { id: 86, nome: 'ROBERTH OLIVEIRA DIAS', matricula: '140209-1', ativo: true },
    { id: 87, nome: 'RONDINELI DOS SANTOS ALVES', matricula: '140143-2', ativo: true },
    { id: 88, nome: 'ROSINEIA LOPES OLIVEIRA SIQUEIRA', matricula: '140124-7', ativo: true },
    { id: 89, nome: 'RUDOLF RANGEL HENRIQUE', matricula: '140168-X', ativo: true },
    { id: 90, nome: 'SIDNEY BRUNO SEVERIANO COELHO', matricula: '140175-3', ativo: true },
    { id: 91, nome: 'TALES MARTINS DE ALMEIDA', matricula: '140165-9', ativo: true },
    { id: 92, nome: 'TAMELA TALINE GOMES SOUSA', matricula: '140228-7', ativo: true },
    { id: 93, nome: 'THAIS SILVA GOMES', matricula: '140140-1', ativo: true },
    { id: 94, nome: 'THALES SOUSA GONCALVES', matricula: '140198-3', ativo: true },
    { id: 95, nome: 'THAYNARA SOUZA ANDRADE', matricula: '140215-1', ativo: true },
    { id: 96, nome: 'THIAGO DE OLIVEIRA LINHARES', matricula: '140152-3', ativo: true },
    { id: 97, nome: 'THIAGO LIMA SILVA', matricula: '140147-7', ativo: true },
    { id: 98, nome: 'THIAGO SILVA MUNIZ', matricula: '140193-5', ativo: true },
    { id: 99, nome: 'THOMAZ SILVA FERREIRA', matricula: '140201-2', ativo: true },
    { id: 100, nome: 'TIAGO DHIONATA PEREIRA SILVA', matricula: '140203-X', ativo: true },
    { id: 101, nome: 'VINICIUS ROMULO SOUSA NICOLAU', matricula: '140155-4', ativo: true },
    { id: 102, nome: 'VITOR RODRIGUES SOARES', matricula: '140164-5', ativo: true },
    { id: 103, nome: 'WARISSON SILVA BATISTA', matricula: '140199-7', ativo: true },
    { id: 104, nome: 'WILES BORGES RIBEIRO', matricula: '140219-6', ativo: true },
    { id: 105, nome: 'WILLIAN CHAVES BATISTA RAMOS DA SILVA', matricula: '140220-8', ativo: true }
  ],
  veiculos: [
    { id: 1, descricao: 'Yaris', prefixoTipo: 'Vtr', prefixoNumero: '001', prefixo: 'Vtr 001', placa: 'QAB1A01', combustivelId: 1, kmAtual: 2500, ativo: true },
    { id: 2, descricao: 'Gol', prefixoTipo: 'Vtr', prefixoNumero: '002', prefixo: 'Vtr 002', placa: 'QAB1A02', combustivelId: 2, kmAtual: 1800, ativo: true },
    { id: 3, descricao: 'Caminhonete 006', prefixoTipo: 'Vtr', prefixoNumero: '006', prefixo: 'Vtr 006', placa: 'QAB1A03', combustivelId: 3, kmAtual: 3200, ativo: true },
    { id: 4, descricao: 'Moto Patrulha', prefixoTipo: 'MP', prefixoNumero: '001', prefixo: 'MP 001', placa: 'QAB2A01', combustivelId: 1, kmAtual: 900, ativo: true }
  ],
  abastecimentos: [
    { id: 1, setorId: 1, veiculoId: 1, motoristaId: 1, inspetorCoordenacao: 'Inspetor Estelisson', gerenteAbastecimento: 'Inspetor Wallas', usuarioId: 1, dataLancamento: '2026-04-18', dataAbastecimento: '2026-04-18', horaAbastecimento: '18:00', autorizacao: '123456', kmAtual: 2500, valorUnitario: 6.00, qtdLitros: 20.0, valorTotal: 120.00, observacao: 'Abastecimento inicial de demonstração', criadoEm: '2026-04-18T18:00:00' },
    { id: 2, setorId: 2, veiculoId: 2, motoristaId: 2, inspetorCoordenacao: 'Inspetor Gilberto', gerenteAbastecimento: 'Inspetor Pereira', usuarioId: 1, dataLancamento: '2026-04-18', dataAbastecimento: '2026-04-18', horaAbastecimento: '19:10', autorizacao: '654321', kmAtual: 1800, valorUnitario: 6.20, qtdLitros: 18.5, valorTotal: 114.70, observacao: 'Registro demo 2', criadoEm: '2026-04-18T19:10:00' },
    { id: 3, setorId: 1, veiculoId: 3, motoristaId: 3, inspetorCoordenacao: 'Inspetor Pereira', gerenteAbastecimento: 'Inspetor Estelisson', usuarioId: 1, dataLancamento: '2026-04-17', dataAbastecimento: '2026-04-17', horaAbastecimento: '08:20', autorizacao: '111222', kmAtual: 3200, valorUnitario: 5.90, qtdLitros: 22.0, valorTotal: 129.80, observacao: 'Registro demo 3', criadoEm: '2026-04-17T08:20:00' }
  ]
};

let state = loadState();

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function parsePrefixoPattern(value, fallbackIndex = 1) {
  const raw = normalizePrefixo(value);
  const match = raw.match(/^(VTR|MP)\s*(\d{1,3})$/i);
  if (match) {
    return {
      tipo: match[1].toUpperCase() === 'MP' ? 'MP' : 'Vtr',
      numero: String(Number(match[2])).padStart(3, '0')
    };
  }
  return {
    tipo: 'Vtr',
    numero: String(fallbackIndex).padStart(3, '0')
  };
}

function buildPrefixo(tipo, numero) {
  const normalizedType = String(tipo || 'Vtr').toUpperCase() === 'MP' ? 'MP' : 'Vtr';
  const normalizedNumber = String(Number(numero || 0)).padStart(3, '0');
  return `${normalizedType} ${normalizedNumber}`;
}

function migrateState(data) {
  const migrated = clone(data);
  migrated.veiculos = (migrated.veiculos || []).map((veiculo, index) => {
    const parsed = parsePrefixoPattern(veiculo.prefixo, index + 1);
    return {
      ...veiculo,
      descricao: veiculo.descricao || veiculo.prefixo || veiculo.placa || `Veículo ${index + 1}`,
      prefixoTipo: veiculo.prefixoTipo || parsed.tipo,
      prefixoNumero: String(veiculo.prefixoNumero || parsed.numero).padStart(3, '0'),
      prefixo: veiculo.prefixo || buildPrefixo(parsed.tipo, parsed.numero)
    };
  });

  migrated.abastecimentos = (migrated.abastecimentos || []).map((item, index) => ({
    ...item,
    inspetorCoordenacao: item.inspetorCoordenacao || RESPONSAVEIS_ABASTECIMENTO[index % RESPONSAVEIS_ABASTECIMENTO.length],
    gerenteAbastecimento: item.gerenteAbastecimento || RESPONSAVEIS_ABASTECIMENTO[(index + 1) % RESPONSAVEIS_ABASTECIMENTO.length]
  }));

  if (!(migrated.combustiveis || []).some(item => normalizeText(item.nome) === 'eletrico')) {
    const nextCombustivelId = Math.max(0, ...(migrated.combustiveis || []).map(item => Number(item.id) || 0)) + 1;
    migrated.combustiveis = [...(migrated.combustiveis || []), { id: nextCombustivelId, nome: 'Elétrico', ativo: true }];
  }

  if ((migrated.motoristas || []).length < 50) {
    migrated.motoristas = clone(seedState.motoristas);
  }

  return migrated;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = migrateState(clone(seedState));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  return migrateState(JSON.parse(raw));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetDemo() {
  if (!confirm('Deseja restaurar os dados de demonstração?')) return;
  state = migrateState(clone(seedState));
  saveState();
  bootstrap();
}

function nextId(collection) {
  return Math.max(0, ...state[collection].map(item => Number(item.id) || 0)) + 1;
}

function brl(value) {
  return Number(value || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function num(value) {
  return Number(value || 0);
}

function toIsoDate(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function today() {
  return toIsoDate(new Date());
}

function parseIsoDate(value) {
  return new Date(`${value}T00:00:00`);
}

function formatDisplayDate(value, shortYear = true) {
  if (!value) return '';
  const isoValue = /^\d{4}-\d{2}-\d{2}$/.test(String(value || '').trim()) ? String(value).trim() : parseBrDateToIso(value);
  if (!isoValue) return String(value || '');
  const [year, month, day] = isoValue.split('-');
  return `${day}/${month}/${shortYear ? year.slice(-2) : year}`;
}

function parseBrDateToIso(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;

  const digits = raw.replace(/\D/g, '');
  if (![6, 8].includes(digits.length)) return '';

  const day = Number(digits.slice(0, 2));
  const month = Number(digits.slice(2, 4));
  const yearDigits = digits.slice(4);
  const year = yearDigits.length === 2 ? 2000 + Number(yearDigits) : Number(yearDigits);
  const date = new Date(year, month - 1, day);

  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return '';
  }

  return toIsoDate(date);
}

function maskDateValue(value) {
  const digits = String(value || '').replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function normalizeDateField(selector) {
  const field = qs(selector);
  if (!field) return;
  const iso = parseBrDateToIso(field.value);
  field.value = iso ? formatDisplayDate(iso) : maskDateValue(field.value);
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function normalizePrefixo(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function updatePrefixoPreview() {
  const tipo = qs('#veiculoPrefixoTipo')?.value || 'Vtr';
  const numeroRaw = qs('#veiculoPrefixoNumero')?.value;
  if (!qs('#veiculoPrefixo')) return;
  if (!numeroRaw) {
    qs('#veiculoPrefixo').value = '';
    return;
  }
  qs('#veiculoPrefixo').value = buildPrefixo(tipo, numeroRaw);
}

function findById(collection, id) {
  return state[collection].find(item => Number(item.id) === Number(id));
}

function getCombustivelName(id) {
  return findById('combustiveis', id)?.nome || '';
}

function getSetorName(id) {
  return findById('setores', id)?.nome || '';
}

function getVeiculo(id) {
  return findById('veiculos', id);
}

function getVeiculoName(id) {
  const veiculo = getVeiculo(id);
  return veiculo?.descricao || veiculo?.prefixo || veiculo?.placa || '';
}

function getVeiculoPrefixo(id) {
  return getVeiculo(id)?.prefixo || '';
}

function getMotorista(id) {
  return findById('motoristas', id);
}

function getMotoristaName(id) {
  return getMotorista(id)?.nome || '';
}

function getVehiclePlate(id) {
  return getVeiculo(id)?.placa || '';
}

function formatStatus(flag) {
  return flag ? 'Ativo' : 'Inativo';
}

function setSelectOptions(select, options, placeholder = 'Selecione') {
  if (!select) return;
  const currentValue = select.value;
  const html = placeholder !== null ? `<option value="">${placeholder}</option>` : '';
  select.innerHTML = html + options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');
  const hasCurrent = options.some(opt => String(opt.value) === String(currentValue));
  if (hasCurrent) select.value = currentValue;
}

function activeOptionsFrom(collection, labelFn, valueFn = item => item.id) {
  return state[collection]
    .filter(item => item.ativo !== false)
    .map(item => ({ value: valueFn(item), label: labelFn(item) }));
}

function syncSelects() {
  setSelectOptions(qs('#setorId'), activeOptionsFrom('setores', s => s.nome));
  setSelectOptions(qs('#veiculoId'), activeOptionsFrom('veiculos', v => v.prefixo));
  setSelectOptions(qs('#motoristaId'), activeOptionsFrom('motoristas', m => `${m.nome} · ${m.matricula}`));
  setSelectOptions(qs('#veiculoCombustivel'), activeOptionsFrom('combustiveis', c => c.nome));

  setSelectOptions(qs('#fSetor'), activeOptionsFrom('setores', s => s.nome), 'Todos');
  setSelectOptions(qs('#fVeiculo'), activeOptionsFrom('veiculos', v => `${v.prefixo} · ${v.placa}`), 'Todos');
  setSelectOptions(qs('#fPlaca'), activeOptionsFrom('veiculos', v => v.placa, v => v.placa), 'Todas');
  setSelectOptions(qs('#fMotorista'), activeOptionsFrom('motoristas', m => m.nome), 'Todos');

  setSelectOptions(qs('#dashAggPlaca'), activeOptionsFrom('veiculos', v => `${v.prefixo} · ${v.placa}`, v => v.placa));

  if (!qs('#dashAggPlaca').value && qs('#dashAggPlaca').options.length > 1) qs('#dashAggPlaca').selectedIndex = 1;
  if (!qs('#fCampoData').value) qs('#fCampoData').value = 'dataAbastecimento';
  if (!qs('#dashAggCampoData').value) qs('#dashAggCampoData').value = 'dataAbastecimento';
}

function updateVehicleInfo() {
  const veiculo = getVeiculo(qs('#veiculoId').value);
  const motorista = getMotorista(qs('#motoristaId').value);
  qs('#prefixoExibicao').value = veiculo?.prefixo || '';
  setSelectOptions(qs('#placaExibicao'), veiculo ? [{ value: veiculo.placa, label: veiculo.placa }] : [], veiculo ? null : 'Selecione o prefixo');
  if (veiculo) qs('#placaExibicao').value = veiculo.placa;
  qs('#combustivelExibicao').value = veiculo ? getCombustivelName(veiculo.combustivelId) : '';
  qs('#matriculaExibicao').value = motorista?.matricula || '';
  updateValorTotal();
}

function updateValorTotal() {
  const total = num(qs('#valorUnitario').value) * num(qs('#qtdLitros').value);
  qs('#valorTotalExibicao').value = brl(total);
}

function resolveRelativeRange(type, quantity) {
  const qty = Math.max(1, num(quantity || 1));
  const end = parseIsoDate(today());
  let start = parseIsoDate(today());
  let label = 'Período livre';

  if (type === 'dias') {
    start.setDate(end.getDate() - (qty - 1));
    label = `Últimos ${qty} dia(s)`;
  } else if (type === 'semanas') {
    start.setDate(end.getDate() - ((qty * 7) - 1));
    label = `Últimas ${qty} semana(s)`;
  } else if (type === 'meses') {
    start = new Date(end.getFullYear(), end.getMonth() - qty + 1, 1);
    label = `Últimos ${qty} mês(es)`;
  } else if (type === 'anos') {
    start = new Date(end.getFullYear() - qty + 1, 0, 1);
    label = `Últimos ${qty} ano(s)`;
  }

  return {
    start: toIsoDate(start),
    end: toIsoDate(end),
    label
  };
}

function getDisplayRangeInfo(start, end, label, fieldLabel) {
  return `${label} · ${fieldLabel}: ${start ? formatDisplayDate(start) : 'sem início'} até ${end ? formatDisplayDate(end) : 'sem fim'}`;
}

function getConsultaFilters() {
  const campoData = qs('#fCampoData').value || 'dataAbastecimento';
  const periodoTipo = qs('#fPeriodoTipo').value;
  const periodoValor = qs('#fPeriodoValor').value;
  const relativo = periodoTipo ? resolveRelativeRange(periodoTipo, periodoValor || 1) : null;

  return {
    id: qs('#fId').value,
    campoData,
    dataIni: relativo ? relativo.start : parseBrDateToIso(qs('#fDataIni').value),
    dataFim: relativo ? relativo.end : parseBrDateToIso(qs('#fDataFim').value),
    periodoLabel: relativo ? relativo.label : 'Período livre',
    setorId: qs('#fSetor').value,
    veiculoId: qs('#fVeiculo').value,
    placa: qs('#fPlaca').value,
    motoristaId: qs('#fMotorista').value,
    autorizacao: qs('#fAutorizacao').value.trim(),
    termoLivre: qs('#fTermoLivre').value.trim()
  };
}

function matchesFreeText(item, termo) {
  if (!termo) return true;
  const blob = normalizeText([
    item.id,
    item.autorizacao,
    item.observacao,
    getSetorName(item.setorId),
    getVeiculoName(item.veiculoId),
    getVeiculoPrefixo(item.veiculoId),
    getVehiclePlate(item.veiculoId),
    getMotoristaName(item.motoristaId),
    item.inspetorCoordenacao,
    item.gerenteAbastecimento,
    item.kmAtual,
    item.valorTotal,
    item.qtdLitros
  ].join(' '));
  return blob.includes(normalizeText(termo));
}

function getFilteredAbastecimentos(filters = getConsultaFilters()) {
  return state.abastecimentos.filter(item => {
    const compareDate = item[filters.campoData] || item.dataAbastecimento;
    if (filters.id && Number(item.id) !== Number(filters.id)) return false;
    if (filters.dataIni && compareDate < filters.dataIni) return false;
    if (filters.dataFim && compareDate > filters.dataFim) return false;
    if (filters.setorId && Number(item.setorId) !== Number(filters.setorId)) return false;
    if (filters.veiculoId && Number(item.veiculoId) !== Number(filters.veiculoId)) return false;
    if (filters.placa && getVehiclePlate(item.veiculoId) !== filters.placa) return false;
    if (filters.motoristaId && Number(item.motoristaId) !== Number(filters.motoristaId)) return false;
    if (filters.autorizacao && String(item.autorizacao || '') !== filters.autorizacao) return false;
    if (!matchesFreeText(item, filters.termoLivre)) return false;
    return true;
  }).sort((a, b) => b.id - a.id);
}

function renderDashboard() {
  qs('#dashTotalRegistros').textContent = state.abastecimentos.length;
  qs('#dashTotalLitros').textContent = state.abastecimentos.reduce((sum, item) => sum + num(item.qtdLitros), 0).toLocaleString('pt-BR');
  qs('#dashTotalValor').textContent = brl(state.abastecimentos.reduce((sum, item) => sum + num(item.valorTotal), 0));
  qs('#dashVeiculosAtivos').textContent = state.veiculos.filter(v => v.ativo !== false).length;

  const latest = [...state.abastecimentos].sort((a, b) => b.id - a.id).slice(0, 6);
  qs('#dashUltimos').innerHTML = latest.length ? latest.map(item => `
    <tr>
      <td>${item.id}</td>
      <td>${formatDisplayDate(item.dataAbastecimento)}</td>
      <td>${getVeiculoPrefixo(item.veiculoId)}</td>
      <td>${getVehiclePlate(item.veiculoId)}</td>
      <td>${getMotoristaName(item.motoristaId)}</td>
      <td>${brl(item.valorTotal)}</td>
    </tr>
  `).join('') : `<tr><td colspan="6">Sem dados.</td></tr>`;

  calculateDashAgg();
}

function renderAbastecimentosTable() {
  const ordered = [...state.abastecimentos].sort((a, b) => b.id - a.id);
  qs('#abastecimentosTabela').innerHTML = ordered.length ? ordered.map(item => `
    <tr>
      <td>${item.id}</td>
      <td>${formatDisplayDate(item.dataAbastecimento)}</td>
      <td>${getVeiculoPrefixo(item.veiculoId)}</td>
      <td>${getVehiclePlate(item.veiculoId)}</td>
      <td>${getSetorName(item.setorId)}</td>
      <td>${getMotoristaName(item.motoristaId)}</td>
      <td>${item.inspetorCoordenacao || ''}</td>
      <td>${item.gerenteAbastecimento || ''}</td>
      <td>${item.kmAtual}</td>
      <td>${num(item.qtdLitros).toLocaleString('pt-BR')}</td>
      <td>${brl(item.valorTotal)}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn edit" data-action="edit-abastecimento" data-id="${item.id}">Editar</button>
          <button class="icon-btn delete" data-action="delete-abastecimento" data-id="${item.id}">Excluir</button>
        </div>
      </td>
    </tr>
  `).join('') : `<tr><td colspan="12">Nenhum registro.</td></tr>`;
}

function clearAbastecimentoForm() {
  qs('#abastecimentoId').value = '';
  qs('#formAbastecimento').reset();
  qs('#dataLancamento').value = formatDisplayDate(today());
  qs('#dataAbastecimento').value = formatDisplayDate(today());
  qs('#horaAbastecimento').value = '08:00';
  qs('#prefixoExibicao').value = '';
  setSelectOptions(qs('#placaExibicao'), [], 'Selecione o prefixo');
  qs('#combustivelExibicao').value = '';
  qs('#matriculaExibicao').value = '';
  qs('#valorTotalExibicao').value = brl(0);
}

function validateAbastecimento(payload, editingId = null) {
  const veiculo = getVeiculo(payload.veiculoId);
  if (!veiculo) return 'Veículo inválido.';
  if (!payload.dataLancamento || !payload.dataAbastecimento) return 'Informe datas válidas no formato dd/mm/aa.';
  if (!payload.setorId || !payload.motoristaId) return 'Preencha setor e motorista.';
  if (!payload.inspetorCoordenacao || !payload.gerenteAbastecimento) return 'Selecione o inspetor em coordenação e o gerente de abastecimento.';
  if (payload.autorizacao && payload.autorizacao.length > 6) return 'Autorização deve ter até 6 dígitos.';
  const duplicadoAutorizacao = state.abastecimentos.find(item => item.autorizacao && payload.autorizacao && item.autorizacao === payload.autorizacao && Number(item.id) !== Number(editingId));
  if (duplicadoAutorizacao) return 'Autorização já cadastrada em outro abastecimento.';
  const kmAtualVeiculo = num(veiculo.kmAtual);
  if (!editingId && num(payload.kmAtual) < kmAtualVeiculo) return `KM informado menor que o KM atual do veículo (${kmAtualVeiculo}).`;
  if (num(payload.valorUnitario) < 0 || num(payload.qtdLitros) < 0) return 'Valor unitário e litros devem ser não negativos.';
  return null;
}

function handleAbastecimentoSubmit(event) {
  event.preventDefault();
  const editingId = qs('#abastecimentoId').value;
  const payload = {
    setorId: num(qs('#setorId').value),
    veiculoId: num(qs('#veiculoId').value),
    motoristaId: num(qs('#motoristaId').value),
    inspetorCoordenacao: qs('#inspetorCoordenacao').value,
    gerenteAbastecimento: qs('#gerenteAbastecimento').value,
    usuarioId: 1,
    dataLancamento: parseBrDateToIso(qs('#dataLancamento').value),
    dataAbastecimento: parseBrDateToIso(qs('#dataAbastecimento').value),
    horaAbastecimento: qs('#horaAbastecimento').value,
    autorizacao: qs('#autorizacao').value.trim(),
    kmAtual: num(qs('#kmAtual').value),
    valorUnitario: num(qs('#valorUnitario').value),
    qtdLitros: num(qs('#qtdLitros').value),
    valorTotal: Number((num(qs('#valorUnitario').value) * num(qs('#qtdLitros').value)).toFixed(2)),
    observacao: qs('#observacao').value.trim()
  };

  const error = validateAbastecimento(payload, editingId || null);
  if (error) {
    alert(error);
    return;
  }

  if (editingId) {
    const index = state.abastecimentos.findIndex(item => Number(item.id) === Number(editingId));
    state.abastecimentos[index] = { ...state.abastecimentos[index], ...payload };
  } else {
    state.abastecimentos.push({ id: nextId('abastecimentos'), ...payload, criadoEm: new Date().toISOString() });
  }

  const veiculo = getVeiculo(payload.veiculoId);
  if (veiculo && payload.kmAtual > num(veiculo.kmAtual)) veiculo.kmAtual = payload.kmAtual;

  saveState();
  clearAbastecimentoForm();
  syncSelects();
  renderAll();
}

function editAbastecimento(id) {
  const item = findById('abastecimentos', id);
  if (!item) return;
  qs('#abastecimentoId').value = item.id;
  qs('#dataLancamento').value = formatDisplayDate(item.dataLancamento);
  qs('#dataAbastecimento').value = formatDisplayDate(item.dataAbastecimento);
  qs('#horaAbastecimento').value = item.horaAbastecimento;
  qs('#setorId').value = item.setorId;
  qs('#veiculoId').value = item.veiculoId;
  qs('#motoristaId').value = item.motoristaId;
  qs('#inspetorCoordenacao').value = item.inspetorCoordenacao || '';
  qs('#gerenteAbastecimento').value = item.gerenteAbastecimento || '';
  qs('#kmAtual').value = item.kmAtual;
  qs('#autorizacao').value = item.autorizacao || '';
  qs('#valorUnitario').value = item.valorUnitario;
  qs('#qtdLitros').value = item.qtdLitros;
  qs('#observacao').value = item.observacao || '';
  updateVehicleInfo();
  setScreen('abastecimentos');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteAbastecimento(id) {
  if (!confirm('Excluir este abastecimento?')) return;
  state.abastecimentos = state.abastecimentos.filter(item => Number(item.id) !== Number(id));
  saveState();
  renderAll();
}

function clearAllLancamentos() {
  if (!state.abastecimentos.length) {
    alert('Não há lançamentos para limpar.');
    return;
  }

  const confirmed = confirm('Confirma a exclusão de todos os lançamentos de abastecimento? Esta ação não pode ser desfeita no navegador.');
  if (!confirmed) return;

  state.abastecimentos = [];
  saveState();
  clearAbastecimentoForm();
  renderAll();
  alert('Todos os lançamentos foram removidos com sucesso.');
}

function renderConsulta() {
  const filtros = getConsultaFilters();
  const data = getFilteredAbastecimentos(filtros);
  const campoLabel = filtros.campoData === 'dataLancamento' ? 'lançamento' : 'abastecimento';

  qs('#consultaTotal').textContent = data.length;
  qs('#consultaLitros').textContent = data.reduce((sum, item) => sum + num(item.qtdLitros), 0).toLocaleString('pt-BR');
  qs('#consultaValor').textContent = brl(data.reduce((sum, item) => sum + num(item.valorTotal), 0));
  qs('#consultaPeriodoInfo').textContent = getDisplayRangeInfo(filtros.dataIni || 'sem início', filtros.dataFim || 'sem fim', filtros.periodoLabel, `data de ${campoLabel}`);

  qs('#consultaTabela').innerHTML = data.length ? data.map(item => `
    <tr>
      <td>${item.id}</td>
      <td>${formatDisplayDate(item.dataLancamento)}</td>
      <td>${formatDisplayDate(item.dataAbastecimento)}</td>
      <td>${item.horaAbastecimento}</td>
      <td>${getSetorName(item.setorId)}</td>
      <td>${getVeiculoName(item.veiculoId)}</td>
      <td>${getVeiculoPrefixo(item.veiculoId)}</td>
      <td>${getVehiclePlate(item.veiculoId)}</td>
      <td>${getMotoristaName(item.motoristaId)}</td>
      <td>${item.inspetorCoordenacao || ''}</td>
      <td>${item.gerenteAbastecimento || ''}</td>
      <td>${item.kmAtual}</td>
      <td>${num(item.qtdLitros).toLocaleString('pt-BR')}</td>
      <td>${brl(item.valorTotal)}</td>
    </tr>
  `).join('') : `<tr><td colspan="14">Nenhum registro encontrado.</td></tr>`;
}

function clearConsulta() {
  ['#fId', '#fDataIni', '#fDataFim', '#fAutorizacao', '#fPeriodoValor', '#fTermoLivre'].forEach(selector => qs(selector).value = '');
  ['#fSetor', '#fVeiculo', '#fPlaca', '#fMotorista'].forEach(selector => qs(selector).value = '');
  qs('#fCampoData').value = 'dataAbastecimento';
  qs('#fPeriodoTipo').value = '';
  renderConsulta();
}

function renderCadastros() {
  qs('#veiculosTabela').innerHTML = state.veiculos.map(item => `
    <tr>
      <td>${item.prefixoTipo || (item.prefixo || '').split(' ')[0] || ''}</td>
      <td>${item.prefixoNumero || (item.prefixo || '').split(' ')[1] || ''}</td>
      <td>${item.placa}</td>
      <td>${getCombustivelName(item.combustivelId)}</td>
      <td>${formatStatus(item.ativo !== false)}</td>
      <td><div class="row-actions"><button class="icon-btn edit" data-action="edit-veiculo" data-id="${item.id}">Editar</button><button class="icon-btn delete" data-action="delete-veiculo" data-id="${item.id}">Excluir</button></div></td>
    </tr>
  `).join('');

  qs('#motoristasTabela').innerHTML = state.motoristas.map(item => `
    <tr>
      <td>${item.nome}</td>
      <td>${item.matricula}</td>
      <td>${formatStatus(item.ativo !== false)}</td>
      <td><div class="row-actions"><button class="icon-btn edit" data-action="edit-motorista" data-id="${item.id}">Editar</button><button class="icon-btn delete" data-action="delete-motorista" data-id="${item.id}">Excluir</button></div></td>
    </tr>
  `).join('');

  qs('#setoresTabela').innerHTML = state.setores.map(item => `
    <tr>
      <td>${item.nome}</td>
      <td>${item.sigla || ''}</td>
      <td><div class="row-actions"><button class="icon-btn edit" data-action="edit-setor" data-id="${item.id}">Editar</button><button class="icon-btn delete" data-action="delete-setor" data-id="${item.id}">Excluir</button></div></td>
    </tr>
  `).join('');

  qs('#combustiveisTabela').innerHTML = state.combustiveis.map(item => `
    <tr>
      <td>${item.nome}</td>
      <td><div class="row-actions"><button class="icon-btn edit" data-action="edit-combustivel" data-id="${item.id}">Editar</button><button class="icon-btn delete" data-action="delete-combustivel" data-id="${item.id}">Excluir</button></div></td>
    </tr>
  `).join('');
}

function genericSave(collection, formValues, editingIdSelector, clearFn) {
  const editId = qs(editingIdSelector).value;
  if (editId) {
    const index = state[collection].findIndex(item => Number(item.id) === Number(editId));
    state[collection][index] = { ...state[collection][index], ...formValues };
  } else {
    state[collection].push({ id: nextId(collection), ...formValues });
  }
  saveState();
  clearFn();
  syncSelects();
  renderAll();
}

function clearVeiculoForm() {
  qs('#veiculoEditId').value = '';
  qs('#formVeiculo').reset();
  qs('#veiculoPrefixoTipo').value = 'Vtr';
  qs('#veiculoPrefixoNumero').value = '';
  qs('#veiculoAtivo').value = 'true';
  updatePrefixoPreview();
}

function clearMotoristaForm() {
  qs('#motoristaEditId').value = '';
  qs('#formMotorista').reset();
  qs('#motoristaAtivo').value = 'true';
}

function clearSetorForm() {
  qs('#setorEditId').value = '';
  qs('#formSetor').reset();
}

function clearCombustivelForm() {
  qs('#combustivelEditId').value = '';
  qs('#formCombustivel').reset();
}

function handleVeiculoSubmit(event) {
  event.preventDefault();
  const placa = qs('#veiculoPlaca').value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  const prefixoTipo = qs('#veiculoPrefixoTipo').value || 'Vtr';
  const prefixoNumeroRaw = qs('#veiculoPrefixoNumero').value;
  const prefixoNumero = String(Number(prefixoNumeroRaw || 0)).padStart(3, '0');
  const prefixo = buildPrefixo(prefixoTipo, prefixoNumeroRaw);
  const editId = Number(qs('#veiculoEditId').value || 0);

  if (!/^[A-Z]{3}\d[A-Z]\d{2}$/i.test(placa)) return alert('Informe a placa no formato atual ABC1D23.');
  if (!prefixoNumeroRaw || Number(prefixoNumeroRaw) < 1 || Number(prefixoNumeroRaw) > 999) return alert('Informe o número do prefixo entre 001 e 999.');

  const placaExiste = state.veiculos.find(item => String(item.placa || '').toUpperCase().replace(/[^A-Z0-9]/g, '') === placa && Number(item.id) !== editId);
  if (placaExiste) return alert('Já existe veículo cadastrado com esta placa.');

  const prefixoExiste = state.veiculos.find(item => normalizeText(item.prefixo) === normalizeText(prefixo) && Number(item.id) !== editId);
  if (prefixoExiste) return alert('Já existe veículo cadastrado com este prefixo.');

  genericSave('veiculos', {
    descricao: prefixo,
    prefixoTipo,
    prefixoNumero,
    prefixo,
    placa,
    combustivelId: num(qs('#veiculoCombustivel').value),
    kmAtual: findById('veiculos', editId)?.kmAtual || 0,
    ativo: qs('#veiculoAtivo').value === 'true'
  }, '#veiculoEditId', clearVeiculoForm);
}

function handleMotoristaSubmit(event) {
  event.preventDefault();
  const matricula = qs('#motoristaMatricula').value.trim();
  const exists = state.motoristas.find(item => item.matricula === matricula && Number(item.id) !== Number(qs('#motoristaEditId').value || 0));
  if (exists) return alert('Já existe motorista com esta matrícula.');
  genericSave('motoristas', {
    nome: qs('#motoristaNome').value.trim().toUpperCase(),
    matricula,
    ativo: qs('#motoristaAtivo').value === 'true'
  }, '#motoristaEditId', clearMotoristaForm);
}

function handleSetorSubmit(event) {
  event.preventDefault();
  genericSave('setores', {
    nome: qs('#setorNome').value.trim(),
    sigla: qs('#setorSigla').value.trim(),
    ativo: true
  }, '#setorEditId', clearSetorForm);
}

function handleCombustivelSubmit(event) {
  event.preventDefault();
  genericSave('combustiveis', {
    nome: qs('#combustivelNome').value.trim(),
    ativo: true
  }, '#combustivelEditId', clearCombustivelForm);
}

function editEntity(collection, id) {
  const item = findById(collection, id);
  if (!item) return;

  if (collection === 'veiculos') {
    const parsed = parsePrefixoPattern(item.prefixo, item.id);
    qs('#veiculoEditId').value = item.id;
    qs('#veiculoPrefixoTipo').value = item.prefixoTipo || parsed.tipo;
    qs('#veiculoPrefixoNumero').value = item.prefixoNumero || parsed.numero;
    qs('#veiculoPlaca').value = item.placa;
    qs('#veiculoCombustivel').value = item.combustivelId;
    qs('#veiculoAtivo').value = String(item.ativo !== false);
    updatePrefixoPreview();
  }

  if (collection === 'motoristas') {
    qs('#motoristaEditId').value = item.id;
    qs('#motoristaNome').value = item.nome;
    qs('#motoristaMatricula').value = item.matricula;
    qs('#motoristaAtivo').value = String(item.ativo !== false);
  }

  if (collection === 'setores') {
    qs('#setorEditId').value = item.id;
    qs('#setorNome').value = item.nome;
    qs('#setorSigla').value = item.sigla || '';
  }

  if (collection === 'combustiveis') {
    qs('#combustivelEditId').value = item.id;
    qs('#combustivelNome').value = item.nome;
  }

  setScreen('cadastros');
}

function deleteEntity(collection, id) {
  const dependencies = {
    veiculos: state.abastecimentos.some(item => Number(item.veiculoId) === Number(id)),
    motoristas: state.abastecimentos.some(item => Number(item.motoristaId) === Number(id)),
    setores: state.abastecimentos.some(item => Number(item.setorId) === Number(id)),
    combustiveis: state.veiculos.some(item => Number(item.combustivelId) === Number(id))
  };

  if (dependencies[collection]) return alert('Não é possível excluir: existem registros vinculados.');
  if (!confirm('Confirmar exclusão?')) return;

  state[collection] = state[collection].filter(item => Number(item.id) !== Number(id));
  saveState();
  syncSelects();
  renderAll();
}

function calculateDashAgg() {
  const placa = qs('#dashAggPlaca').value;
  const periodoTipo = qs('#dashAggPeriodoTipo').value;
  const periodoValor = qs('#dashAggPeriodoValor').value || 1;
  const campoData = qs('#dashAggCampoData').value || 'dataAbastecimento';

  if (!placa || !periodoTipo || !periodoValor) {
    qs('#dashAggResultado').textContent = 'Selecione placa, período e quantidade.';
    return;
  }

  const range = resolveRelativeRange(periodoTipo, periodoValor);
  const items = state.abastecimentos.filter(item => {
    const compareDate = item[campoData] || item.dataAbastecimento;
    return getVehiclePlate(item.veiculoId) === placa && compareDate >= range.start && compareDate <= range.end;
  });

  const litros = items.reduce((sum, item) => sum + num(item.qtdLitros), 0);
  const valor = items.reduce((sum, item) => sum + num(item.valorTotal), 0);
  const campoLabel = campoData === 'dataLancamento' ? 'lançamento' : 'abastecimento';
  const veiculo = state.veiculos.find(item => item.placa === placa);

  qs('#dashAggResultado').innerHTML = `
    <strong>${veiculo?.prefixo || ''} · ${placa}</strong><br>
    ${range.label} · data de ${campoLabel}<br>
    Faixa: <strong>${formatDisplayDate(range.start)}</strong> até <strong>${formatDisplayDate(range.end)}</strong><br>
    Qtd. abastecimentos: <strong>${items.length}</strong><br>
    Litros: <strong>${litros.toLocaleString('pt-BR')}</strong><br>
    Valor total: <strong>${brl(valor)}</strong>
  `;
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'abastecimento-v8.json';
  link.click();
  URL.revokeObjectURL(url);
}

function setImportStatus(message, tone = 'info') {
  const element = qs('#importStatus');
  if (!element) return;
  element.textContent = message;
  element.dataset.tone = tone;
}

function validateImportedState(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('Arquivo inválido para importação.');
  }

  ['perfis', 'usuarios', 'combustiveis', 'setores', 'motoristas', 'veiculos', 'abastecimentos'].forEach((key) => {
    if (!Array.isArray(data[key])) {
      throw new Error(`Estrutura JSON incompatível: coleção "${key}" ausente.`);
    }
  });
}

function importJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const importedRaw = JSON.parse(String(reader.result || '{}'));
      validateImportedState(importedRaw);
      const importedState = migrateState(clone(importedRaw));
      const totalRegistros = (importedState.abastecimentos || []).length;
      const totalVeiculos = (importedState.veiculos || []).length;

      if (!confirm(`Importar o arquivo "${file.name}"? Os dados locais atuais serão substituídos.`)) {
        setImportStatus('Importação cancelada pelo usuário.', 'warning');
        return;
      }

      state = importedState;
      saveState();
      bootstrap();
      setScreen('config');
      setImportStatus(`Importação concluída com sucesso. ${totalRegistros} lançamento(s) e ${totalVeiculos} veículo(s) carregados de ${file.name}.`, 'success');
      alert('Importação concluída com sucesso.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Falha ao ler o arquivo informado.';
      setImportStatus(`Falha na importação: ${message}`, 'error');
      alert(`Não foi possível importar o arquivo. ${message}`);
    } finally {
      event.target.value = '';
    }
  };

  reader.onerror = () => {
    setImportStatus('Falha ao acessar o arquivo selecionado.', 'error');
    alert('Não foi possível ler o arquivo selecionado.');
    event.target.value = '';
  };

  reader.readAsText(file, 'utf-8');
}

function renderAll() {
  renderDashboard();
  renderAbastecimentosTable();
  renderConsulta();
  renderCadastros();
}

function setScreen(screenId) {
  const meta = {
    dashboard: ['Gerenciamento de Abastecimento', 'Controle operacional de abastecimentos, consultas e cadastros.'],
    abastecimentos: ['Gerenciamento de Abastecimento', 'Lançamento, coordenação e manutenção de registros operacionais.'],
    consulta: ['Consulta gerencial', 'Filtros, totais e resultados consolidados.'],
    cadastros: ['Cadastros', 'Veículos, motoristas, setores e combustíveis da Guarda Municipal de Ipatinga.'],
    config: ['Fluxo do sistema', 'Controles do ambiente e modelo operacional de produção.']
  };

  qsa('.screen').forEach(screen => screen.classList.toggle('active', screen.id === screenId));
  qsa('.menu-item').forEach(button => button.classList.toggle('active', button.dataset.screen === screenId));
  qs('#screenTitle').textContent = meta[screenId][0];
  qs('#screenSubtitle').textContent = meta[screenId][1];
}

function bindMenu() {
  qsa('.menu-item').forEach(button => button.addEventListener('click', () => setScreen(button.dataset.screen)));
}

function bindDelegatedActions() {
  document.body.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-action]');
    if (!btn) return;
    const { action, id } = btn.dataset;

    if (action === 'edit-abastecimento') editAbastecimento(id);
    if (action === 'delete-abastecimento') deleteAbastecimento(id);
    if (action === 'edit-veiculo') editEntity('veiculos', id);
    if (action === 'delete-veiculo') deleteEntity('veiculos', id);
    if (action === 'edit-motorista') editEntity('motoristas', id);
    if (action === 'delete-motorista') deleteEntity('motoristas', id);
    if (action === 'edit-setor') editEntity('setores', id);
    if (action === 'delete-setor') deleteEntity('setores', id);
    if (action === 'edit-combustivel') editEntity('combustiveis', id);
    if (action === 'delete-combustivel') deleteEntity('combustiveis', id);
  });
}

function bindForms() {
  qs('#formAbastecimento').addEventListener('submit', handleAbastecimentoSubmit);
  qs('#formVeiculo').addEventListener('submit', handleVeiculoSubmit);
  qs('#formMotorista').addEventListener('submit', handleMotoristaSubmit);
  qs('#formSetor').addEventListener('submit', handleSetorSubmit);
  qs('#formCombustivel').addEventListener('submit', handleCombustivelSubmit);

  qs('#veiculoId').addEventListener('change', updateVehicleInfo);
  qs('#motoristaId').addEventListener('change', updateVehicleInfo);
  qs('#valorUnitario').addEventListener('input', updateValorTotal);
  qs('#qtdLitros').addEventListener('input', updateValorTotal);
  ['#dataLancamento', '#dataAbastecimento', '#fDataIni', '#fDataFim'].forEach(selector => {
    const element = qs(selector);
    element.addEventListener('input', (event) => {
      event.target.value = maskDateValue(event.target.value);
    });
    element.addEventListener('blur', () => normalizeDateField(selector));
  });
  qs('#veiculoPrefixoTipo').addEventListener('change', updatePrefixoPreview);
  qs('#veiculoPrefixoNumero').addEventListener('input', updatePrefixoPreview);

  qs('#btnCancelarEdicao').addEventListener('click', clearAbastecimentoForm);
  qs('#btnFiltrarConsulta').addEventListener('click', renderConsulta);
  qs('#btnLimparConsulta').addEventListener('click', clearConsulta);
  qs('#btnCalcularDash').addEventListener('click', calculateDashAgg);
  qs('#btnImportar').addEventListener('click', () => qs('#inputImportarJson').click());
  qs('#inputImportarJson').addEventListener('change', importJson);
  qs('#btnExportar').addEventListener('click', exportJson);
  qs('#btnLimparLancamentos').addEventListener('click', clearAllLancamentos);
  qs('#btnResetDemo').addEventListener('click', resetDemo);

  ['#fPeriodoTipo', '#fPeriodoValor', '#fDataIni', '#fDataFim', '#fCampoData', '#fSetor', '#fVeiculo', '#fPlaca', '#fMotorista', '#fAutorizacao', '#fTermoLivre', '#fId'].forEach(selector => {
    const element = qs(selector);
    element.addEventListener('change', renderConsulta);
    if (element.tagName === 'INPUT') element.addEventListener('input', renderConsulta);
  });

  ['#dashAggPlaca', '#dashAggPeriodoTipo', '#dashAggPeriodoValor', '#dashAggCampoData'].forEach(selector => {
    const element = qs(selector);
    element.addEventListener('change', calculateDashAgg);
    if (element.tagName === 'INPUT') element.addEventListener('input', calculateDashAgg);
  });
}

function bootstrap() {
  syncSelects();
  clearAbastecimentoForm();
  clearVeiculoForm();
  clearMotoristaForm();
  qs('#dashAggPeriodoTipo').value = 'dias';
  qs('#dashAggPeriodoValor').value = 30;
  renderAll();
  setScreen('dashboard');
}

bindMenu();
bindDelegatedActions();
bindForms();
bootstrap();
