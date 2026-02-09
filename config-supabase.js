// config-supabase.js
// Configuración de Supabase para AgroLabor Mendoza

// IMPORTANTE: Reemplazar estos valores con los de tu proyecto de Supabase
// Obtener de: https://app.supabase.com/project/YOUR_PROJECT/settings/api

const SUPABASE_CONFIG = {
    url: 'https://ioycrbykhbfxudumrcsi.supabase.co', // Ej: https://abcdefghijk.supabase.co
    anonKey: 'sb_publishable_AC7lgoV5Ok4WXXZR3ZoJ3Q_U3OrlYc3' // La clave pública (anon/public)
};

// URL del logo (opcional)
const LOGO_URL = ''; // Dejar vacío para usar emoji por defecto o agregar URL de tu logo

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUPABASE_CONFIG, LOGO_URL };
}
