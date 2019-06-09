import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Detalle de producto';
  product: IProduct;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` ${id}`;
    this.product = { "Stock": { "Id": 3, "Cantidad": 10 }, "Id": 3, "Nombre": "MAMA MAMAMAM MA", "Codigo": "MMM", "Descripcion": null, "Talle": null, "Variante": null }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
