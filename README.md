This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run the project

In the project directory, run the following commands:
### `1. npm install`
### `2. npm start`

## Custom dropdown functionality

#### Description
* It displays several given items in a dropdown
* It allows the user to select a certain item in the dropdown
* It provides a callback with the selected value, so the user can have access to the selected item

#### Mandatory props
* items - an array with objects of type {id: number, text: string}
* onSelect - a callback which receives a value:string representing the selected item's text value
