import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'search-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit, OnDestroy {
  @Input() public data!: Product[];
  @Input() public inputValue!: string;
  @Output() public inputValueChange: EventEmitter<string> = new EventEmitter<string>()

  public labelHandler: (prod: Product) => string = (prod: Product) => prod.name as string;

  constructor() { }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
  }

  public onSelectOption(option: string) {
    this.inputValue = option;
    this.inputValueChange.emit(this.inputValue);
  }

  public get products() {
    return this.data.filter((product: Product) => product.name.toLowerCase().startsWith(this.inputValue.toLowerCase()));
  }
}
