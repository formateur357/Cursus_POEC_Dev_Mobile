import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  public firstName: FormControl;
  public lastName: FormControl;
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    //
    this.firstName = this.fb.control('', [Validators.required]);
    this.lastName = this.fb.control('NOM', [Validators.required]);
    this.userForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
}
