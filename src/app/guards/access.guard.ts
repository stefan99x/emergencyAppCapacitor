import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { retry } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Injectable({ providedIn: 'root' })

export class AccessGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const currentUser = this.authenticationService.currentUserValue;
        if(currentUser){
            return true;
        }

        this.router.navigate(['/authentication'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}