import { Component, OnInit } from '@angular/core';
import { Message } from './models/message';
import { Tenant } from './models/tenant';
import { AuthenticationService } from './services/authentication.service';
import { MessagesService } from './services/messages.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Profile', url: 'profile', icon: 'person' },
    { title: 'Injury', url: 'injuries', icon: 'medkit' },
    { title: 'Chat', url: 'chat', icon: 'chatbubbles' },
    { title: 'Status', url: 'status-tenants', icon: 'book' },
    { title: 'Summary', url: 'summary', icon: 'pie-chart' },
    { title: 'Login', url: 'authentication', icon: '' },
    { title: 'Logout', url: 'logout', icon: 'exit' },
  ];

  messages: Message[];
  public currentTenant: Tenant
  constructor(
    private authenticationService: AuthenticationService,
        private messageService: MessagesService,
    ) {

      // this.messageService.getMessages().subscribe(
      //   (result) => {
      //     this.googleNearby.publish('Hello')
      //     .then((res: any) => console.log(res))
      //     .catch((error: any) => console.error(error));
      //   },
      //   (error)=>{
      //     this.googleNearby.subscribe()
      //   }
      // )

    //If user cannot find the server
      //will start the nearby messages service
  }

  ngOnInit(){
    this.currentTenant = this.authenticationService.currentUserValue;
  }
}
