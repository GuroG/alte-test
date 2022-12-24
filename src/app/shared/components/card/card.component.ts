import {ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import {Product} from "../../product";
import {Router} from "@angular/router";

@Component({
  selector: 'ecm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit{
  @Input() product: Product = {} as Product
  constructor(private router: Router) {
  }
  ngOnInit() {
  }
}


