# AgroLabor Mendoza - Sistema de Registro de Labores Agrícolas

## 📁 Archivos del Sistema

### Archivos de Bases de Datos (JSON)
- **db_usuarios.json** - Base de datos de usuarios registrados
- **db_fincas.json** - Base de datos de fincas
- **db_cuarteles.json** - Base de datos de cuarteles
- **db_labores.json** - Base de datos de labores agrícolas

### Archivo de Aplicación
- **agrolabor-mendoza-json.html** - Aplicación web principal

## 🚀 Cómo Usar

### Opción 1: Uso Simple (Navegador)
1. Abrir el archivo `agrolabor-mendoza-json.html` en cualquier navegador web moderno
2. Los datos se guardan automáticamente en el navegador (localStorage)
3. Usar los botones "📥 Descargar" en cada sección para exportar las bases de datos

### Opción 2: Edición Manual de Bases de Datos
1. Descargar los archivos JSON usando los botones de exportación en la aplicación
2. Editar los archivos JSON manualmente con cualquier editor de texto
3. Los datos editados manualmente pueden ser importados nuevamente al sistema

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
      "ubicacion": "Luján de Cuyo",
      "superficie": 25.5,
      "cultivo": "Vid",
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
      "variedad": "Malbec",
      "createdAt": "2026-01-28T10:40:00.000Z"
    }
  ]
}
```

### db_labores.json
```json
{
  "labores": [
    {
      "id": "labor_1738065800000",
      "userId": "20-12345678-9",
      "tipo": "aplicaciones",
      "cuartelId": "cuartel_1738065700000",
      "fecha": "2026-01-28",
      "cantidad": "200 L/ha",
      "descripcion": "Aplicación de fungicida preventivo",
      "observaciones": "Condiciones climáticas óptimas",
      "createdAt": "2026-01-28T10:45:00.000Z"
    }
  ]
}
```

## 🔧 Funcionalidades

### Gestión de Usuarios
- Registro con RUT argentino (formato: XX-XXXXXXXX-X)
- Login con RUT y contraseña
- Validación automática de formato

### Gestión de Fincas
- Alta de fincas con datos completos
- Visualización de todas las fincas del usuario
- Eliminación de fincas (elimina automáticamente cuarteles y labores asociadas)

### Gestión de Cuarteles
- Alta de cuarteles asociados a fincas
- Listado con información de finca asociada
- Eliminación de cuarteles

### Registro de Labores
**Tipos de labores disponibles:**
- Aplicaciones
- Labranzas
- Riego
- Cosecha

**Datos registrados:**
- Tipo de labor
- Cuartel donde se realizó
- Fecha
- Cantidad/Dosis
- Descripción detallada
- Observaciones (opcional)

### Sistema de Consultas
**Filtros disponibles:**
- Por tipo de labor
- Por cuartel específico
- Por rango de fechas (desde/hasta)

**Exportación:**
- Exportar resultados filtrados en formato JSON
- Descargar bases de datos completas

## 📥 Exportar e Importar Datos

### Exportar Datos
Cada sección tiene un botón "📥 Descargar db_xxxxx.json" que permite exportar la base de datos correspondiente.

### Importar Datos (Edición Manual)
1. Exportar el archivo JSON actual
2. Editar el archivo con un editor de texto
3. Mantener la estructura JSON correcta
4. Los cambios se pueden reflejar en la aplicación mediante el uso de las funciones de importación del navegador

## 🔐 Seguridad

- Los datos se almacenan localmente en el navegador del usuario
- Cada usuario solo puede ver y editar sus propios datos
- Las contraseñas se almacenan en texto plano (para entornos de desarrollo/prueba)
- **IMPORTANTE**: Para producción, implementar hashing de contraseñas

## 💡 Notas Importantes

1. **Formato de RUT**: El RUT debe seguir el formato argentino: XX-XXXXXXXX-X
2. **Relaciones**: Al eliminar una finca, se eliminan automáticamente todos sus cuarteles y labores asociadas
3. **IDs únicos**: Cada registro tiene un ID único generado automáticamente
4. **Persistencia**: Los datos se mantienen en el navegador hasta que sean eliminados manualmente

## 🛠️ Edición Manual de JSON

Al editar manualmente los archivos JSON, asegúrese de:
- Mantener la estructura correcta del JSON
- No duplicar IDs
- Respetar los formatos de fecha (ISO 8601: "2026-01-28T10:30:00.000Z")
- Mantener las relaciones entre fincas y cuarteles (fincaId debe existir)
- Mantener las relaciones entre cuarteles y labores (cuartelId debe existir)

## 📞 Soporte

Para modificaciones o consultas sobre el sistema, contactar al administrador del sistema.

---

**Versión**: 1.0  
**Fecha**: Enero 2026  
**Región**: Mendoza, Argentina
