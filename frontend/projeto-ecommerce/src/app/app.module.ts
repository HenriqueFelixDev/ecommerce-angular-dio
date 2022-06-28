import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { BooksModule } from './modules/books/books.module';
import { AppBarComponent } from './shared/components/appbar/appbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

registerLocaleData(localept, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'books', pathMatch: 'full' }
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    BooksModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
