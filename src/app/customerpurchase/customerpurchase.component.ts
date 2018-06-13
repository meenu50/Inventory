import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup,FormControl} from '@angular/forms';

import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert';


declare let window: any;
import * as Web3 from 'web3';
@Component({
  selector: 'app-customerpurchase',
  templateUrl: './customerpurchase.component.html',
  styleUrls: ['./customerpurchase.component.scss']
})
export class CustomerpurchaseComponent implements OnInit {
  public productid;
  public quantity;
  public price;
  public details=[];
  public list=[];
  public a;
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;
  angForm: FormGroup;

  constructor(public pro: Web3servicesService,private router:Router,private spinner: NgxSpinnerService, private fb: FormBuilder) {
    this.createForm();
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
    this.pro.getCustomerCount().then(order=>{
      order.forEach(element => {
          this.pro.ViewCustomer(element).then(obj=>{
           if(obj[3]!="" && obj[2]==this.pro.account && obj[8]==1){
            // obj[6]=obj[6]/100;
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
                      // alert('Address Change Detected Please Refresh Page');
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
  
  onKey(e){
    this.pro.ViewProduct1(this.productid).then(res=>{
      this.price=(res[4]/100)*this.quantity;
      console.log(this.price);
    })
  }

  createForm() {
    this.angForm = this.fb.group({
        productid: ['', Validators.required ],
        quantity: ['', Validators.required ],
        price: ['', Validators.required ],
    });
  }

  check(){
    this.pro.ViewProduct(this.productid).then(res=>{
          if(res[0]== this.productid){
           
          }
          else{
            swal("Invalid Product id")
          }
          
    })
 }
 check1(){
  this.pro.ViewProduct(this.productid).then(res=>{
        if(res[0]== this.productid){
         
        }
        
  })
}
//  checkOut(){
//    this.pro.ViewProduct(this.productid).then(res=>{
//          if(res[0]== this.productid && res[4]!=0){
//            //swal("valid");
//          }
//          else{
//             swal("Invalid Product Id");
//          }
//    })
// }
quantitycheckOut(){
  this.pro.ViewProduct(this.productid).then(res=>{
        if( res[3]!=0){
         //s swal("valid");
        }
        else{
           swal("Out Of Stock");
        }
  })
}


  order(){
    let meta=this;
    meta.spinner.show();
    meta.pro.order(this.productid,this.quantity,this.price).then(res=>{
      if(res==0){
        this.spinner.hide();
        swal("operation rejected");
        this.productid="";
        this.quantity="";
        this.price="";
        window.location.reload();
    }
    else{ 
        meta.pro.hash(res).then(result=>{
          this.spinner.hide(); 
          swal(result); 
          this.productid="";
          this.quantity="";
          this.price="";
          window.location.reload();             
       })
    }
      
    })
  }
}

