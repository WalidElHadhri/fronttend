import { ProductService } from './../../service/product.service';
import { IProduct } from 'src/app/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pageIndex = 1;
  products: IProduct[] = [
    // {
    //   id: 'Item-1',
    //   code: 'Item-1',
    //   name: 'Item One',
    //   price: 24.99,
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    //   review: 4.0
    // }
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('categoryId');
      if (id?.length){
        console.log('jjj', id, id?.length);
        this.getProductsByCategory(id);
      }else{
        console.log('jjj', id);
        this.getAll();
      }
      });

    // for (let index = 0; index < 7; index++) {
    //   this.products.push(this.products[0]);
    // }
   }

  ngOnInit(): void {
    // this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll(){
    this.productService.getAll({
      size: 6,
      page: this.pageIndex - 1
    }).subscribe(res => {
      this.products = res.content;
    });
  }

  // tslint:disable-next-line:typedef
  getProductsByCategory(id: string) {
    this.productService.getAllByCategory(id, {
      size: 6,
      page: this.pageIndex - 1
    }).subscribe(res => {
      this.products = res.content;
    });
  }

}
