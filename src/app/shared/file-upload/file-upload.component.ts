import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent  {

  @Input()
  requiredFileType:string | undefined;
  @Input()
  iconFile: string | undefined;
  @Input()
  mensage: string | undefined;
  @Input()
    type?: string;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  fileName = '';
  uploadProgress:number | undefined;
  uploadSub: Subscription | undefined;
  croppedImage: any;
  previewCover: any;
  previewVideo: any;
  clearImage: boolean | undefined;
  urlVideo:any;
  preview: boolean = false;

  @ViewChild('fileInput') fileUpload?:  ElementRef;

  constructor() {}

  onFileSelected(event: any) {
    this.preview = true;
    if(this.type ==="image"){
      const file = event.target.files && event.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          this.croppedImage = (<FileReader>event.target).result;
          this.previewCover = true;     
          this.change.emit(this.croppedImage);
        }
      }
    }else{
        this.videoChangeEvent(event);
    }

  }
  videoChangeEvent(event: any): void {
    //this.videoName = event.currentTarget.files[0].name;

    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.urlVideo = (<FileReader>event.currentTarget).result;
        this.change.emit(this.urlVideo);
      }
    }
    this.previewVideo = true;
  }

  clearPreviewCover(){
   if(this.fileUpload)
      this.fileUpload.nativeElement.value = "";
    this.clearImage = true;
    this.previewCover = false;
    this.previewVideo = false;
    this.preview = false;
    this.croppedImage = "";
   }
cancelUpload() {
  this.uploadSub?.unsubscribe();
  this.reset();
}

reset() {
  this.uploadProgress = 0;
  this.uploadSub = undefined;
}

}
