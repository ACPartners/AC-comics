import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCostOverviewComponent } from './character-cost-overview/character-cost-overview.component';
import { CharacterCostListComponent } from './character-cost-list/character-cost-list.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [CharacterCostOverviewComponent, CharacterCostListComponent],
  imports: [
    CommonModule,CoreModule
  ],
  exports:[]
})
export class SlowModule { }
 