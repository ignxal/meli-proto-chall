# Project Setup Guide

This guide explains how to set up and run the `meli-proto-challenge` project, including both the web application and the API.

## Prerequisites

Ensure you have the following installed:

- Node.js (v18 or higher): This runtime is essential for both the web application and the API.
- npm (v9 or higher): Node.js package manager, used for installing dependencies.

## Setup Instructions

### 1. Clone the Repository

Start by cloning the project from its GitHub repository to your local machine:

```bash
git clone https://github.com/ignxal/meli-proto-challenge
```

### 2. Install Dependencies

The project is structured with separate webapp and api directories, each with its own dependencies.

#### Web Application (Frontend)

Navigate into the `webapp` directory and install the necessary packages:

```bash
cd webapp
npm install
```

#### API (Backend)

Next, move to the `api` directory and install its dependencies:

```bash
cd ../api
npm install
```

#### Configure Environment Variables (API)
The API uses environment variables, managed by `dotenv`.
Create a file named `.env` file in the **root** of the `api` directory and add the following line:

```bash
PORT=3000
```

**Note**: You can change 3000 to any available port you prefer for the API.

### 3. Running the Project

For the complete application to function, both the API and the web application must be running simultaneously.

#### API

From the `api` directory, run the development server:

```bash
cd api
npm run dev
```

You should see a message indicating the API is listening on the configured port.

#### Web Application

In a **separate terminal window**, navigate to the `webapp` directory and start its development server::

```bash
cd webapp
npm run dev
```

The web application will typically open in your browser at  `http://localhost:5173`.

### 4. Building the Project for Production

To prepare the project for deployment, you can build production-ready versions of both the web application and the API.

#### Build the Web Application

From the `webapp` directory:

```bash
npm run build
```

This will create an optimized build in the `dist` folder within `webapp`.

#### Build the API

From the `api` directory:

```bash
npm run build
```

This will compile the TypeScript code into JavaScript in the `dist` folder within `api`.

## Testing

The API includes unit tests to ensure its functionality.

### Run API Tests

From the `api` directory, execute the tests:
```bash
npm run test
```

This command will run all tests and generate a code coverage report.

## Additional Commands

### Web Application

- **Linting**: Check for code style issues and potential errors.
  ```bash
  cd webapp
  npm run lint
  ```
- **Preview**: Serve the production build locally to test it.
  ```bash
  npm run preview
  ```

## Notes

- **Simultaneous Operation:** Always ensure both the web application and API are running concurrently for the project to function correctly.
- **Dependencies:** Regularly update project dependencies using npm install within each directory to maintain security and incorporate the latest features..
- **Troubleshooting:** If you encounter issues, verify that all prerequisites are met and check the console output for error messages. Ensure the correct port numbers are being used and are not already in use by other applications.