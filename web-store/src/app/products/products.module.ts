import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailReactiveComponent } from './product-detail-reactive/product-detail-reactive.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ProductListComponent, ProductDetailComponent, ProductDetailReactiveComponent],
  exports: [ProductListComponent, ProductDetailComponent, ProductDetailReactiveComponent],
  providers: [ProductService]
})
export class ProductsModule {}