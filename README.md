# 🌾 AgroLabor Mendoza - Migración a Supabase

## 📦 Paquete de Migración v3.0

Este paquete contiene todos los archivos necesarios para migrar tu aplicación AgroLabor Mendoza a Supabase.

---

## 📁 Contenido del Paquete

### 1. **schema.sql** ⭐ IMPORTANTE
Esquema de base de datos PostgreSQL para Supabase.

**Qué hace:**
- Crea las tablas: usuarios, fincas, cuarteles, labores
- Configura relaciones y restricciones
- Implementa índices para mejor rendimiento
- Configura Row Level Security (RLS) para seguridad
- Crea triggers para actualización automática

**Cuándo usarlo:**
- PRIMERO: Al configurar tu proyecto en Supabase
- Una sola vez por proyecto

**Cómo usarlo:**
1. Ir a tu proyecto en Supabase
2. Abrir **SQL Editor**
3. Copiar y pegar TODO el contenido de `schema.sql`
4. Hacer clic en **Run**
5. Verificar que aparezca "Success"

---

### 2. **config-supabase.js** ⭐ IMPORTANTE
Archivo de configuración con las credenciales de tu proyecto.

**Qué hace:**
- Almacena la URL de tu proyecto Supabase
- Almacena tu clave pública (anon key)
- Opcionalmente, URL del logo

**Cuándo editarlo:**
- DESPUÉS de crear tu proyecto en Supabase
- Al cambiar de proyecto
- Al configurar tu logo personalizado

**Cómo editarlo:**
1. Abrir con editor de texto
2. Reemplazar `TU_SUPABASE_URL_AQUI` con tu URL
3. Reemplazar `TU_SUPABASE_ANON_KEY_AQUI` con tu clave
4. Guardar

