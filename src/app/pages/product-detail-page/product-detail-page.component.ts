import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  product: IProduct = {};
  private productId: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      if (this.productId?.length){
        this.getProductDetail();
      }else{
        //return back
      }
      });
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getProductDetail(){
    this.productService.getProductDetail(this.productId).subscribe(res => {
      this.product = res;
      console.log(this.product)
    });
  }

}
