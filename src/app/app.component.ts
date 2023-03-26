import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Bootstrap-Practice';

  color : string = "blue";

  changeColor()
  {
    this.color = "red";
  }

}
