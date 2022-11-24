import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Task List';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor( 
    private uiService: UiService,
    private router: Router) {
    this.subscription = 
      this.uiService.onToogle()
        .subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }
  //ésta función se ejecuta al hacer click en el btn del componente hijo
  toggleAddTask(){
    this.uiService.toogleAddTask();
  }
  hasRoute(route: String){
    return this.router.url === route;
  }
}
