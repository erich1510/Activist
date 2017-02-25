import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActivistPage } from '../pages/activist/activist';
import { OrganizationsPage } from '../pages/organizations/organizations';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActivistPage,
    OrganizationsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActivistPage,
    OrganizationsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
