# AgroLabor Mendoza - Sistema de Registro de Labores Agrícolas

## 🎯 Versión Final v2 - Características Principales

### ✅ Actualización Automática de Bases de Datos
**¡NUEVO!** Las bases de datos se descargan automáticamente al realizar cambios:
- Al registrar un usuario → Se descarga `db_usuarios.json`
- Al agregar una finca → Se descarga `db_fincas.json`
- Al agregar un cuartel → Se descarga `db_cuarteles.json`
- Al registrar una labor → Se descarga `db_labores.json`
- Al eliminar cualquier registro → Se descarga el archivo actualizado

Los archivos se guardan en la carpeta de **Descargas** del navegador.

### 🗑️ Eliminar Labores
**¡NUEVO!** Ahora puedes eliminar labores desde la pestaña **Labores**:
- Botón "Eliminar" en cada labor del listado
- Confirmación antes de eliminar
- Actualización automática de `db_labores.json`

### 🎨 Logo Configurable por URL
**¡SIMPLIFICADO!** En lugar de cargar archivos, configura el logo mediante URL:

**Para configurar tu logo:**
1. Abrir `agrolabor-final-v2.html` con un editor de texto
2. Ir a la **línea 8** (inicio del script)
3. Encontrar la línea:
```javascript
const LOGO_URL = 'URL_DE_TU_LOGO_AQUI';
```
4. Reemplazar con la URL de tu logo:
```javascript
const LOGO_URL = 'https://miempresa.com/logo.png';
```
O usar ruta relativa si el logo está en la misma carpeta:
```javascript
const LOGO_URL = './img/logo.png';
```
5. Guardar el archivo

**Formatos de imagen soportados:** PNG, JPG, SVG, GIF

## 📁 Archivos del Sistema

### Archivo Principal
- **agrolabor-final-v2.html** - Aplicación web completa

### Archivos de Configuración
- **config_menus.json** - Menús desplegables (cultivos, productos, equipos)

### Bases de Datos (se actualizan automáticamente)
- **db_usuarios.json** - Usuarios registrados
- **db_fincas.json** - Fincas
- **db_cuarteles.json** - Cuarteles
- **db_labores.json** - Labores registradas

## 🚀 Inicio Rápido

### Primera Configuración

1. **Configurar Logo (Opcional)**
   - Editar línea 8 de `agrolabor-final-v2.html`
   - Cambiar `const LOGO_URL = 'tu-url-aqui';`

2. **Abrir Aplicación**
   - Hacer doble clic en `agrolabor-final-v2.html`
   - Se abre en el navegador

3. **Registrar Usuario**
   - Click en "Crear Nueva Cuenta"
   - Ingresar RUT (formato: XX-XXXXXXXX-X)
   - Nombre completo
   - Contraseña (mínimo 6 caracteres)
   - Click en "Registrarse"
   - **Se descarga automáticamente** `db_usuarios.json`

4. **Iniciar Sesión**
   - Ingresar RUT y contraseña
   - Click en "Ingresar"

### Flujo de Trabajo Normal

1. **Registrar Fincas**
   - Pestaña **Fincas**
   - Completar: Nombre, Dirección, Superficie
   - Click "Agregar Finca"
   - **Se descarga** `db_fincas.json` automáticamente

2. **Registrar Cuarteles**
   - Pestaña **Cuarteles**
   - Completar todos los campos
   - Seleccionar cultivo → se actualizan variedades
   - Click "Agregar Cuartel"
   - **Se descarga** `db_cuarteles.json` automáticamente

3. **Registrar Labores**
   - Pestaña **Labores**
   - Seleccionar tipo de labor
   - Completar campos específicos
   - Click "Registrar Labor"
   - **Se descarga** `db_labores.json` automáticamente

4. **Consultar y Exportar**
   - Pestaña **Consultas**
   - Aplicar filtros
   - Click "📥 Exportar a Excel"
   - Se descarga archivo `.xlsx`

## 💾 Sistema de Almacenamiento

### Doble Almacenamiento

**1. En el Navegador (localStorage)**
- Los datos se guardan automáticamente
- Persisten entre sesiones
- No se pierden al cerrar el navegador

**2. Archivos JSON (Carpeta Descargas)**
- Se descargan automáticamente al guardar
- Sirven como respaldo
- Se pueden editar manualmente
- Se pueden usar en otros programas

### Organización de Archivos Descargados

Recomendación para organizar las descargas:

