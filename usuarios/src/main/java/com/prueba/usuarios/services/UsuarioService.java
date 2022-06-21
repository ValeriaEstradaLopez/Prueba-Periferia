package com.prueba.usuarios.services;

import com.prueba.usuarios.dto.TipoDocumentoDto;
import com.prueba.usuarios.dto.UsuarioDto;
import com.prueba.usuarios.exceptions.ApiExceptionHandler;
import com.prueba.usuarios.exceptions.NotFoundException;

public interface UsuarioService {

    public UsuarioDto obtenerUsuario(String identificacion, String tipoDocumento) throws NotFoundException;

    public TipoDocumentoDto[] consultarTipoDocumento();
}
