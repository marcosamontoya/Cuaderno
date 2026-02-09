// supabase-service.js
// Servicios para interactuar con Supabase

class SupabaseService {
    constructor(supabaseUrl, supabaseKey) {
        this.supabase = supabase.createClient(supabaseUrl, supabaseKey);
    }

    // ==================== USUARIOS ====================
    
    async registerUser(rut, nombre, password) {
        try {
            const { data, error } = await this.supabase
                .from('usuarios')
                .insert([{ rut, nombre, password }])
                .select();
            
            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error registrando usuario:', error);
            return { success: false, error: error.message };
        }
    }

    async loginUser(rut, password) {
        try {
            const { data, error } = await this.supabase
                .from('usuarios')
                .select('*')
                .eq('rut', rut)
                .eq('password', password)
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error en login:', error);
            return { success: false, error: error.message };
        }
    }

    async checkUserExists(rut) {
        try {
            const { data, error } = await this.supabase
                .from('usuarios')
                .select('rut')
                .eq('rut', rut)
                .single();
            
            return data !== null;
        } catch (error) {
            return false;
        }
    }

    // ==================== FINCAS ====================
    
    async getFincas(userId) {
        try {
            const { data, error } = await this.supabase
                .from('fincas')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error obteniendo fincas:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addFinca(finca) {
        try {
            const { data, error } = await this.supabase
                .from('fincas')
                .insert([finca])
                .select();
            
            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error agregando finca:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteFinca(fincaId) {
        try {
            // Las labores y cuarteles se eliminan automáticamente por CASCADE
            const { error } = await this.supabase
                .from('fincas')
                .delete()
                .eq('id', fincaId);
            
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Error eliminando finca:', error);
            return { success: false, error: error.message };
        }
    }

    // ==================== CUARTELES ====================
    
    async getCuarteles(userId) {
        try {
            const { data, error } = await this.supabase
                .from('cuarteles')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error obteniendo cuarteles:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addCuartel(cuartel) {
        try {
            const { data, error } = await this.supabase
                .from('cuarteles')
                .insert([cuartel])
                .select();
            
            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error agregando cuartel:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteCuartel(cuartelId) {
        try {
            // Las labores se eliminan automáticamente por CASCADE
            const { error } = await this.supabase
                .from('cuarteles')
                .delete()
                .eq('id', cuartelId);
            
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Error eliminando cuartel:', error);
            return { success: false, error: error.message };
        }
    }

    // ==================== LABORES ====================
    
    async getLabores(userId, filters = {}) {
        try {
            let query = this.supabase
                .from('labores')
                .select('*')
                .eq('user_id', userId);
            
            if (filters.tipo) {
                query = query.eq('tipo', filters.tipo);
            }
            
            if (filters.cuartelId) {
                query = query.eq('cuartel_id', filters.cuartelId);
            }
            
            if (filters.fechaDesde) {
                query = query.gte('fecha', filters.fechaDesde);
            }
            
            if (filters.fechaHasta) {
                query = query.lte('fecha', filters.fechaHasta);
            }
            
            query = query.order('fecha', { ascending: false });
            
            const { data, error } = await query;
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error obteniendo labores:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addLabor(labor) {
        try {
            const { data, error } = await this.supabase
                .from('labores')
                .insert([labor])
                .select();
            
            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error agregando labor:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteLabor(laborId) {
        try {
            const { error } = await this.supabase
                .from('labores')
                .delete()
                .eq('id', laborId);
            
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Error eliminando labor:', error);
            return { success: false, error: error.message };
        }
    }

    // ==================== UTILIDADES ====================
    
    async testConnection() {
        try {
            const { error } = await this.supabase
                .from('usuarios')
                .select('count');
            
            if (error) throw error;
            return { success: true, message: 'Conexión exitosa con Supabase' };
        } catch (error) {
            console.error('Error de conexión:', error);
            return { success: false, error: error.message };
        }
    }
}
