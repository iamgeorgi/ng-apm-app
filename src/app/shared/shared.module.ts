import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarCompoent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarCompoent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarCompoent
  ]
})
export class SharedModule { }
