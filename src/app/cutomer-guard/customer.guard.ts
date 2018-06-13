import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Web3servicesService } from '../services/web3services.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
  constructor(private wcs:Web3servicesService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.wcs.check_admin().then(admin => {
        console.log(admin);
         if (admin !=false){
          console.log("if part");
          this.router.navigate(['admin']);
          return false;
        } else {
          console.log("else part");
          
        //this.router.navigate(['admin']);
          return true;
        }
      });
  }
}

