
import { Component, Input, EventEmitter, Output } from "@angular/core";


enum COLORS {
  GREY = "#E0E0E0",
  GREEN = "#76FF03",
  YELLOW = "#FFCA28",
  RED = "#DD2C00"
}

@Component({
  selector: "rating",
  templateUrl: "rating.component.html"
})


export class RatingComponent {
  @Input() rating: number;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;


  constructor() { }

  

  rate(index: number) {
    this.rating=index;
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number) {
    /* function to return the color of a star based on what
     index it is. All stars greater than the index are assigned
     a grey color , while those equal or less than the rating are
     assigned a color depending on the rating. Using the following criteria:
  
          1-2 stars: red
          3 stars  : yellow
          4-5 stars: green 
    */
   if(this.isAboveRating(index)){
     return COLORS.GREY;
   }
   switch( this.rating){
     case 1:
     case 2:
       return COLORS.RED;
     case 3:
       return COLORS.YELLOW;
     case 4:
     case 5:
       return COLORS.GREEN;
     default:
       return COLORS.GREY
   }
  }

  isAboveRating(index:number): boolean{
    return index>this.rating
  }


}