import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [MaterialModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule,]
})
export class SharedModule { }
