# Proj-4

This project is a basic Express API wired to MongoDB using Mongoose. On startup, it loads environment variables, connects to the database, and starts an HTTP server. It is intended as a minimal backend skeleton you can extend with routes, models, and business logic.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file:

   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/your_db_name
   PORT=3000
   ```

## Run

```bash
node server.js
```

## Notes

- Default port is 3000 if `PORT` is not set.
- Ensure MongoDB is running locally or update `MONGO_URI`.
