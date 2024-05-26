import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact = {
    nom: '',
    prenom: '',
    objet: '',
    email: '',
    message: ''
  }

  objets = ['Developpement Web','Devis photographie', 'Autre']

  public onSubmit(){
    console.log(this.contact);
    emailjs.sendForm('service_kzj8966', 'template_2hjt2xq', '#contactForm', 'hIADtIFIPJX6XCu4h')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  }

}
