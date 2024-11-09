import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    {
      name: "Printed Casual Shirt",
      price: "$122",
      description: "Amazing casual printed shirt to look cool",
      imagePath: "assets/images/printed_casual_shirt.jpg" 
    },
    {
      name: "Semi-printed Shirt",
      price: "$144",
      description: "Semi-printed pattern shirt for casual",
      imagePath: "assets/images/semi_printed.jpg" 
    },
    {
      name: "Men Checked Slim Fit Shirt",
      price: "$127",
      description: "The most versatile men's shirts",
      imagePath: "assets/images/checked_slim_fit.jpg" 
    },
    {
      name: "Clean Optic Printed Shirt",
      price: "$172",
      description: "Made from 100% cotton fabric for maximum comfort & breathability",
      imagePath: "assets/images/clean_optic_printed.jpg" 
    },
    {
      name: "Tropical Print Spread-Collar Shirt",
      price: "$222",
      description: "We recommend you buy a size larger",
      imagePath: "assets/images/tropical_print_spread_collar_shirt.jpg" 
    }
  ];
}
