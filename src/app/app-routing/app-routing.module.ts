import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from '../app.component';
import { AdminComponent } from '../admin/admin.component';
import { CustomerComponent } from '../customer/customer.component';
import { ProductComponent } from '../product/product.component';
import { UpdateproductComponent } from '../updateproduct/updateproduct.component';
import { StockproductComponent } from '../stockproduct/stockproduct.component';
import { ViewcusOrderComponent } from '../viewcus-order/viewcus-order.component';
import { TransferownershipComponent } from '../transferownership/transferownership.component';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { CustomerpurchaseComponent } from '../customerpurchase/customerpurchase.component';
import { CancelorderComponent } from '../cancelorder/cancelorder.component';
import { MetamaskComponent } from '../metamask/metamask.component';
import { AuthguardGuard } from '../authguard.guard';
import { CustomerGuard } from '../cutomer-guard/customer.guard';
import { Web3servicesService } from '../services/web3services.service';


const routes: Routes = [
  { 
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
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
    path:"metamask",
    component:MetamaskComponent,
  }   
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
