import { Component, OnInit,NgModule } from '@angular/core';

import { Web3Service } from '../services/web3services.service';
import { FormBuilder, Validators ,FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {NG_VALIDATORS} from '@angular/forms';

 

declare let window: any;
import * as Web3 from 'web3';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})




export class ProductComponent implements OnInit {
  
  public productname;
  public brand;
  public quantity;
  public amount;
  

  constructor(private web3Service:Web3Service,private router:Router,private spinner: NgxSpinnerService) {}
  
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;
  public hashvalue;
  public a;
  
  ngOnInit() {
  
    let meta = this;
      //  meta.alltablework();
        meta.web3Service.getUserBalance().then(balance => meta.balance = balance);
        meta.web3Service.getAccount().then(acc => {
            this.account = acc;
            console.log(this.account);
            meta.id1 = setInterval(function() {
             if (typeof window.web3 !== 'undefined') {
                 meta._web3 = new Web3(window.web3.currentProvider);
                 if (meta._web3.eth.accounts[0] !== meta.account) {
                     meta.account = meta._web3.eth.accounts[0];
                     if (meta._web3.eth.accounts[0] === undefined) {
                         meta.router.navigate(['metamask']);
                         clearInterval(this.interval);
                     } else {
                         alert('Address Change Detected Please Refresh Page');
                     }
                 }
             } else {
                 meta.router.navigate(['metamask']);
             }
            }, 200);
         });
  
         meta.id2 = setInterval(function() {
          meta.web3Service.getUserBalance().then(balance => this.balance = balance);
          meta.web3Service.getAccount().then(account => this.balance = account);
      }, 20000);
  }

  submit(){
      let meta=this;
     meta.spinner.show();
    
     meta.web3Service.Product(this.productname,this.brand,this.quantity,this.amount).then((res)=>{ 
        // console.log(res);
         if(res==0){
             this.spinner.hide();
             swal("operation rejected");
             window.location.reload();
         }
         else{ 
             meta.web3Service.hash(res).then(result=>{
               this.spinner.hide(); 
               swal(result);    
               window.location.reload();      
            })
         }
    });
  
  }
 
  
}


