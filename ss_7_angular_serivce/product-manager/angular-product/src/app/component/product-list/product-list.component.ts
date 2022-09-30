import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductServiceService) {
    this.products = productService.getAll();
  }


  ngOnInit(): void {
  }


  delete(id: number) {
    this.productService.delete(id)
  }
}
