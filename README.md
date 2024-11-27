# Role-Based Access Control (RBAC) Dashboard
A web application to manage users, roles, and permissions dynamically. This project demonstrates a functional and user-friendly interface for implementing Role-Based Access Control (RBAC), essential for secure user management in modern applications.

## Features
User Management:

### View, add, edit, and delete users.
Assign roles to users and toggle their active/inactive status.
Role Management:

### Create, edit, and delete roles.
Assign permissions to roles dynamically.
## Permission Management:

Manage permissions for roles, including Read, Write, Delete, and more.
Display permissions in a clean and editable tabular format.
##Responsive Design:

Fully responsive layout for seamless usage across devices (desktop, tablet, mobile).
##Mock API Integration (Optional):

Simulate CRUD operations for users and roles with mock API responses.
User Experience Enhancements:

Smooth interactions with feedback for actions.
Search and filter functionality for easier management.

## Technologies Used
### Frontend:
* React.js (Functional Components & Hooks)

* Material-UI for styling and components

* State Management:

* React useState and Context API

* Additional Tools:

* React Router for navigation

* Mock APIs for CRUD operations (optional)



# Getting Started
## 1. Prerequisites
* Ensure you have the following installed on your system:

* Node.js (version 16 or higher)

* npm (comes with Node.js)

## 2. Clone the Repository
* bash or cmd

* Copy code

* git clone "https://github.com/YogeshShankar2k/rbac-dashboard.git"

* cd rbac-dashboard

## 3. Install Dependencies
Run the following command to install all required dependencies:

* bash or cmd
  
* Copy code

* "npm install"
  
## 4. Start the Development Server
### Start the application in development mode:

* bash or cmd
  
* Copy code
  
* "npm start"
  
* The application will open in your default browser at http://localhost:3000.
  
### Start the json-server:

* Start the application in development mode:

* bash or cmd

* cd src file(\rbac-dashboard\src>) 
  
* Copy code

* "npx json-server --watch mockData.json --port 3001"
  
* The application json data will run on at http://localhost:3001.

# How to Add Features
* Add New Permissions:

* Update the availablePermissions array in the RoleManagement.js file.

# Add API Integration:

* Replace the mock API logic in UserManagement and RoleManagement with actual API endpoints.
Enhance Design:

* Use Material-UI themes or custom CSS for additional styling.

# Known Issues

* Some edge cases for permission conflicts might require additional validation.
* Mock API does not persist data across reloads.

# Future Enhancements

* Implement role inheritance (e.g., a role can inherit permissions from another role).
  
* Integrate a backend API for real data persistence.
  
* Add sorting and advanced filtering for user and role tables.

# Contributing

* Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request with your changes.

 # Screenshots
Include screenshots or GIFs of the application to demonstrate its functionality. Here's an example:

![image](https://github.com/user-attachments/assets/fd70e44c-dd08-4546-8f06-9b1685e82c2e)

![image](https://github.com/user-attachments/assets/9c22b2d5-8ae6-4fc0-8a2a-46f18c383575)

