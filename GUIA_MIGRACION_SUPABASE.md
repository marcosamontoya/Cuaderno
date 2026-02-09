# 🚀 Guía de Migración a Supabase - AgroLabor Mendoza

## 📋 Índice
1. [Prerequisitos](#prerequisitos)
2. [Configuración de Supabase](#configuración-de-supabase)
3. [Instalación del Proyecto](#instalación-del-proyecto)
4. [Migración de Datos](#migración-de-datos)
5. [Configuración de la Aplicación](#configuración-de-la-aplicación)
6. [Despliegue](#despliegue)
7. [Solución de Problemas](#solución-de-problemas)

---

## 📦 Prerequisitos

### Necesitarás:
- [ ] Cuenta en [Supabase](https://supabase.com) (gratuita)
- [ ] Navegador web moderno (Chrome, Firefox, Edge, Safari)
- [ ] Editor de texto (VS Code, Sublime Text, Notepad++)
- [ ] Conocimientos básicos de edición de archivos

---

## 🔧 Configuración de Supabase

### Paso 1: Crear Proyecto en Supabase

1. **Ir a** [https://app.supabase.com](https://app.supabase.com)
2. **Hacer clic** en "New Project"
3. **Completar**:
   - **Nombre del proyecto**: `agrolabor-mendoza`
   - **Base de datos password**: Crear una contraseña segura (¡guárdarla!)
   - **Región**: Seleccionar la más cercana (preferiblemente South America)
4. **Hacer clic** en "Create new project"
5. **Esperar** 1-2 minutos mientras se crea el proyecto

### Paso 2: Ejecutar el Esquema de Base de Datos

1. En tu proyecto de Supabase, ir a **SQL Editor** (icono de base de datos en la barra lateral)
2. Hacer clic en **"+ New Query"**
3. Copiar TODO el contenido del archivo `schema.sql`
4. Pegarlo en el editor SQL
5. Hacer clic en **"Run"** (o presionar Ctrl+Enter)
6. Verificar que aparezca: ✓ "Success. No rows returned"

### Paso 3: Obtener Credenciales del Proyecto

1. Ir a **Settings** → **API** (en la barra lateral)
2. Copiar los siguientes valores:
   
   **Project URL**:
   ```
   https://xxxxxxxxxx.supabase.co
   ```
   
   **anon / public key**:
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS...
   ```

3. **¡GUARDAR ESTOS VALORES!** Los necesitarás en el siguiente paso

---

## 💻 Instalación del Proyecto

### Estructura de Archivos

Organiza los archivos de esta manera:

```
📁 AgroLabor-Supabase/
├── 📄 index.html              (archivo principal de la app)
├── 📄 config-supabase.js      (configuración de Supabase)
├── 📄 supabase-service.js     (servicios de base de datos)
├── 📄 config_menus.json       (menús desplegables)
├── 📄 schema.sql              (esquema de BD - solo referencia)
└── 📄 README.md               (esta guía)
```

### Archivos Necesarios

1. **index.html** - La aplicación web completa (proporcionado)
2. **config-supabase.js** - Configuración de Supabase (editar)
3. **supabase-service.js** - Servicios de base de datos (proporcionado)
4. **config_menus.json** - Ya lo tienes del sistema original

---

## ⚙️ Configuración de la Aplicación

### Editar config-supabase.js

1. Abrir `config-supabase.js` con un editor de texto
2. Reemplazar las credenciales:

```javascript
const SUPABASE_CONFIG = {
    url: 'https://TU-PROYECTO.supabase.co',  // ← Pegar tu Project URL
    anonKey: 'TU-ANON-KEY-AQUI'               // ← Pegar tu anon key
};
```

3. **Opcional**: Configurar logo personalizado:

```javascript
const LOGO_URL = 'https://miempresa.com/logo.png';
// O ruta local:
const LOGO_URL = './img/logo.png';
```

4. **Guardar** el archivo

### Verificar config_menus.json

El archivo `config_menus.json` debe estar en la misma carpeta que `index.html`.
Puedes usar el mismo que tenías antes - no necesita cambios.

---

## 📊 Migración de Datos

### Opción A: Sistema Nuevo (Sin Datos Previos)

Si estás empezando de cero:
1. Abrir `index.html` en tu navegador
2. Crear tu primer usuario
3. Empezar a registrar fincas, cuarteles y labores

### Opción B: Migrar Datos Existentes

Si ya tienes datos en el sistema anterior (localStorage):

#### Método 1: Migración Manual (Recomendado para pocos registros)

1. Exportar datos del sistema anterior a Excel
2. Re-ingresar manualmente en el nuevo sistema

#### Método 2: Migración por Script (Para muchos registros)

Crear un script para migrar datos:

```javascript
// migrate-data.js - Ejecutar en la consola del navegador del sistema ANTIGUO

// 1. Exportar datos actuales
const datosAntiguos = {
    usuarios: JSON.parse(localStorage.getItem('db_usuarios') || '{"users":[]}'),
    fincas: JSON.parse(localStorage.getItem('db_fincas') || '{"fincas":[]}'),
    cuarteles: JSON.parse(localStorage.getItem('db_cuarteles') || '{"cuarteles":[]}'),
    labores: JSON.parse(localStorage.getItem('db_labores') || '{"labores":[]}')
};

console.log('Datos para migrar:', datosAntiguos);

// 2. Copiar el JSON resultante
console.log(JSON.stringify(datosAntiguos, null, 2));
```

Luego, en el NUEVO sistema:

```javascript
// En la consola del navegador del NUEVO sistema
// Después de cargar index.html

async function migrarDatos(datosAntiguos) {
    const sb = new SupabaseService(
        SUPABASE_CONFIG.url, 
        SUPABASE_CONFIG.anonKey
    );
    
    // Migrar usuarios
    for (const user of datosAntiguos.usuarios.users) {
        await sb.registerUser(user.rut, user.nombre, user.password);
    }
    
    // Migrar fincas
    for (const finca of datosAntiguos.fincas.fincas) {
        await sb.addFinca({
            user_id: finca.userId,
            nombre: finca.nombre,
            direccion: finca.direccion,
            superficie: finca.superficie
        });
    }
    
    // Continuar con cuarteles y labores...
    console.log('Migración completada');
}

// Pegar aquí el JSON copiado del sistema antiguo
const datosAMigrar = { /* JSON aquí */ };
migrarDatos(datosAMigrar);
```

---

## 🌐 Despliegue

### Opción 1: Uso Local

1. Simplemente abre `index.html` en tu navegador
2. Funciona sin servidor
3. Los datos se guardan en Supabase

### Opción 2: Hosting Web Gratuito

#### Netlify

1. Ir a [netlify.com](https://netlify.com)
2. Registrarse (gratis)
3. Arrastrar la carpeta del proyecto
4. ¡Listo! Tendrás una URL como: `https://tu-app.netlify.app`

#### Vercel

1. Ir a [vercel.com](https://vercel.com)
2. Registrarse con GitHub
3. Importar proyecto
4. Desplegar

#### GitHub Pages

1. Crear repositorio en GitHub
2. Subir archivos
3. Activar GitHub Pages en Settings
4. Acceder desde: `https://tu-usuario.github.io/agrolabor`

---

## 🎯 Primeros Pasos Después de la Instalación

### 1. Verificar Conexión

Al abrir `index.html`:
- Debe aparecer la pantalla de login/registro
- Abrir la consola del navegador (F12)
- Debe aparecer: "Supabase inicializado correctamente"
- No deben haber errores en rojo

### 2. Crear Primer Usuario

1. Hacer clic en "Crear Nueva Cuenta"
2. Ingresar:
   - RUT: 12-34567890-1
   - Nombre: Tu Nombre
   - Contraseña: mínimo 6 caracteres
3. Hacer clic en "Registrarse"

### 3. Verificar en Supabase

1. Ir a tu proyecto en Supabase
2. Ir a **Table Editor** → **usuarios**
3. Deberías ver tu usuario registrado

### 4. Registrar Primera Finca

1. Ir a pestaña "Fincas"
2. Completar formulario
3. Hacer clic en "Agregar Finca"
4. Verificar en Supabase → **Table Editor** → **fincas**

---

## 🔍 Solución de Problemas

### Error: "Failed to fetch" o "Network Error"

**Causas**:
- Credenciales incorrectas en `config-supabase.js`
- Proyecto de Supabase pausado/eliminado
- Problemas de CORS

**Solución**:
1. Verificar URL y anon key en `config-supabase.js`
2. Verificar que el proyecto esté activo en Supabase
3. Verificar en la consola del navegador (F12) el error exacto

### Error: "Failed to execute query"

**Causas**:
- Esquema SQL no ejecutado correctamente
- Tablas no creadas

**Solución**:
1. Ir a Supabase → SQL Editor
2. Volver a ejecutar `schema.sql` completo
3. Verificar en Table Editor que existan las tablas:
   - usuarios
   - fincas
   - cuarteles
   - labores

### Los datos no se guardan

**Causas**:
- Error en el servicio de Supabase
- Políticas RLS bloqueando las operaciones

**Solución**:
1. Abrir consola del navegador (F12)
2. Ver errores específicos
3. Verificar que las políticas RLS estén configuradas correctamente
4. Temporalmente, puedes desactivar RLS para testing:
   ```sql
   -- Solo para testing, NO en producción
   ALTER TABLE fincas DISABLE ROW LEVEL SECURITY;
   ALTER TABLE cuarteles DISABLE ROW LEVEL SECURITY;
   ALTER TABLE labores DISABLE ROW LEVEL SECURITY;
   ```

### Los menús desplegables están vacíos

**Causa**:
- Archivo `config_menus.json` no está en la misma carpeta

**Solución**:
1. Verificar que `config_menus.json` esté junto a `index.html`
2. Verificar que el contenido sea válido JSON
3. Recargar la página (F5)

### No puedo hacer login

**Causas**:
- Usuario no registrado
- Contraseña incorrecta
- Error de conexión

**Solución**:
1. Verificar usuario en Supabase → Table Editor → usuarios
2. Verificar que RUT y contraseña sean correctos
3. Si olvidaste la contraseña, editar directamente en Supabase

---

## 📈 Ventajas del Sistema con Supabase

✅ **Datos en la nube**: Accesibles desde cualquier dispositivo
✅ **Sincronización automática**: Cambios en tiempo real
✅ **Respaldo automático**: Supabase hace backups diarios
✅ **Escalable**: Soporta miles de registros sin problemas
✅ **Multi-usuario**: Varios usuarios pueden usar el sistema simultáneamente
✅ **Seguro**: Autenticación y permisos por usuario
✅ **Gratuito**: Plan gratuito incluye 500MB y 2GB de transferencia
✅ **Sin servidor**: No necesitas instalar nada en tu computadora

---

## 🔐 Seguridad

### Contraseñas

**⚠️ IMPORTANTE**: En esta versión, las contraseñas se guardan en texto plano.

Para producción, deberías:
1. Usar Supabase Auth en lugar de tabla personalizada
2. O implementar hashing de contraseñas con bcrypt

### Row Level Security (RLS)

Las políticas RLS aseguran que:
- Cada usuario solo ve sus propios datos
- No puede acceder a datos de otros usuarios
- Las operaciones están controladas

---

## 📞 Soporte

### Recursos Útiles

- **Documentación Supabase**: https://supabase.com/docs
- **Supabase Dashboard**: https://app.supabase.com
- **Comunidad Supabase**: https://github.com/supabase/supabase/discussions

### Verificación de Estado

Para verificar que todo funciona:

```javascript
// Ejecutar en consola del navegador (F12)
async function verificarSistema() {
    const sb = new SupabaseService(
        SUPABASE_CONFIG.url, 
        SUPABASE_CONFIG.anonKey
    );
    
    const test = await sb.testConnection();
    console.log('Estado de conexión:', test);
}

verificarSistema();
```

---

## 🎓 Próximos Pasos

Una vez que el sistema funcione:

1. **Personalizar** el logo y colores
2. **Agregar** más cultivos en `config_menus.json`
3. **Invitar** a otros usuarios a registrarse
4. **Exportar** reportes a Excel regularmente
5. **Monitorear** uso en el dashboard de Supabase

---

## 📋 Checklist de Instalación

Usa esta lista para verificar que completaste todos los pasos:

- [ ] Cuenta creada en Supabase
- [ ] Proyecto creado en Supabase
- [ ] Esquema SQL ejecutado correctamente
- [ ] Tablas creadas (usuarios, fincas, cuarteles, labores)
- [ ] Credenciales copiadas (URL + anon key)
- [ ] Archivos descargados y organizados
- [ ] `config-supabase.js` editado con credenciales
- [ ] `config_menus.json` en la carpeta correcta
- [ ] `index.html` abre correctamente en navegador
- [ ] Primer usuario creado exitosamente
- [ ] Primera finca registrada
- [ ] Datos visibles en Supabase Table Editor
- [ ] Exportar a Excel funciona

---

**¡Felicitaciones!** 🎉

Si completaste todos los pasos, tu sistema AgroLabor Mendoza ya está funcionando con Supabase.

**Última actualización**: Febrero 2026
**Versión**: 3.0 Supabase
