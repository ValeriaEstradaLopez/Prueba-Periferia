import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  userInfo: any;
 
  constructor(
    private service: ServicesService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.getInfoUsuario();
  }

  getInfoUsuario(){
    let id= this.service.getId();
    let tipoDoc= this.service.getTipoDoc();

    this.service.findUsuario(id,tipoDoc).subscribe(data=>{
      this.userInfo=data;
    },(error)=>{
      console.log(error);
      alert("No existe informacion del usuario");
      this.router.navigate(['/']);
    })

  }
}
