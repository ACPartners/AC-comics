import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlowModule } from './slow/slow.module';
import { PerformanceDataService } from './performanceData.service';
import { FastModule } from './fast/fast.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,SlowModule
  ],
  exports:[SlowModule,FastModule],
  providers:[PerformanceDataService]
})
export class PerformanceModule { }
