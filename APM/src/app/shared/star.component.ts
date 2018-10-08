import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor'; not the correct import for generics


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
   @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
        // 75 is the width of the stars in pixels, 5 is the number of stars
    }
}

