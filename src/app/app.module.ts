import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './shared/table/table.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { TreeComponent } from './shared/tree/tree.component';
import { DragDropComponent } from './shared/drag-drop/drag-drop.component';
import { AddressFormComponent } from './shared/address-form/address-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MainComponent } from './layout/main/main.component';
import { ListadoAlumnosComponent } from './features/alumnos/listado-alumnos/listado-alumnos.component';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { BadgeListComponent } from './shared/components/badge-list/badge-list.component';
import { ContarHoyDirective } from './shared/directives/contar-hoy.directive';
import { DetalleAlumnoComponent } from './features/alumnos/detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from './features/alumnos/form-alumno/form-alumno.component';
import { GrillaComponent } from './shared/components/grilla/grilla.component';
import { AsideComponent } from './layout/aside/aside.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NombreApellidoPipe } from './shared/pipes/nombre-apellido.pipe';
import { EsTituloDirective } from './shared/directives/es-titulo.directive';
import { ConfirmDialogComponent } from './shared/components/Dialogs/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './modules/material/material.module';
import { FormularioAlumnoComponent } from './features/alumnos/formulario-alumno/formulario-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    AsideComponent,
    MainComponent,
    ListadoAlumnosComponent,
    GrillaComponent,
    ContarHoyDirective,
    AvatarComponent,
    BadgeListComponent,
    BadgeComponent,
    DetalleAlumnoComponent,
    FormAlumnoComponent,
    NavigationComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragDropComponent,
    AddressFormComponent,
    NombreApellidoPipe,
    EsTituloDirective,
    ConfirmDialogComponent,
    FormularioAlumnoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
