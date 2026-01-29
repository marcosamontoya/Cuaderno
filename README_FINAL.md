# AgroLabor Mendoza - Sistema de Registro de Labores Agrícolas

## ✨ Características Principales

### 🎨 Logo Personalizado
- Cargar logo propio desde la pantalla de inicio
- Se muestra en el header y en la pantalla de login
- Persistencia automática entre sesiones

### 🏞️ Gestión de Fincas
- Nombre de la finca
- Dirección completa
- Superficie en hectáreas

### 📍 Gestión de Cuarteles Completa
- Finca asociada
- Nombre del cuartel
- Superficie en hectáreas
- **Cultivo** (menú desplegable con 18 opciones)
- **Variedad** (se actualiza dinámicamente según el cultivo seleccionado)
- **Sistema de Riego** (Surcos, Melgas, Goteo, Aspersión, Pivot, Otro)
- Año de implantación (opcional)
- Presencia de tela antigranizo (checkbox)

### 📋 Registro de Labores Detallado

#### 🌊 RIEGO
- Tiempo en horas
- Jornales
- Observaciones

#### 🌿 APLICACIONES
- **Buscador de productos** integrado 🔍
- Selección múltiple de productos fitosanitarios
- Dosis individual por cada producto (opcional)
- Jornales
- Observaciones

**Productos disponibles (16):**
Glifosato, Azufre, Cobre, Mancozeb, Captan, Tiofanato Metílico, Tebuconazole, Difenoconazole, Imidacloprid, Clorpirifos, Lambda Cihalotrina, Abamectina, Aceite Mineral, Bacillus thuringiensis, Azadiractina, Otro

#### 🌱 FERTILIZACIÓN
- **Buscador de productos** integrado 🔍
- Selección múltiple de productos de fertilización
- Dosis individual por cada producto (opcional)
- Jornales
- Observaciones

**Productos disponibles (15):**
Urea (46-0-0), Fosfato Diamónico (18-46-0), Fosfato Monoamónico (11-52-0), Nitrato de Amonio (33-0-0), Nitrato de Calcio, Sulfato de Potasio (0-0-50), Cloruro de Potasio (0-0-60), Sulfato de Zinc, Sulfato de Magnesio, Ácido Bórico, Compost, Guano, Humus de Lombriz, Fertilizante Foliar Completo, Otro

#### 🚜 LABRANZAS
- Equipo utilizado (menú desplegable con 12 opciones)
- Jornales
- Observaciones

**Equipos disponibles:**
Arado de Discos, Arado de Rejas, Rastra de Discos, Cincel, Subsolador, Rotovator, Cultivador, Niveladora, Surcadora, Rolo Compactador, Desmalezadora, Otro

#### 🍇 COSECHA
- Kg cosechados
- Jornales
- Observaciones

### 📊 Sistema de Consultas y Exportación

**Filtros disponibles:**
- Por tipo de labor
- Por cuartel específico
- Por rango de fechas (desde/hasta)

**Exportación:**
- Solo disponible desde la pestaña **Consultas**
- Formato **Excel (.xlsx)**
- Incluye todos los datos filtrados
- Columnas dinámicas según el tipo de labor

## 🚀 Cómo Usar

### Inicio
1. Abrir el archivo **agrolabor-final.html** en cualquier navegador moderno
2. **Cargar logo personalizado** (opcional): Click en "📷 Cargar Logo Propio"
3. **Registrar usuario**: Click en "Crear Nueva Cuenta"
   - Ingresar RUT en formato: XX-XXXXXXXX-X
   - Nombre completo
   - Contraseña (mínimo 6 caracteres)
4. **Iniciar sesión** con RUT y contraseña

### Registrar Fincas
1. Ir a pestaña **Fincas**
2. Completar formulario:
   - Nombre de la finca
   - Dirección completa
   - Superficie en hectáreas
3. Click en **Agregar Finca**

