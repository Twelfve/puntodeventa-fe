import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './data/services/api/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { StoresService } from './data/services/api/stores/stores.service';
import { FormsModule } from '@angular/forms';
import { ProductIncomeService } from './data/services/api/productIncome/product-income.service';
import { ProductOutService } from './data/services/api/productOut/product-out.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'puntodeventa-fe';

  stores: any;
  products: any;

  productIncome = {
    id_producto: null,
    id_tienda: 1,
    fecha_ingreso: new Date(),
    cantidad_ingreso: null,
  };

  productOut = {
    id_producto: null,
    id_tienda: 1,
    fecha_salida: new Date(),
    cantidad_salida: null,
  };

  constructor(
    private productService: ProductService,
    private storesService: StoresService,
    private productIncomeService: ProductIncomeService,
    private productOutService: ProductOutService
  ) {}

  ngOnInit(): void {
    this.storesService.getStores().subscribe({
      next: (res) => {
        this.stores = res.data;
        console.log(this.stores);
      },
    });
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data;
      },
    });
  }

  sendProductIncomeData() {
    console.log(this.productIncome);
    this.productIncomeService.putProductIncome(this.productIncome).subscribe({
      next: (res) => {
        console.log('OK');
      },
    });
  }

  sendProductOutData() {
    this.productOutService.putProductOut(this.productOut).subscribe({
      next: (res) => {
        console.log('OK');
      },
    });
  }
}
