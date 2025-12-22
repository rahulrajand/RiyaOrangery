import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-first-page',
  standalone: false,
  templateUrl: './first-page.html',
    styleUrls: ['./first-page.scss'],
})
export class FirstPage implements OnInit {
    page = 4;
    page1 = 5;
    constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month; 
    }

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            const el = input_group[i] as HTMLElement;
            const child = el.children[0] as HTMLElement | undefined;
            if (!child) continue;
            child.addEventListener('focus', function (){
                el.classList.add('input-group-focus');
            });
            child.addEventListener('blur', function (){
                el.classList.remove('input-group-focus');
            });
        }
    }

}

