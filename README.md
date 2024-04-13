# Sit Pretty Dog Training App
### Elevator Pitch
Picture this: You have a few friends over and your dog meanders by. As your friends gush over how adorable it is, you secretly curse the fact that your dog doesn't know any cool tricks to impress them. Have you ever found youself in this kind of situation? Well, have I got an App idea for you! The Sit Pretty app has step by step instructions that make teaching your dog new tricks easy-peasy. In the app you can mark down which tricks your dog already knows and share them with the community. This is a must-have, easy-to-use app for any dog owner.

### Key Features
- Secure login
- Curated list of tricks preprogrammed into the app
- A list of tricks learned for each user that is editable
- Notifications when a user marks a trick as learned
- Step by Step instructions and pictures for each preprogrammed trick
- Links from each trick in the trick list to the trick instructions

### Design
![Mockup](20240117_211242.jpg)


### Required Technologies
- **HTML** - The Application will be structured using correct HTML. There are three HTML pages, one for login, one for possible tricks to learn, and one for tricks already learned.
- **CSS** - CSS will be used for the styling of the application and will allow it to look good on different screens. 
- **Javascript** - This will be used for the login, the display of tricks to learn, and for editing the list of tricks learned.
- **Service** - The backend server will be used for logging in, submitting tricks learned, and retrieving tricks learned.
- **React** - The application will use the react web framework.
- **Authentication** - A secure registration and login for each user that is stored in the database.
- **Web Socket Data** - When a user marks a trick as learned there is a notification for other users.
- **Database Data** - The list of tricks learned for each user is stored in the database.

### HTML Deliverable
The structure of the application has been built with HTML.

- **HTML Pages** - I created three HTML pages that represent the login page, the trick menu, and the checklist of mastered tricks. I plan to use dynamic pages in JavaScript to display the trick steps/information, so I only completely finished the sit html page, though there are html pages for each trick with their respective image as placeholders.
- **Links** - There are navigational links at the top of the three main pages to each of the other pages. The tricks in the trick menu each link to their respective trick page.
- **Text** - Each trick is described with textual steps.
- **Third Party Service Call** - The dog fact on the mastery page is the placeholder for calling a Third Party Service that returns dog facts. 
- **Images** - There are images for each of the trick HTML pages as well as the bullet points and checkboxes will be images in later updates. The yellow bone on the trick page will replace all of the bullet points on the page as well as the checkboxes on the mastery page. When clicked, the yellow bones on the mastery page should turn into the broken green bone signifying that it is completed.
- **Login** - The input box and submit button on the home page are for logging in.
- **Database** - The mastery of tricks checkbox list will be pulled from the database (maintaining the information across the app).
- **WebSocket** - The notifications about other users learning tricks represent the interaction between users through the WebSocket.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

**Prerequisite:** Simon CSS deployed to your production environment COMPLETED
**Prerequisite:** A link to your GitHub startup repository prominently displayed on your application's home page COMPLETED
- **Prerequisite:** Notes in your startup Git repository README.md file COMPLETED
- **Header, footer, and main content body** - I used flex to make the sections lay out nicely.
- **Navigation elements** - Changed the design slightly with how my navbar looks, and redid the lines.
- **Responsive to window resizing** - The application still looks alright on different devices (ie pones, desktop, and tablets).
- **Application elements** - login and navbar are using bootstrap
- **Application text content** - Consistent fonts (sans-serif font)
- **Application images** - curved edges around list photos
**Note** - The Sit trick is still the template design for the rest of the tricks, I am still planning on using JavaScript dynamic pages so I only updated one of the pages (Sit) with CSS.

## JavaScript deliverable

I implemented JavaScript in my application so that it now functions for a single user, as well as inputting placeholders for future technologies.

- **login** - When the Login button is pressed the user is taken to the tricks page and the username is stored in local storage.
- **database** - The mastery list currently draws upon the local storage to display the tricks the user has already mastered. It will later draw upon the database instead of the local storage to do so.
- **WebSocket** - I used the setInterval function to display a new trick a different user has learned every 5 seconds. WebSocket will replace this in the future.
- **application logic** - The mastery trick list functions as a checkbox with the bones changing from empty to yellow when clicked.

## Service deliverable

For this deliverable I added backend endpoints that receives votes and returns the voting totals.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - I didn't have time to implement this. 
- **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for voting.
- **Frontend calls service endpoints** - I did this using the fetch function.

## DB/Login deliverable

The 

- **MongoDB Atlas database created** - Check!
- **Stores data in MongoDB** - Check!
- **User registration** - Creates a new account in the database.
- **existing user** - Stores the votes under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their votes.
- **Restricts functionality** - You cannot vote until you have logged in. This is restricted on the frontend only. 

## React deliverable

I bundled my application through vite and reorganized it a little bit. I got confused about the rest, so this is all I am turning in for this deliverable.

- **Bundled and transpiled** - done!
- **Components** - I did not get this far
- **Router** - not present
- **Hooks** - not present

[Notes](notes.md)
