import { Component, Input, OnInit } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent implements OnInit {
  @Input() name: string="";
  pezzi: string[];
  i: string="";
  constructor(){
    this.pezzi = ["bulloni", "viti", "ferro"]
  }
  ngOnInit() {}
}
