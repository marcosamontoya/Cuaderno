# AgroLabor Mendoza - Versión Mejorada v2.1

## 🆕 Novedades de Esta Versión

### ✅ Actualización Automática de Bases de Datos
**PROBLEMA SOLUCIONADO**: Las bases de datos ahora se pueden descargar manualmente con botones dedicados en cada sección.

- **Botón "💾 Descargar BD"** en cada pestaña (Fincas, Cuarteles, Labores)
- Al hacer clic, se descarga automáticamente el archivo JSON actualizado
- Los datos en localStorage se sincronizan automáticamente
- Cada modificación actualiza las bases de datos

### 🔍 Búsqueda de Productos
**NUEVA FUNCIONALIDAD**: Cuadros de búsqueda en listas de productos

- **Aplicaciones**: Buscar entre 16 productos fitosanitarios
- **Fertilización**: Buscar entre 15 productos de fertilización
- Búsqueda en tiempo real mientras se escribe
- Filtrado instantáneo de la lista

## 📁 Archivos del Sistema

### Archivos Principales
- **agrolabor-mejorado.html** - Aplicación web mejorada
- **config_menus.json** - Configuración de menús desplegables
- **db_usuarios.json** - Base de datos de usuarios (vacía inicial)
- **db_fincas.json** - Base de datos de fincas (vacía inicial)
- **db_cuarteles.json** - Base de datos de cuarteles (vacía inicial)
- **db_labores.json** - Base de datos de labores (vacía inicial)

## 🚀 Cómo Usar

### Inicio Rápido
1. Abrir **agrolabor-mejorado.html** en cualquier navegador moderno
2. Cargar logo personalizado (opcional)
3. Registrar un nuevo usuario o iniciar sesión
4. Comenzar a registrar fincas, cuarteles y labores

### Descarga de Bases de Datos

#### Opción 1: Descarga Manual (Recomendada)
Cada sección tiene un botón **"💾 Descargar BD"**:
- **Fincas** → Descargar BD Fincas
- **Cuarteles** → Descargar BD Cuarteles  
- **Labores** → Descargar BD Labores

Al hacer clic, se descarga el archivo JSON actualizado con todos los datos.

#### Opción 2: localStorage
Los datos se guardan automáticamente en el navegador y persisten entre sesiones.

### Uso de la Búsqueda de Productos

#### En Aplicaciones
1. Ir a la pestaña **Labores**
2. Seleccionar tipo de labor: **Aplicaciones**
3. En el campo de productos, verá un cuadro de búsqueda: **"🔍 Buscar productos..."**
4. Escribir el nombre del producto (ej: "azufre", "cobre", "glifosato")
5. La lista se filtra automáticamente
6. Seleccionar los productos deseados
7. Opcionalmente agregar dosis para cada uno

#### En Fertilización
1. Ir a la pestaña **Labores**
2. Seleccionar tipo de labor: **Fertilización**
3. En el campo de productos, verá un cuadro de búsqueda: **"🔍 Buscar productos..."**
4. Escribir el nombre del producto (ej: "urea", "fosfato", "potasio")
5. La lista se filtra automáticamente
6. Seleccionar los productos deseados
7. Opcionalmente agregar dosis para cada uno

## ✨ Características Principales

### 🎨 Logo Personalizado
- Cargar desde pantalla de inicio
- Se muestra en header y pantalla de login
- Persistencia automática

### 🏞️ Gestión de Fincas
- Nombre
- Dirección completa
- Superficie en hectáreas
- **Botón de descarga de BD integrado**

### 📍 Gestión de Cuarteles
- Finca asociada
- Nombre del cuartel
- Superficie
- **Cultivo** (menú desplegable)
- **Variedad** (dinámica según cultivo)
- **Sistema de Riego** (6 opciones + Otro)
- Año de implantación (opcional)
- Tela antigranizo (checkbox)
- **Botón de descarga de BD integrado**

### 📋 Registro de Labores Completo

#### 🌊 Riego
- Tiempo (horas)
- Jornales
- Observaciones

#### 🌿 Aplicaciones
- **Búsqueda de productos** 🔍
- Selección múltiple de productos
- Dosis por producto (opcional)
- Jornales
- Observaciones

#### 🌱 Fertilización
- **Búsqueda de productos** 🔍
- Selección múltiple de productos
- Dosis por producto (opcional)
- Jornales
- Observaciones

#### 🚜 Labranzas
- Equipo utilizado (menú desplegable)
- Jornales
- Observaciones

#### 🍇 Cosecha
- Kg cosechados
- Jornales
- Observaciones

### 📊 Sistema de Consultas
- Filtros por tipo, cuartel y fechas
- Exportación directa a **Excel (.xlsx)**
- Datos completos y estructurados

## 💾 Gestión de Bases de Datos

### Flujo de Trabajo Recomendado

1. **Trabajar en la aplicación**
   - Registrar fincas, cuarteles, labores normalmente
   - Los datos se guardan automáticamente en localStorage

2. **Descargar bases de datos**
   - Al final del día o semana, hacer clic en **"💾 Descargar BD"** en cada sección
   - Guardar los archivos JSON en una carpeta segura
   - Estos archivos son la copia de respaldo

3. **Edición manual (opcional)**
   - Abrir archivos JSON con cualquier editor de texto
   - Editar datos según sea necesario
   - Guardar cambios

4. **Sincronización**
   - Para restaurar datos, copiar el contenido del JSON
   - Pegarlo en la consola del navegador usando:
   ```javascript
   localStorage.setItem('db_fincas', '...contenido del JSON...')
   ```

### Ubicación de los Datos

#### En el Navegador
- **localStorage**: `db_usuarios`, `db_fincas`, `db_cuarteles`, `db_labores`
- **Configuración**: `config_menus`, `customLogo`

