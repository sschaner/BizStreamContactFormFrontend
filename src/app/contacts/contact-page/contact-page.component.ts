import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ContactsRepositoryService } from '../contacts-repository.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  constructor(
    private contactsService: ContactsRepositoryService,
    private formBuilder: FormBuilder
  ) {}

  contactForm!: FormGroup;

  validationMessages = {
    FirstName: [
      { type: 'required', message: 'First name is required.' },
      {
        type: 'maxlength',
        message: 'First name must be 100 characters or less.',
      },
    ],
    LastName: [
      { type: 'required', message: 'Last name is required.' },
      {
        type: 'maxlength',
        message: 'Last name must be 100 characters or less.',
      },
    ],
    Email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
    ],
    Message: [
      { type: 'required', message: 'Please enter a message.' },
      { type: 'maxlength', message: 'Message must be 250 characters or less.' },
    ],
  };

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      FirstName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
      LastName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
      Email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      Message: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(250)]),
      ],
    });
  }

  onSubmitContactDetails(contactValue: any) {
    this.contactsService.saveNewContact(contactValue).subscribe();
    this.createForm();
  }
}
