// Auth system using localStorage
const USERS_KEY = 'neuralhub_users';
const SESSION_KEY = 'neuralhub_session';

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}

function authRegister(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'Пользователь с таким email уже существует' };
  }
  const user = { id: Date.now(), name, email, password, createdAt: new Date().toISOString() };
  users.push(user);
  saveUsers(users);
  const session = { id: user.id, name: user.name, email: user.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { success: true };
}

function authLogin(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return { success: false, message: 'Неверный email или пароль' };
  }
  const session = { id: user.id, name: user.name, email: user.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { success: true };
}

function authLogout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = 'index.html';
}

// Render nav user area
document.addEventListener('DOMContentLoaded', function() {
  const area = document.getElementById('nav-user-area');
  if (!area) return;
  const user = getCurrentUser();
  if (user) {
    area.innerHTML = `
      <div class="nav-user">
        <span class="nav-user-name">👤 ${user.name}</span>
        <button class="nav-logout" onclick="authLogout()">Выйти</button>
      </div>
    `;
  } else {
    area.innerHTML = `<a href="login.html" class="nav-btn">Войти</a>`;
  }
});
