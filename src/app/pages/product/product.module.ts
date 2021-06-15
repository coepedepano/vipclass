import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.route';
import { ListAllComponent } from './list-all/list-all.component';
import { AddNewComponent } from './add-new/add-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyitensComponent } from './myitens/myitens.component';
import { ProductService } from './product.service';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatIconModule } from '@angular/material/icon';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

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
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    //NgxMatFileInputModule
    MaterialFileInputModule,
    MatIconModule,
    ImageCropperModule,
    MatButtonToggleModule
  ]
  ,
  providers: [
    ProductService,

  ]
})
export class ProductModule { }
