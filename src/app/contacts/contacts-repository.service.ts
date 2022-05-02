import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsRepositoryService {
  // private person: any;

  constructor(private http: HttpClient) {}

  private localHostNumber = 44377;
  private apiUri: string = `https://localhost:${this.localHostNumber}/api/person`;

  getAllContacts() {
    return this.http.get(this.apiUri);
  }

  saveNewContact(person: any) {
    return this.http.post(this.apiUri, person);
  }

  getPersonById(id: number) {
    return this.http.get(`${this.apiUri}/${id}`);
  }

  removePersonById(id: number) {
    return this.http.delete(`${this.apiUri}/${id}`);
  }
}
