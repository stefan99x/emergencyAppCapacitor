import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-nearby-messages',
  templateUrl: './nearby-messages.page.html',
  styleUrls: ['./nearby-messages.page.scss'],
})
export class NearbyMessagesPage implements OnInit {

  public messages: Message[];


  public messageForm: FormGroup;

  constructor(
    private messageService: MessagesService,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      message: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.messageService.getMessages().subscribe(
      (result) => { this.messages = result; console.log(this.messages); }
    )
  }

  sendMessage() {
    var message = new Message(this.messageForm.value);
    message.tenantName = 'QUEST';
    this.messageService.sendMessage(message).subscribe(
      () => {
        this.messageService.getMessages().subscribe(
          (result) => { this.messages = result; this.messageForm.reset(); }
        );
      }
    )
  }
}
