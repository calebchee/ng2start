import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { QuoteComponent } from './quote/quote.component';
import { DetailsComponent } from './details/details.component';
import { LoggerService } from './services/logger.service';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { appRoutes } from './app.routes';
import { PlansComponent } from './plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    QuoteComponent,
    DetailsComponent,
    HomeComponent,
    ErrorComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
