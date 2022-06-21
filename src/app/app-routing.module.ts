import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponentComponent } from './usuario/busqueda-component/busqueda-component.component';
import { DetalleUsuarioComponent } from './usuario/detalle/detalle-usuario/detalle-usuario.component';

const routes: Routes = [

  {
    path: "",
    component: BusquedaComponentComponent
  },
  {
    path: "detalleUsuario",
    component: DetalleUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
