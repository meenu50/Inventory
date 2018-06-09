import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AlertsModule } from 'angular-alert-module';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewcusOrderComponent } from './viewcus-order/viewcus-order.component';
import { StockproductComponent } from './stockproduct/stockproduct.component';
import { TransferownershipComponent } from './transferownership/transferownership.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import{ Web3Service} from './services/web3services.service';
import { CustomerComponent } from './customer/customer.component';
import { CustomerpurchaseComponent } from './customerpurchase/customerpurchase.component'
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { MetamaskComponent } from './metamask/metamask.component';
import { AdminComponent } from './admin/admin.component';
import { AuthguardGuard } from './authguard.guard';
import { CustomerGuard } from './cutomer-guard/customer.guard';
import {CheckadmincustomerComponent} from './checkadmincustomer/checkadmincustomer.component'
import { NgxSpinnerModule } from 'ngx-spinner';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateproductComponent,
    ViewcusOrderComponent,
    StockproductComponent,
    TransferownershipComponent,
    WithdrawComponent,
    CustomerComponent,
    CustomerpurchaseComponent,
    CancelorderComponent,
    MetamaskComponent,
    AdminComponent,
    CheckadmincustomerComponent
  
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    AlertsModule.forRoot(),
    NgxSpinnerModule,
    
 ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    Web3Service,
    AuthguardGuard,
    CustomerGuard
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
