import { Component, OnInit } from '@angular/core';
import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';

declare let window: any;
import * as Web3 from 'web3';

@Component({
  selector: 'app-stockproduct',
  templateUrl: './stockproduct.component.html',
  styleUrls: ['./stockproduct.component.scss']
})
export class StockproductComponent implements OnInit {
  public details=[];
  public pid: number;
  public pname: string;
  public pbrand: string;
  public quantity: number;
  public price: number;
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;

  constructor(private pro:Web3servicesService,private router:Router) { 
  }

  ngOnInit() {
    this.pro.getproductCount().then(product=>{
      product.forEach(element => {
        console.log(element);
        
        this.pro.ViewProduct(element).then(obj=>{
          console.log(obj);
          if(obj[1]!="")
          {
            obj[4]=obj[4]/100;
            this.details.push({"pid":obj[0],"pname":obj[1],"brand":obj[2],"quantity":obj[3],"price":obj[4],"dateVal":obj[5]});
          }
        })
        
      });
    })
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
                       //  alert('Address Change Detected Please Refresh Page');
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

