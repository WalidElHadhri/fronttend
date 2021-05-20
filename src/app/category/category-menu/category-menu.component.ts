import { CategoryService } from './../../service/category.service';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { ICategory } from './../../model/category.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  categories: ICategory[] = [
     {id: '', code: '', name: 'All'},
    // {id: 'CATEGORY_2', code: 'CATEGORY_2', name: 'Category 2'},
    // {id: 'CATEGORY_3', code: 'CATEGORY_3', name: 'Category 3'}
  ];
  selectedCategoryId!: string;

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = this.categories.concat(categories);
    });
  }

  setCategory(id: string ): void{
    this.selectedCategoryId = id;
    this.router.navigateByUrl('/Home/' + this.selectedCategoryId);
  }

}
