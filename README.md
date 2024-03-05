# Technical Assessment 

## Installation
```bash
//Clone project
git clone https://github.com/avillacarlosfs/blue-step.git

//Navigate to Project Directory
cd blue-step

//Install Dependencies
npm install 

// Run Development Server
npm run dev

```
## Instructions
### Step 1: Create a Sign-up Form Component
Develop a sign-up form component to capture user information.

### Step 2: Make a POST request to a Pretend API
Implement a POST request to a pretend API (`myfunapi.fake/user/signup`) to submit form data. Handle success and error responses.

### Step 3: Create a JSON Object from the Form Data
Extract data from the form and construct a JSON object representing the user's information. Print the JSON object to the console and pass it to the `mockAPI()` function.

### Step 4: Implement a Mock API Function
Create a mock API function using the `UserHelper` library to interact with user data. Handle errors and return appropriate messages.

## Additional Notes
- The UserHelper library provides methods for creating and saving user objects.
- Ensure proper error handling for required fields and saving operations.