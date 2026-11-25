# API do Portfólio Escolar

API REST em Express e Sequelize 6 para registrar matérias do SESI e do SENAI e organizar atividades e reflexões por bimestre.

## Executar localmente

Com o MySQL em execução, crie o banco com `CREATE DATABASE IF NOT EXISTS portfolio_escolar CHARACTER SET utf8mb4;`. Na pasta do projeto, execute no PowerShell:

```powershell
npm install
$env:DB_USER = 'root'
$env:DB_PASSWORD = 'sua-senha'
npm start
```

A API usa a porta 3333 por padrão. As variáveis opcionais são `DB_HOST` (localhost), `DB_PORT` (3306), `DB_NAME` (portfolio_escolar) e `PORT` (3333). A primeira execução cria as tabelas no banco configurado. Para reiniciar automaticamente durante o desenvolvimento, use `npm run dev`.

## Endpoints

| Método | Rota | Uso |
| --- | --- | --- |
| POST | /materias | Cadastrar matéria |
| GET | /materias | Listar matérias, com filtro opcional `instituto` |
| GET | /materias/:id | Consultar matéria |
| PUT | /materias/:id | Atualizar campos da matéria |
| DELETE | /materias/:id | Excluir matéria sem bimestres |
| POST | /bimestres | Cadastrar bimestre |
| GET | /bimestres | Listar bimestres, com filtros opcionais `materia_id` e `ano` |
| GET | /bimestres/:id | Consultar bimestre |
| PUT | /bimestres/:id | Atualizar campos do bimestre |
| DELETE | /bimestres/:id | Excluir bimestre |

Envie JSON com o cabeçalho `Content-Type: application/json`. Exemplo para `POST /materias`:

```json
{"nome":"Ciências","instituto":"SESI"}
```

Use o UUID retornado como `materia_id` ao enviar `POST /bimestres`:

```json
{
  "numero_bimestre": 1,
  "ano": 2026,
  "materia_id": "550e8400-e29b-41d4-a716-446655440000",
  "conteudo": "Estudei campo magnético e a orientação dos animais."
}
```

Os bimestres vão de 1 a 4 e o ano letivo de 2020 a 2026. O campo `conteudo` é opcional e pode ser limpo com `null` em uma atualização. A mesma matéria pode ter apenas um registro para cada combinação de ano e número do bimestre.

As consultas e atualizações retornam 200, os cadastros retornam 201 e as exclusões retornam 204. Dados inválidos retornam 400, registros ausentes retornam 404 e conflitos de vínculo ou duplicidade retornam 409.
