import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: IProduct[] = [
    {
      name: 'Wireless Headphones',
      description: 'Experience immersive sound without the hassle of wires.',
      price: 89.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Smartphone Stand',
      description:
        'Adjustable stand for your smartphone, perfect for video calls.',
      price: 19.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Bluetooth Speaker',
      description:
        'Portable speaker with powerful sound and long battery life.',
      price: 49.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Fitness Tracker',
      description: 'Track your fitness goals and monitor your health metrics.',
      price: 59.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Coffee Maker',
      description: 'Brew your perfect cup of coffee every morning.',
      price: 129.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Electric Toothbrush',
      description:
        'Achieve a brighter smile with advanced cleaning technology.',
      price: 39.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Backpack',
      description: 'Stylish and durable backpack for all your adventures.',
      price: 39.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'LED Desk Lamp',
      description:
        'Brighten your workspace with adjustable brightness and color.',
      price: 34.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Yoga Mat',
      description: 'Eco-friendly mat for a comfortable yoga experience.',
      price: 24.99,
      imageUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Water Bottle',
      description: 'Stay hydrated on the go with this durable water bottle.',
      price: 14.99,
      imageUrl: 'https://picsum.photos/200',
    },
  ];
}
