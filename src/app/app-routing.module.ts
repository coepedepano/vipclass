import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './pages/connect/connect.component';
import { HomeComponent } from './pages/navigation/home/home.component';
import { NotFoundComponent } from './pages/navigation/not-found/not-found.component';
import { AddNewComponent } from './pages/product/add-new/add-new.component';
import { ProductComponent } from './pages/product/product.component';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   {
//     path: '', component: HomeComponent, children: [
//       { path: '', component: DefaultComponent },
//       { path: 'add-product', component: AddProductComponent },
//       { path: 'connect', component: ConnectComponent },
//     ],
//   },
// ];

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'connect', component: ConnectComponent },
  //{ path: 'product', component: AddNewComponent },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module')
      .then(m => m.ProductModule)
  },

   { path: 'not-found', component: NotFoundComponent },
   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