```
📁 AgroLabor/
├── 📁 2026-01-29/
│   ├── db_usuarios.json
│   ├── db_fincas.json
│   ├── db_cuarteles.json
│   └── db_labores.json
├── 📁 2026-02-05/
│   ├── db_usuarios.json
│   ├── db_fincas.json
│   ├── db_cuarteles.json
│   └── db_labores.json
└── 📁 Exportaciones/
    ├── labores_2026-01-29.xlsx
    └── labores_2026-02-05.xlsx
```

**Sugerencia:** Mover los archivos JSON de Descargas a carpetas con fecha para mantener historial.

## 📋 Gestión de Fincas

### Registrar Finca
1. Pestaña **Fincas**
2. **Nombre**: Ej: "Finca Los Álamos"
3. **Dirección**: Ej: "Ruta 7 Km 1025, Luján de Cuyo"
4. **Superficie**: En hectáreas (Ej: 25.5)
5. Click **"Agregar Finca"**
6. ✓ Se descarga `db_fincas.json` automáticamente

### Eliminar Finca
1. Click en **"Eliminar"** junto a la finca
2. Confirmar eliminación
3. Se eliminan también sus cuarteles y labores asociadas
4. ✓ Se descargan `db_fincas.json`, `db_cuarteles.json`, `db_labores.json`

## 📍 Gestión de Cuarteles

### Registrar Cuartel
1. Pestaña **Cuarteles**
2. **Finca**: Seleccionar de la lista
3. **Nombre**: Ej: "Cuartel Norte"
4. **Superficie**: En hectáreas (Ej: 5.2)
5. **Cultivo**: Seleccionar del menú (18 opciones)
6. **Variedad**: Se actualiza según cultivo seleccionado
7. **Sistema de Riego**: Surcos, Melgas, Goteo, etc.
   - Si selecciona "Otro", aparece campo para especificar
8. **Año de Implantación**: Opcional (Ej: 2015)
9. **Tela Antigranizo**: Marcar si corresponde
10. Click **"Agregar Cuartel"**
11. ✓ Se descarga `db_cuarteles.json` automáticamente

### Eliminar Cuartel
1. Click en **"Eliminar"** junto al cuartel
2. Confirmar eliminación
3. ✓ Se descarga `db_cuarteles.json` automáticamente

## 📝 Registro de Labores

### 🌊 Riego
1. Tipo: **Riego**
2. Cuartel
3. Fecha
4. **Tiempo**: Horas de riego (Ej: 8)
5. **Jornales**: Ej: 2
6. Observaciones (opcional)
7. Click **"Registrar Labor"**
8. ✓ Se descarga `db_labores.json`

### 🌿 Aplicaciones
1. Tipo: **Aplicaciones**
2. Cuartel
3. Fecha
4. **Buscar productos**: Usar cuadro de búsqueda 🔍
   - Escribir: "azuf" encuentra "Azufre"
   - Escribir: "cobre" encuentra "Cobre"
5. **Seleccionar productos**: Marcar checkboxes
6. **Dosis** (opcional): Ingresar para cada producto
   - Ej: "3 kg/ha", "200 g/hl"
7. **Jornales**: Ej: 3
8. Observaciones (opcional)
9. Click **"Registrar Labor"**
10. ✓ Se descarga `db_labores.json`

**Productos disponibles (16):**
Glifosato, Azufre, Cobre, Mancozeb, Captan, Tiofanato Metílico, Tebuconazole, Difenoconazole, Imidacloprid, Clorpirifos, Lambda Cihalotrina, Abamectina, Aceite Mineral, Bacillus thuringiensis, Azadiractina, Otro

### 🌱 Fertilización
1. Tipo: **Fertilización**
2. Cuartel
3. Fecha
4. **Buscar productos**: Usar cuadro de búsqueda 🔍
   - Escribir: "urea" encuentra "Urea (46-0-0)"
   - Escribir: "fosfato" encuentra ambos fosfatos
5. **Seleccionar productos**: Marcar checkboxes
6. **Dosis** (opcional): Ingresar para cada producto
   - Ej: "150 kg/ha", "100 kg/ha"
7. **Jornales**: Ej: 2
8. Observaciones (opcional)
9. Click **"Registrar Labor"**
10. ✓ Se descarga `db_labores.json`

