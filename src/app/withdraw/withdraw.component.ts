import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';
import { Router } from '@angular/router';

declare let window: any;
import * as Web3 from 'web3';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
 
  public amount;
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;
  public bla;


  constructor(public pro: Web3Service,private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    let meta = this;
      //  meta.alltablework();
        meta.pro.getUserBalance().then(balance => meta.balance = balance);
        meta.pro.getAccount().then(acc => {
            this.account = acc;
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
          meta.pro.getUserBalance().then(balance => this.balance = balance);
          meta.pro.getAccount().then(account => this.balance = account);
        //  meta.alltablework();
      }, 20000);
  }
 check(e){
     if(this.amount<=this.balance){
         this.bla="Keep minmum balance 1";
     }
     else if(this.amount>=this.balance){
         this.bla="Your balance is to low"
     }
     else{
         this.bla="";
     }
 }
  
  Withdraw(){
      let meta=this;
      meta.spinner.show();
     console.log(this.balance);
      meta.pro.WithDraw(this.amount).then(res=>{
        if(res==0){
          this.spinner.hide();
          swal("operation rejected");
          window.location.reload();
      }
      else{ 
          meta.pro.hash(res).then(result=>{
            this.spinner.hide(); 
            swal(result);   
            window.location.reload();           
         })
      }
     })
  }
}