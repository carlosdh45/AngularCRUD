import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadoComponent,
    CrearEmpleadoComponent,
    ActualizarEmpleadoComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