**Productos disponibles (15):**
Urea (46-0-0), Fosfato Diamónico (18-46-0), Fosfato Monoamónico (11-52-0), Nitrato de Amonio (33-0-0), Nitrato de Calcio, Sulfato de Potasio (0-0-50), Cloruro de Potasio (0-0-60), Sulfato de Zinc, Sulfato de Magnesio, Ácido Bórico, Compost, Guano, Humus de Lombriz, Fertilizante Foliar Completo, Otro

### 🚜 Labranzas
1. Tipo: **Labranzas**
2. Cuartel
3. Fecha
4. **Equipo**: Seleccionar del menú
   - Arado de Discos, Rastra, Cincel, etc.
5. **Jornales**: Ej: 4
6. Observaciones (opcional)
7. Click **"Registrar Labor"**
8. ✓ Se descarga `db_labores.json`

### 🍇 Cosecha
1. Tipo: **Cosecha**
2. Cuartel
3. Fecha
4. **Kg Cosechados**: Ej: 12500
5. **Jornales**: Ej: 15
6. Observaciones (opcional)
7. Click **"Registrar Labor"**
8. ✓ Se descarga `db_labores.json`

## 🗑️ Eliminar Labores

### Desde Pestaña Labores
1. Ir a pestaña **Labores**
2. Ver listado de "Últimas Labores Registradas"
3. Click en botón **"Eliminar"** de la labor deseada
4. Confirmar eliminación
5. ✓ Se descarga `db_labores.json` actualizado

**Nota:** Las labores eliminadas NO se pueden recuperar. Asegurarse antes de confirmar.

## 📊 Consultas y Exportación

### Filtrar Labores
1. Pestaña **Consultas**
2. Aplicar filtros:
   - **Tipo de Labor**: Todas, Riego, Aplicaciones, etc.
   - **Cuartel**: Todos o uno específico
   - **Fecha Desde**: Opcional
   - **Fecha Hasta**: Opcional
3. Ver resultados en tabla

### Exportar a Excel
1. Aplicar filtros deseados
2. Click **"📥 Exportar a Excel"**
3. Se descarga archivo `.xlsx` con:
   - Fecha
   - Tipo de labor
   - Finca y Cuartel
   - Cultivo y Variedad
   - Detalles específicos según tipo
   - Jornales
   - Observaciones

**Nombre del archivo:** `labores_YYYY-MM-DD.xlsx`

## 🌾 Cultivos y Variedades

### Cultivos Disponibles (18)
Vid • Olivo • Manzana • Pera • Durazno • Ciruela • Cereza • Damasco • Nogal • Almendro • Ajo • Cebolla • Tomate • Zanahoria • Papa • Maíz • Alfalfa • Otro

### Variedades por Cultivo

**Vid (10):** Malbec, Cabernet Sauvignon, Merlot, Syrah, Bonarda, Chardonnay, Torrontés, Sauvignon Blanc, Chenin, Otra

**Olivo (8):** Arauco, Arbequina, Barnea, Coratina, Frantoio, Manzanilla, Picual, Otra

**Manzana (7):** Red Delicious, Granny Smith, Gala, Fuji, Pink Lady, Cripps Pink, Otra

**Pera (5):** Williams, Packham's, Beurré D'Anjou, Abate Fetel, Otra

**Durazno (5):** Flordaking, Elegant Lady, O'Henry, Pavía, Otra

**Ciruela (4):** Angeleno, Larry Ann, Black Amber, Otra

**Cereza (5):** Bing, Lapins, Stella, Sweetheart, Otra

**Damasco (4):** Búlida, Canino, Moniquí, Otra

**Nogal (4):** Chandler, Franquette, Serr, Otra

**Almendro (4):** Nonpareil, Carmel, Butte, Otra

## 🔧 Configuración Avanzada

### Personalizar Menús Desplegables

Editar `config_menus.json` para agregar/modificar opciones:

```json
{
  "cultivos": ["Vid", "Olivo", "Nuevo Cultivo", ...],
  "variedadesPorCultivo": {
    "Vid": ["Malbec", "Cabernet", "Nueva Variedad", ...]
  },
  "productosAplicacion": ["Producto1", "Producto2", ...],
  "productosFertilizacion": ["Fertilizante1", ...],
  "equiposLabranza": ["Equipo1", "Equipo2", ...]
}
```

Después de editar, recargar la página.

### Configurar Logo Personalizado

**Opción 1: URL Externa**
```javascript
const LOGO_URL = 'https://miempresa.com/img/logo.png';
```

**Opción 2: Archivo Local**
1. Crear carpeta `img` junto al archivo HTML
2. Poner logo dentro: `img/logo.png`
3. Configurar:
```javascript
const LOGO_URL = './img/logo.png';
```

