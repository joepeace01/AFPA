import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

   @Input() appareilName: string;
   @Input() appareilStatus: string;
   @Input() index: number;
   @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      console.log('name : ' + this.appareilName + '  statut : ' + this.appareilStatus + '  green');
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      console.log('name : ' + this.appareilName + '  statut : ' + this.appareilStatus + '  red');
      return 'red';
    }
  }
  getStatus() {
    return this.appareilStatus;
  }
  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
