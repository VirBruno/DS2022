import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSidenav!:boolean
  events:string[]=[]
  openedSidenav=false;
  isLogged= true;
  
  @ViewChild('sidenav')sidenav!: SidenavComponent;
  constructor() { }

  ngOnInit(): void {
  }

  onOpenSidenav(){
    console.log(this.sidenav)
    this.openSidenav = true
  }

}
