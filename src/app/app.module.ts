import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasicsComponentsComponent } from './basics-components/basics-components.component';
import { BasicsDatabindingComponent } from './basics-databinding/basics-databinding.component';
import { BasicsDirectivesComponent } from './basics-directives/basics-directives.component';
import { BasicsDirectives1Component } from './basics-directives/basics-directives1/basics-directives1.component';
import { BasicDirectives2Component } from './basics-directives/basics-directives2/basics-directives2.component';
import { BasicDirectives3Component } from './basics-directives/basic-directives3/basic-directives3.component';
import { BasicsSolution3Component } from './basics-solution3/basics-solution3.component';
import { CmpDatabindingFinal } from './cmp-databinding-final/cmp-databinding-final.component';
import { CockpitComponent } from './cmp-databinding-final/cockpit/cockpit.component';
import { ServerElementComponent } from './cmp-databinding-final/server-element/server-element.component';
import { EvenComponent } from './cmp-databinding-assignment-solution/even/even.component';
import { GameControlComponent } from './cmp-databinding-assignment-solution/game-control/game-control.component';
import { OddComponent } from './cmp-databinding-assignment-solution/odd/odd.component';
import { CmpDatabindingSolution } from './cmp-databinding-assignment-solution/cmp-databinding-solution.component';
import { InputComponent } from './inputoutput/input.component';
import { Input2Component } from './inputoutput/input2/input2.component';
import { MoreDirectivesComponent } from './more-directives/more-directives.component';
import { DirectivesDirective } from './more-directives/directives.directive';
import { MoreDirectives1Component } from './more-directives1/more-directives1.component';
import { BasicHighlightDirective } from './more-directives1/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './more-directives1/better-highlight/better-highlight.directive';
import { AccountComponent } from './service-final/account/account.component';
import { NewAccountComponent } from './service-final/newaccount/newaccount.component';
import { AccountsService } from './service-final/accounts.service';
import { LoggingService } from './service-final/logging.service';
import { ServiceFinalComponent } from './service-final/service-final.component';
import { ActiveUsersComponent } from './service-solution/active-users/active-users';
import { InactiveUsersComponent } from './service-solution/inactive-users/inactive-users';
import { CounterService } from './service-solution/counter.service';
import { UserService } from './service-solution/users.service';
import { ServiceSolutionComponent } from './service-solution/service-solution.component';
import { HttpLoading } from './http-loading/http-loading.component';
import { HttpRequest } from './http-request/http-request.component';
import { TdFinal } from './forms-td-final/td-final.component';
import { ObservableFinal } from './observable-final/observable/observable-final.component';
import { UnlessDirective } from './more-directives1/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponentsComponent,
    BasicsDatabindingComponent,
    BasicsSolution3Component,
    BasicsDirectivesComponent,
    BasicsDirectives1Component,
    BasicDirectives2Component,
    BasicDirectives3Component,
    CmpDatabindingFinal,
    CockpitComponent,
    ServerElementComponent,
    EvenComponent,
    GameControlComponent,
    OddComponent,
    CmpDatabindingSolution,
    InputComponent,
    Input2Component,
    MoreDirectivesComponent,
    DirectivesDirective,
    MoreDirectives1Component,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ServiceFinalComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ServiceSolutionComponent,
    HttpLoading,
    HttpRequest,
    TdFinal,
    ObservableFinal,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [AccountsService, LoggingService, CounterService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
