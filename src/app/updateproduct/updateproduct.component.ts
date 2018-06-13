import { Component, OnInit } from '@angular/core';
import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

declare let window: any;
import * as Web3 from 'web3';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {

  public productid;
  public quantity;
  public price;
  public details=[];
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;
  public id=[];
   angForm: FormGroup;

  constructor(public pro: Web3servicesService,private router:Router,private spinner: NgxSpinnerService,private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.pro.getproductCount().then(product=>{
      product.forEach(element => {
       // console.log(element);
        
        this.pro.ViewProduct(element).then(obj=>{
         // console.log(obj);
          if(obj[3]==0 && obj[1]!="")
          {
            obj[4]=obj[4]/100;
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
  createForm() {
    this.angForm = this.fb.group({
       productid: ['', Validators.required ],
       quantity: ['', Validators.required ],
       price: ['', Validators.required ]
    });
  }

  check(){
     this.pro.ViewProduct(this.productid).then(res=>{
           if(res[0]== this.productid){
            
           }
           
     })
  }
  checkOut(){
    this.pro.ViewProduct(this.productid).then(res=>{
          if(res[0]== this.productid){
            //swal("valid");
          }
          else{
             swal("Invalid Product Id ");
          }
    })
 }

  Product(){
    let meta=this;
    this.price=this.price*100;
    meta.spinner.show();
    meta.pro.update_product(this.productid,this.quantity,this.price).then(res=>{
      if(res==0){
        this.spinner.hide();
        swal("operation rejected");
        this.productid= "";
        this.quantity="";
        this.price="";
        // window.location.reload();
    }
    else{ 
        meta.pro.hash(res).then(result=>{
          this.spinner.hide(); 
          swal(result);
          this.productid= "";
          this.quantity="";
          this.price="";

          // window.location.reload();           
       })
    }   
     })
  }
}
  