### Registrar Cuarteles
1. Ir a pestaña **Cuarteles**
2. Completar formulario:
   - Seleccionar finca
   - Nombre del cuartel
   - Superficie
   - **Cultivo** (el menú se llena automáticamente)
   - **Variedad** (se actualiza según el cultivo)
   - **Sistema de riego** (si selecciona "Otro", aparece campo para especificar)
   - Año de implantación (opcional)
   - Marcar si tiene tela antigranizo
3. Click en **Agregar Cuartel**

### Registrar Labores
1. Ir a pestaña **Labores**
2. Seleccionar **Tipo de Labor**
3. Seleccionar **Cuartel**
4. Ingresar **Fecha**
5. **Campos específicos según el tipo de labor:**

   **Para RIEGO:**
   - Tiempo en horas
   - Jornales

   **Para APLICACIONES:**
   - Usar el buscador: **"🔍 Buscar productos..."**
   - Escribir parte del nombre (ej: "azuf" encuentra "Azufre")
   - Marcar los productos utilizados
   - Opcionalmente ingresar dosis para cada uno
   - Ingresar jornales

   **Para FERTILIZACIÓN:**
   - Usar el buscador: **"🔍 Buscar productos..."**
   - Escribir parte del nombre (ej: "urea", "fosfato")
   - Marcar los productos utilizados
   - Opcionalmente ingresar dosis para cada uno
   - Ingresar jornales

   **Para LABRANZAS:**
   - Seleccionar equipo del menú
   - Ingresar jornales

   **Para COSECHA:**
   - Ingresar kg cosechados
   - Ingresar jornales

6. Agregar **Observaciones** (opcional)
7. Click en **Registrar Labor**

### Consultar y Exportar Datos
1. Ir a pestaña **Consultas**
2. Aplicar filtros deseados:
   - Tipo de labor
   - Cuartel específico
   - Rango de fechas
3. Ver resultados en pantalla
4. Click en **📥 Exportar a Excel** para descargar
5. Se descargará un archivo `.xlsx` con todos los datos filtrados

## 💾 Almacenamiento de Datos

### En el Navegador (localStorage)
Los datos se guardan automáticamente en el navegador y persisten entre sesiones:
- `db_usuarios` - Usuarios registrados
- `db_fincas` - Fincas
- `db_cuarteles` - Cuarteles
- `db_labores` - Labores registradas
- `config_menus` - Configuración de menús
- `customLogo` - Logo personalizado

### Respaldo Manual
Para hacer respaldo de tus datos:
1. Abrir la consola del navegador (F12)
2. Ir a la pestaña "Application" o "Storage"
3. Expandir "Local Storage"
4. Copiar el contenido de cada clave
5. Guardar en archivos de texto

### Restaurar Datos
Para restaurar datos desde un respaldo:
1. Abrir la consola del navegador (F12)
2. Ejecutar:
```javascript
localStorage.setItem('db_fincas', '{"fincas":[...]}')
localStorage.setItem('db_cuarteles', '{"cuarteles":[...]}')
localStorage.setItem('db_labores', '{"labores":[...]}')
```

## 🔍 Uso del Buscador de Productos

El buscador filtra la lista en **tiempo real** mientras escribes:

### Consejos para búsquedas eficientes:
- Escribir solo las primeras letras: "azuf" → Azufre
- No distingue mayúsculas/minúsculas
- Busca en todo el nombre del producto
- Ejemplos:
  - "sulf" → Sulfato de Potasio, Sulfato de Zinc, Sulfato de Magnesio
  - "46" → Urea (46-0-0)
  - "cobre" → Cobre
  - "fosfato" → Fosfato Diamónico, Fosfato Monoamónico

### Si no encuentras un producto:
1. Desplazarte hasta el final de la lista
2. Seleccionar **"Otro"**
3. Especificar el producto en las observaciones

## 📊 Estructura del Excel Exportado

El archivo Excel incluye columnas dinámicas según los datos:

