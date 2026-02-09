# Cambios Necesarios en index.html para Supabase

## Resumen de Modificaciones

Este documento detalla todos los cambios que necesitas hacer en el archivo `index.html` original para que funcione con Supabase.

---

## 1. Agregar Scripts en el `<head>` (después de línea 8)

Buscar:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
```

Agregar inmediatamente después:
```html
<!-- Supabase Client Library -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<!-- Archivos de configuración -->
<script src="config-supabase.js"></script>
<script src="supabase-service.js"></script>
```

---

## 2. Reemplazar el Objeto DB (línea ~1420)

### Código Original:
```javascript
const DB = {
    fincas: {
        fincas: [],
        save() {
            localStorage.setItem('db_fincas', JSON.stringify(this));
            this.download('db_fincas.json');
        },
        load() {
            const saved = localStorage.getItem('db_fincas');
            if (saved) {
                const data = JSON.parse(saved);
                this.fincas = data.fincas || [];
            }
        },
        download(filename) {
            const dataStr = JSON.stringify(this, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
            URL.revokeObjectURL(url);
        }
    },
    // ... similar para cuarteles, labores, usuarios
    save(type) {
        this[type].save();
    }
};
```

### Código Nuevo:
```javascript
// Inicializar servicio de Supabase
let supabaseService;
let currentUser = null;

// Cache local
const localCache = {
    fincas: [],
    cuarteles: [],
    labores: []
};

// Función para inicializar Supabase
function initSupabase() {
    try {
        supabaseService = new SupabaseService(
            SUPABASE_CONFIG.url,
            SUPABASE_CONFIG.anonKey
        );
        console.log('✓ Supabase inicializado correctamente');
        return true;
    } catch (error) {
        console.error('✗ Error inicializando Supabase:', error);
        alert('Error de conexión con la base de datos. Verifica tu configuración.');
        return false;
    }
}
```

---

## 3. Modificar la Función `init()` (línea ~1480)

### Código Original:
```javascript
init() {
    DB.usuarios.load();
    DB.fincas.load();
    DB.cuarteles.load();
    DB.labores.load();
    MENUS.load();
    this.checkAuth();
},
```

### Código Nuevo:
```javascript
async init() {
    // Inicializar Supabase
    if (!initSupabase()) {
        return;
    }
    
    // Cargar menús de configuración
    await MENUS.load();
    
    // Verificar autenticación
    this.checkAuth();
},
```

---

## 4. Modificar `register()` (línea ~1490)

### Código Original:
```javascript
register() {
    const rut = document.getElementById('regRut').value.trim();
    const nombre = document.getElementById('regNombre').value.trim();
    const password = document.getElementById('regPassword').value;

    if (!rut || !nombre || !password) {
        this.showAuthAlert('Por favor complete todos los campos');
        return;
    }

    if (password.length < 6) {
        this.showAuthAlert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    if (DB.usuarios.users.find(u => u.rut === rut)) {
        this.showAuthAlert('El RUT ya está registrado');
        return;
    }

    const user = {
        rut,
        nombre,
        password,
        createdAt: new Date().toISOString()
    };

    DB.usuarios.users.push(user);
    DB.save('usuarios');
    
    this.showAuthAlert('Usuario registrado exitosamente. Ya puede iniciar sesión.', 'success');
    this.showLogin();
},
```

### Código Nuevo:
```javascript
async register() {
    const rut = document.getElementById('regRut').value.trim();
    const nombre = document.getElementById('regNombre').value.trim();
    const password = document.getElementById('regPassword').value;

    if (!rut || !nombre || !password) {
        this.showAuthAlert('Por favor complete todos los campos');
        return;
    }

    if (password.length < 6) {
        this.showAuthAlert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    // Verificar si el usuario ya existe
    const exists = await supabaseService.checkUserExists(rut);
    if (exists) {
        this.showAuthAlert('El RUT ya está registrado');
        return;
    }

    // Registrar usuario en Supabase
    const result = await supabaseService.registerUser(rut, nombre, password);
    
    if (result.success) {
        this.showAuthAlert('Usuario registrado exitosamente. Ya puede iniciar sesión.', 'success');
        this.showLogin();
    } else {
        this.showAuthAlert('Error al registrar usuario: ' + result.error);
    }
},
```

---

## 5. Modificar `login()` (línea ~1520)

### Código Original:
```javascript
login() {
    const rut = document.getElementById('loginRut').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!rut || !password) {
        this.showAuthAlert('Por favor ingrese RUT y contraseña');
        return;
    }

    const user = DB.usuarios.users.find(u => u.rut === rut && u.password === password);
    
    if (user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.showApp();
    } else {
        this.showAuthAlert('RUT o contraseña incorrectos');
    }
},
```

### Código Nuevo:
```javascript
async login() {
    const rut = document.getElementById('loginRut').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!rut || !password) {
        this.showAuthAlert('Por favor ingrese RUT y contraseña');
        return;
    }

    const result = await supabaseService.loginUser(rut, password);
    
    if (result.success) {
        currentUser = result.data;
        localStorage.setItem('currentUser', JSON.stringify(result.data));
        this.showApp();
    } else {
        this.showAuthAlert('RUT o contraseña incorrectos');
    }
},
```

---

## 6. Modificar `addFinca()` (línea ~1540)

### Código Original:
```javascript
addFinca() {
    const nombre = document.getElementById('fincaNombre').value.trim();
    const direccion = document.getElementById('fincaDireccion').value.trim();
    const superficie = document.getElementById('fincaSuperficie').value;

    if (!nombre || !direccion || !superficie) {
        this.showAlert('fincaAlert', 'Por favor complete todos los campos');
        return;
    }

    const finca = {
        id: 'finca_' + Date.now(),
        userId: this.currentUser.rut,
        nombre,
        direccion,
        superficie: parseFloat(superficie),
        createdAt: new Date().toISOString()
    };

    DB.fincas.fincas.push(finca);
    DB.save('fincas');
    
    this.showAlert('fincaAlert', 'Finca agregada exitosamente', 'success');
    this.showNotification('✓ Finca registrada');
    
    document.getElementById('fincaNombre').value = '';
    document.getElementById('fincaDireccion').value = '';
    document.getElementById('fincaSuperficie').value = '';
    
    this.loadFincas();
    this.populateSelects();
},
```

### Código Nuevo:
```javascript
async addFinca() {
    const nombre = document.getElementById('fincaNombre').value.trim();
    const direccion = document.getElementById('fincaDireccion').value.trim();
    const superficie = document.getElementById('fincaSuperficie').value;

    if (!nombre || !direccion || !superficie) {
        this.showAlert('fincaAlert', 'Por favor complete todos los campos');
        return;
    }

    const finca = {
        user_id: currentUser.rut,
        nombre,
        direccion,
        superficie: parseFloat(superficie)
    };

    const result = await supabaseService.addFinca(finca);
    
    if (result.success) {
        this.showAlert('fincaAlert', 'Finca agregada exitosamente', 'success');
        this.showNotification('✓ Finca registrada');
        
        document.getElementById('fincaNombre').value = '';
        document.getElementById('fincaDireccion').value = '';
        document.getElementById('fincaSuperficie').value = '';
        
        await this.loadFincas();
        await this.populateSelects();
    } else {
        this.showAlert('fincaAlert', 'Error al agregar finca: ' + result.error);
    }
},
```

---

## 7. Modificar `loadFincas()` (línea ~1557)

### Código Original:
```javascript
loadFincas() {
    const fincas = DB.fincas.fincas.filter(f => f.userId === this.currentUser.rut);
    const listDiv = document.getElementById('fincasList');
    
    if (fincas.length === 0) {
        listDiv.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🌾</div><p>No hay fincas registradas aún</p></div>';
        return;
    }

    listDiv.innerHTML = fincas.map(finca => `
        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">${finca.nombre}</div>
                <div class="list-item-subtitle">
                    ${finca.direccion} • ${finca.superficie} ha
                </div>
            </div>
            <div class="list-item-actions">
                <button class="btn-small btn-delete" onclick="app.deleteFinca('${finca.id}')">Eliminar</button>
            </div>
        </div>
    `).join('');
},
```

### Código Nuevo:
```javascript
async loadFincas() {
    const result = await supabaseService.getFincas(currentUser.rut);
    
    if (!result.success) {
        console.error('Error cargando fincas:', result.error);
        return;
    }
    
    const fincas = result.data;
    localCache.fincas = fincas; // Actualizar cache
    
    const listDiv = document.getElementById('fincasList');
    
    if (fincas.length === 0) {
        listDiv.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🌾</div><p>No hay fincas registradas aún</p></div>';
        return;
    }

    listDiv.innerHTML = fincas.map(finca => `
        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">${finca.nombre}</div>
                <div class="list-item-subtitle">
                    ${finca.direccion} • ${finca.superficie} ha
                </div>
            </div>
            <div class="list-item-actions">
                <button class="btn-small btn-delete" onclick="app.deleteFinca('${finca.id}')">Eliminar</button>
            </div>
        </div>
    `).join('');
},
```

---

## 8. Modificar `deleteFinca()` (línea ~1581)

### Código Original:
```javascript
deleteFinca(fincaId) {
    if (!confirm('¿Está seguro de eliminar esta finca? Se eliminarán también sus cuarteles y labores asociadas.')) {
        return;
    }

    DB.fincas.fincas = DB.fincas.fincas.filter(f => f.id !== fincaId);
    DB.cuarteles.cuarteles = DB.cuarteles.cuarteles.filter(c => c.fincaId !== fincaId);
    
    DB.save('fincas');
    DB.save('cuarteles');
    
    this.showNotification('✓ Finca eliminada');
    this.loadFincas();
    this.loadCuarteles();
    this.populateSelects();
},
```

### Código Nuevo:
```javascript
async deleteFinca(fincaId) {
    if (!confirm('¿Está seguro de eliminar esta finca? Se eliminarán también sus cuarteles y labores asociadas.')) {
        return;
    }

    const result = await supabaseService.deleteFinca(fincaId);
    
    if (result.success) {
        this.showNotification('✓ Finca eliminada');
        await this.loadFincas();
        await this.loadCuarteles();
        await this.populateSelects();
    } else {
        this.showNotification('✗ Error al eliminar finca');
    }
},
```

---

## 9. Modificar `addCuartel()` (línea ~1598)

Similar a addFinca, cambiar a async y usar supabaseService.addCuartel()

---

## 10. Modificar `loadCuarteles()` (línea ~1656)

Similar a loadFincas, cambiar a async y usar supabaseService.getCuarteles()

---

## 11. Modificar `addLabor()` (línea ~1699)

Similar a addFinca, cambiar a async y usar supabaseService.addLabor()

### Importante para Labores:
Los productos deben guardarse como JSONB en Postgres:

```javascript
const labor = {
    user_id: currentUser.rut,
    cuartel_id: cuartelId,
    tipo: tipo,
    fecha: fecha,
    jornales: parseInt(jornales) || null,
    observaciones: observaciones || null,
    // Campos específicos según tipo
    tiempo: tipo === 'riego' ? parseFloat(tiempo) : null,
    productos: (tipo === 'aplicaciones' || tipo === 'fertilizacion') ? 
               JSON.stringify(productosArray) : null,  // ← JSONB
    equipo: tipo === 'labranzas' ? equipo : null,
    kg_cosechados: tipo === 'cosecha' ? parseFloat(kg) : null
};
```

---

## 12. Modificar `filterLabores()` (línea ~1863)

Cambiar para usar supabaseService.getLabores() con filtros:

```javascript
async filterLabores() {
    const tipo = document.getElementById('consultaTipo').value;
    const cuartelId = document.getElementById('consultaCuartel').value;
    const fechaDesde = document.getElementById('consultaFechaDesde').value;
    const fechaHasta = document.getElementById('consultaFechaHasta').value;

    const filters = {
        tipo: tipo || null,
        cuartelId: cuartelId || null,
        fechaDesde: fechaDesde || null,
        fechaHasta: fechaHasta || null
    };

    const result = await supabaseService.getLabores(currentUser.rut, filters);
    
    if (!result.success) {
        console.error('Error filtrando labores:', result.error);
        return;
    }

    const labores = result.data;
    this.currentFilteredData = labores;

    // Resto del código de renderizado...
}
```

---

## 13. Modificar `populateSelects()` (línea ~1942)

Cambiar para usar el cache local:

```javascript
async populateSelects() {
    const fincas = localCache.fincas;
    const cuarteles = localCache.cuarteles;

    const fincaSelect = document.getElementById('cuartelFinca');
    fincaSelect.innerHTML = '<option value="">-- Seleccione una finca --</option>' +
        fincas.map(f => `<option value="${f.id}">${f.nombre}</option>`).join('');

    const cuartelOptions = cuarteles.map(c => {
        const finca = fincas.find(f => f.id === c.finca_id);  // ← Cambio: finca_id
        return `<option value="${c.id}">${finca ? finca.nombre : 'N/A'} - ${c.nombre}</option>`;
    }).join('');

    document.getElementById('laborCuartel').innerHTML = 
        '<option value="">-- Seleccione un cuartel --</option>' + cuartelOptions;
    document.getElementById('consultaCuartel').innerHTML = 
        '<option value="">Todos los cuarteles</option>' + cuartelOptions;
}
```

---

## 14. Cambios en Nombres de Propiedades

Postgres usa snake_case, así que cambiar todas las referencias:

| Original (camelCase) | Nuevo (snake_case) |
|---------------------|-------------------|
| `userId` | `user_id` |
| `fincaId` | `finca_id` |
| `cuartelId` | `cuartel_id` |
| `sistemaRiego` | `sistema_riego` |
| `anioImplantacion` | `anio_implantacion` |
| `telaAntigranizo` | `tela_antigranizo` |
| `kgCosechados` | `kg_cosechados` |
| `createdAt` | `created_at` |

---

## 15. Actualizar Referencias this.currentUser

Cambiar todas las referencias de:
```javascript
this.currentUser
```

A:
```javascript
currentUser
```

(Ya que currentUser ahora es una variable global, no propiedad del objeto app)

---

## Resumen de Cambios Globales

1. **Agregar `async` a todas las funciones** que interactúan con Supabase
2. **Agregar `await`** antes de llamadas a supabaseService
3. **Cambiar `DB.tabla.array`** por **`localCache.tabla`**
4. **Actualizar nombres de propiedades** a snake_case
5. **Cambiar `this.currentUser`** por **`currentUser`**
6. **Manejar productos como JSON** (stringify antes de guardar, parse al leer)

---

## Testing

Después de realizar los cambios, probar:

1. ✓ Registro de usuario
2. ✓ Login
3. ✓ Agregar finca
4. ✓ Ver fincas en Supabase
5. ✓ Agregar cuartel
6. ✓ Registrar labor
7. ✓ Consultar labores con filtros
8. ✓ Exportar a Excel
9. ✓ Eliminar registros

---

**Nota**: Este documento cubre los cambios principales. Pueden existir otras funciones que también necesiten adaptación. Revisa la consola del navegador (F12) para identificar errores.
