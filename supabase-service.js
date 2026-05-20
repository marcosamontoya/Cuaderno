// supabase-service.js
// Servicios para interactuar con Supabase — Cuaderno de Campo Digital Mendoza

class SupabaseService {
    constructor(supabaseUrl, supabaseKey) {
        this.supabase = supabase.createClient(supabaseUrl, supabaseKey);
    }

    // ==================== USUARIOS ====================

    async registerUser(rut, nombre, password, email = '', rut_dni = '') {
        try {
            const payload = { rut, nombre, password };
            if (email)   payload.email   = email;
            if (rut_dni) payload.rut_dni = rut_dni;

            const { data, error } = await this.supabase
                .from('usuarios')
                .insert([payload])
                .select();

            if (error) {
                // Si la columna no existe aún (migración pendiente), reintentar sin ella
                if (error.code === '42703') {
                    const { data: d2, error: e2 } = await this.supabase
                        .from('usuarios')
                        .insert([{ rut, nombre, password }])
                        .select();
                    if (e2) throw e2;
                    return { success: true, data: d2[0] };
                }
                throw error;
            }
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
                .eq('password', password);

            if (error) throw error;
            if (!data || data.length === 0) {
                return { success: false, error: 'Credenciales incorrectas' };
            }
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error en login:', error);
            return { success: false, error: error.message };
        }
    }

    async checkUserExists(rut) {
        try {
            const { data } = await this.supabase
                .from('usuarios')
                .select('rut')
                .eq('rut', rut);
            return !!(data && data.length > 0);
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

            if (filters.tipo)       query = query.eq('tipo', filters.tipo);
            if (filters.cuartelId)  query = query.eq('cuartel_id', filters.cuartelId);
            if (filters.fechaDesde) query = query.gte('fecha', filters.fechaDesde);
            if (filters.fechaHasta) query = query.lte('fecha', filters.fechaHasta);

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

    // ==================== STOCK ====================

    async getStock(userId) {
        try {
            const { data, error } = await this.supabase
                .from('stock_productos')
                .select('*')
                .eq('user_id', userId)
                .order('nombre');
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error obteniendo stock:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async upsertStock(producto) {
        try {
            const { data, error } = await this.supabase
                .from('stock_productos')
                .upsert([producto])
                .select();
            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error guardando stock:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteStock(id) {
        try {
            const { error } = await this.supabase
                .from('stock_productos')
                .delete()
                .eq('id', id);
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Error eliminando stock:', error);
            return { success: false, error: error.message };
        }
    }

    // ==================== MONITOREO ====================

    async getMonitoreo(userId) {
        try {
            const { data, error } = await this.supabase
                .from('monitoreo')
                .select('*')
                .eq('user_id', userId)
                .order('fecha', { ascending: false });
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error obteniendo monitoreo:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addMonitoreo(reg) {
        try {
            const { data, error } = await this.supabase
                .from('monitoreo')
                .insert([reg])
                .select();
            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error agregando monitoreo:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteMonitoreo(id) {
        try {
            const { error } = await this.supabase
                .from('monitoreo')
                .delete()
                .eq('id', id);
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Error eliminando monitoreo:', error);
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
            return { success: false, error: error.message };
        }
    }
}
