import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  private menuItemsArray: any[] = [
    { "title": "Search", "link": "#" },
    { "title": "CMS Communications", "link": "#" },
    {
      "title": "Action Item", "link": "#",
      "subItems": [
        { "title": "Submitted to Business Owner", "link": "#" },
      ]
    },
    {
      "title": "Open Action Items", "link": "#",
      "subItems": [
        { "title": "By Business Owner", "link": "#" },
        { "title": "By Due Date", "link": "#" },
      ]
    },
    {
      "title": "Completed Action Items", "link": "#",
      "subItems": [
        { "title": "By Business Owner", "link": "#" },
        { "title": "By Completion Date", "link": "#" },
      ]
    },
    {
      "title": "FYI", "link": "#",
      "subItems": [
        { "title": "Submitted to Business Owner", "link": "#" },
      ]
    },
    { "title": "YTD Statistics", "link": "#" },
  ];

  public onMenuClose() {
    console.log("menu closed");
  }
  public onMenuOpen() {
    console.log("menu Opened");
  }
  private onItemSelect(item: any) {
    console.log(item);
  }
}
