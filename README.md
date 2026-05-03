# Calculadora de MMC

Uma aplicação Fullstack desenvolvida para calcular o Menor Múltiplo Comum (MMC) de um intervalo numérico, garantindo validações robustas no frontend e um processamento eficiente e isolado no backend.

🚀 **Demonstração em Produção:** [Acessar a Calculadora](https://calculo-mmc-django-react.vercel.app/)

> ⚠️ **Aviso de Cold Start:** A API (backend) está hospedada no plano gratuito do Render, que suspende o servidor após 15 minutos de inatividade. O **primeiro cálculo pode levar cerca de 50 segundos** para responder enquanto a máquina "acorda". Os cálculos subsequentes ocorrerão de forma instantânea!

---

## 🛠 Tecnologias Utilizadas

**Frontend:**
* React.js com Vite
* TypeScript
* CSS Puro (Arquitetura Componentizada)
* Fetch API nativa para requisições
* Deploy: Vercel

**Backend:**
* Python 3.12
* Django (API mode)
* django-cors-headers
* Gunicorn (Servidor WSGI para produção)
* Deploy: Render

**Infraestrutura:**
* Docker & Docker Compose

---

## ⚙️ Arquitetura e Decisões Técnicas

* **Abordagem "Lean" no Frontend:** Optei por não utilizar bibliotecas pesadas de formulários (como Formik ou React Hook Form) ou de UI (Material UI) para demonstrar domínio nativo de React, componentização e gerenciamento de estados (`useState`), com código limpo e de fácil manutenção.
* **Validações em Duas Camadas (Fullstack):** As regras de negócio (números positivos, *x < y*, preenchimento obrigatório) são validadas tanto no **Client-Side** (poupando processamento e dando feedback instantâneo ao usuário) quanto no **Server-Side** (garantindo a integridade e segurança da API contra requisições malformadas).
* **Componentização:** Inputs, botões e o sistema de feedback visual (Toasts) foram isolados em componentes próprios, respeitando o princípio de responsabilidade única.

---

## 🚀 Como Executar o Projeto Localmente

Você pode rodar o projeto de duas maneiras: utilizando Docker (Recomendado) ou executando os servidores manualmente.

### Opção 1: Via Docker (Recomendado)

Certifique-se de ter o [Docker](https://docs.docker.com/get-docker/) instalado na sua máquina.

1. Clone o repositório:
```bash
git clone https://github.com/MauricioTdM/calculo-mmc-django-react.git
cd calculo-mmc-django-react
```

2. Suba os contêineres:
```bash
docker compose up --build
```

3. Acesse a aplicação:
* Frontend: `http://localhost:45173`
* Backend API: `http://localhost:48000/api/calculate/`

*(Nota: As portas altas foram escolhidas estrategicamente para evitar conflitos com outros serviços que possam estar rodando na máquina host).*

---

### Opção 2: Execução Manual

Caso prefira rodar sem o Docker, siga os passos abaixo:
#### Clone o repositório:
```bash
git clone https://github.com/MauricioTdM/calculo-mmc-django-react.git
cd calculo-mmc-django-react
```

#### Configurando o Backend (Django)
1. Acesse a pasta do backend:
```bash
cd backend
```

2. Crie e ative o ambiente virtual:
```bash
# Windows
python -m venv venv
.venv/Scripts/activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Instale as dependências:
```bash
pip install -r requirements.txt 
```

4. Inicie o servidor local:
```bash 
python manage.py runserver 
```
5. Acesse no navegador:
[localhost:8000/api/calculate/](http://localhost:8000/api/calculate/)

#### Configurando o Frontend (React/Vite)
1. Abra um novo terminal e acesse a pasta do frontend:
```bash 
cd frontend 
```

2. Instale as dependências do Node:
```bash 
npm install 
```

3. Crie um arquivo .env na raiz da pasta frontend e aponte para o servidor local:
```env 
VITE_BACKEND_BASE_URL=http://localhost:8000 
```
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
5. Acesse no navegador:
[localhost:5173](http://localhost:5173)

---

## 🧪 Exemplo de Uso
1. No campo **Primeiro Número (x)**, digite: `1`
2. No campo **Último Número (y)**, digite: `10`
3. Clique em **Calcular**.
4. O resultado retornado pela API e exibido na tela será: **2520**