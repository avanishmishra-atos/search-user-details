import { Component, OnInit, Input } from '@angular/core';
import * as countries from 'i18n-iso-countries';

declare const require;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
  }

  getCountryName(code) {
    return countries.getName(code, 'en');
  }
}
