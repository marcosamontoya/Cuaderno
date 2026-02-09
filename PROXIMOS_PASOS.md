# ✅ ¡Configuración Completa!

Tu archivo `config-supabase.js` ya está completamente configurado con:

- ✅ Project URL: https://ioycrbykhbfxudumrcsi.supabase.co
- ✅ Publishable Key: sb_publishable_AC7lgoV5Ok4WXXZR3ZoJ3Q_U3OrlYc3

---

## 🚀 Próximos Pasos

### Paso 1: Organizar Archivos (1 min)

Crea una carpeta y coloca estos 4 archivos juntos:

```
📁 AgroLabor/
├── index.html
├── config-supabase.js          ← El que acabas de descargar
├── supabase-service.js
└── config_menus.json
```

**IMPORTANTE**: Los 4 archivos deben estar en la **MISMA CARPETA**.

---

### Paso 2: Ejecutar el Schema SQL (2 min)

Antes de usar la aplicación, debes crear las tablas en Supabase:

1. Ve a https://app.supabase.com
2. Abre tu proyecto
3. Click en **SQL Editor** (ícono 🗄️ en menú lateral)
4. Click en **+ New Query**
5. Abre el archivo **schema.sql** que te di
6. Copia TODO su contenido
7. Pégalo en el editor
8. Click en **RUN** (o Ctrl+Enter)
9. Debe aparecer: ✅ "Success. No rows returned"

---

### Paso 3: Probar con el Validador (1 min)

1. Abre el archivo **validador.html** en tu navegador
2. Espera unos segundos
3. Deberías ver:
   - ✅ Archivo config-supabase.js encontrado
   - ✅ URL de Supabase configurada
   - ✅ Clave de API configurada
   - ✅ Conexión con Supabase exitosa
   - ✅ Tabla: usuarios
   - ✅ Tabla: fincas
   - ✅ Tabla: cuarteles
   - ✅ Tabla: labores

**Resultado esperado**: 🎉 8/8 pruebas pasadas

---

### Paso 4: Usar la Aplicación

1. Abre **index.html** en tu navegador
2. Click en **"Crear Nueva Cuenta"**
3. Registra tu usuario:
   - RUT: Por ejemplo `12-34567890-1`
   - Nombre: Tu nombre
   - Contraseña: Mínimo 6 caracteres
4. Click en **"Registrarse"**
5. Inicia sesión con tus credenciales
6. ¡Empieza a usar AgroLabor!

---

## 🔍 Verificar que Funciona

Para confirmar que todo está bien:

1. Ve a https://app.supabase.com
2. Abre tu proyecto
3. Click en **Table Editor** (ícono de tabla)
4. Click en **usuarios**
5. Deberías ver el usuario que acabas de crear

Si lo ves: ✅ **¡TODO FUNCIONA PERFECTAMENTE!**

---

## 📋 Checklist

- [ ] Archivos organizados en la misma carpeta
- [ ] schema.sql ejecutado en Supabase sin errores
- [ ] validador.html muestra 8/8 pruebas pasadas
- [ ] index.html abre correctamente
- [ ] Usuario creado exitosamente
- [ ] Usuario visible en Table Editor de Supabase

---

## 🎯 Empezar a Usar

Una vez que todo funcione:

1. **Pestaña Fincas**: Registra tus fincas
2. **Pestaña Cuarteles**: Registra cuarteles por finca
3. **Pestaña Labores**: Registra las labores diarias
4. **Pestaña Consultas**: Filtra y exporta reportes a Excel

---

## 🐛 Si Algo Falla

### El validador muestra errores

**Error**: "Failed to fetch" o "Network error"
- Verifica tu conexión a internet
- Asegúrate de haber ejecutado schema.sql

**Error**: "Table does not exist"
- Ve al Paso 2 y ejecuta schema.sql de nuevo
- Verifica que se ejecutó sin errores

### No puedo crear usuario

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Busca mensajes de error
4. Verifica que ejecutaste schema.sql

---

## 💡 Consejos

- Registra labores el mismo día que las realizas
- Usa la pestaña Consultas para generar reportes
- Exporta a Excel regularmente como respaldo
- Puedes acceder desde cualquier dispositivo con internet

---

## 🎉 ¡Listo!

Tu sistema AgroLabor Mendoza ya está configurado y funcionando en la nube con Supabase.

Ventajas que ahora tienes:
- ✅ Datos en la nube (no se pierden)
- ✅ Acceso desde cualquier lugar
- ✅ Respaldo automático por Supabase
- ✅ Múltiples usuarios pueden usar el sistema

---

**¿Necesitas ayuda?**
Revisa las guías incluidas:
- GUIA_PASO_A_PASO.md
- CONFIGURACION_RAPIDA.md
- README.md
