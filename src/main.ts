import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { NavbarModule } from './app/navbar/navbar.module';
import { FooterModule } from './app/footer/footer.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NavbarModule)
  .catch(err => console.log(err));
