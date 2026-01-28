# AgroLabor Mendoza - Sistema Completo de Registro de Labores Agrícolas

## 📁 Archivos del Sistema

### Archivos de Bases de Datos (JSON)
- **db_usuarios.json** - Base de datos de usuarios registrados
- **db_fincas.json** - Base de datos de fincas
- **db_cuarteles.json** - Base de datos de cuarteles
- **db_labores.json** - Base de datos de labores agrícolas
- **config_menus.json** - Configuración de menús desplegables

### Archivo de Aplicación
- **agrolabor-completo.html** - Aplicación web principal

## 🚀 Cómo Usar

1. Abrir el archivo `agrolabor-completo.html` en cualquier navegador web moderno
2. Los datos se guardan automáticamente en el navegador (localStorage)
3. Las bases de datos se actualizan automáticamente con cada cambio
4. Exportar datos desde la sección de Consultas en formato Excel

## ✨ Nuevas Funcionalidades

### 🎨 Logo Personalizado
- Cargar logo propio desde la pantalla de inicio
- El logo se muestra en toda la aplicación
- Se guarda automáticamente y persiste entre sesiones

### 🏞️ Gestión de Fincas Mejorada
- **Nombre**: Identificación de la finca
- **Dirección**: Ubicación específica (ej: Ruta 7 Km 1025)
- **Superficie**: En hectáreas

### 📍 Gestión de Cuarteles Completa
- **Finca**: Selección de la finca padre
- **Nombre**: Identificación del cuartel
- **Superficie**: En hectáreas
- **Cultivo**: Menú desplegable con opciones predefinidas
- **Variedad**: Se actualiza dinámicamente según el cultivo seleccionado
- **Sistema de Riego**: Surcos, Melgas, Goteo, Aspersión, Pivot u Otro (con especificación)
- **Año de Implantación**: Campo opcional
- **Tela Antigranizo**: Checkbox para indicar su presencia

### 📋 Registro de Labores Detallado

#### 🌊 RIEGO
- Tiempo (en horas)
- Jornales
- Observaciones

#### 🌿 APLICACIONES
- Productos utilizados (selección múltiple)
- Dosis por producto (opcional)
- Jornales
- Observaciones

#### 🌱 FERTILIZACIÓN
- Productos utilizados (selección múltiple)
- Dosis por producto (opcional)
- Jornales
- Observaciones

#### 🚜 LABRANZAS
- Equipo utilizado (menú desplegable)
- Jornales
- Observaciones

#### 🍇 COSECHA
- Kg cosechados
- Jornales
- Observaciones

### 📊 Sistema de Consultas Avanzado
- Filtros por tipo de labor, cuartel y rango de fechas
- Exportación directa a **Excel** (.xlsx)
- Datos completos y estructurados
- Formato profesional listo para análisis

## 📊 Estructura de las Bases de Datos

### db_usuarios.json
```json
{
  "users": [
    {
      "rut": "20-12345678-9",
      "name": "Juan Pérez",
      "password": "contraseña123",
      "createdAt": "2026-01-28T10:30:00.000Z"
    }
  ]
}
```

### db_fincas.json
```json
{
  "fincas": [
    {
      "id": "finca_1738065600000",
      "userId": "20-12345678-9",
      "nombre": "Finca Los Álamos",
      "direccion": "Ruta 7 Km 1025, Luján de Cuyo",
      "superficie": 25.5,
      "createdAt": "2026-01-28T10:35:00.000Z"
    }
  ]
}
```

### db_cuarteles.json
```json
{
  "cuarteles": [
    {
      "id": "cuartel_1738065700000",
      "userId": "20-12345678-9",
      "fincaId": "finca_1738065600000",
      "nombre": "Cuartel Norte",
      "superficie": 5.2,
      "cultivo": "Vid",
      "variedad": "Malbec",
      "sistemaRiego": "Goteo",
      "anioImplantacion": 2015,
      "telaAntigranizo": true,
      "createdAt": "2026-01-28T10:40:00.000Z"
    }
  ]
}
```

### db_labores.json

#### Ejemplo - Riego
```json
{
  "id": "labor_1738065800000",
  "userId": "20-12345678-9",
  "tipo": "riego",
  "cuartelId": "cuartel_1738065700000",
  "fecha": "2026-01-28",
  "tiempo": 8,
  "jornales": 2,
  "observaciones": "Riego completo del cuartel",
  "createdAt": "2026-01-28T10:45:00.000Z"
}
```

#### Ejemplo - Aplicaciones
```json
{
  "id": "labor_1738065900000",
  "userId": "20-12345678-9",
  "tipo": "aplicaciones",
  "cuartelId": "cuartel_1738065700000",
  "fecha": "2026-01-28",
  "productos": [
    {
      "nombre": "Azufre",
      "dosis": "3 kg/ha"
    },
    {
      "nombre": "Cobre",
      "dosis": "200 g/hl"
    }
  ],
  "jornales": 3,
  "observaciones": "Tratamiento preventivo",
  "createdAt": "2026-01-28T11:00:00.000Z"
}
```

#### Ejemplo - Fertilización
```json
{
  "id": "labor_1738066000000",
  "userId": "20-12345678-9",
  "tipo": "fertilizacion",
  "cuartelId": "cuartel_1738065700000",
  "fecha": "2026-01-28",
  "productos": [
    {
      "nombre": "Urea (46-0-0)",
      "dosis": "150 kg/ha"
    }
  ],
  "jornales": 2,
  "observaciones": "Fertilización de base",
  "createdAt": "2026-01-28T11:15:00.000Z"
}
```

