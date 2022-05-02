import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from '../contacts/contact-page/contact-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ContactPageComponent],
})
export class ContactsModule {}
