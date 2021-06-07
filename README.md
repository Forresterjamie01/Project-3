PluggedIn: Project 3, React Application

Overview
This project, is a new React-based User Search and Connect app. This application includes  React components, works with helper/util functions, and utilizes React lifecycle methods to query and displays users based on user searches. This app also uses Node, Express and mySQL so that users can save users to review or connect with later.



How it Works 


This application allows the user to signup, login and search for potential artists, freelancers and entrepreneur connections. 




Search - User can search for other users via the RandomUser API and render them here. User has the option to "View" a user or "Save" a user, saving it to the mySQL database.I used the randomuser api to get random user data for the user to simulate the user searching and connecting with other users. These mock connections simulate users who are in the database that have also signedup Previously with PluggedIn. Users are able to search by city, state and country. Users can also view personal info and see and image of all the users they search.




Saved - Renders all users saved to the mySQL database. User has an option to "View" the user.



User has each of the following fields:




title - Title of the book from the Google Books API


authors - The books's author(s) as returned from the Google Books API


description - The book's description as returned from the Google Books API


image - The Book's thumbnail image as returned from the Google Books API


link - The Book's information link as returned from the Google Books API


Creating documents in your books collection similar to the following:
{
  authors: ["Suzanne Collins"]
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  title: "The Hunger Games"
}



Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express.



The layout should include at least two React Components for each page Search and Saved.


Feel free to try out alternative CSS framework to Bootstrap.



Add the following Express routes for your app:



/api/books (get) - Should return all saved books as JSON.


/api/books (post) - Will be used to save a new book to the database.


/api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.


/google - will be used to make an api call to https://www.googleapis.com/books/v1/volumes?q=<Book Name> and return the relevant results.


* (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.


Deploy your application to Heroku once complete. You must use Create React App and current versions of React and React-Router-Dom for this assignment.




Reminder: Submission on BCS


This assignment must be deployed. * Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!



Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.


Create a README.md
Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:


About READMEs


Mastering Markdown




Add To Your Portfolio
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.


Hosting on Heroku
Now that we have a backend to our applications, we use Heroku for hosting. Please note that while Heroku is free, it will request credit card information if you have more than 5 applications at a time or are adding a database.
Please see Heroku’s Account Verification Information for more details.

Good Luck!