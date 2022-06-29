import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { AsideComponent } from '../aside/aside.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @ViewChild('sidenav', {static: false}) sidenav?: AsideComponent;
  constructor() {}

  toggleSidenav(){
    console.log("seleccionado");
    this.sidenav?.toggle();

  }
}
