import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ContactsRepositoryService } from '../contacts-repository.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  constructor(private contactsService: ContactsRepositoryService) {}

  // contactFormGroup: FormGroup;

  ngOnInit(): void {}

  saveNewContact(form: NgForm) {
    let contact = form.form.value;
    console.log(contact);
    // this.contactsService.saveNewContact(contact);
  }

  async onSubmit() {
    // this.failureMessage = '';
    // this.successMessage = '';
    // this.tempUser = {};

    // this.tempUser = await this.userService
    //   .returnUserByEmail(this.userFormGroup.value.email)
    //   .toPromise();

    // if (this.tempUser === null || this.tempUser === undefined) {
    //   this.makeNewUser = true;
    // } else {
    //   this.makeNewUser = false;
    // }

    // if (this.makeNewUser === true) {
    //   let user = this.userFormGroup.value;
    //   console.log('user being created:', user);
    //   this.userService.saveNewUser(user);
    //   this.successMessage =
    //     'Success! Thanks for joining the Sunny-Trails Community. Sign in above to continue.';
    // } else {
    //   console.log('triggered final else statement in onsubmit method');
    //   this.failureMessage =
    //     'Sorry, looks like there is already a user with that email. Try another to get started!';
    // }
    console.log("You've submitted the form.");
  }
}
