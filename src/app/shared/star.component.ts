import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarCompoent implements OnChanges {
    @Input() rating = 0;
    @Output() ratingClicked = new EventEmitter<string>();
    cropWidth = 74;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick() {
        this.ratingClicked.emit('The rating was clicked!')
    }
}