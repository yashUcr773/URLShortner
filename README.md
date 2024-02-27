# SHTR

## Functionality

- **URL Shortner**
- Map any URL to alias.
- Redirect to original URL when shortened URL is launched.

## Tech Stack

### Frontend:
  - Built with React, Recoil for state management, and Tailwind CSS for styling.
  - Hosted on [https://app.shtr.dev](https://app.shtr.dev).
### Backend:
  - Developed using Express.js and Node.js, with MongoDB for data storage.
  - Hosted on [https://shtr.dev](https://shtr.dev)

## Running Locally

- clone the `repo`
- cd `repo`
- cd backend
- npm i
- cd ../frontend
- npm i
- npm run start:both
- backend runs on `localhost:3000`
- frontend runs on `localhost:5173`

## Environment Variables

Ensure to add the following environment variables in a `.env` file within the `backend` directory:

- `MONGO_DB_CONNECTION`: MongoDB connection string.
- `ENV`: Set to `development`.
- `PORT`: Port number for the backend server (default: 3000).

## Attribution

- Tailwind styles inspired from [Flowbite](https://flowbite.com/).