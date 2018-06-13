import { Component, OnInit } from '@angular/core';
import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';

declare let window: any;
import * as Web3 from 'web3';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;

  
  constructor(public pro: Web3servicesService,private router:Router) { }
  
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
                         //alert('Address Change Detected Please Refresh Page');
                        
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
}

