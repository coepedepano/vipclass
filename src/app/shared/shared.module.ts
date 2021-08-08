import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
      CommonModule,
      MatProgressBarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      FormsModule,
      MatInputModule,
      MatFormFieldModule,
 
  ],
  exports:[FileUploadComponent]
})
export class SharedModule { }