**Columnas comunes:**
- Fecha
- Tipo de labor
- Finca
- Cuartel
- Cultivo
- Variedad
- Jornales
- Observaciones

**Columnas específicas:**
- **Riego**: Tiempo (h)
- **Aplicaciones/Fertilización**: Productos, Dosis
- **Labranzas**: Equipo
- **Cosecha**: Kg Cosechados

## 🌾 Cultivos y Variedades Disponibles

### Cultivos (18)
Vid, Olivo, Manzana, Pera, Durazno, Ciruela, Cereza, Damasco, Nogal, Almendro, Ajo, Cebolla, Tomate, Zanahoria, Papa, Maíz, Alfalfa, Otro

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
Editar el archivo **config_menus.json** para agregar/modificar:
- Cultivos
- Variedades por cultivo
- Sistemas de riego
- Productos de aplicación
- Productos de fertilización
- Equipos de labranza

Después de editar, recargar la página para que los cambios surtan efecto.

## 💡 Consejos y Buenas Prácticas

### Organización de Datos
1. Registrar todas las fincas primero
2. Luego registrar los cuarteles de cada finca
3. Finalmente registrar labores a medida que se realizan

### Registro de Labores
1. Registrar labores el mismo día que se realizan
2. Ser detallado en las observaciones
3. Registrar dosis exactas de productos aplicados
4. Anotar jornales para cálculos de costos

### Exportación Regular
1. Exportar datos semanalmente desde **Consultas**
2. Guardar archivos Excel con fecha en el nombre
3. Mantener respaldo en la nube (Google Drive, Dropbox, etc.)

### Respaldo de Datos del Navegador
1. Los datos se guardan en localStorage del navegador
2. Si se limpia el caché del navegador, se pierden los datos
3. Hacer respaldo manual copiando localStorage regularmente
4. O exportar a Excel frecuentemente

## 🔐 Seguridad

- Datos almacenados localmente en el navegador
- No se envían a servidores externos
- Cada usuario solo ve sus propios datos (filtrado por RUT)
- Contraseñas en texto plano (solo para desarrollo/prueba)
- **Para producción**: implementar backend seguro con hashing de contraseñas

## 📞 Soporte

### Problemas Comunes

**P: Los menús desplegables están vacíos**
R: Recargar la página. Verificar que el archivo config_menus.json esté en el mismo directorio.

**P: No veo mis datos después de cerrar el navegador**
R: Verificar que no se haya limpiado el caché. Restaurar desde respaldo de localStorage o Excel.

**P: La búsqueda de productos no funciona**
R: Asegurarse de que el tipo de labor (Aplicaciones o Fertilización) esté seleccionado primero.

**P: No puedo exportar a Excel**
R: Asegurarse de estar en la pestaña **Consultas** y de tener datos filtrados para exportar.

**P: Las variedades no se actualizan al cambiar el cultivo**
R: Verificar que config_menus.json tenga las variedades definidas para ese cultivo.

## 📋 Archivos del Sistema

- **agrolabor-final.html** - Aplicación principal
- **config_menus.json** - Configuración de menús desplegables
- **db_usuarios.json** - Base de datos de usuarios (inicial vacía)
- **db_fincas.json** - Base de datos de fincas (inicial vacía)
- **db_cuarteles.json** - Base de datos de cuarteles (inicial vacía)
- **db_labores.json** - Base de datos de labores (inicial vacía)

## 📱 Compatibilidad

- **Navegadores recomendados**: Chrome, Firefox, Edge, Safari (últimas versiones)
- **Dispositivos**: PC, laptop, tablet, móvil
- **Requisitos**: JavaScript habilitado, localStorage disponible
- **No requiere**: Conexión a internet (después de cargar la página)

---

**Versión**: Final  
**Fecha**: Enero 2026  
**Región**: Mendoza, Argentina  
**Desarrollado para**: Productores agrícolas de la provincia de Mendoza
