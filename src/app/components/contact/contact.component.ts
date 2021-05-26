import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { endpoint } from '../../mail-endpoint';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('container') container: ElementRef;

  public messageForm: FormGroup;

  constructor(private http: HttpClient, router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/contact') {
          let el = this.container.nativeElement;
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup(): void {
    this.messageForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }

  sendEmail() {
    const email = this.messageForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post(
        endpoint,
        {
          name: email.name,
          replyto: email.email,
          message: email.message,
        },
        { headers: headers }
      )
      .subscribe((response) => {
        console.log(response);
        this.clearForm();
      });
  }

  clearForm(): void {
    this.messageForm.reset();
  }
}
