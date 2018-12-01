 
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component'; 
import { ComicHelper } from '../Helpers/comics'; 
import { CoreModule } from './core/core.module'; 
import { ComicsModule } from './comics/comics.module';
import { SharedModule } from './shared/shared.module';  
import { ResourcesModule } from './resources/resources.module';
import { CharactersModule } from './characters/characters.module';
import { EventsModule } from './events/events.module';
import { PerformanceModule } from './performance/performance.module';

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
    SharedModule,
    PerformanceModule
  ],
  providers: [ComicHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
