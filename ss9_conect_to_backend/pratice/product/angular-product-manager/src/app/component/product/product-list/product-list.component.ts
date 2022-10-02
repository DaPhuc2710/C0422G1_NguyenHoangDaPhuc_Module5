import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../model/product";
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) {

  }


  delete(id: number) {
    console.log(id)
    this.productService.deleteProduct(id).subscribe(next => {
      this.ngOnInit()
    })
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(next => {
      this.products = next;
    })
  }

}
