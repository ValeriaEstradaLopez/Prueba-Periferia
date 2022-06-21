package com.prueba.usuarios.exceptions;

import lombok.Data;

@Data
public class ErrorMessage {

    private String exception;
    private String mensaje;
    private String ruta;

    public ErrorMessage(Exception exception, String ruta) {
        this(exception.getClass().getSimpleName(), exception.getMessage(), ruta);
    }

    public ErrorMessage(String exception, String mensaje,String ruta ) {
        this.exception = exception;
        this.mensaje= mensaje;
        this.ruta=ruta;
    }

    @Override
    public String toString(){
        return "ErrorMessage [exception=" + exception + ", mensaje=" + mensaje + ", ruta=" + ruta + "]";
    }

}
