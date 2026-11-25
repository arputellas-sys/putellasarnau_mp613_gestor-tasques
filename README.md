# Gestor de Tasques CRUD (API REST)

API REST desenvolupada amb Node.js, Express, MongoDB i Mongoose per gestionar tasques (crear, consultar, actualitzar i eliminar), amb gestió automàtica de la data de finalització (`finished_at`).

## Requisits previs
- Node.js instal·lat
- MongoDB instal·lat i en execució

## Instal·lació i posada en marxa

1. Clonar el repositori i entrar a la carpeta:
   ```bash
   git clone <URL_DEL_REPOSITORI>
   cd gestor-tasques
   ```

2. Instal·lar les dependències:
   ```bash
   npm install
   ```

3. Crear el fitxer `.env` a l'arrel a partir de `.env.example` amb aquestes variables:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
   ```

4. Assegurar-se que MongoDB està actiu (`sudo systemctl start mongodb` o `mongod`).

5. Arrencar el servidor:
   ```bash
   npm run dev
   ```
   Disponible a `http://localhost:3000`.

## Endpoints principals

| Mètode | Ruta | Descripció |
| :--- | :--- | :--- |
| `POST` | `/api/tasks` | Crea una nova tasca |
| `GET` | `/api/tasks` | Obté totes les tasques |
| `GET` | `/api/tasks/:id` | Obté una tasca específica pel seu ID |
| `PUT` | `/api/tasks/:id` | Actualitza una tasca (gestiona `finished_at`) |
| `DELETE` | `/api/tasks/:id` | Elimina una tasca pel seu ID |

## Proves amb Postman
La col·lecció amb les 7 peticions i les respostes desades com a exemple es troba a `postman/gestor-tasques.postman_collection.json`.
