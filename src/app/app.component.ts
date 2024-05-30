import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { InventoryService } from './data/services/api/inventory/inventory.service';
import { NgIf } from '@angular/common';
import { map } from 'rxjs/operators';

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
    DialogModule,
    ListboxModule,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'puntodeventa-fe';

  stores: any;
  products: any;
  inventoryAux!: any[];
  inventory!: any[];

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

  isModalOpen: boolean = false;

  selectedProducts = [];

  constructor(
    private productService: ProductService,
    private storesService: StoresService,
    private productIncomeService: ProductIncomeService,
    private productOutService: ProductOutService,
    private inventoryService: InventoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storesService.getStores().subscribe({
      next: (res) => {
        this.stores = res.data;
      },
    });
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data;
        console.log(this.products);

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

  async openInventoryModal() {
    await this.inventoryService.getInventory().subscribe({
      next: (res) => {

        this.inventoryAux = res.data;
        console.log("antes", this.inventoryAux);

        // this.inventory = this.inventoryAux.map((element:any) => element.producto).flat();
        // console.log(this.inventoryAux);
        // // this.inventoryAux.forEach((element:any) => {
        // //   this.inventory.
        // //   console.log(element.producto);

        //   // this.inventory.push(element.producto);
        // // });
        // console.log(this.inventory);


      },
    });
    this.isModalOpen = true;
  }
  closeInventoryModal() {
    this.isModalOpen = false;
  }

  deleteStorePoducts() {
    let productsToDelete: any[] = [];
    this.selectedProducts.forEach((element:any) => {
      productsToDelete.push(element.id_producto);
    });
    console.log(productsToDelete);

    this.inventoryService.deleteProductInventory(productsToDelete).subscribe({
      next: (res) => {
        console.log('OK');
      },
    });
    this.closeInventoryModal();
    console.log(this.selectedProducts);
    // this.router.navigateByUrl("/");
    window.location.reload();

  }
}
