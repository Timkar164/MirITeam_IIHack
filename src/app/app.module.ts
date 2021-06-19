import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { NewbiepageComponent } from './newbiepage/newbiepage.component';
import { StudyroomComponent } from './studyroom/studyroom.component';
import { ChatComponent } from './chat/chat.component';
import { CardComponent } from './card/card.component';
import { GingerbreadComponent } from './gingerbread/gingerbread.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SystemComponent } from './system/system.component';
import { IdeaComponent } from './idea/idea.component';
import { TodoComponent } from './todo/todo.component';
import { MycompanyComponent } from './mycompany/mycompany.component';
import { DocumentComponent } from './document/document.component';
import { ProfilleComponent } from './profille/profille.component';
import { KalendarComponent } from './kalendar/kalendar.component';
import { HttpClientModule} from '@angular/common/http';
import { AvatarComponent } from './avatar/avatar.component';
import { KontaktsComponent } from './kontakts/kontakts.component';
import {FormsModule} from "@angular/forms";
import { AppService} from './app.service';
import { YmapComponent } from './ymap/ymap.component';
import { NewsComponent } from './news/news.component';
import { ProjectsComponent } from './projects/projects.component';
import { MetricsComponent } from './metrics/metrics.component';
import { CommandmetrikComponent } from './commandmetrik/commandmetrik.component';
import { YourmetrikComponent } from './yourmetrik/yourmetrik.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    HeaderComponent,
    AuthComponent,
    NewbiepageComponent,
    StudyroomComponent,
    ChatComponent,
    CardComponent,
    GingerbreadComponent,
    FooterComponent,
    SystemComponent,
    IdeaComponent,
    TodoComponent,
    MycompanyComponent,
    DocumentComponent,
    ProfilleComponent,
    KalendarComponent,

    AvatarComponent,
    KontaktsComponent,
    YmapComponent,
    NewsComponent,
    ProjectsComponent,
    MetricsComponent,
    CommandmetrikComponent,
    YourmetrikComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
