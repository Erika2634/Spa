// 1. DEFINICIÓN DE VISTAS

const LoginView = () => `
    <section class="row justify-content-center mt-5">
        <section class="col-md-4">
            <h2 class="text-success text-center mb-4">Iniciar Sesión</h2>
            <section class="mb-3">
                <label class="form-label">Usuario</label>
                <input type="text" class="form-control" id="input-usuario" placeholder="Escribe tu usuario">
            </section>
            <section class="mb-3">
                <label class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="input-pass" placeholder="Escribe tu contraseña">
            </section>
            <p id="error-login" class="text-danger d-none">Usuario o contraseña incorrectos.</p>
            <button class="btn btn-success w-100" onclick="handleLogin()">Entrar</button>
            <p class="text-secondary mt-3 text-center small">Usuario: admin | Contraseña: 1234</p>
        </section>
    </section>
`;

const InicioView = () => `
    <h1 class="text-warning text-center mt-3">✂ Bienvenido a BarberKing</h1>
    <p class="text-center text-secondary">El mejor estilo, a tu alcance.</p>
    <hr class="border-warning">
    <p class="text-center">¿Listo para un cambio de look? Explora nuestros servicios o reserva tu cita.</p>
    <section class="text-center mt-4">
        <a href="/catalogo" class="btn btn-warning me-3">Ver Servicios</a>
        <a href="/citas" class="btn btn-outline-warning">Reservar Cita</a>
    </section>
`;

const CatalogoView = () => `
    <h2 class="text-warning text-center mt-3">Nuestros Servicios</h2>
    <p class="text-center text-secondary mb-4">Elige el servicio que necesitas</p>
    <section class="row g-4">

        <section class="col-md-4">
            <section class="card bg-secondary text-white h-100">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=220&fit=crop" class="card-img-top" alt="Corte Clásico">
                <section class="card-body">
                    <h5 class="card-title text-warning">Corte Clásico</h5>
                    <p class="card-text">Corte con tijeras y máquina. Incluye lavado y secado.</p>
                    <span class="badge bg-warning text-dark">$25.000</span>
                </section>
            </section>
        </section>

        <section class="col-md-4">
            <section class="card bg-secondary text-white h-100">
                <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=220&fit=crop" class="card-img-top" alt="Degradado">
                <section class="card-body">
                    <h5 class="card-title text-warning">Degradado (Fade)</h5>
                    <p class="card-text">Degradado bajo, medio o alto. Estilo moderno y limpio.</p>
                    <span class="badge bg-warning text-dark">$30.000</span>
                </section>
            </section>
        </section>

        <section class="col-md-4">
            <section class="card bg-secondary text-white h-100">
                <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=220&fit=crop" class="card-img-top" alt="Arreglo de Barba">
                <section class="card-body">
                    <h5 class="card-title text-warning">Arreglo de Barba</h5>
                    <p class="card-text">Perfilado y arreglo completo de barba con productos premium.</p>
                    <span class="badge bg-warning text-dark">$20.000</span>
                </section>
            </section>
        </section>

        <section class="col-md-4">
            <section class="card bg-secondary text-white h-100">
                <img src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=220&fit=crop" class="card-img-top" alt="Afeitado">
                <section class="card-body">
                    <h5 class="card-title text-warning">Afeitado con Navaja</h5>
                    <p class="card-text">Afeitado clásico con navaja, espuma caliente y paño tibio.</p>
                    <span class="badge bg-warning text-dark">$22.000</span>
                </section>
            </section>
        </section>

        <section class="col-md-4">
            <section class="card bg-secondary text-white h-100">
                <img src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=400&h=220&fit=crop" class="card-img-top" alt="Combo">
                <section class="card-body">
                    <h5 class="card-title text-warning">Combo Completo</h5>
                    <p class="card-text">Corte + barba + cejas. El tratamiento completo.</p>
                    <span class="badge bg-warning text-dark">$45.000</span>
                </section>
            </section>
        </section>

        <section class="col-md-4">
            <section class="card bg-secondary text-white h-100">
                <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=400&h=220&fit=crop" class="card-img-top" alt="Cejas">
                <section class="card-body">
                    <h5 class="card-title text-warning">Diseño de Cejas</h5>
                    <p class="card-text">Depilado y perfilado de cejas con hilo o pinzas.</p>
                    <span class="badge bg-warning text-dark">$10.000</span>
                </section>
            </section>
        </section>

    </section>
`;

