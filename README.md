# Star Wars Quiz. Do you know your Jedi?

[Link to live site](https://george-downer40.github.io/star-wars-quiz/)

[Link to my Github](https://github.com/george-downer40)

I chose to create a JavaScript quiz for my second Milestone project. The quiz is based around Star Wars and is intended to be a simple but enjoyable quiz that someone can play as an escape from their routine day, or if they want to challenge their knowledge of Star Wars. The questions are a mix of simple questions that could be answered by anyone with a passing knowledge of Star Wars and some more difficult questions to create a sense of challenge and encourage users to play again to improve their score.

![am i responsive](/assets/images/am-i-responsive.PNG "examples of quiz running on multiple devices")

## User Stories
* As a visiting casual pop culture or Star Wars fan I'd like to see how I do testing my knowledge.
* As someone looking for a distraction from their usual work or tasks I'd like to be both entertained and mentally stimulated.
* As a returning user I'd like to see new questions updated on the quiz to keep my interest.

## Features

* Opening Quiz Page
    * This provides a user with an extremely simple start function for the quiz that doesn't require any instructions and is intuitive for all visitors

![quiz start](/assets/images/quiz-opening-page.PNG "start button for quiz with enticing text")

* Quiz Game Page
    * This again is extremely intuitive and simple to use. The questions will highlight green if correct and red if incorrect, and will take you to a results page once all questions are answered.

![quiz running](/assets/images/quiz-results.PNG "quiz game running")

* Quiz Results Page
    * This feeds the user's final score into a results page and prompts them to try again if they would like to play again.

![quiz results](/assets/images/quiz-results.PNG "results from quiz")

## Colours & Typography

The colours chosen are both meant to provide high contrast throughout the quiz experience as well as evoke a sci-fi / Star Wars feel. The dark grey, off-white and blue of the answers are inspired by the colours used in the original Star Wars films and can be seen on old posters as well as newer film releases. The green and red chosen for correct and incorrect answers during the quiz have two goals. Firstly, green and red are almost universally associated with correct and incorrect statements and answers which makes using the quiz simple and intuitive. Secondly, the green and red, as well as the blue used during the actual quiz are meant to represent the classic colours of lightsabers from the Star Wars universe, tying them into the the quiz's subject matter of Jedi.

The fonts chosen for the quiz are Orbitron and Jura. Both of these fonts, in a similar manner to the colours chosen, evoke a sci-fi feel, tying the design of the quiz together.

## Future Features

* An ability to choose from a second set of questions that would focus on the Sith.
* A function to link the quiz to an online database of questions that would ensure users would very rarely see the same question twice, and creates more of an incentive to return to the site and play again.
* A results page that changes based on the user's score. This would show a more entertaining results page that would operate based on a range of scores, for example a score of 0-200 would show a new page, 300-800 another result page and so on.

## Testing
### Validator Testing

the site's code was validated using JShint for the JavaScript, W3C validator for the html, and Jigsaw validator for CSS.

The results from the JShint validation required some minor cleanup of the JavaScript code, predominantly inserting semi-colons where i missed them. No major errors were shown.

The results from the W3C validator came out with no errors.

![W3C validation](/assets/images/W3C-validation.PNG "W3C validation results")

The results from the Jigsaw validator also came back with no errors.

![jigsaw results](/assets/images/jigsaw-css-validation.PNG "jigsaw validation results")

### Lighthouse

The site was also tested through the Lighthouse feature in Google Chrome Developer Tools. Initially the SEO result came back low due to me forgetting to add a description and keywords meta tag, but this was easily resolved and when run again, the scores were 100 across the board.

![lighthouse results](/assets/images/lighthouse-validation.PNG "lighthouse results")

### Programs & Devices

The site was tested on a Windows desktop and laptop using the Google Chrome browser, and was also tested on a Samsung S8 Plus. Unfortunately, I was unable to test the site on any Mac or iOS devices as I do not have access to them.

### Responsiveness

The site performs well across multiple sized screens and has 4 media queries to accommodate as many different sized devices as possible. As well as testing on the devices I have access to, I used Google Developer Tools to test responsiveness on other screen sizes. There is some slight awkwardness with the answers moving slightly depending on the screen size and question length, but this is largely fixed with the use of the media queries.

### Bugs

I encountered a frustrating bug when applying css classes to some of my html elements that were tied into the JavaScript functions that show and hide elements as the user progresses through the quiz. I fixed this bug by including a div container under where i needed to apply classes to those elements that use the hidden function. The fix seems to work okay but I want to look into finding a more elegant solution that would keep the html code cleaner and shorter.

## Deployment

* Go to your github repo page
* select the correct repo for this site
* select setting on the repo page
* ensure branch main is selected
* Click save & wait for Github to publish and provide a link to the live site

## Credits

I used quite a few tutorials on YouTube in order to understand how to structure my quiz and also get an understanding of the logic and workflow. I have included links to those tutorials below:

* WebDevSimplified tutorial: [YouTube Video](https://www.youtube.com/watch?v=riDzcEQbX6k)

* Brian Design tutorial: [YouTube Video](https://www.youtube.com/watch?v=f4fB9Xg2JEY)

* Florin Pop tutorial: [YouTube Video](https://www.youtube.com/watch?v=dtKciwk_si4)

* James Q Quick series of tutorials: [YouTube Playlist](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

* Stack Overflow for the times when I couldn't understand for loops

* The projects shared by fellow students in Slack for inspiration

* My mentor Rohit for suggesting I use `window.onload` and providing documentation on how to use it with an event listener

### Media

No external media or images were used.