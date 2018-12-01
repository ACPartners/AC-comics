 
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component'; 
import { ComicHelper } from '../Helpers/comics'; 
import { CoreModule } from './core/core.module'; 
import { ComicsModule } from './comics/comics.module';
import { SharedModule } from './shared/shared.module';  
import { ResourcesModule } from './resources/resources.module';
import { CharactersModule } from './characters/characters.module';
import { EventsModule } from './events/events.module';

@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    CoreModule, 
    ComicsModule,
    ResourcesModule,
    CharactersModule,
    EventsModule,
    SharedModule
  ],
  providers: [ComicHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
