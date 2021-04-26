import { Injectable } from '@angular/core';
import { Pages } from '../../main-page/pages';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  pages: Pages = {
    'home': { title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.' },
    'about': { title: 'About', subtitle: 'About Us', content: 'Some content about us.' },
    'contact': { title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.' },
  };

  constructor() {
  }
}
