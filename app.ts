/**
 * Basic Angular 2 app
 */

 import {
 	NgModule,	
 	Component
 } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

 @Component({
 	selector: 'hello-world',
 	template: `
 	<ul>
 		<li *ngFor="let name of names">Hello {{ name}} </li>
 	</ul>
 	`
 })
class HelloWorld {	
	name: string;

	constructor() {
		this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
	}
}

 @NgModule({
 	declarations: [ HelloWorld ],
 	imports: [ BrowserModule ],
 	bootstrap: [ HelloWorld ],
 })
 class HelloWorldAppModule {}

 platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);