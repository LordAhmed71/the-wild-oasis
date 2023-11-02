# The-Wild-oasis 

## Project Overview
The Wild Oasis is a web application built using React as the front-end framework and Supabase as the backend database service. This application is designed to facilitate the booking and management of cabins in a wilderness retreat, offering a seamless and intuitive experience for both users and administrators.

## Features
User-Facing Features
### Cabin Booking:
Users can search for available cabins, view cabin details, and make bookings for their desired dates.
User Authentication: Users can create accounts, log in, and view their booking history. This ensures data security and a personalized experience.
Booking Status: Users can check the status of their current and past bookings.
Real-Time Feedback: The application provides real-time feedback and notifications using "react-hot-toast" for a user-friendly experience.
Admin-Facing Features
### Dashboard:
Administrators have access to a dashboard with advanced features for managing cabin bookings and statistics:

#### statistics
#### 1-Booking Numbers:

The application tracks the total number of cabin bookings, providing an overview of how often cabins are reserved.
Users can filter booking numbers by date range, allowing them to analyze seasonal trends and booking patterns.

#### 2-Sales:

The system calculates the total revenue generated from cabin bookings, including details of each transaction.
Sales statistics can be visualized through charts and reports, helping users understand their financial performance.

#### 3-Check-ins:

The application monitors the number of check-ins, indicating how many bookings have been successfully fulfilled.
Check-in data is linked to specific bookings and can be used to evaluate customer satisfaction.

#### 4-Occupancy Rate:

Occupancy rate is a critical metric that shows what percentage of cabin inventory is currently occupied.
Users can view historical occupancy rates to identify peak booking periods and optimize cabin availability.

### Booking Management:
Admins can view and manage cabin bookings, including approving, rejecting, or canceling bookings.

### User Management:
Admins can manage user accounts and bookings, ensuring data integrity and resolving any issues.

### Customization:
The dashboard allows administrators to customize cabin details and availability.

## Technology Stack
- React is used for the user interface, offering a responsive and engaging experience.
- styled-components is employed for styling components, ensuring a visually appealing and customizable UI.
- React Query is used for handling the remote state why?
  . Data Fetching and Caching
  . Automatic Background Data Synchronization
  . Mutation Management
- Recharts are used to create interactive and informative data visualizations.
- Routing "react-router-dom" enables smooth navigation within the application.
- Supabase: The Supabase backend is used for data storage and management, including user authentication, cabin data, and booking records.
- Date-fns is used for handling date-related operations and calculations.
  
## Project Structure
The project is organized into components, pages, and hooks, following best practices for a maintainable codebase. The front-end communicates with the Supabase backend using the "@supabase/supabase-js" library for efficient data retrieval and updates.

## Installation
### To run the project locally, you can follow these steps:
- Clone the project repository.
- Install the project dependencies using npm install or yarn install.
- Start the development server with npm run dev or yarn dev.
