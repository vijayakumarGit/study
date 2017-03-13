import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {TopbarComponent} from "./top-bar/topbar.component";
import {SidebarComponent} from "./side-bar/sidebar.component";
import {DashboradComponent} from "./dashborad/dashborad.component";
import { CreateComponent } from './create/create.component';
import { ServiceComponent } from './create/service.component';
import { DirectiveComponent } from './create/directive.component';
import { PipeComponent } from './create/pipe.component';
import { RoutingComponent } from './create/routing.component';
import { HttpComponent } from './create/http.component';
import {RouterModule, Routes} from "@angular/router";
import {categroyList} from './pipe/custome.pipe'


const AppRoute:Routes=[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'component',component:CreateComponent},
  {path:'service',component:ServiceComponent},
  {path:'directive',component:DirectiveComponent},
  {path:'pipe',component:PipeComponent},
  {path:'httpServ',component:HttpComponent},
  {path:'dashboard',component:DashboradComponent},
  {path:'routing',component:RoutingComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    DashboradComponent,
    CreateComponent,
    ServiceComponent,
    DirectiveComponent,
    PipeComponent,
    RoutingComponent,
    HttpComponent,
    categroyList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
