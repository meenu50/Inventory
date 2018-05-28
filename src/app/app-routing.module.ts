import { StockproductComponent } from './stockproduct/stockproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewcusOrderComponent } from './viewcus-order/viewcus-order.component';
import { TransferownershipComponent } from './transferownership/transferownership.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

import { MetamaskComponent } from './metamask/metamask.component';
import { CheckadmincustomerComponent } from './checkadmincustomer/checkadmincustomer.component';
import { AppComponent } from './app.component';
import { AuthguardGuard } from './authguard.guard';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerpurchaseComponent } from './customerpurchase/customerpurchase.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { CustomerGuard } from './cutomer-guard/customer.guard';





const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent
  },
 
  
{
  path:"metamask",
  component:MetamaskComponent
},

{
  path: 'customer',
  component: CustomerComponent,
  canActivate:[CustomerGuard],
  children:[
    {
      path: 'customerpurchase',
      component: CustomerpurchaseComponent
    },
    {
      path: 'cancelorder',
      component: CancelorderComponent
    },
  ]
},

  { 
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthguardGuard], 
     children:[
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'updateproduct',
        component: UpdateproductComponent
      },
      {
        path: 'viewcustomerorder',
        component: ViewcusOrderComponent
      },
      {
        path: 'stockproduct',
        component: StockproductComponent
      },
      {
        path: 'transferowner',
        component: TransferownershipComponent
      },
      {
        path: 'withdraw',
        component: WithdrawComponent
      },
    ]
  },


  { 
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }

];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
