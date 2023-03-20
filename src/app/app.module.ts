import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateCommentDirective } from './template-comment.directive';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// .......

@NgModule({
  declarations: [
    AppComponent, TemplateCommentDirective ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),


    // Below is the new way of injecting all firebase modules
    // check out --> https://github.com/angular/angularfire/blob/master/samples/modular/src/app/app.module.ts

    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideAnalytics(() => getAnalytics()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage()),
    // .......


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
