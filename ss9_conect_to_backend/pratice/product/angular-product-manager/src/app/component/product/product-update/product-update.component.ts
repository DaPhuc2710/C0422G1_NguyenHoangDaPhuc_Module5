import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../../model/category";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";

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

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private  router: Router, private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paraMap) => {
      this.id = +paraMap.get('id')

    })
  }

  ngOnInit(): void {
    this.productService.findByIdProduct(this.id).subscribe(next => {
      this.updateProduct = next;
    }, error => {

    }, () => {
      this.categoryService.getAll().subscribe(next => {
        this.categories = next;
      }, error => {

      }, () => {
        this.showUpdateForm();
      })
    })
  }

  showUpdateForm() {
    this.newUpdateProduct = new FormGroup({
      id: new FormControl(this.updateProduct.id),
      name: new FormControl(this.updateProduct.name),
      price: new FormControl(this.updateProduct.price),
      description: new FormControl(this.updateProduct.description),
      category: new FormControl(this.updateProduct.category),
    })
  }

  update() {
    let id = +this.newUpdateProduct.value.category;
    this.categoryService.findById(id).subscribe(n => {
      this.newUpdateProduct.value.category = n;
    }, error => {

    }, () => {
      this.productService.updateProduct(this.id, this.newUpdateProduct.value).subscribe(next => {
      }, error => {

      }, () => {
        this.router.navigateByUrl('');
      });
    });
  }
}
