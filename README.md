# TradeHive

TradeHive is a busy marketplace platform buzzing with activity.

## Loom Video Demonstration
[Video Demo of the project](https://www.loom.com/share/6adb5da52f7f424788878dd26d806699?sid=796a753b-d17c-4a4e-82bb-f6d4e0233262)

---

## Project Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd TradeHive/tradehive-backend
   ```

2. Ensure the PostgreSQL database is running by executing:
   ```bash
   docker compose up
   ```
3. Sync the database with the application:
   ```bash
   npx prisma migrate dev
   ```

4. Seed the database with categories:
   ```bash
   npx ts-node prisma/seed.ts
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd TradeHive/tradehive-frontend
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Start the frontend application:
   ```bash
   npm run dev
   ```

---

## Notes
- Ensure Docker and Node.js are installed and configured correctly on your machine.
- The backend and frontend applications should run concurrently for full functionality.
- For additional details, refer to the Loom video or project documentation.
