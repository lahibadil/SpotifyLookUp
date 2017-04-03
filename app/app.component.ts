import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<my-navbar></my-navbar>
  	<div class="main">
	  	<div class="container">
	  		<router-outlet></router-outlet>
	  	</div>
  	</div>
  `,
})
export class AppComponent  { name = 'Angular'; }
