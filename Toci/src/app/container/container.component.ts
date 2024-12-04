import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit{
  macchina: String[];
  constructor(){
    this.macchina = ["Ruspa", "Autocarro", "Gru"]
  }
  ngOnInit() {
    
  }
}
