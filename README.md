# Assessment Frontend

## Description
This is a real estate listing application that allows users to filter properties based on various criteria such as number of bedrooms, bathrooms, price, and favorites.

## Features
- **Property Listing:** Displays a list of available properties.
- **Property Filtering:** Users can filter properties based on number of bedrooms, bathrooms, parking spaces, price range, and favorites.
- **Property Details:** Users can view details of a specific property, including title, description, price, location, and number of bedrooms/bathrooms.
- **Contact Agent:** Users can contact the property's agent via a contact form.

## Components

### Header
The application header displays the message "Welcome to my Assessment!".

### Footer
The application footer displays the current year and the application name.

### ListingPage
The property listing page displays the list of available properties and provides filtering options for users.

### ListingItem
The listing item component displays details about a specific property, including title, location, number of bedrooms/bathrooms, and price. It also offers the option to view more details about the property.

### Filter
The filter component allows users to filter properties based on criteria such as number of bedrooms, bathrooms, parking spaces, price range, and favorites.

### ContactAgent
The agent contact form allows users to send messages to the agent responsible for the property.

## Utilities
- **LocalStorage:** Used to store user favorites.
- **Form Validation:** Used to validate user input data in the agent contact form.
- **filterListings:** Function to filter property listings based on user-defined criteria.
- **validateForm:** Function to validate form input data in the agent contact form.
- **formatDate:** Function to format date strings into a readable format.

## How to Run
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Access the application in your browser at `http://localhost:3000`.

## Technologies Used
- React
- Bootstrap
- React Router (optional, if used)

## Author
Vinicius Silveira Oratz

## Contribution
Contributions are welcome! Feel free to open a PR or an issue to report problems or suggest improvements.
