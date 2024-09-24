import { Component } from '@angular/core';
import {NgModel} from "@angular/forms";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  name: string="";
  email: string="";
  contact: string="";
  address: string="";
  password: string="";

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
