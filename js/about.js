// EVENT-LISTENERS

//--1---everytime you try to copy anything off of the page, eventlistener will activate a new window which tells u whatever u wanted it to.
const copyStuff=document.querySelector(`.container`);
copyStuff.addEventListener(`copy`, e=>{alert('MAKE YOUR OWN!...THI IS MINE!')});


//--2---everytime something is dragged, eventlistener will fire......
copyStuff.addEventListener(`dragend`, e=> {alert("C'mon man, we've been through this...CREATE YOURS!")});


//--3---everytime you open the webpage, the eventlistener should load a second window containing whatever u assigned the window to contain.
// window.addEventListener(`load`, e=>{alert("READY TO COUNT CALORIES!?!?")});


//--4---everytime we scroll, eventlistener will count number of times I was scrolled.
window.addEventListener(`scroll`, e =>{console.log(` I Was freaking scrolled!`)});

//--5--hover over h1 and h3 on fruit background.
const text=document.querySelector(`.top-content h3`);
text.addEventListener(`mouseover`, e => {text.style.color=`crimson`});
text.addEventListener(`mouseout`, e => {text.style.color=`black`});

const text2=document.querySelector(`.top-content h1`);
text2.addEventListener(`mouseover`, e => {text2.style.color=`orangered`});
text2.addEventListener(`mouseout`, e => {text2.style.color=`teal`});


//--6--everytime we double click the heading, the eventlistener should make the font family change to whatever we assigned it to.
const changeHeading=document.querySelector(`header h2`);
changeHeading.addEventListener(`dblclick`, e=>{changeHeading.style.fontFamily=`Oswald`, `sans-serif`});





class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      // this.tabElement;
      this.tabElement=tabElement;
  
      // Get the `data-tab` value from this.tabElement and store it here
      // this.tabData = ; 
      this.tabData =this.tabElement.dataset.tab ; 
      
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
      
      // <- Delete this comment block when you work on the if statement
      // Check to see if this.tabData is equal to 'all'
      if(this.tabData === 'all'){
        // If `all` is true, select all cards regardless of their data attribute values
        this.cards = document.querySelectorAll('.card');
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        this.cards =document.querySelectorAll(`.card[data-tab='${this.tabData}']`); 
      }
  
  
      //<- Delete this comment block when you work on the if statement
  
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      // this.cards = Array.from(this.cards).map();
      this.cards = Array.from(this.cards).map(e => new TabCard(e));
  
      // Add a click event that invokes this.selectTab
      // this.tabElement.addEventListener();
      this.tabElement.addEventListener('click', () => this.selectTab());
  
    }
  
    selectTab(){
  
      // Select all elements with the .tab class on them
      // const tabs = document.querySelectorAll();
      const tabs = document.querySelectorAll('.tab');
      
  
  
  
      // Iterate through the NodeList removing the .active-tab class from each element
      // tabs.forEach()
      tabs.forEach(e => e.classList.remove('active-tab'))
  
  
  
  
      // Select all of the elements with the .card class on them
      // const cards = ;
      const cards = document.querySelectorAll('.card');
  
  
      // Iterate through the NodeList setting the display style each one to 'none'
      // cards.forEach()
      cards.forEach(e => e.style.display = 'none');
      
  
  
      // Add a class of ".active-tab" to this.tabElement
      // this.tabElement;
      this.tabElement.classList.add('active-tab');
  
  
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      // this.cards.forEach(card => card.selectCard());
      this.cards.forEach(card => card.selectCard());
  
    }
  }
  
  class TabCard {
    constructor(cardElement){
      // Assign this.cardElement to the cardElement DOM reference
      // this.cardElement;
      this.cardElement= cardElement;
  
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
      // this.cardElement;
      this.cardElement.style.display = 'flex';
  
    }
  
  }
 
//   - Select all classes named ".tab" and assign that value to the tabs variable
  
//   - With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
  
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(e => new TabLink(e));