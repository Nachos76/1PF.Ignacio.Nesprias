import { alumno } from './../../../models/alumno.model';
import { Component,  OnInit, ViewChild } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { ALUMNOS } from 'src/app/data/mock-alumnos';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormularioAlumnoComponent } from '../formulario-alumno/formulario-alumno.component';


@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss']
})

export class ListadoAlumnosComponent implements OnInit {

  titulo:string="Listado de Alumnos"
  alumnos:alumno[] = ALUMNOS//recupero el array de alumnos de la contante ALUMNOS que esta en mock-alumnos.ts
  //alumnos!:alumno[]
  //alumnos=ALUMNOS 
  seleccionado!:alumno
  //seleccionados: alumno[] = [];
  aeliminar?:number

  @ViewChild('DetalleModal', {static: false}) DetalleModal?: DetalleAlumnoComponent;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  seleccionarAlumno($event: any) {
    this.seleccionado = $event;
    //this.seleccionados.push($event); 
    console.log(this.seleccionado);

    this.DetalleModal?.toggleModal();
    this.DetalleModal!.alumno = $event;

  }
  actualizarAlumno($event: any) {
    this.seleccionado = $event;
    //this.seleccionados.push($event); 
    console.log(this.seleccionado);

    this.DetalleModal?.toggleModal();
    this.DetalleModal!.alumno = $event;

  }
  eliminarAlumno($event: any) {
    
    this.aeliminar = $event;
    console.log(this.aeliminar);
    this.alumnos = this.alumnos.filter(item => item.id !== this.aeliminar);
    //this.seleccionados.push($event); 
  }

  agregarAlumno($event: any) { 
    if ($event) {
      const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    //dialogConfig.width='250px',

    
    dialogConfig.data = {
      title: 'Confirmar borrado',
      message: 'Esta seguro que desea eliminar el registro de ',
    };


    const confirmDialog = this.dialog.open(FormularioAlumnoComponent, dialogConfig);
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {

        console.log($event);
      }
    });
  }
  }
}