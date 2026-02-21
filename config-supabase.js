// config-supabase.js
// Configuración de Supabase para AgroLabor Mendoza
// ✅ ARCHIVO COMPLETAMENTE CONFIGURADO

const SUPABASE_CONFIG = {
    // Project URL - Configurado
    url: 'https://ioycrbykhbfxudumrcsi.supabase.co',
    
    // Publishable Key - Configurado
    anonKey: 'sb_publishable_AC7lgoV5Ok4WXXZR3ZoJ3Q_U3OrlYc3'
};

// OPCIONAL: URL del logo de tu empresa
// Ejemplo: const LOGO_URL = 'https://mi-sitio.com/logo.png';
const LOGO_URL = 'https://drive.google.com/file/d/14BJGgo8dO6QOsl1Qmgo7qqS1HToJW_5K/view?usp=sharing'; 

// ============================================================
// NO MODIFICAR DESDE AQUÍ HACIA ABAJO
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUPABASE_CONFIG, LOGO_URL };
}
