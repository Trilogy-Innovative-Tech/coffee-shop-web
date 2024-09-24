import {Component, Input} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  myInput = "";

  @Input()
  displaySignIn = false;

  validate(ngModel: NgModel) {
    ngModel.control.markAsDirty(); /* make the control dirty when validate button
    is clicked */
    if (ngModel.invalid) {
      alert("Invalid");
    } else {
      alert("Valid");
    }
  }
}
