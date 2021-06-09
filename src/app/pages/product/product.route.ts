import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { ListAllComponent } from './list-all/list-all.component';
import { MyitensComponent } from './myitens/myitens.component';
import { ProductComponent } from './product.component';


const productRouterConfig: Routes = [
    {
        path: '', component: ProductComponent,
        children: [
            { path: 'my-itens', component: MyitensComponent },
           // { path: 'list', component: ListAllComponent },
            {
                path: 'add-new', component: AddNewComponent,
                // canDeactivate: [ProdutoGuard],
                // canActivate: [ProdutoGuard],
                // data: [{ claim: { nome: 'Produto', valor: 'Adicionar' } }],
            },
            //{
               //path: 'editar/:id', component: EditarComponent,
                // canActivate: [ProdutoGuard],
                // data: [{ claim: { nome: 'Produto', valor: 'Atualizar' } }],
                // resolve: {
                //     produto: ProdutoResolve
                // }
           //},
           // {
               // path: 'detalhes/:id', component: DetalhesComponent,
                // resolve: {
                //     produto: ProdutoResolve
                // }
            //},
            //{
              //  path: 'excluir/:id', component: ExcluirComponent,
                // canActivate: [ProdutoGuard],
                // data: [{ claim: { nome: 'Produto', valor: 'Excluir' } }],
                // resolve: {
                //     produto: ProdutoResolve
                // }
            //},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
