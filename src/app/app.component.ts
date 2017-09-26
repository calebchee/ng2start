import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caleb Start';
  title2 = 'Get Title by Method';
  count : number=0;
  name: string='';

  getTitle(): string {
    return this.title2;
  }

  btnIncrease() : void {
      this.count=this.count+1;
  }
  btnDecrease() : void {
    this.count=this.count-1;
  }

}
