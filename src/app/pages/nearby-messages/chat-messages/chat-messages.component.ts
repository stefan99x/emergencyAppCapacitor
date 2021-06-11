import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})

export class ChatMessagesComponent implements OnInit {
  @Input('message') message: Message;
  constructor(private messageService: MessagesService) { }

  ngOnInit() { }

}
