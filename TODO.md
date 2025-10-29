# TODO List for User Authentication Implementation with JSON Server

- [x] Create src/data/users.json with initial empty array for storing users
- [x] Create src/pages/ directory
- [x] Create src/components/ directory
- [x] Move src/Login/Login.jsx to src/pages/Login.jsx and update it to include form inputs, add password field, and verify credentials against users.json
- [x] Create src/pages/Register.jsx with form fields for username, password, confirm password, and logic to store new user in users.json
- [x] Create src/components/Navbar.jsx with register link when not logged in
- [x] Update src/App.jsx to add /register route, set up routing, include Navbar, manage login state
- [x] Remove src/Login/ directory after moving Login.jsx
- [x] Add json-server as dev dependency in package.json
- [x] Add json-server script in package.json to serve users.json on port 3001
- [x] Update src/pages/Login.jsx to use API calls (GET /users) instead of localStorage
- [x] Update src/pages/Register.jsx to use API calls (GET /users, POST /users) instead of localStorage
- [x] Remove localStorage usage from src/App.jsx (login state persistence)
- [x] Run `npm install` to install json-server
- [x] Run `npm run json-server` and `npm run dev` concurrently to test
- [x] Verify users are stored/retrieved from users.json via API correctly
- [x] Ensure routing works and Navbar updates based on login state
- [x] Fix login to use username instead of email
