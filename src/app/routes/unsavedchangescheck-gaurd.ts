import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class UnsavedchangesGuardService implements CanDeactivate<CanComponentDeactivate> {
// canDeactivate gaurd to check if user tries to naviagate while adding or updating
  canDeactivate(
    component: CanComponentDeactivate,
      currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
          nextState ?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise < boolean > {
      console.log('CanDeactivateGuard.canDeactivate() invoked.');
      return component.canDeactivate();
    }
}
