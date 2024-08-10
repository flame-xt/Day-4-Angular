import { Component } from '@angular/core';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { CorouselComponent } from '../../units/corousel/corousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CorouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
