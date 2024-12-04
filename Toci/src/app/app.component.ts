import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MacchinaComponent } from './macchina/macchina.component';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Toci';
}
