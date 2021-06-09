import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.route';
import { ListAllComponent } from './list-all/list-all.component';
import { AddNewComponent } from './add-new/add-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyitensComponent } from './myitens/myitens.component';



@NgModule({
  declarations: [
    ProductComponent,
    ListAllComponent,
    AddNewComponent,
    MyitensComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ProductModule { }
