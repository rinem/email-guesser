# Email Guesser

## Overview

The Email Guesser project is designed to derive email addresses based on a user's full name and company domain and existing data about the company users.

### Architecture

The project follows the **Model-View-Controller (MVC)** architecture:

- **Model:** Represents the data and business logic. In the backend, the model includes email derivation logic and format detection.
- **View:** Represents the user interface. In this project, the view is implemented using React components.
- **Controller:** Handles user input and updates the model. In the backend, the controller is responsible for processing requests and returning responses. In the frontend, it is handled by the React components that interact with the backend service.

### Methodology

1. **Frontend:** Implemented as a React SPA that provides a user interface to input the full name and company domain. It displays the derived email or an error message.
2. **Backend:** A Node.js microservice that exposes an HTTP endpoint for deriving email addresses based on provided input. It uses a JSON file as a data source for email formats.

### Libraries Used

**Frontend:**
- **React:** For building the user interface.
- **Axios:** For making HTTP requests.
- **Bootstrap:** For styling the components.
- **Jest:** For unit testing React components.

**Backend:**
- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web framework for building the REST API.
- **Jest:** For unit testing backend services.

## Time Allocation (Total 6 Hours)

1. **Frontend Development:** 3 hours
   - Setting up React project: 30 minutes
   - Implementing components (`EmailGuesser` and `EmailResult`): 1 hour
   - Adding styling: 1 hour
   - Testing with Jest: 30 minutes

2. **Backend Development:** 2 hours
   - Setting up Node.js project: 30 minutes
   - Implementing email derivation logic and API endpoint: 1 hour
   - Testing with Jest: 30 minutes

3. **Setup and Documentation:** 1 hour
   - Debugging and fixing issues: 30 minutes
   - Writing README and setting up commands: 30 minutes


## Decisions Made

- **Frontend:** Used React for its component-based architecture and ease of integration with the backend. Bootstrap was chosen for quick styling.
- **Backend:** Node.js and Express were selected for their simplicity and creating the simple RESTful API.
- **Email Formats:** Supported two formats (`first_name_last_name` and `first_name_initial_last_name`) based on the provided sample data.

## Assumptions

- The JSON file used in the backend contains accurate data for email format detection.
- The email formats are consistent across all users within a company.

## Things to Improve

1. **Error Handling:** Improve error handling in the backend to cover more edge cases.
2. **Styling:** Improve the styling for better user experience with proper error messages.
3. **Configuration Management:** Use environment variables for configuration instead of hardcoding values.

## Running the Project

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rinem/email-guesser.git
   cd email-guesser
   ```

2. **Backend Setup:**

   Navigate to the backend directory:

   ```bash
   cd backend
   ```

   Install dependencies:

   ```bash
   npm install
   ```

   Start the backend server:

   ```bash
   npm start
   ```

3. **Frontend Setup:**

   Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

   Install dependencies:

   ```bash
   npm install
   ```

   Start the React development server:

   ```bash
   npm start
   ```

### Running Tests

1. **Backend Tests:**

   Navigate to the backend directory:

   ```bash
   cd backend
   ```

   Run the tests:

   ```bash
   npm test
   ```

2. **Frontend Tests:**

   Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

   Run the tests:

   ```bash
   npm test
   ```
