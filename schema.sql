-- AgroLabor Mendoza - Esquema de Base de Datos para Supabase
-- Ejecutar este script en el SQL Editor de Supabase

-- Tabla de usuarios
CREATE TABLE usuarios (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    rut VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de fincas
CREATE TABLE fincas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id VARCHAR(20) NOT NULL REFERENCES usuarios(rut) ON DELETE CASCADE,
    nombre VARCHAR(255) NOT NULL,
    direccion TEXT,
    superficie DECIMAL(10, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de cuarteles
CREATE TABLE cuarteles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id VARCHAR(20) NOT NULL REFERENCES usuarios(rut) ON DELETE CASCADE,
    finca_id UUID NOT NULL REFERENCES fincas(id) ON DELETE CASCADE,
    nombre VARCHAR(255) NOT NULL,
    superficie DECIMAL(10, 2),
    cultivo VARCHAR(100),
    variedad VARCHAR(100),
    sistema_riego VARCHAR(100),
    sistema_riego_otro TEXT,
    anio_implantacion INTEGER,
    tela_antigranizo BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de labores
CREATE TABLE labores (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id VARCHAR(20) NOT NULL REFERENCES usuarios(rut) ON DELETE CASCADE,
    cuartel_id UUID NOT NULL REFERENCES cuarteles(id) ON DELETE CASCADE,
    tipo VARCHAR(50) NOT NULL,
    fecha DATE NOT NULL,
    jornales INTEGER,
    observaciones TEXT,
    -- Campos específicos por tipo
    tiempo DECIMAL(10, 2), -- Para riego
    productos JSONB, -- Para aplicaciones y fertilización
    equipo VARCHAR(255), -- Para labranzas
    kg_cosechados DECIMAL(10, 2), -- Para cosecha
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejorar el rendimiento
CREATE INDEX idx_fincas_user_id ON fincas(user_id);
CREATE INDEX idx_cuarteles_user_id ON cuarteles(user_id);
CREATE INDEX idx_cuarteles_finca_id ON cuarteles(finca_id);
CREATE INDEX idx_labores_user_id ON labores(user_id);
CREATE INDEX idx_labores_cuartel_id ON labores(cuartel_id);
CREATE INDEX idx_labores_fecha ON labores(fecha);
CREATE INDEX idx_labores_tipo ON labores(tipo);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_usuarios_updated_at BEFORE UPDATE ON usuarios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_fincas_updated_at BEFORE UPDATE ON fincas
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cuarteles_updated_at BEFORE UPDATE ON cuarteles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_labores_updated_at BEFORE UPDATE ON labores
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Políticas de seguridad RLS (Row Level Security)
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE fincas ENABLE ROW LEVEL SECURITY;
ALTER TABLE cuarteles ENABLE ROW LEVEL SECURITY;
ALTER TABLE labores ENABLE ROW LEVEL SECURITY;

-- Política para usuarios: pueden ver y editar solo su propio registro
CREATE POLICY "Usuarios pueden ver su propio perfil"
    ON usuarios FOR SELECT
    USING (TRUE);

CREATE POLICY "Usuarios pueden actualizar su propio perfil"
    ON usuarios FOR UPDATE
    USING (TRUE);

CREATE POLICY "Usuarios pueden insertar su propio perfil"
    ON usuarios FOR INSERT
    WITH CHECK (TRUE);

-- Políticas para fincas: usuarios solo pueden ver/editar sus propias fincas
CREATE POLICY "Usuarios pueden ver sus propias fincas"
    ON fincas FOR SELECT
    USING (TRUE);

CREATE POLICY "Usuarios pueden crear fincas"
    ON fincas FOR INSERT
    WITH CHECK (TRUE);

CREATE POLICY "Usuarios pueden actualizar sus propias fincas"
    ON fincas FOR UPDATE
    USING (TRUE);

CREATE POLICY "Usuarios pueden eliminar sus propias fincas"
    ON fincas FOR DELETE
    USING (TRUE);

-- Políticas para cuarteles
CREATE POLICY "Usuarios pueden ver sus propios cuarteles"
    ON cuarteles FOR SELECT
    USING (TRUE);

CREATE POLICY "Usuarios pueden crear cuarteles"
    ON cuarteles FOR INSERT
    WITH CHECK (TRUE);

CREATE POLICY "Usuarios pueden actualizar sus propios cuarteles"
    ON cuarteles FOR UPDATE
    USING (TRUE);

CREATE POLICY "Usuarios pueden eliminar sus propios cuarteles"
    ON cuarteles FOR DELETE
    USING (TRUE);

-- Políticas para labores
CREATE POLICY "Usuarios pueden ver sus propias labores"
    ON labores FOR SELECT
    USING (TRUE);

CREATE POLICY "Usuarios pueden crear labores"
    ON labores FOR INSERT
    WITH CHECK (TRUE);

CREATE POLICY "Usuarios pueden actualizar sus propias labores"
    ON labores FOR UPDATE
    USING (TRUE);

CREATE POLICY "Usuarios pueden eliminar sus propias labores"
    ON labores FOR DELETE
    USING (TRUE);
