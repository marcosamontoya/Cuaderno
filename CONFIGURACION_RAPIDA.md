# 🚀 Guía de Configuración Rápida - AgroLabor Supabase

## ⚡ Configuración en 10 Minutos

### Paso 1: Crear Proyecto en Supabase (3 min)

1. Ve a **https://supabase.com**
2. Click en **"Start your project"**
3. Inicia sesión con GitHub (o crea cuenta)
4. Click en **"New Project"**
5. Completa:
   - **Name**: `agrolabor-mendoza`
   - **Database Password**: Crea una contraseña segura (guárdala!)
   - **Region**: South America (São Paulo) o la más cercana
6. Click **"Create new project"**
7. Espera 1-2 minutos mientras se crea

---

### Paso 2: Ejecutar el Esquema SQL (2 min)

1. En tu proyecto, click en **"SQL Editor"** (ícono de base de datos en el menú lateral)
2. Click en **"+ New Query"**
3. Abre el archivo **`schema.sql`** que te proporcioné
4. **Copia TODO** su contenido
5. **Pega** en el editor SQL de Supabase
6. Click en **"Run"** (o presiona Ctrl+Enter)
7. Debe aparecer: ✅ **"Success. No rows returned"**

---

### Paso 3: Obtener Credenciales (1 min)

1. Click en **"Settings"** (⚙️ en el menú lateral)
2. Click en **"API"**
3. Copia dos valores:

   **A) Project URL**:
   ```
   https://abcdefghijk.supabase.co
   ```
   
   **B) anon / public key** (la clave LARGA):
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. **¡GUARDA ESTOS VALORES!**

---

### Paso 4: Configurar la Aplicación (2 min)

1. Abre el archivo **`config-supabase.js`** con un editor de texto (Notepad, VS Code, etc.)

2. Reemplaza los valores:

   **ANTES:**
   ```javascript
   const SUPABASE_CONFIG = {
       url: 'TU_SUPABASE_URL_AQUI',
       anonKey: 'TU_SUPABASE_ANON_KEY_AQUI'
   };
   ```

   **DESPUÉS:**
   ```javascript
   const SUPABASE_CONFIG = {
       url: 'https://abcdefghijk.supabase.co',  // ← Tu URL
       anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'  // ← Tu key
   };
   ```

3. **Guarda** el archivo

---

### Paso 5: Organizar Archivos (1 min)

Todos estos archivos deben estar en la **MISMA CARPETA**:

```
📁 AgroLabor/
├── index.html              ← Archivo principal de la app
├── config-supabase.js      ← El que acabas de editar
├── supabase-service.js     ← Servicios de base de datos
└── config_menus.json       ← Menús desplegables
```

---

### Paso 6: Probar la Aplicación (1 min)

1. Abre **`validador.html`** en tu navegador
2. Espera que ejecute las pruebas automáticamente
3. Si todo está OK: ✅ Todas las pruebas pasadas
4. Si hay errores: Revisa qué prueba falló y corrige

---

### Paso 7: Usar la Aplicación

1. Abre **`index.html`** en tu navegador
2. Click en **"Crear Nueva Cuenta"**
3. Registra tu usuario
4. ¡Listo! Ya puedes empezar a usar AgroLabor

---

## 📝 Notas Importantes

### ✅ Lo que SÍ funciona automáticamente:
- ✅ Datos guardados en la nube
- ✅ Acceso desde cualquier dispositivo
- ✅ Respaldo automático por Supabase
- ✅ Múltiples usuarios simultáneos
- ✅ Sincronización en tiempo real

### ⚠️ Requisitos:
- ⚠️ Conexión a internet (para acceder a Supabase)
- ⚠️ Navegador moderno (Chrome, Firefox, Edge, Safari)
- ⚠️ JavaScript habilitado

### 🔧 Personalización (Opcional):

**Cambiar Logo:**
Edita `config-supabase.js`:
```javascript
const LOGO_URL = 'https://tu-sitio.com/logo.png';
```

**Agregar Cultivos:**
Edita `config_menus.json` y agrega en el array de cultivos.

---

## 🐛 Solución de Problemas Rápidos

### ❌ "Failed to fetch"
**Causa**: Credenciales incorrectas  
**Solución**: Verifica que copiaste bien la URL y la key en `config-supabase.js`

### ❌ "Table does not exist"
**Causa**: No ejecutaste el schema.sql  
**Solución**: Ve al Paso 2 y ejecuta el script SQL completo

### ❌ Menús vacíos
**Causa**: Falta `config_menus.json`  
**Solución**: Copia el archivo a la misma carpeta que index.html

### ❌ No puedo hacer login
**Solución**: Abre la consola del navegador (F12) y verifica errores. Asegúrate de haber creado el usuario primero.

---

## ✨ Verificación Final

Antes de empezar a usar el sistema, verifica:

- [ ] Proyecto creado en Supabase
- [ ] Schema SQL ejecutado sin errores
- [ ] Credenciales copiadas en config-supabase.js
- [ ] Los 4 archivos en la misma carpeta
- [ ] validador.html muestra todas las pruebas en verde
- [ ] Puedes crear un usuario de prueba
- [ ] Puedes ver el usuario en Supabase → Table Editor → usuarios

---

## 🎓 Próximos Pasos

Una vez configurado:

1. **Registra tu usuario principal**
2. **Crea tus fincas**
3. **Registra cuarteles**
4. **Empieza a registrar labores**
5. **Usa la pestaña Consultas para ver reportes**
6. **Exporta a Excel cuando necesites**

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Busca mensajes en rojo
4. Revisa qué error específico aparece
5. Consulta la guía GUIA_MIGRACION_SUPABASE.md para más detalles

---

## 🔒 Seguridad

**Importante**: Esta versión guarda contraseñas en texto plano. Es adecuada para:
- ✅ Uso personal
- ✅ Equipos pequeños de confianza
- ✅ Uso interno en finca

**NO recomendado para**:
- ❌ Aplicación pública en internet
- ❌ Datos sensibles empresariales

Para uso profesional, considera implementar autenticación con Supabase Auth.

---

## 📊 Comparación: Antes vs Ahora

| Característica | localStorage (antes) | Supabase (ahora) |
|---------------|---------------------|------------------|
| Almacenamiento | Navegador local | Nube PostgreSQL |
| Acceso remoto | ❌ No | ✅ Sí |
| Respaldos | Manual | Automático |
| Multi-usuario | Limitado | ✅ Completo |
| Pérdida de datos | Alto riesgo | Bajo riesgo |

---

**¡Listo!** En 10 minutos ya tienes tu sistema AgroLabor funcionando en la nube. 🎉

---

**Versión**: 3.0 Supabase  
**Última actualización**: Febrero 2026  
**Región**: Mendoza, Argentina
