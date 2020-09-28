import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: ``,
  styles: [`h1 { font-family: Lato; text-align: center; font-size: 300%;}`]
})
export class HelloComponent  {
  @Input() name: string;
}