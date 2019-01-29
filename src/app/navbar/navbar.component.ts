import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Route, Router } from '@angular/router';

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

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  afficherSidebar() {
    this.showSidebar = !this.showSidebar;
    this.showSidebarChange.emit(this.showSidebar) ;
  }

  logout() {
    this.appService.logout(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
