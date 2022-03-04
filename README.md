# Bulls and Cows Game  

Bulls and Cows is an ancient logical game. The game logic is developed using JavaScript as part of Portfolio Project for Code Institute.  

[View deployed site here]()  


## Table of Contents  

* [User Experience (UX)](#User-Experience-(UX))  
* [Design](#Design)  
* [Features](#Features)  
* [Technologies](#technologies)  
* [Testing](#Testing)  
* [Deployment](#Deployment)  
* [Acknowledgements & Credit](#Acknowledgements-&-Credit)  


## User Experience (UX)  

### User Story  

User stories were created to help guide the design and implementation phases of the project and to ensure the needs of each stake holder are undestood.  

* New Player Goals  
   * As a new player:  
     * I want to understand the rules and how to play the game.  
     * I want the interface to be simple and easy to navigate.  

* Seasoned Player Goals  
   * As a player who has played this game before:  
     * I want to be able to directly start playing the game.  
     * I want to interface to be simple and clear as should be for a logical game.  


### Structure

The game interface consists of 2 pages.

* A landing page or the main game page having the main game area where user enters inputs and sees reults, a timer and winstreak. Also a tab to view the instructions.  
* An instructions page having the rules of the game with examples.  

### Future Advancements  

More difficulty levels and complexities can be added to the game play, challenging the player even more.   
More setting options and personilization for player can be added to the game.  


## Design

### Colour  

Considering this being a logical game, I have kept the colour scheme quite neutral. I have chosen shades of green to keep the website soothing on the eyes. I have chosen shades of green off different palettes that I think would go together.  
I have used https://coolors.co/ to generate the palette.  
  
![color palette](README-docs/)  

### Font  



### Wireframe  

I have used a basic microsoft word document to create a mock up for the game layout.  The mock up helped in designing the layout of the webpage and colour theme.  

![First page wireframe](README-docs/)  

## Features  

1. The name of the game is visible on both the pages and has a maintained style throughout.  
    * The name of the game is big and clearly visible.  
    * There is one clickable link for "HOW TO PLAY" page on the menu board.  
    * The main page also displayes the players wins and the timer for each round of the game.  

![website header](README-docs/)  

2. The main page contains the game area with which the player interacts.  
    * The hero imaage is chosen appropriate to the aquarium theme and covers all of the page.
    * There is a section which contains the computers generated number which is kept hidden.  
    * There is and input area where the player can input their guess.  
    * An "OK" button which triggers the user input and answer comparison and generates and displays the bulls and cows score.  
    * For each chance the user fails to guess the correct number, a new input field is added below.  
    * The player has the option of 'Quitting' the game or also selecting a 'New game'.  

![hero page body](README-docs/)  

3. The game play instructions page is a clickable link "HOW TO PLAY?"  
    * The style and colour scheme on this page is consistent with the main game play page.  
    * This page contains text for instructions on how to play the game.  
    * There are examples given for better understanding of the game.  
    * There is a link present to go back to the game page and start playing the game.  

![hero page body](README-docs/)  


## Technologies  

### Languages used  

* JavaScript  
* HTML5  
* CSS3  

### Frameworks, Libraries and Programs used

1. Google Fonts:  
    * Google fonts import statements were used as part of this project to make use of the fonts which are used on all pages of the website.  
2. Font Awesome:  
    * Font Awesome was used on all pages of the website to add social media icons.  
3. Gitpod:  
    * Gitpod IDE was used for writing and editing code and version control.  
4. GitHub:  
    * GitHub is used to store the projects code after being pushed from Git.  
5. Formatting:  
    * The css file was passed through https://beautifier.io/ for a consistent formatting throughout the code.  


## Testing  

Since the website is built with HTML and CSS and JavaScript, I have made use of the [W3C Markup Validation Service](https://validator.w3.org/) and [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator.html.en) to validate HTML and CSS syntax in this project.  
Both tests **Pass**  

### Lighthouse Testing  

### Test Cases

| ID | Test Name | Steps | Expected Outcome | Result |  
|----|-----------|-----|----------|----|  
| T01 | Navigation-Clickable | Click on the "HOW TO PLAY" | The link redirects to the correct page when clicked | Pass |  
| T02 | Navigation-Clickable | Click on the "click here to start playing" link | This shhould redirect back to the main game page | Pass |  
| T15 | UX- Responsiveness | Repeat all the above tests for desktops, tablets and smartphone sizes | Screen should re-size so that text remains visible and all the items on the screen should position appropriately | Pass |  

### Browser Testing  

The website was viewed on
* Google Chrome  
* Microsoft Edge  
* Mozilla Firefox  
* Safari  

### Smartphone, Tablet Testing  

The website was viewed on  
* Samsung Galaxy A70  
* Samsung Galaxy A7
* iPhone SE
* iPad Air 2020  

### Known Bugs  


## Deployment

### Github Pages

This project was developed using the Gitpod IDE and pushed to a Github repository with the use of Git version control.
The project was deployed to GitHub Pages using the following steps.  
1. Login to Github and open the Github Repository.  
2. Within the Repository click on "Settings" from the top menu.  
3. Go to the "Pages" section.  
4. Under the Sources click the dropdown displaying None and select the branch to be deployed ("Main").  
5. Click on the "Save" button.  
6. Deployed link is now generated at the top.  

The website can directly be viewed using this link now.  





