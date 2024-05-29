import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './data/services/api/product/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'puntodeventa-fe';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((response) => {
    //   console.log(1);

    //   console.log(response);
    // });

    this.productService.getProducts().pipe().subscribe(
      {next:(res) => {
        console.log(1);
        console.log(res);
      }}
    );

  }

}
