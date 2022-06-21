package com.prueba.usuarios.controller;

import com.prueba.usuarios.dto.TipoDocumentoDto;
import com.prueba.usuarios.dto.UsuarioDto;
import com.prueba.usuarios.exceptions.ApiExceptionHandler;
import com.prueba.usuarios.exceptions.NotFoundException;
import com.prueba.usuarios.services.UsuarioService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api-prueba/usuario")
public class UserController {

    @Autowired
    private UsuarioService usuarioService;
    @GetMapping("/")
    public String index(){
        return "Bienvenido a la prueba";
    }

   @ApiOperation(value="Busca un usuario y devuelve su informacion",notes = "", nickname = "buscarUsuario")
   @ApiResponses(value = {

           @ApiResponse(code=200, message="Consulta realizada con exito", response = UsuarioDto.class),
           @ApiResponse(code=400, message="error haciendo la consulta"),
           @ApiResponse(code=404, message="Usuario no encontrado"),
           @ApiResponse(code=500, message="Error contactando el servicio")

   })
   @CrossOrigin(origins = "http://localhost:4200")
   @GetMapping(value = "/buscarUsuario", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UsuarioDto> buscarUsuario(@RequestParam String id, @RequestParam String tipoDocumento) throws NotFoundException {

        return new ResponseEntity<>(usuarioService.obtenerUsuario(id, tipoDocumento), HttpStatus.OK);

   }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/consultarTipoDocumento", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TipoDocumentoDto[]> consultarTipoDocumento(){
        return new ResponseEntity<>(usuarioService.consultarTipoDocumento(), HttpStatus.OK);
    }
}
