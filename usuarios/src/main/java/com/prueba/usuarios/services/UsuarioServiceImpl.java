package com.prueba.usuarios.services;

import com.prueba.usuarios.dto.TipoDocumentoDto;
import com.prueba.usuarios.dto.UsuarioDto;
import com.prueba.usuarios.exceptions.ApiExceptionHandler;
import com.prueba.usuarios.exceptions.NotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements UsuarioService {


    @Override
    public UsuarioDto obtenerUsuario(String identificacion, String tipoDocumento) throws NotFoundException {


            if (identificacion.equals("23445322")) {
                return UsuarioDto.builder().primerNombre("Valeria")
                        .segundoNombre("")
                        .primerApellido("Estrada")
                        .segundoApellido("Lopez")
                        .telefono("33333333333")
                        .direccion("carrera 11 # 22-33")
                        .ciudadResidencia("ciudad gótica")
                        .build();
            }
            else {
                throw  new NotFoundException("Usuario no encontrado");
            }


    }

    @Override
    public TipoDocumentoDto[] consultarTipoDocumento() {
        return TipoDocumentoDto.values();
    }

}
