import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  private _swalNotificationCorner: typeof Swal;
  constructor() {
    this._swalNotificationCorner = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      showCancelButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  }

  public showSuccessAdd(): void {
    this._swalNotificationCorner.fire({
      icon: 'success',
      title: 'Added succesfully please refres',
    });
  }

  public showSuccessEdit(): void {
    this._swalNotificationCorner.fire({
      icon: 'success',
      title: 'Edited succesfully',
    });
  }

  public showSuccessDelete(): void {
    this._swalNotificationCorner.fire({
      icon: 'success',
      title: 'Deleted succesfully',
    });
  }


  public showErrorNotification(): void {
    this._swalNotificationCorner.fire({
      icon: 'error',
      title: 'Error',
    });
  }

  public showConfirmation(modalTitle: string, modalText: string): any {
    return Swal.fire({
      title: modalTitle,
      text: modalText,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#028f1f',
      cancelButtonColor: 'e20000',
      confirmButtonText: 'Yes, delete it!',
    });
  }

  public waitForRequest() {
    return Swal.mixin({
      position: 'top-end',
      icon: 'warning',
      title: 'Waiting for response',
      showConfirmButton: false,
    });
  }

  public registerOk() {
    return Swal.mixin({
      icon: 'success',
      title: 'Register completed',
      text: 'Open the link from the mail, to activate the account.',
    });
  }

  public activationOk() {
    return Swal.mixin({
      icon: 'success',
      title: 'Activation completed',
      text: 'You can log into your accout.',
    });
  }
}
