package com.prueba.usuarios.exceptions;

public class NotFoundException extends  Exception{

    public static final String MENSAJE="Usuario no encontrado";

    public NotFoundException() {
        super(MENSAJE);
    }

    public NotFoundException(String message) {
        super( message);
    }
}
