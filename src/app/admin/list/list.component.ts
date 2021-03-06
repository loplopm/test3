import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../products/models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../../products/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  

  p: number = 1;
   

  public products:Observable<IProduct[]> = null;
  constructor(
    private router: Router,
    private productService:ProductService) { }

  ngOnInit() {
      this.products = this.productService.getAllProducts()
  }

  deleteProduct(product):void{
    const result = this.productService.deleteProduct(product);
    console.log(result);
  }

  viewProduct(product:IProduct):void{
    this.router.navigate(['admin/view/'+product.id]);
  }
}
