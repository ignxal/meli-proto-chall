# Project Setup Guide

This guide explains how to set up and run the `meli-prototype-chall` project, including both the web application and the API.

## Prerequisites

Ensure you have the following installed:

- Node.js (v18 or higher)
- npm (v9 or higher)

## Setup Instructions

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/ignxal/meli-proto-chall
```

### 2. Install Dependencies

#### Web Application

Navigate to the `webapp` directory and install dependencies:

```bash
cd webapp
npm install
```

#### API

Navigate to the `api` directory and install dependencies:

```bash
cd ../api
npm install
```

### 3. Run the Project

#### Web Application

To start the development server for the web application:

```bash
cd webapp
npm run dev
```

The application will be available at `http://localhost:5173`.

#### API

To start the API server in development mode:

```bash
cd ../api
npm run dev
```

The API will be available at `http://localhost:3000`.

### 4. Build the Project

#### Web Application

To build the web application for production:

```bash
cd webapp
npm run build
```

#### API

To build the API:

```bash
cd ../api
npm run build
```

## Additional Commands

### Web Application

- **Linting**: Run ESLint to check for code issues:
  ```bash
  npm run lint
  ```
- **Preview**: Preview the production build:
  ```bash
  npm run preview
  ```

### API

- **Start**: Run the API server after building:
  ```bash
  npm run start
  ```

## Notes

- Ensure both the web application and API are running simultaneously for full functionality.
- Update dependencies periodically to keep the project secure and up-to-date.
