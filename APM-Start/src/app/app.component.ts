import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div><h1> {{ pageTitle }}</h1> 
      <pm-products></pm-products>    
    </div>`//Interpolation
})
export class AppComponent {
  pageTitle = 'Mi primer componente de angular';
  imageWidth: number = 50;
  imageMargin: number = 2;
  
}
