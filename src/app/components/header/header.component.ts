import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Task List';
  constructor() { }

  ngOnInit(): void {
  }
  //ésta función se ejecuta al hacer click en el btn del componente hijo
  toggleAddTask(){
    console.log('toggleAddTask!');
  }
}
