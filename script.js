// Función para manejar el login
function handleLogin(event) {
    event.preventDefault();
    
    // Simulación de login - en producción esto conectaría con un backend
    const username = event.target.querySelector('input[type="text"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    
    if (username && password) {
        // Guardar en sessionStorage para simular sesión
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', username);
        
        // Redirigir al dashboard
        window.location.href = 'dashboard.html';
    }
}

// Función para manejar login con Microsoft
function handleMicrosoftLogin() {
    alert('Integración con Microsoft Office 365 - Por implementar');
    // Aquí iría la lógica de autenticación con Microsoft AD
}

// Verificar si el usuario está logueado al cargar páginas protegidas
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Si no es la página de login y no hay sesión, redirigir al login
    if (currentPage !== 'login.html' && currentPage !== 'index.html' && !sessionStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
    
    // Si está en login y ya tiene sesión, redirigir al dashboard
    if (currentPage === 'login.html' && sessionStorage.getItem('loggedIn')) {
        window.location.href = 'dashboard.html';
    }
});

// Funcionalidad de búsqueda en la tabla (si existe)
const searchInput = document.querySelector('.table-search');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const tableRows = document.querySelectorAll('.data-table tbody tr');
        
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Funcionalidad de cambio de vista (grid/list)
const viewButtons = document.querySelectorAll('.view-btn');
viewButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        viewButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        // Aquí se podría cambiar la vista de las tarjetas
    });
});

