import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  newForm: FormGroup;
  public submitted = false;

  constructor(
  ) { }

  ngOnInit() {
    this.newForm = new FormGroup({
      new_pass: new FormControl('', [Validators.required]),
      c_pass: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required])
    });
    this.newForm.patchValue({
      // user_id: localStorage.getItem('user_id')
    });
  }
  get f() { return this.newForm.controls; }

}
