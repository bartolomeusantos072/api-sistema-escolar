Para que o seu **README** reflita a mudança para o ecossistema da **Vercel** e os dados de **Livros e Alunos** (abandonando o tema de refeições), precisamos atualizar as instruções de instalação e a estrutura de dados.

Aqui está o README ajustado para o seu novo projeto:

---

# 📚 API Escola React - Sistema de Gestão de Alunos e Biblioteca

Este projeto consiste em uma API RESTful simulada, hospedada na **Vercel**, para gerenciar o cadastro de alunos e o acervo de livros de uma escola. Utiliza o [JSON Server](https://github.com/typicode/json-server) adaptado para ambientes *Serverless*.

---

## 🎯 Objetivo

Servir como backend para o projeto **Escola React**, permitindo:
- **Persistência de Dados (Desafio 3):** Cadastro e listagem real de livros e alunos via `fetch`.
- **Integração Full Stack:** Prática de consumo de APIs remotas em vez de arquivos locais estáticos.
- **Ambiente de Produção:** Demonstração do sistema funcionando online através da Vercel.

---

## 📦 Estrutura dos Dados (`db.json`)

O banco de dados simulado possui as seguintes entidades:

### 👨‍🎓 `alunos`
Gerenciamento de matrículas e cursos.
```json
{
  "id": "1",
  "nome": "Maria Silva",
  "curso": "Informática"
}
```

### 📖 `livros`
Controle do acervo da biblioteca escolar.
```json
{
  "id": "1",
  "titulo": "Fundamentos de React",
  "autor": "Maria da Silva"
}
```

---

## 🚀 Como Rodar Localmente

Se desejar testar as alterações antes de subir para a Vercel:

1. Instale as dependências:
```bash
npm install
```

2. Inicie o JSON Server local:
```bash
npx json-server --watch db.json --port 5000
```

3. Acesse em seu navegador: `http://localhost:5000/alunos` ou `http://localhost:5000/livros`.

---

## ☁️ Deploy na Vercel

Esta API está configurada para rodar como uma **Serverless Function**. 

- **Arquivo de Configuração:** `vercel.json` define as rotas e o runtime do Node.js.
- **Ponto de Entrada:** `api/server.js` inicializa o motor do JSON Server.

> **Nota:** Por ser um ambiente *read-only* após o build, cadastros realizados na versão online são mantidos na memória temporária do servidor. Para persistência permanente em disco, recomenda-se o uso de bancos de dados como MongoDB ou Supabase.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [JSON Server](https://github.com/typicode/json-server)
- [Vercel Platform](https://vercel.com/)

---

## 💡 Endpoints Disponíveis

| Recurso | Método | Descrição |
| :--- | :--- | :--- |
| `/alunos` | GET | Lista todos os alunos |
| `/alunos` | POST | Cadastra um novo aluno |
| `/livros` | GET | Lista todos os livros |
| `/livros` | POST | Cadastra um novo livro |
| `/livros/:id`| DELETE| Remove um livro do acervo |

---

> **Aviso:** Este é um projeto de cunho educacional desenvolvido para os desafios de React.js. 🚀