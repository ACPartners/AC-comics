import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCostOverviewComponent } from './character-cost-overview/character-cost-overview.component';
import { CharacterCostListComponent } from './character-cost-list/character-cost-list.component';
import { CoreModule } from '../../core/core.module';
import { CharacterCostInputComponent } from './character-cost-input/character-cost-input.component';
import { CharacterListDisplayComponent } from './character-list-display/character-list-display.component';
import { FiboPipe } from './fibo.pipe';

@NgModule({
  declarations: [CharacterCostOverviewComponent, CharacterCostListComponent, CharacterCostInputComponent, CharacterListDisplayComponent, FiboPipe],
  imports: [
    CommonModule,CoreModule
  ],
  exports:[]
})
export class FastModule { }
 