import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  departments=[
    {
      id:1,
      Title:"Aerospace",
      image:"../../../assets/aerospace.jpg",
      description:"Aerospace"
    },
    {
      id:2,
      Title:"Banking and finance",
      image:"../../../assets/banking.webp",
      description:"Banking and finance"
    },
    {
      id:3,
      Title:"Health care",
      image:"../../../assets/healthcare.jpg",
      description:"Healthcare"
    },
    {
      id:4,
      Title:"Insurance",
      image:"../../../assets/Insurance.jpg",
      description:"Insurance"
    },
    {
      id:5,
      Title:"Locomotive",
      image:"../../../assets/locomotive.jpg",
      description:"Locomotive"
    },
    {
      id:6,
      Title:"Industrial ",
      image:"../../../assets/industrial.webp",
      description:"Industrial"
    },
    {
      id:7,
      Title:"Mobility",
      image:"../../../assets/mobility.jpg",
      description:"Mobility"
    },
    {
      id:8,
      Title:"Cyber Security",
      image:"../../../assets/cyber.jpg",
      description:"Cyber Security"
    }
  ]

}
