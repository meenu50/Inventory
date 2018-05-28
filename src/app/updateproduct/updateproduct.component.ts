import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

declare let window: any;
import * as Web3 from 'web3';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {
  public productid: number;
  public quantity : number;
  public price: number;
  public details=[];
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;

  constructor(public pro: Web3Service,private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.pro.getproductCount().then(product=>{
      product.forEach(element => {
        console.log(element);
        
        this.pro.ViewProduct(element).then(obj=>{
          console.log(obj);
          if(obj[3]==0 && obj[1]!="")
          {
            this.details.push({"pid":obj[0],"pname":obj[1],"brand":obj[2],"quantity":obj[3],"price":obj[4]});
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
  Product(){
    let meta=this;
    meta.spinner.show();
    meta.pro.update_product(this.productid,this.quantity,this.price).then(res=>{
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
  


