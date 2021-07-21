import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  person = {
    name: 'John Doe',
    adress: '33 Some Street, City/Region/Country',
    phoneNumber: '+1651651651651651',
    email: 'lorem@lorem.com',
    softTechnicalSkills: [
      ['Typing speed', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta obcaecati harum voluptate sed saepe et?'],
      ['Machine operation', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sequi nulla alias rerum omnis obcaecati molestias, explicabo pariatur?'],
      ['Computer programming', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolores vel optio?'],
      ['Communication', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, necessitatibus.'],
      ['Flexibility', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis repudiandae aspernatur, aperiam in dolorum consequuntur?'],
      ['Time management', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ducimus maiores?'],
      ['Problem solving abilities', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur excepturi omnis iusto eligendi porro, sapiente accusantium ab harum commodi debitis!'],
      ['Teamwork', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ullam explicabo mollitia reiciendis.'],
      ['Motivation', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem id perferendis velit.']
    ],
    experience: [
      {
        logoUrl: 'https://img-corp.com/images/logo@2x.png',
        companyName: 'Some Company',
        location: 'Lviv',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis officia aliquid dignissimos repellat molestiae. Odit, placeat aperiam pariatur veritatis officia cum, dolor eaque eum delectus consectetur obcaecati molestias corporis velit?'
      },
      {
        logoUrl: 'https://img-corp.com/images/logo@2x.png',
        companyName: 'Lorem Agency',
        location: 'Lviv',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis officia aliquid dignissimos repellat molestiae. Odit, placeat aperiam pariatur veritatis officia cum.'
      },
      {
        logoUrl: 'https://img-corp.com/images/logo@2x.png',
        companyName: 'Design Studio',
        location: 'Kiev',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis officia aliquid dignissimos repellat molestiae.'
      },
      {
        logoUrl: 'https://img-corp.com/images/logo@2x.png',
        companyName: 'High Tech',
        location: 'Odessa',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsa nam facilis enim quasi placeat, sed eveniet velit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsa nam facilis enim quasi placeat, sed eveniet velit?'
      },
      {
        logoUrl: 'https://img-corp.com/images/logo@2x.png',
        companyName: 'IT School',
        location: 'Lviv',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsa nam facilis enim quasi placeat, sed eveniet velit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      }
    ]
  };

  disabled = true;

  constructor() { }

  changeDisable(): void {
    this.disabled = !this.disabled;
  }
}
