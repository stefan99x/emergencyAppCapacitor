import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

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
    message.tenantName = this.authenticationService.currentUserValue.firstName + " " + this.authenticationService.currentUserValue.lastName;
    this.messageService.sendMessage(message).subscribe(
      () => {
        this.messageService.getMessages().subscribe(
          (result) => { this.messages = result; this.messageForm.reset(); }
        );
      }
    )
  }
}
