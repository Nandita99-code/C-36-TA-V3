class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  setElementsPosition() {
   

  }

  setElementsStyle() {
 
  }

 

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
  }

}
