# Pizza_Cout_App

A React application using the [create-react-app](https://create-react-app.dev) tool.

The application will create a list in which you can add:
- The name of the pizza
- Its size
- Price

Then, using the "calculate" button, it will count which pizza is the cheapest in the size-price ratio

![Image](https://github.com/PejperO/Pizza_Cout_App/assets/64231313/e61bf256-97a0-4495-be7e-618c756eb3e3)


##

The application implements two components for data structures:
- Object list component (storing it as its state and presenting its content)
- The component of a list item that ensures appropriate formatting of its attribute values using CSS.

At the list component level, controls have been introduced to enable adding a new item to the list. Validation components have also been created for a text field that will display a warning if the form assigned to it contains a text string shorter than 3 characters.

At the level of the list item component, a control for deleting a given item has also been introduced.

##

HOW TO START THE PROGRAM

1. Download react-scripts - You can do this using the command:
###
    npm install react-scripts --save

3. Run the program - You can do this using npm
###
    npm start
