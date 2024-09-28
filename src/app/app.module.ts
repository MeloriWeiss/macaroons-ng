import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {ProductService} from "./services/product.service";
import {AdvantageService} from "./services/advantage.service";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { CustomButtonDirective } from './directives/custom-button.directive';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { PhoneTransformPipe } from './pipes/phone-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AdvantageComponent,
    ProductComponent,
    CustomButtonDirective,
    CutTextPipe,
    PhoneTransformPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, AdvantageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
