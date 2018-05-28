import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Web3Service } from '../services/web3services.service';

@Injectable()
export class CustomerGuard implements CanActivate {
  constructor(private wcs:Web3Service,private router:Router){}
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