**Ejemplo:**
```javascript
const SUPABASE_CONFIG = {
    url: 'https://abcdefghijk.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

---

### 3. **supabase-service.js**
Servicios para interactuar con la base de datos.

**Qué hace:**
- Maneja todas las operaciones con Supabase
- CRUD (Crear, Leer, Actualizar, Eliminar) para todas las tablas
- Gestión de errores
- Filtros y consultas

**Cuándo usarlo:**
- Se usa automáticamente por la aplicación
- NO necesitas editarlo (a menos que quieras agregar funcionalidades)

**Funciones disponibles:**
- `registerUser()` - Registrar nuevo usuario
- `loginUser()` - Iniciar sesión
- `getFincas()` - Obtener fincas
- `addFinca()` - Agregar finca
- `deleteFinca()` - Eliminar finca
- `getCuarteles()` - Obtener cuarteles
- `addCuartel()` - Agregar cuartel
- `deleteCuartel()` - Eliminar cuartel
- `getLabores()` - Obtener labores (con filtros)
- `addLabor()` - Agregar labor
- `deleteLabor()` - Eliminar labor

---

### 4. **config_menus.json**
Configuración de menús desplegables.

**Qué hace:**
- Define los cultivos disponibles
- Define las variedades por cultivo
- Define sistemas de riego
- Define productos de aplicación
- Define productos de fertilización
- Define equipos de labranza

**Cuándo editarlo:**
- Para agregar nuevos cultivos
- Para agregar nuevas variedades
- Para personalizar productos
- Para agregar equipos

**NO necesitas editarlo** si vas a usar las opciones por defecto (18 cultivos, 16 productos de aplicación, 15 de fertilización, etc.)

---

### 5. **index-supabase-ejemplo.html**
Ejemplo de cómo debe quedar el archivo HTML principal.

**Qué es:**
- Template con la estructura básica
- Muestra cómo integrar los servicios de Supabase
- Incluye ejemplos de funciones adaptadas

**NO es el archivo completo**, solo una guía de referencia. Debes:
1. Tomar tu `index.html` original
2. Aplicar los cambios mostrados en este ejemplo
3. Seguir la guía `CAMBIOS_CODIGO_SUPABASE.md`

---

### 6. **GUIA_MIGRACION_SUPABASE.md** ⭐ LEER PRIMERO
Guía paso a paso completa para migrar.

**Qué incluye:**
- Prerequisitos necesarios
- Cómo crear proyecto en Supabase
- Cómo ejecutar el esquema SQL
- Cómo obtener credenciales
- Cómo configurar la aplicación
- Cómo migrar datos existentes
- Opciones de despliegue
- Solución de problemas comunes

**Cuándo leerla:**
- ANTES de empezar cualquier cosa
- Si tienes dudas durante el proceso
- Si encuentras errores

---

### 7. **CAMBIOS_CODIGO_SUPABASE.md**
Documentación detallada de todos los cambios en el código.

**Qué incluye:**
- Cambios específicos línea por línea
- Código original vs. código nuevo
- Explicación de cada modificación
- Tabla de conversión de nombres de propiedades

**Cuándo usarla:**
- Al modificar tu archivo `index.html` original
- Para entender por qué se hace cada cambio
- Como referencia durante el desarrollo

---

## 🚀 Orden de Uso (Flujo de Trabajo)

### Paso 1: Preparación
- [ ] Leer `GUIA_MIGRACION_SUPABASE.md` completa
- [ ] Crear cuenta en Supabase (si no tienes)
- [ ] Tener archivos organizados en una carpeta

### Paso 2: Configurar Supabase
- [ ] Crear nuevo proyecto en Supabase
- [ ] Ejecutar `schema.sql` en SQL Editor
- [ ] Copiar URL y anon key del proyecto

### Paso 3: Configurar Archivos
- [ ] Editar `config-supabase.js` con tus credenciales
- [ ] Verificar que `config_menus.json` esté presente
- [ ] Tener `supabase-service.js` en la carpeta

### Paso 4: Modificar HTML
- [ ] Abrir tu `index.html` original
- [ ] Seguir los cambios de `CAMBIOS_CODIGO_SUPABASE.md`
- [ ] Usar `index-supabase-ejemplo.html` como referencia
- [ ] Guardar como `index.html` en la misma carpeta

### Paso 5: Probar
- [ ] Abrir `index.html` en el navegador
- [ ] Verificar consola (F12) - no debe haber errores rojos
- [ ] Registrar un usuario de prueba
- [ ] Verificar en Supabase que se creó
- [ ] Probar crear finca, cuartel, labor

### Paso 6: Migrar Datos (si aplica)
- [ ] Seguir instrucciones en `GUIA_MIGRACION_SUPABASE.md`
- [ ] Sección "Migración de Datos"

### Paso 7: Desplegar (opcional)
- [ ] Subir a Netlify, Vercel, o GitHub Pages
- [ ] O simplemente usar localmente

---

## ✅ Checklist de Archivos Necesarios

Para que la aplicación funcione, debes tener en la misma carpeta:

```
📁 Mi-Proyecto/
├── ✅ index.html                    (tu archivo modificado)
├── ✅ config-supabase.js            (editado con tus credenciales)
├── ✅ supabase-service.js           (sin modificar)
├── ✅ config_menus.json             (del sistema original)
└── 📄 README.md                     (este archivo - opcional)
```

---

## 🎯 Archivos por Rol

### Si eres DESARROLLADOR
**Archivos que debes revisar:**
1. `CAMBIOS_CODIGO_SUPABASE.md` - Cambios técnicos
2. `supabase-service.js` - Servicios de BD
3. `index-supabase-ejemplo.html` - Estructura del código
4. `schema.sql` - Estructura de BD

### Si eres USUARIO/ADMINISTRADOR
**Archivos que debes revisar:**
1. `GUIA_MIGRACION_SUPABASE.md` - Guía paso a paso
2. `config-supabase.js` - Solo editar credenciales
3. `config_menus.json` - Personalizar menús (opcional)

---

## 🔧 Configuración Avanzada

### Personalizar Cultivos y Productos

Editar `config_menus.json`:

```json
{
  "cultivos": [
    "Vid",
    "Olivo",
    "TU_NUEVO_CULTIVO"  ← Agregar aquí
  ],
  "variedadesPorCultivo": {
    "TU_NUEVO_CULTIVO": ["Variedad 1", "Variedad 2"]  ← Agregar aquí
  }
}
```

### Personalizar Logo

Editar `config-supabase.js`:

```javascript
const LOGO_URL = 'https://tu-sitio.com/logo.png';
// O local:
const LOGO_URL = './img/logo.png';
```

---

## 🐛 Problemas Comunes

### "Failed to fetch" al abrir la app
**Causa:** Credenciales incorrectas en `config-supabase.js`  
**Solución:** Verificar URL y anon key

### "Table does not exist"
**Causa:** `schema.sql` no ejecutado correctamente  
**Solución:** Volver a ejecutar en SQL Editor de Supabase

### Menús vacíos
**Causa:** `config_menus.json` no está en la carpeta correcta  
**Solución:** Mover archivo a la misma carpeta que `index.html`

### No se guardan datos
**Causa:** Políticas RLS demasiado restrictivas  
**Solución:** Ver sección "Solución de Problemas" en `GUIA_MIGRACION_SUPABASE.md`

---

## 📞 Soporte y Recursos

### Documentación Oficial
- **Supabase Docs:** https://supabase.com/docs
- **Supabase Dashboard:** https://app.supabase.com

### Verificar que Todo Funciona

Abrir la consola del navegador (F12) y ejecutar:

```javascript
// Verificar conexión
async function test() {
    const sb = new SupabaseService(
        SUPABASE_CONFIG.url,
        SUPABASE_CONFIG.anonKey
    );
    const result = await sb.testConnection();
    console.log(result);
}
test();
```

Debe mostrar: `{success: true, message: "Conexión exitosa con Supabase"}`

---

## 🎓 Ventajas de Supabase

✅ **Datos en la nube** - Acceso desde cualquier lugar  
✅ **Sincronización en tiempo real** - Varios usuarios simultáneos  
✅ **Respaldo automático** - Supabase hace backups diarios  
✅ **Escalable** - Soporta miles de registros sin problemas  
✅ **Seguro** - Row Level Security incluido  
✅ **Gratuito** - Plan gratuito generoso  
✅ **Sin servidor** - No necesitas infraestructura  

---

## 📊 Comparación: localStorage vs Supabase

| Característica | localStorage (anterior) | Supabase (nuevo) |
|---------------|------------------------|-------------------|
| Almacenamiento | Navegador local | Nube PostgreSQL |
| Acceso multi-dispositivo | ❌ No | ✅ Sí |
| Respaldo automático | ❌ No | ✅ Sí |
| Multi-usuario | ❌ Limitado | ✅ Sí |
| Límite de almacenamiento | ~10MB | 500MB+ |
| Necesita internet | ❌ No | ✅ Sí |
| Pérdida de datos | Alto riesgo | Bajo riesgo |
| Velocidad inicial | Muy rápido | Rápido |
| Escalabilidad | Limitada | Excelente |

---

## 🔐 Nota de Seguridad

⚠️ **IMPORTANTE**: La versión actual guarda contraseñas en texto plano.

Para producción empresarial, considera:
1. Usar Supabase Auth en lugar de tabla usuarios personalizada
2. Implementar hashing de contraseñas con bcrypt
3. Agregar autenticación de dos factores (2FA)

---

## 📋 Próximos Pasos Sugeridos

Después de la migración exitosa:

1. **Mejorar Seguridad**
   - Implementar Supabase Auth
   - Hash de contraseñas
   
2. **Agregar Funcionalidades**
   - Reportes avanzados
   - Gráficos de producción
   - Exportar a PDF
   
3. **Optimizar Rendimiento**
   - Implementar paginación
   - Cache inteligente
   - Lazy loading

4. **Mejorar UX**
   - Modo offline
   - Progressive Web App (PWA)
   - Notificaciones push

---

## 📄 Licencia

Este proyecto es de código abierto para uso agrícola en Mendoza, Argentina.

---

## 👨‍💻 Créditos

**Sistema Original:** AgroLabor Mendoza v2.0  
**Migración a Supabase:** v3.0 - Febrero 2026  
**Región:** Mendoza, Argentina  
**Desarrollado para:** Productores agrícolas

---

## 📞 Contacto y Ayuda

Si necesitas ayuda con la migración:

1. Revisar `GUIA_MIGRACION_SUPABASE.md`
2. Revisar `CAMBIOS_CODIGO_SUPABASE.md`
3. Consultar consola del navegador (F12) para errores específicos
4. Verificar logs en Supabase Dashboard

---

**¡Éxito con tu migración!** 🚀🌾

---

**Última actualización:** Febrero 2026  
**Versión del paquete:** 3.0
