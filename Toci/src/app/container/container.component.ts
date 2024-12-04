import { Component, Input, OnInit } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent{
  macchina: string[];
  constructor(){
    this.macchina = ["Ruspa", "Autocarro", "Gru"]
  }
  ngOnInit() {
    
  }
}
