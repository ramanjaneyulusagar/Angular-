import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageComponent } from './page/page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { MyInterceptor, I1, I2 } from 'src/interceptor';
import { DragComponent } from './drag/drag.component';
import { MarkdownModule } from 'ngx-markdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './recipe/header.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeslistComponent } from './recipe/recipes/recipeslist/recipeslist.component';
import { RecipedetailsComponent } from './recipe/recipes/recipedetails/recipedetails.component';
import { RecipeitemComponent } from './recipe/recipes/recipeslist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './recipe/shoppinglist/shoppinglist.component';
import { ShoppingitemComponent } from './recipe/shoppinglist/shoppingitem/shoppingitem.component';
import { EnvironmentComponent } from './environment/environment.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PageComponent,
    ToolbarComponent,
    DragComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeslistComponent,
    RecipedetailsComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppingitemComponent,
    EnvironmentComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule,
    FontAwesomeModule,
    ClarityModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I1,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I2,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
