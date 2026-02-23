import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    // ^[+]\d{12}$
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: [null, [Validators.pattern('^[+]\\d{12}$')]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }

  sendEmail(){
    console.log('Send email');
  }
}
