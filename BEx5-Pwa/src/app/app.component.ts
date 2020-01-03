import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import{DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BEx5-Pwa Example';
  update: boolean = false;
  joke: any; 

  constructor( updates: SwUpdate, private data: DataService) {
	updates.available.subscribe(event => {
		this.update=true;
		setTimeout(()=>
      updates.activateUpdate().then(() => document.location.reload()),5000);
    });
  }
    
  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    })
  }
}
