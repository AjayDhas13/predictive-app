import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login';
import { AssetViewComponent, AssetListComponent } from './asset';
import { HeaderComponent, FooterComponent, SidebarComponent, BlankComponent } from './_shared';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
 import {MatButtonModule} from '@angular/material/button'; 
  import {MatInputModule} from '@angular/material/input'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssetViewComponent,
    AssetListComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
