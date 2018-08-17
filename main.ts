// Bootstrap your APP 
// you can bootstrap the application in various ways: server, client or precomlie

// on the client - processes our templates, bindings, and allows us to do dependency injection
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the AppModule that was created using NgModule from angular/core
import { AppModule } from './app/app.module';

// just call the function and tell it what Module too bootstrap 
platformBrowserDynamic().bootstrapModule(AppModule);
