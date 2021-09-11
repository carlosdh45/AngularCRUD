import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';

const routes: Routes = [
  {
    path: 'listar-empleados',
    component: ListaEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
