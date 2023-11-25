# Car Star - Secondhand Vehicle Marketplace

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots/Demo](#screenshotsdemo)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Car Star is a React project that serves as a secondhand vehicle marketplace. It caters to both regular users and dealerships, offering a platform to buy and sell cars. Users can explore the catalog, search for specific vehicles, manage their offers, and more.

## Features

1. **User Registration:**

   - Different registration forms for regular users and dealerships.

2. **Offer Creation:**

   - Every logged-in user can create offers.

3. **User Roles:**

   - Two roles: Regular users and Dealerships.

4. **Offer Limitations:**

   - Regular users are limited to 5 offers.
   - Dealerships have no offer limitations.

5. **Offer Management:**

   - Creators of offers can edit or delete their offers.

6. **Watchlist Functionality:**

   - Users can add/remove offers to/from their watchlist.

7. **Search Functionality:**

   - Users can search for offers based on different criteria.

8. **User Profile:**

   - Every logged-in user has a "My Profile" page displaying their offers.

9. **Dealership Link:**

   - If the offer's creator is a dealership, an additional link in the "seller type" section leads to the dealership page.

10. **Dealership Page:**

    - Provides detailed information about the dealer.
    - Displays the dealer's available offers.
    - Includes a review section with star ratings and comments from regular users.

11. **Review Section Restrictions:**

    - Dealerships cannot review other dealerships.

12. **Details Page:**
    - Available in every car offer preview/card.
    - Leads to a page showing comprehensive information about the car offer.
    - Includes a button for:
      - Adding or removing the offer from the watchlist (for non-creators).
      - Editing and deleting the offer (for the owner).

## Pages

- **Catalog Page:**

  - Accessible for both logged-in and non-logged-in users.
  - Displays a comprehensive list of all available offers in the marketplace.
  - Each offer is presented with brief information, giving users a quick overview.
  - Users can click on an offer to access more detailed information on the Car Offer Details Page.

- **Car Offer Details Page:**

  - Accessible for logged-in users.
  - Shows complete information about a specific car offer.
  - Includes buttons for adding or removing the offer (if the user is not the creator).
  - Includes buttons for editing and deleting the offer (if the user is the creator).
  - If the user clicks the delete button, a confirmation box pops up to confirm the choice.
  - The edit button leads to the Edit page.

- **Login Page:**

  - Allows users to log in to their accounts (same for regular users and dealerships).
  - Accessible for non-logged-in users.
  - Required fields:
    - email
    - password

- **Register Page:**

  - Accessible for non-logged-in users.
  - Allows users to log in to their accounts (different for regular users and dealerships).
  - Provides two different forms for registration (default selected user form).

  **Regular User Registration Form**

  - Required fields:
    - first name
    - last name
    - email
    - password
    - confirm password

  **Dealership Registration Form**

  - Required fields:
    - dealership name
    - location
    - phone number
    - password
    - confirm password
    - working hours

- **My Offers Page:**

  - Accessible only for logged-in users.
  - Displays a user's created offers.

- **Edit Page:**

  - Accessible only to the creator of the offer.
  - Users can edit the details of their offers on this page.

- **Watchlist Page:**

  - Accessible only for logged-in users.
  - Users can view and manage their watchlist on this page.

- **Dealership Page:**

  - Accessible for logged-in users.
  - Offers comprehensive information about a dealership.
  - Includes details about the dealership, its available offers, and a **review section**.

    **Dealership Review Section:**

    - Displays existing reviews given by users.
    - Each review includes the first and last name of the user, given stars from 0-5, and their comment.

    **Give a Review Form (for non-dealership logged-in users):**

    - Allows non-dealership users to provide a review.
    - Fields include stars and comments.

## Tech Stack

- React with Vite
- HTML & CSS
- Vanilla JS and Node.js (provided server)

## Installation

TODO: Instructions on how to clone and set up the project locally.

## Usage

TODO: Instructions on how users can interact with the project.

## Screenshots/Demo

TODO: Add screenshots or a live demo of the project.

## Contributing

Currently, contributions to this project are not open. However, this may change in the future.

## License

This project is licensed under the [MIT License](LICENSE).
