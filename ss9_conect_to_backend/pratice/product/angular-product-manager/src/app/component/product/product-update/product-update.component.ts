import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../model/product";
import {FormGroup} from "@angular/forms";
import {Category} from "../../../../model/category";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  updateProduct: Product;
  newUpdateProduct: FormGroup;
  categories: Category[];
  id: number;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, ) {
  }

  ngOnInit(): void {
  }

}
