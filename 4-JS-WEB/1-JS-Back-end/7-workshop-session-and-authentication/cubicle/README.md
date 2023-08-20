# Cube Manager Web Application 3.0

This is a web application for managing cubes, where users can create, view, and search for different cubes. The application is built using Express.js and Handlebars for rendering views.

## Table of Contents

- [Features](#features)
- [Additional Info](#additional-info)

## Features

- **Dynamic navigation bar:** displays different options depending on whether you are logged in or not.

**Pages accessible for both situations (if you are logged in or non-logged):**

- **Home Page:** displays available cubes. Gives you an option to search for a particular cube by name and difficulty level range.
- **About Page:** provides information about the site.

**Pages accessible if you are a non-logged user:**

- **Login Page:** provides a form where you can fill in your credentials and log in to the site if you have already registered.
- **Register Page:**  provides a form where you can make registration to the site with a username and password. There is an additional field for repeated password which assure that you know your password.

**Pages accessible for logged in user:**
- **Details Page:** provides a description for each cube **and other options if you are the creator of the cube**.
- **Add a cube Page:** provides a form to create a new cube.
- **Add Accessory Page:** provides a form to create a new accessory that can be attached to already existing cubes by their creators.
- **Logout page Page:** automatically log you out.

**Options accessible for logged in user who is the creator of a cube in Details Page:**
- **Attach Accessory Page:** displays available cube accessories to choose from for a particular cube, arranged in a collapsible menu.
- **Edit Page:** provides a form with fields filled with the information of the current cube which can be edited.
- **Delete Page:** provides a form with disabled fields filled with the information of the current cube to assure that you want to delete this exact cube.



- **Error Handling:** custom 404 page for "Page not found" errors.
- **Data Storage:** MongoDB with Mongoose.

## Additional Info

- The project uses cookies and json web token in it for authentication of every user.

## Disclaimer

This application does not have proper error handling yet. It's primarily intended as a lecture demonstration to showcase the proof of concept rather than a refined project.
