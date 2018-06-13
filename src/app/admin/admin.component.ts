import { Component, OnInit } from '@angular/core';
import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';
declare let window: any;
import * as Web3 from 'web3';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;
  public product;

  constructor(private wcs:Web3servicesService,private router:Router){
    
  }
 
  ngOnInit() 
    {
        let meta = this;
      //  meta.alltablework();
        meta.wcs.getUserBalance().then(balance => meta.balance = balance);
        meta.wcs.getAccount().then(acc => {
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
                         window.location.reload();
                        // meta.router.navigate(['admin']);
                     }
                 }
             } else {
                 meta.router.navigate(['metamask']);
             }
            }, 200);
         });
  
         meta.id2 = setInterval(function() {
          meta.wcs.getUserBalance().then(balance => this.balance = balance);
          meta.wcs.getAccount().then(account => this.balance = account);
        //  meta.alltablework();
      }, 20000);
      
      
    }
   
    ngOnDestroy() {
      if (this.id1) {
        clearInterval(this.id1);
      }
      if (this.id2) {
          clearInterval(this.id2);
        }
    }
}
