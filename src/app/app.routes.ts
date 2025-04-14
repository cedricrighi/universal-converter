import type { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConverterComponent } from './converter/converter.component';
import { OriginalConverterComponent } from './original-converter/original-converter.component';
import { HumoristicConverterComponent } from './humoristic-converter/humoristic-converter.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'converter',
    component: ConverterComponent,
  },
  {
    path: 'original-converter',
    component: OriginalConverterComponent,
  },
  {
    path: 'humoristic-converter',
    component: HumoristicConverterComponent,
  },
];
