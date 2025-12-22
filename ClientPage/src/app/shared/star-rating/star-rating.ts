import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRating {
@Input() rating: number = 0;
  @Input() starCount: number = 5;
  @Input() edit_rate: number = 0;
  @Output() ratingUpdated = new EventEmitter<number>();

  stars: number[] = [1, 2, 3, 4, 5]; // Initialize with a default range

  ngOnInit() {
    this.stars = Array(this.starCount).fill(0).map((_, i) => i + 1);
  }

  // Function to handle the click event and update the rating
  countStar(star: number) {
    if (this.edit_rate == 0) {
      this.rating = star;
      this.ratingUpdated.emit(this.rating);
    }
  }
}
