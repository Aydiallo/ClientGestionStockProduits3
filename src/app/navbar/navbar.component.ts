import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSidebar: boolean;

   @Output()
   showSidebarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  afficherSidebar() {
    this.showSidebar = !this.showSidebar;
    this.showSidebarChange.emit(this.showSidebar) ;
  }
}
