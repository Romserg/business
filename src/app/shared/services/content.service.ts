import { Injectable } from '@angular/core';
import { Pages } from '../../main-page/pages';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  pages: Pages = {
    'home': { title: 'Главная', subtitle: 'Подзаголовок', content: 'Какой-то контент.' },
    'about': { title: 'О нас', subtitle: 'Подзаголовок', content: 'Контент о нас.' },
    'contact': { title: 'Контанты', subtitle: 'Связаться с нами', content: 'Как с нами связаться.' },
  };

  constructor() {
  }
}
