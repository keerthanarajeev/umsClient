import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardService } from '../adminServices/guard.service';
import { ToastService } from '../adminServices/toast.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authStatus = inject(GuardService)
  const rout=inject(Router)
  const toast=inject(ToastService)

  if (authStatus.isLoggedIn()) {
    return true
  }

  else {
    toast.showError("Please login")
    rout.navigateByUrl('')
    return false
  }

};
