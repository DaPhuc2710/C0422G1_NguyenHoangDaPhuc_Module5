import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  categories: Category[];


  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: Router) {
    categoryService.getAll().subscribe(next =>{
      this.categories=next
    })

  }

  ngOnInit(): void {
  }


  posting() {
    this.productService.addProduct(this.productForm.value).subscribe(next => {
      this.route.navigateByUrl("")
    })
  }
}
