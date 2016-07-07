/**
 * Created by Rain on 2016/7/7.
 */
import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {AppComponent} from './app/app.component';

if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(AppComponent, []);