import { ProductService } from './services/product.service';
import { Component, ComponentRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public products$: Observable<Product[]> = this.productService.getProducts();
  public form: FormGroup = new FormGroup({
    searchInput: new FormControl('', [Validators.required])
  });

  @Input() viewComponentRef!: ComponentRef<SearchComponent>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  public onSelectSuggestion(e: string) {
    this.searchInput.setValue(e);
  }
  public onSubmit() {
    if (this.form.invalid) return;
    console.log(this.searchInputValue);
    this.searchInput.setValue('');
  }
  public onClose() {
    this.viewComponentRef.destroy();
  }

  public get visible() {
    return this.searchInput.value.length > 0;
  }
  public get searchInput() {
    return this.form.get('searchInput') as FormControl;
  }
  public get searchInputValue() {
    return this.searchInput.value;
  }
}
