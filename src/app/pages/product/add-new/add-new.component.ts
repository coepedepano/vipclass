import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControlName, FormGroup, FormArray  } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent  implements OnInit {


  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  productForm!: FormGroup;
  // transform: ImageTransform = {};
  // imageURL: string;
  // imagemNome: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
      this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      categorieId: '',
      name: '',
      description: '',
      quantitie: ''
    });
}

  ngAfterViewInit(): void {
    //super.configurarValidacaoFormulario(this.formInputElements);
  }

  addProduct() {
    // if (this.produtoForm.dirty && this.produtoForm.valid) {
    //   this.produto = Object.assign({}, this.produto, this.produtoForm.value);

    //   this.produto.imagemUpload = this.croppedImage.split(',')[1];
    //   this.produto.imagem = this.imagemNome;
    //   this.produto.valor = CurrencyUtils.StringParaDecimal(this.produto.valor);

    //   this.produtoService.novoProduto(this.produto)
    //     .subscribe(
    //       sucesso => { this.processarSucesso(sucesso) },
    //       falha => { this.processarFalha(falha) }
    //     );

    //   this.mudancasNaoSalvas = false;
    // }
  }

  processSuccess(response: any) {
    // this.produtoForm.reset();
    // this.errors = [];

    // let toast = this.toastr.success('Produto cadastrado com sucesso!', 'Sucesso!');
    // if (toast) {
    //   toast.onHidden.subscribe(() => {
    //     this.router.navigate(['/produtos/listar-todos']);
    //   });
    // }
  }

  processError(fail: any) {
    // this.errors = fail.error.errors;
    // this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }

  fileChangeEvent(event: any): void {
    // this.imageChangedEvent = event;
    // this.imagemNome = event.currentTarget.files[0].name;
  }
  // imageCropped(event: ImageCroppedEvent) {
  //   this.croppedImage = event.base64;
  // }
  imageLoaded() {
    this.showCropper = true;
  }
  // cropperReady(sourceImageDimensions: Dimensions) {
  //   console.log('Cropper ready', sourceImageDimensions);
  // }
  loadImageFailed() {
   // this.errors.push('O formato do arquivo ' + this.imagemNome + ' não é aceito.');
  }
 
}
