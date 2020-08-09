import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'rating-component',
  styleUrl: 'rating-component.css',
  shadow: true,
})
export class RatingComponent {
  
  /* Componentes props */
  // Max number of starts
  @Prop() maxValue: number = 5;
  // number of start to paint as marked
  @Prop() value: number;
  /*                         */
  // Array of html objects
  @State() starList : Array<object> = [];
  
  componentWillLoad(){
    this.createStarList(this.maxValue);
  }
  /*
    This function draw the rating starts 
    depending of value insert to the component
  */
  createStarList(numOfStars: number){
    let starList = [];

    for(let i = 1;i <= numOfStars; i++){
      if(i<=this.value) {
        // Empty star with ascci code
        starList.push(<span>&#x2605;</span>)
      } else {
        // Full start
        starList.push(<span>&#x2606;</span>)
      }

      this.starList = starList;
    }
  }
  render() {
    return (
      <div>{this.starList}</div>
      // <Host>
      //   <slot></slot>
      // </Host>
    );
  }

}
