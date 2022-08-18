import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  sub: Subscription | undefined;
  product: IProduct | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.product = products.find((product: IProduct) => product.productId === id)
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
