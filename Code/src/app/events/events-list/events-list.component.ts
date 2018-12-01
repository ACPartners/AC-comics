import { Component, OnInit} from '@angular/core';
 
import { ListScreen } from '../../shared/screens/list.screen';
@Component({
  selector: 'acp-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent extends ListScreen<any> implements OnInit  {
 
  constructor() {
    
    
    super();
  }

  ngOnInit() {
   
  }

}
