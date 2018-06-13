import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { StockproductComponent } from './stockproduct/stockproduct.component';
import { ViewcusOrderComponent } from './viewcus-order/viewcus-order.component';
import { TransferownershipComponent } from './transferownership/transferownership.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CustomerpurchaseComponent } from './customerpurchase/customerpurchase.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { MetamaskComponent } from './metamask/metamask.component';
import { AuthguardGuard } from './authguard.guard';
import { CustomerGuard } from './cutomer-guard/customer.guard';
import { Web3servicesService } from './services/web3services.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    ProductComponent,
    UpdateproductComponent,
    StockproductComponent,
    ViewcusOrderComponent,
    TransferownershipComponent,
    WithdrawComponent,
    CustomerpurchaseComponent,
    CancelorderComponent,
    MetamaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthguardGuard,CustomerGuard,Web3servicesService],
  
 
  bootstrap: [AppComponent]
})
export class AppModule { }