**Opción 3: Logo en Base64**
```javascript
const LOGO_URL = 'data:image/png;base64,iVBORw0KGgo...';
```

## 💡 Consejos y Buenas Prácticas

### Organización de Archivos
1. Crear carpeta "AgroLabor" en Documentos
2. Mover archivos JSON de Descargas a subcarpetas con fecha
3. Mantener historial de versiones
4. Respaldar semanalmente

### Respaldo de Datos
1. **Automático**: Los JSON se descargan automáticamente
2. **Manual adicional**: 
   - Ir a Descargas
   - Mover archivos JSON a carpeta de respaldo
   - Nombrar carpeta con fecha actual

### Restaurar Datos
Si se pierden datos del navegador:
1. Abrir consola del navegador (F12)
2. Ir a pestaña "Console"
3. Copiar contenido del archivo JSON
4. Ejecutar:
```javascript
localStorage.setItem('db_fincas', '{"fincas":[...]}')
```
5. Recargar página

### Búsqueda Eficiente de Productos
- **Escribir pocas letras**: "azuf" en vez de "azufre"
- **Buscar por composición**: "46" encuentra "Urea (46-0-0)"
- **Buscar por familia**: "sulf" encuentra todos los sulfatos

### Registro Diario de Labores
1. Registrar labores el mismo día que se realizan
2. Anotar observaciones detalladas
3. Registrar dosis exactas
4. Anotar condiciones climáticas en observaciones

## 🔐 Seguridad y Privacidad

- Datos almacenados localmente en el navegador
- Archivos JSON en carpeta Descargas del usuario
- No se envían datos a servidores externos
- Sin conexiones a internet necesarias
- Cada usuario ve solo sus propios datos (filtrado por RUT)

**Nota de seguridad:** Las contraseñas se guardan en texto plano. Este sistema es para uso personal/pequeñas empresas. Para uso empresarial, implementar backend seguro con hashing de contraseñas.

## 🐛 Solución de Problemas

### Los menús desplegables están vacíos
- Verificar que `config_menus.json` esté en la misma carpeta
- Recargar la página (F5 o Ctrl+R)
- Verificar consola del navegador (F12) por errores

### No se descargan los archivos JSON
- Verificar que el navegador permita descargas automáticas
- Revisar configuración de descargas del navegador
- Verificar carpeta de Descargas
- Algunos navegadores pueden solicitar permiso la primera vez

### Las variedades no se actualizan
- Verificar que el cultivo esté seleccionado
- Revisar `config_menus.json` - debe tener variedades para ese cultivo
- Recargar la página

### No encuentro un producto en la búsqueda
- Verificar ortografía
- Buscar solo primeras letras
- Si no existe, seleccionar "Otro" y especificar en observaciones

### Perdí mis datos del navegador
1. Buscar archivos JSON en carpeta Descargas
2. Restaurar usando consola del navegador
3. Si no hay respaldo, datos se pierden irrecuperablemente
4. **Importante:** Hacer respaldos regulares

### El Excel no se descarga
- Verificar que haya datos para exportar
- Aplicar al menos un filtro
- Estar en pestaña **Consultas**
- Verificar que el navegador permita descargas

## 📞 Requisitos del Sistema

### Navegadores Compatibles
- ✅ Google Chrome (recomendado)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari (Mac)
- ✅ Opera

### Requisitos Mínimos
- JavaScript habilitado
- localStorage disponible
- Permisos de descarga habilitados
- Resolución mínima: 1024x768

### No Requiere
- ❌ Conexión a internet (después de cargar por primera vez)
- ❌ Instalación de software adicional
- ❌ Registro en servidores externos
- ❌ Pagos o suscripciones

---

**Versión**: 2.0 Final  
**Fecha**: Enero 2026  
**Región**: Mendoza, Argentina  
**Desarrollado para**: Productores agrícolas de Mendoza

## 📋 Resumen de Cambios v2

### ✅ Nuevo
- Descarga automática de archivos JSON al guardar
- Función eliminar labores con botón dedicado
- Logo configurable por URL (más simple)
- Instrucciones en pantalla para configurar logo

### ✅ Mejorado
- Sistema de respaldo automático
- Mejor organización de archivos
- Interfaz más intuitiva para eliminar registros

### ❌ Eliminado
- Botones de descarga manual de BD (ahora es automático)
- Carga de logo por archivo (ahora por URL)
