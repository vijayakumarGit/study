import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {filterPipe} from "./pipe/filter";
import {PureFilterPipe} from "./pipe/purepire.pipe";
import {ImpurePipe} from "./pipe/impurepipe.pipe";
import {FormComponent} from "./create/forms.component";
import {TemplateDriven} from "./create/template-driven.component";
import {DataDriven} from "./create/data-driven.component";
import {LoginComponent} from "./loging/login";
import { TestFromComponent } from './create/test-from/test-from.component';
import {AuthServicePage} from "./create/httpService/withAuthService";
import {nonAuthService} from "./create/httpService/withoutAuthService";
import {apiService} from "./create/httpService/methodOfService";
import {authPageCompoent} from "./bundle/authPage";
import {filllocalStrogeValue} from "./service/localStorageValue";
import {FormatinService} from "./service/structService";
import {InputOutputCOmponent} from "./create/InputOutput.component"
import {InandOutChild} from "./create/Inputandoutput/InandOutChild.component";




const AppRoute:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'secure',component:authPageCompoent,children:[
    {path:'',redirectTo:'pipe',pathMatch:'full'},
    {path:'component',component:CreateComponent,outlet:'auth'},
    {path:'service',component:ServiceComponent,outlet:'auth'},
    {path:'directive',component:DirectiveComponent,outlet:'auth'},
    {path:'pipe',component:PipeComponent,outlet:'auth'},
    {path:'httpServ',component:HttpComponent,outlet:'auth'},
    {path:'dashboard',component:DashboradComponent,outlet:'auth'},
    {path:'routing',component:RoutingComponent,outlet:'auth'},
    {path:'form',component:FormComponent,outlet:'auth'},
    {path:'inout',component:InputOutputCOmponent,outlet:'auth'}
  ]},

  {path:'login',component:LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    authPageCompoent,
    TopbarComponent,
    SidebarComponent,
    DashboradComponent,
    CreateComponent,
    ServiceComponent,
    DirectiveComponent,
    PipeComponent,
    RoutingComponent,
    HttpComponent,
    categroyList,
    filterPipe,
    PureFilterPipe,
    ImpurePipe,
    FormComponent,
    TemplateDriven,
    DataDriven,
    LoginComponent,
    TestFromComponent,
    InputOutputCOmponent,
    InandOutChild,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [AuthServicePage,nonAuthService,apiService,filllocalStrogeValue,FormatinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
