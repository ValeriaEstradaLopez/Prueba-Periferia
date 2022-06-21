import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { DetalleUsuarioComponent } from '../detalle/detalle-usuario/detalle-usuario.component';


@Component({
  selector: 'app-busqueda-component',
  templateUrl: './busqueda-component.component.html',
  styleUrls: ['./busqueda-component.component.css']
})
export class BusquedaComponentComponent implements OnInit {

  disable:boolean=true;
  listaTipoDocumento: any;
  usuario: any;
  firstFormGroup: FormGroup;
  errorMessage="";
  constructor(private service: ServicesService,
    private _formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.firstForm();
    this.getTipoDocumento();
  

  }
  firstForm(){
  this.firstFormGroup = this._formBuilder.group({
    /*  firstCtrl: ['', Validators.required], */
    numeroDocumento: ['', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(11),
      Validators.pattern('[0-9]*'),
  ])
  ],
  tipoDoc: ['', Validators.compose([
    Validators.required
])
]
  });
}

  getTipoDocumento() {
    this.service.getTipoDocumento().subscribe(data => {
      this.listaTipoDocumento = data;
    })
  }

  buscarUsuario() {
    let id=this.firstFormGroup.get('numeroDocumento').value;
    let documento=this.firstFormGroup.get('tipoDoc').value;
    this.service.setId(id);
    this.service.setTipoDoc(documento);
    this.router.navigate(['/detalleUsuario']);
  
 
  }
}
