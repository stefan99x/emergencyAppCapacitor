import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/models/summary';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  public summary: Summary;
  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
    this.summaryService.getSummary()
      .subscribe((result) => {
        this.summary = result;
        console.log(result);
      }
      )
  }

}
