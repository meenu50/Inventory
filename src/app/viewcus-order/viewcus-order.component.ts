import { Component, OnInit } from '@angular/core';

import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';

declare let window: any;
import * as Web3 from 'web3';


@Component({
  selector: 'app-viewcus-order',
  templateUrl: './viewcus-order.component.html',
  styleUrls: ['./viewcus-order.component.scss']
})
export class ViewcusOrderComponent implements OnInit {
  public details=[];
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;


  constructor(private web3Service:Web3servicesService,private router:Router) { }

  ngOnInit() {
     this.web3Service.getCustomerCount().then(order=>{
       order.forEach(element => {
           this.web3Service.ViewCustomer(element).then(obj=>{
             if(obj[8]==1){
               var a="ORDERED"
             }
             else{
               var a="CANCELLED"
             }
            if(obj[3]!=""){
              this.details.push({"oid":obj[0],"pid":obj[1],"cusid":obj[2],"pname":obj[3],"quantity":obj[5],"price":obj[6],"dateVal":obj[7],"status":a});
            }

          })         
       });
     })
     let meta = this;
      //  meta.alltablework();
        meta.web3Service.getUserBalance().then(balance => meta.balance = balance);
        meta.web3Service.getAccount().then(acc => {
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
                        // alert('Address Change Detected Please Refresh Page');
                       // window.location.reload();
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
        //  meta.alltablework();
      }, 20000);
  }

}