#### Archivos Descargados
- `db_usuarios.json` - Descarga manual con botón o desde consola
- `db_fincas.json` - **💾 Descargar BD Fincas**
- `db_cuarteles.json` - **💾 Descargar BD Cuarteles**
- `db_labores.json` - **💾 Descargar BD Labores**

## 📊 Estructura de Datos

### Ejemplo de Labor con Aplicaciones
```json
{
  "id": "labor_1738197600000",
  "userId": "20-12345678-9",
  "tipo": "aplicaciones",
  "cuartelId": "cuartel_1738197500000",
  "fecha": "2026-01-29",
  "productos": [
    {
      "nombre": "Azufre",
      "dosis": "3 kg/ha"
    },
    {
      "nombre": "Cobre",
      "dosis": "200 g/hl"
    },
    {
      "nombre": "Aceite Mineral",
      "dosis": "1%"
    }
  ],
  "jornales": 3,
  "observaciones": "Tratamiento preventivo pre-brotación",
  "createdAt": "2026-01-29T10:00:00.000Z"
}
```

### Ejemplo de Labor con Fertilización
```json
{
  "id": "labor_1738197700000",
  "userId": "20-12345678-9",
  "tipo": "fertilizacion",
  "cuartelId": "cuartel_1738197500000",
  "fecha": "2026-01-29",
  "productos": [
    {
      "nombre": "Urea (46-0-0)",
      "dosis": "150 kg/ha"
    },
    {
      "nombre": "Fosfato Diamónico (18-46-0)",
      "dosis": "100 kg/ha"
    }
  ],
  "jornales": 2,
  "observaciones": "Fertilización de base",
  "createdAt": "2026-01-29T11:00:00.000Z"
}
```

## 🔧 Productos Disponibles

### Productos de Aplicación (16)
- Glifosato
- Azufre
- Cobre
- Mancozeb
- Captan
- Tiofanato Metílico
- Tebuconazole
- Difenoconazole
- Imidacloprid
- Clorpirifos
- Lambda Cihalotrina
- Abamectina
- Aceite Mineral
- Bacillus thuringiensis
- Azadiractina
- Otro

### Productos de Fertilización (15)
- Urea (46-0-0)
- Fosfato Diamónico (18-46-0)
- Fosfato Monoamónico (11-52-0)
- Nitrato de Amonio (33-0-0)
- Nitrato de Calcio
- Sulfato de Potasio (0-0-50)
- Cloruro de Potasio (0-0-60)
- Sulfato de Zinc
- Sulfato de Magnesio
- Ácido Bórico
- Compost
- Guano
- Humus de Lombriz
- Fertilizante Foliar Completo
- Otro

## 🌾 Cultivos y Variedades

### Cultivos Disponibles (18)
Vid, Olivo, Manzana, Pera, Durazno, Ciruela, Cereza, Damasco, Nogal, Almendro, Ajo, Cebolla, Tomate, Zanahoria, Papa, Maíz, Alfalfa, Otro

### Variedades por Cultivo
Cada cultivo tiene entre 7-10 variedades específicas que se cargan dinámicamente al seleccionar el cultivo.

## 💡 Consejos de Uso

### Para Búsqueda Eficiente de Productos
1. Escribir solo las primeras letras del producto
2. La búsqueda es insensible a mayúsculas/minúsculas
3. Busca en todo el nombre del producto
4. Ejemplo: "sulf" encuentra "Sulfato de Potasio", "Sulfato de Zinc", "Sulfato de Magnesio"

### Para Mantener Datos Actualizados
1. Descargar bases de datos semanalmente
2. Guardar en carpeta con fecha (ej: "backup_2026-01-29")
3. Mantener múltiples versiones de respaldo
4. En caso de pérdida de datos del navegador, restaurar desde JSON

### Para Trabajo en Múltiples Dispositivos
1. Exportar bases de datos desde dispositivo 1
2. Transferir archivos JSON a dispositivo 2
3. Importar datos en localStorage del dispositivo 2
4. Continuar trabajo normalmente

## 🔐 Seguridad y Privacidad

- Datos almacenados localmente en el navegador
- No se envían datos a servidores externos
- Cada usuario ve solo sus propios registros
- Contraseñas en texto plano (solo desarrollo/prueba)
- Para producción: implementar backend seguro y hashing

## 📞 Soporte

### Problemas Comunes

**P: Las bases de datos no se descargan**
R: Verificar que el navegador permita descargas automáticas. Si está bloqueado, permitir descargas para este sitio.

**P: No encuentro un producto en la lista**
R: Usar la búsqueda escribiendo parte del nombre. Si no existe, seleccionar "Otro" y especificar.

**P: Perdí mis datos**
R: Restaurar desde los archivos JSON de respaldo usando localStorage.

**P: La búsqueda no funciona**
R: Asegurarse de que el tipo de labor esté seleccionado correctamente (Aplicaciones o Fertilización).

## 🆕 Cambios en esta Versión (v2.1)

### Corregido
- ✅ Actualización de bases de datos ahora funciona correctamente
- ✅ Botones de descarga manual agregados en cada sección
- ✅ Notificaciones de confirmación al descargar BD

### Agregado
- ✅ Búsqueda de productos en Aplicaciones
- ✅ Búsqueda de productos en Fertilización
- ✅ Filtrado en tiempo real
- ✅ Mejor feedback visual

### Mejorado
- ✅ Interfaz más intuitiva para descarga de datos
- ✅ Mensajes de confirmación más claros
- ✅ Mejor organización de botones de acción

---

**Versión**: 2.1 - Mejorada  
**Fecha**: Enero 2026  
**Región**: Mendoza, Argentina  
**Funcionalidades**: Descarga manual de BD, Búsqueda de productos, Logo personalizado
