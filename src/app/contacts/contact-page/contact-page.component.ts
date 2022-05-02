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
    firstName: [{ type: 'required', message: 'First name is required.' }],
    lastName: [{ type: 'required', message: 'Last name is required.' }],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
    ],
    contactMessasge: [
      { type: 'maxlength', message: 'Message must be 256 characters or less.' },
    ],
  };

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      Message: ['', Validators.maxLength(256)],
    });
  }

  onSubmitContactDetails(contactValue: any) {
    console.log(contactValue);
    this.contactsService.saveNewContact(contactValue).subscribe();
  }
}
