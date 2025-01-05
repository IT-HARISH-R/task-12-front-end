# Password Reset Application

This is a full-stack password reset application that includes user authentication, signup, login, and password reset functionality. The frontend is built using React.js with Tailwind CSS for styling, and the backend is hosted on Render.

## Features

- **Signup**: Users can create an account with a username, email, and password.
- **Login**: Users can log in to their account.
- **Forgot Password**: Provides a link to initiate the password reset process.
- **Reset Password**: Users can reset their password using a token sent to their email.
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly and modern UI.

---

## Project Structure

### Frontend Components
- **`FirstCom`**: Landing page or introduction component.
- **`Home`**: Main page after successful login.
- **`Signup`**: Handles user registration.
- **`Login`**: Allows users to log in.
- **`ForgotPassword`**: Initiates the password reset process by sending a token.
- **`ResetPassword`**: Handles the password reset functionality using a token.
- **`ErrorPage`**: Displays a 404 error for undefined routes.

---

## Usage

1. Signup:

* Navigate to /signup.
* Fill in your username, email, and password.
* Submit the form to create an account.


2. Login:
* Navigate to /login.
* Enter your email and password.
* Submit the form to log in.


3. Forgot Password:
* Navigate to /forgot-password.
* Enter your registered email to request a password reset.



4. Forgot Password:
* Click the reset link in your email.
* Enter a new password and submit the form.