const CitasView = () => `
    <section class="row justify-content-center mt-3">
        <section class="col-md-5">
            <h2 class="text-warning text-center mb-4">Reservar una Cita</h2>
            <section class="mb-3">
                <label class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="cita-nombre" placeholder="Tu nombre">
            </section>
            <section class="mb-3">
                <label class="form-label">Teléfono</label>
                <input type="text" class="form-control" id="cita-tel" placeholder="300 123 4567">
            </section>
            <section class="mb-3">
                <label class="form-label">Servicio</label>
                <select class="form-select" id="cita-servicio">
                    <option>Corte Clásico</option>
                    <option>Degradado (Fade)</option>
                    <option>Arreglo de Barba</option>
                    <option>Afeitado con Navaja</option>
                    <option>Combo Completo</option>
                    <option>Diseño de Cejas</option>
                </select>
            </section>
            <section class="mb-4">
                <label class="form-label">Fecha</label>
                <input type="date" class="form-control" id="cita-fecha">
            </section>
            <button class="btn btn-warning w-100" onclick="reservarCita()">Confirmar Reserva</button>
            <p id="confirmacion" class="text-success text-center mt-3 d-none">¡Cita reservada con éxito! 💈</p>
        </section>
    </section>
`;

const NosotrosView = () => `
    <h2 class="text-warning text-center mt-3">¿Quiénes Somos?</h2>
    <hr class="border-warning">
    <section class="row justify-content-center">
        <section class="col-md-7 text-center">
            <p class="lead">Somos <strong>BarberKing</strong>, una barbería fundada en 2015 con pasión por el estilo masculino.</p>
            <p class="text-secondary">Contamos con 4 barberos certificados, más de 5.000 clientes satisfechos y usamos productos premium en cada servicio.</p>
            <hr class="border-secondary">
            <p class="text-secondary">📍 Calle 45 #12-30, Bogotá &nbsp;|&nbsp; 📞 301 456 7890 &nbsp;|&nbsp; ⏰ Lun–Sáb 9am–8pm</p>
        </section>
    </section>
`;

const NotFoundView = () => `
    <h1 class="text-warning text-center mt-5">404 | Página no encontrada</h1>
    <p class="text-center"><a href="/" class="text-warning">Volver al inicio</a></p>
`;


// 2. MAPA DE RUTAS
const routes = {
    '/login':     LoginView,
    '/':          InicioView,
    '/catalogo':  CatalogoView,
    '/citas':     CitasView,
    '/nosotros':  NosotrosView,
    '404':        NotFoundView
};


// 3. FUNCIÓN DE RENDERIZADO
const renderContent = (url) => {
    if (!sessionStorage.getItem('loggedIn') && url !== '/login') {
        history.replaceState(null, null, '/login');
        document.getElementById('root').innerHTML = LoginView();
        return;
    }
    const View = routes[url] || routes['404'];
    document.getElementById('root').innerHTML = View();
};


// 4. FUNCIÓN DE NAVEGACIÓN
const navigateTo = (url) => {
    history.pushState(null, null, url);
    renderContent(url);
};


// 5. FUNCIÓN DE LOGIN
const handleLogin = () => {
    const usuario = document.getElementById('input-usuario').value;
    const pass = document.getElementById('input-pass').value;

    if (usuario === 'admin' && pass === '1234') {
        sessionStorage.setItem('loggedIn', 'true');
        navigateTo('/');
    } else {
        document.getElementById('error-login').classList.remove('d-none');
    }
};


// 6. FUNCIÓN PARA RESERVAR CITA
const reservarCita = () => {
    const nombre = document.getElementById('cita-nombre').value;
    const tel = document.getElementById('cita-tel').value;
    if (nombre === '' || tel === '') {
        alert('Por favor completa nombre y teléfono.');
        return;
    }
    document.getElementById('confirmacion').classList.remove('d-none');
};


// 7. ESCUCHA DE EVENTOS
document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', e => {
        if (e.target.matches('a') && e.target.getAttribute('href').startsWith('/')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        }
    });

    window.addEventListener('popstate', () => {
        renderContent(location.pathname);
    });

    renderContent(location.pathname);
});