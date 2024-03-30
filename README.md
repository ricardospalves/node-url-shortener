# 🗜️🔗 Node: URL shortener

URL shortener in Node.js.

## Technologies

### API (back-end)

- Node.js with Fastify and TypeScript
- Docker and Docker Compose
- PostgreSQL
- Redis

### WEB (front-end)

- React.js with TypeScript
- Tailwind CSS

## Requirements

- Node.js 20.11.1 or later
- npm 10.5.0 or later
- Docker
- Docker compose

## Installation

Clone this repository:

```bash
git clone git@github.com:ricardospalves/node-url-shortener.git
```

### API (back-end)

Access the API folder:

```bash
cd api/
```

Install dependencies:

```bash
npm install
```

### WEB (front-end)

Access the WEB folder:

```bash
cd web/
```

Install dependencies:

```bash
npm install
```

## Usage

### API (back-end)

In the API folder, run Docker containers:

```bash
docker compose up -d
```

Run setup:

```bash
npm run setup
```

Run API application:

```bash
npm run dev
```

### WEB (front-end)

In the WEB folder, run application:

```bash
npm run dev
```

In your browser access the URL: http://localhost:5173

✨ **Now you can register your URLs!** ✨

## 📝 License

This project is free and open source software released under the [MIT License](https://github.com/ricardospalves/node-url-shortener/blob/main/LICENSE).
