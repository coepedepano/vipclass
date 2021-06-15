import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControlName, FormGroup, FormArray  } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategorie } from 'src/app/model/categorie.model';
import { ICoin } from 'src/app/model/coin.model';
import { ProductService } from '../product.service';
 
import { FileValidator } from 'ngx-material-file-input';
import { ImageCroppedEvent, ImageTransform, Dimensions } from 'ngx-image-cropper';
import { IStartDate } from 'src/app/model/startingDates.model';
import { IExpirationDate } from 'src/app/model/expirationDates.model';



@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent  implements OnInit {
  categorieId = new FormControl('', Validators.required);
   coinId = new FormControl('', Validators.required);
   name = new FormControl('', Validators.required);
   description = new FormControl('', Validators.required);
   quantitie = new FormControl('', Validators.required);
   price = new FormControl('', Validators.required);
   startDate = new FormControl('');
   expirationDate = new FormControl('');
  

  categories: ICategorie[] | undefined;
  coins : ICoin[] | undefined;
  startDates: IStartDate[] | undefined;
  expirationDates : IExpirationDate[] | undefined;
  errors: any[] = [];
  imageChangedEvent: any = '';
  videoChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  productForm!: FormGroup;
  transform: ImageTransform = {};
  imageURL: string | undefined;
  imageName: string | undefined;
  videoName : string | undefined;
  timeAuction : boolean =false; 
  previewVideo : boolean =false;
  previewCover : boolean =false;
  videoImg: string | undefined;
  urlVideo : any;
  clearImage : boolean = false;

  readonly maxSize = 104857600;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    //private toastr: ToastrService
    ) { }

  ngOnInit(): void {
      this.createForm();
      this.listCategories();
      this.listCoins();
      this.listStartDates();
      this.listExpirationDates();
  }

  createForm() {
    this.productForm = this.fb.group({

      video: [
        undefined,
        [Validators.required]
      ],
      imagem: [
        undefined,
        [Validators.required]
      ],
      startDate : [
        undefined,
        [Validators.required]
      ],
      expirationDate:[
        undefined,
        [Validators.required]
      ],
    
    });
}

listCategories(){
  this.productService.getCategories()
  .subscribe(
    cat => this.categories = cat);
}

listCoins(){
  this.productService.getCoins()
  .subscribe(
    coin => this.coins = coin);
}
listStartDates(){
  this.productService.getStartDates()
  .subscribe(
    stDate => this.startDates = stDate);
}
listExpirationDates(){
  this.productService.getExpirationDates()
  .subscribe(
    expDate => this.expirationDates = expDate);
}

  ngAfterViewInit(): void {
   
  }

  addProduct() {
  
  }

  processSuccess(response: any) {
    // this.produtoForm.reset();
    // this.errors = [];

    
  }

  processError(fail: any) {
    // this.errors = fail.error.errors;
    // this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }

  videoChangeEvent(event: any): void {
    this.videoName = event.currentTarget.files[0].name;
  
    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.urlVideo = (<FileReader>event.currentTarget).result;
      }
    }
    this.previewVideo = true;
  }

  fileChangeEvent(event: any): void {
    // this.imageChangedEvent = event;
    // this.imageName = event.currentTarget.files[0].name;
    // this.showCropper = true;
    // this.clearImage = false;

    const file = event.target.files && event.target.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.croppedImage = (<FileReader>event.target).result;
      }
    }
    this.previewCover = true;
    
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage =    !this.clearImage ?  event.base64 : '';
    this.previewCover =  true;
    this.imageName = "";
  }
  imageLoaded() {
   //this.showCropper = true;
  }
  cropperReady(sourceImageDimensions: Dimensions) {
  
  }
  loadImageFailed() {
    this.errors.push('Format file ' + this.imageName + ' not acceptable.');
  }
  onChange(event: Event){
    this.timeAuction = String(event) === "fixed" ? false : true;
  }

  clearVideoPreview(){
   this.previewVideo =false;
   this.videoName = "";
   this.productForm.get('video')?.setValue('');
  }
  clearPreviewCover(){
    this.productForm.get('imagem')?.setValue(''); 
    this.clearImage = true;
    this.previewCover = false;
    this.croppedImage = "";
   }
}
