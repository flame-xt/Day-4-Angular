import { Component } from '@angular/core';
import { CardsComponent } from '../../units/cards/cards.component';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {

}
