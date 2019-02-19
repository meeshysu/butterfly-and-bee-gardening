## Butterfly & Bee Gardening 

This particular application is focused around finding the right butterfly and bee gardening plants the users specific needs. The primary user will be the gardener who needs help. I hope that horticulturist in the business of selling plants would also utilize this app, perhaps even with the primary user who is seeking the plant(s). When the user goes to the website, they will have a brief introduction to what butterfly and bee gardening is, along with how important it is to incorporate these plants into their yards. The user will be able to search the plants that I have added to the website initially. Then, they may create a garden. 

A garden? Yes. Say a user wants to have a garden specifically for Clouded Sulphur Butterflies. They can choose plants specific for those butterflies and add the plants they are interested in *into* that garden. It saves in their profile for later use. They can delete said plants, or continue to add more! And the gardens are limitless. Create a garden for every idea! Don't want it anymore? It can be deleted. Changed your title name? Edit it!

A user can search for the plant based off of size, sun requirements, color and name. Plants based on their needs will appear with a photo and a brief description. There will be options to then save the plant if they want, or they can start over and find another plant!

## Technologies Used 

- Webpack/Eslint
- React
- Reactstrap
- Axios
- CRUD
- Firebase
- Javascript
- SCSS/CSS
- HTML
- Gimp

## Screenshots

![home_page](/src/images/home.png)
![plants_page](/src/images/PlantPage1.PNG)
![plants_page2](/src/images/PlantsPage2.PNG)
![gardens_page](/src/images/GP1.PNG)
![gardens_page](/src/images/GP2.PNG)
![your_plants_page](/src/images/GPD2.PNG)
![add_plants_page](/src/images/AddPlant.png)

** Disclaimer: The background image of this website does NOT repeat as it does in the screenshots.

## Check it out: Live Demo

[Butterfly & Bee Gardening](https://butterfly-gardening.firebaseapp.com/)

## How to run this project

- Setup a Firebase account if you haven't already. If you have a gmail, you can just go to your Firebase console via your google username.
  + Create a firebase project.
  + Enable Google Authentication under 'Sign-In Method' in the Authentication tab.
  + Create a Firebase database and import the !base .json available in my GitHub repo.
  + Complete the import for Plants, myPlants and Gardens.
  + Go to Database in Firebase and click on the 'Rules' tab. Add the following rule:
```
   ".indexOn":"uid"
 },```
```
  + Clone the repository through your terminal. You will need to use 'SSH' for the clone link.
  + Change it to repository directory in your terminal.
  + At the root of the project `run npm install` to install necessary dependencies.
  + Create an apiKeys.js file (refer to apiKeys.js.example for an example). (Important!!! YOU MUST ADD YOUR API KEYS PATH TO THE .gitignore FILE! EVEN IF YOU ARE NOT PUSHING UP THIS PROJECT -- WHICH SHOULDN'T BE THE CASE AT ALL, IT IS MY PROJECT AFTER ALL -- IT'S BEST IN CASE OF AN ACCIDENT. SAFETY MEASURES FIRST! OPEN API KEYS ARE BAD!)
  + Type npm start in your coding program's terminal to run the project at http://localhost:3000.


