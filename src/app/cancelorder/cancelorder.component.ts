import { Component, OnInit } from '@angular/core';
import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert';



declare let window: any;
import * as Web3 from 'web3';

@Component({
  selector: 'app-cancelorder',
  templateUrl: './cancelorder.component.html',
  styleUrls: ['./cancelorder.component.scss']
})
export class CancelorderComponent implements OnInit {

  public list=[];
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;
  public hashresult;
  
  constructor(public pro: Web3servicesService,private router:Router,private spinner: NgxSpinnerService) { }
  
  ngOnInit() {
    this.pro.getCustomerCount().then(order=>{
      order.forEach(element => {
          this.pro.ViewCustomer(element).then(obj=>{
            var t=(parseInt((Date.now()/1000).toString()));
            let x=obj[9]+(3600);
           if(obj[3]!=""&& obj[8]==1 && obj[2]==this.pro.account && (t-obj[9].toNumber() <= 3600)){
              this.list.push({"oid":obj[0],"pid":obj[1],"cusid":obj[2],"pname":obj[3],"quantity":obj[5],"price":obj[6],"dateVal":obj[7]});
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
                        /// alert('Address Change Detected Please Refresh Page');
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

  cancel(a,b){
    let meta=this;
    this.spinner.show();
    this.pro.cancel(a,b).then(res=>{
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