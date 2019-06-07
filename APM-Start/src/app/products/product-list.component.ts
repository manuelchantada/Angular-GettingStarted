import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product_list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Lista de productos';
  showImages: boolean = false;
  _listFilter: string;

  constructor(private productService: ProductService) {

  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];

  toggleImage(): void { this.showImages = !this.showImages };

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  };

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
