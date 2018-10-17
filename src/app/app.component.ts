import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Subscription} from 'rxjs';
import {error} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes = 0;
  counterSubscription: Subscription;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/auth']);
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        if (this.secondes <= 20) {
          this.secondes = value;
        } else {
          this.ngOnDestroy();
        }
      },
      (error1) => {
        console.log('Uh-oh, an eroor occured! :' + error1);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
