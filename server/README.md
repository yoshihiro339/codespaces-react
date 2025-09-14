# Backend for codespaces-react

Simple Node + Express backend placed under `/server`.

Quick start:

```bash
cd server
npm install
npm run dev
```

Available endpoints:
- `GET /api/hello` - health check
- `GET /api/items` - list items
- `POST /api/items` - create item, JSON body `{ "name": "..." }`
