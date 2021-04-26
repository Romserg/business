import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Page } from './pages';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  page: Page | undefined;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];
  }

}