#### Ejemplo - Labranzas
```json
{
  "id": "labor_1738066100000",
  "userId": "20-12345678-9",
  "tipo": "labranzas",
  "cuartelId": "cuartel_1738065700000",
  "fecha": "2026-01-28",
  "equipo": "Arado de Discos",
  "jornales": 4,
  "observaciones": "Preparación de suelo",
  "createdAt": "2026-01-28T11:30:00.000Z"
}
```

#### Ejemplo - Cosecha
```json
{
  "id": "labor_1738066200000",
  "userId": "20-12345678-9",
  "tipo": "cosecha",
  "cuartelId": "cuartel_1738065700000",
  "fecha": "2026-01-28",
  "kgCosechados": 12500,
  "jornales": 15,
  "observaciones": "Primera cosecha de la temporada",
  "createdAt": "2026-01-28T11:45:00.000Z"
}
```

### config_menus.json
Contiene todas las opciones de los menús desplegables:
- Cultivos (Vid, Olivo, Manzana, etc.)
- Variedades por cultivo
- Sistemas de riego
- Productos de aplicación
- Productos de fertilización
- Equipos de labranza

## 🔧 Configuración de Menús Desplegables

El archivo `config_menus.json` permite personalizar todas las opciones de los menús:

```json
{
  "cultivos": ["Vid", "Olivo", "Manzana", ...],
  "variedadesPorCultivo": {
    "Vid": ["Malbec", "Cabernet Sauvignon", ...]
  },
  "sistemasRiego": ["Surcos", "Melgas", "Goteo", ...],
  "productosAplicacion": ["Glifosato", "Azufre", ...],
  "productosFertilizacion": ["Urea (46-0-0)", ...],
  "equiposLabranza": ["Arado de Discos", ...]
}
```

**Para agregar nuevas opciones:** Edite el archivo `config_menus.json` y actualice la página.

## 📥 Exportación de Datos

### Exportación a Excel
- Desde la pestaña **Consultas**
- Aplique los filtros deseados (tipo de labor, cuartel, rango de fechas)
- Haga clic en "📥 Exportar a Excel"
- Se descargará un archivo `.xlsx` con:
  - Fecha
  - Tipo de labor
  - Finca y Cuartel
  - Cultivo y Variedad
  - Detalles específicos según el tipo de labor
  - Jornales
  - Observaciones

### Formato del Excel
El archivo exportado incluye:
- Columnas dinámicas según el tipo de labor
- Formato profesional
- Datos listos para análisis
- Compatible con Microsoft Excel, LibreOffice, Google Sheets

## 🔐 Seguridad

- Datos almacenados localmente en el navegador
- Cada usuario ve solo sus propios datos
- Las contraseñas se almacenan en texto plano (solo para desarrollo/prueba)
- **Para producción:** Implementar hashing de contraseñas y backend seguro

## 💾 Almacenamiento de Datos

### Automático en Navegador
- Todas las bases de datos se guardan automáticamente en localStorage
- Los datos persisten entre sesiones
- No se requiere conexión a internet

### Actualización de Archivos JSON
Las bases de datos se actualizan automáticamente:
- Al agregar fincas, cuarteles o labores
- Al eliminar registros
- Los cambios se reflejan inmediatamente

## 💡 Notas Importantes

1. **Formato de RUT**: XX-XXXXXXXX-X (formato argentino)
2. **Relaciones**: Al eliminar fincas, se eliminan automáticamente cuarteles y labores asociadas
3. **Menús dinámicos**: Las variedades se actualizan según el cultivo seleccionado
4. **Productos múltiples**: En aplicaciones y fertilización se pueden seleccionar varios productos
5. **Dosis opcional**: Se puede registrar la dosis de cada producto aplicado
6. **Logo personalizado**: Se mantiene entre sesiones y se muestra en toda la aplicación

## 🌾 Tipos de Cultivos Disponibles

- **Frutales de Pepita**: Manzana, Pera
- **Frutales de Carozo**: Durazno, Ciruela, Cereza, Damasco
- **Vid**: Variedades tintas y blancas
- **Olivo**: Variedades de mesa y aceite
- **Frutos Secos**: Nogal, Almendro
- **Hortalizas**: Ajo, Cebolla, Tomate, Zanahoria, Papa
- **Extensivos**: Maíz, Alfalfa
- **Otro**: Con posibilidad de especificar

## 🚜 Equipos de Labranza

- Arados (Discos, Rejas)
- Rastras
- Cincel y Subsolador
- Rotovator
- Cultivador
- Niveladora
- Surcadora
- Desmalezadora
- Otros equipos personalizables

## 🛠️ Soporte Técnico

Para modificaciones en:
- **Menús desplegables**: Editar `config_menus.json`
- **Estructura de datos**: Editar archivos `db_*.json`
- **Funcionalidades**: Contactar al desarrollador

---

**Versión**: 2.0 - Completa  
**Fecha**: Enero 2026  
**Región**: Mendoza, Argentina  
**Características**: Logo personalizado, Cultivos y variedades dinámicas, Labores detalladas, Exportación Excel
