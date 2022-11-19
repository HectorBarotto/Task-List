import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text : string ="";
  @Input() color : string = "";
  //se define una variable d evento -btnClick- para ser utilizada en el componente padre
  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  //emite el evento click hacia afuera
  onClick(){
    this.btnClick.emit();
  }
}
