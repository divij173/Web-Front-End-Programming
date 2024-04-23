# Web-Front-End-Programming

Welcome to the COMP6080 Web Development course repository! This repository contains three projects that are part of the course curriculum. Below is an overview of the course and details about each project.

## Course Overview

COMP6080 aims to develop your confidence in building modern web-based applications to industry standards. This occurs through the introduction of a range of basic concepts surrounding HTML, CSS, Vanilla Javascript, Javascript Declarative Frameworks, UI/UX Principles, Accessibility, Network & Asynchronous Programming, Front-end Testing, and other basic infrastructure.

This course has a heavy emphasis on industry voices, with lectures given by current front-end developers from industry, primarily from Canva, a Sydney-based technology company.

**Note:** COMP6080 is a challenging course with a focus on real-world application. Students are encouraged to reflect on the time commitment required before enrolling.

For more detailed information about the course, please refer to the provided course material.

# Projects Overview

# Project 1: HTML/CSS Assessment

Project 1 focuses on implementing basic web pages using HTML and CSS. The tasks are designed to demonstrate skills developed during the initial weeks of the course.

- **Task 1:** Static, fixed-size page
- **Task 2:** Static, fixed-size page with hover states
- **Task 3:** Responsive static page
- **Task 4:** Dynamic form

Each task has specific requirements and assets provided within the project folders.


# Project 2 - Vanilla JS: Slackr

## 1. Background & Motivation

In the realm of web development, understanding fundamental JavaScript-based technologies and architectures is crucial. This assignment delves into building a frontend website using Vanilla JS, without relying on frameworks like ReactJS. The focus is on interacting with a RESTful API HTTP backend (provided) using promises and fetch mechanisms.

## 2. The Task

The task is to develop a frontend for "Slackr," a UNSW version of the popular messaging tool Slack. The frontend will include features such as registration, login, channel creation, viewing messages, user interactions, and more.

### 2.1. Milestone 1 - Registration & Login

This milestone involves creating the basic user interface for registration and login functionalities.

### 2.2. Milestone 2 - Creating and Viewing Channels

Focuses on creating channels, viewing channel lists, and managing channel details.

### 2.3. Milestone 3 - Channel Messages

Involves displaying, sending, editing, reacting, and managing messages within channels.

### 2.4. Milestone 4 - Multi-user Interactivity

Includes inviting users to channels, viewing user profiles, and managing user profiles.

### 2.5. Milestone 5 - Photos in Channels

Enables users to upload and view photos as part of messages in channels.

### 2.6. Milestone 6 - Challenge Components

Includes implementing infinite scroll and push notifications for enhanced user experience.

### 2.7. Milestone 7 - Extra Challenge Components

Further challenges like offline access and fragment-based URL routing for advanced functionalities.

### 2.8. Bonus

Opportunity to earn bonus marks by implementing standout features enhancing UI/UX or adding extra functionalities.

# AirBrB Frontend README

## Background & Motivation

AirBrB is a person-to-person property renting service inspired by the success of the messaging platform Slackr. This frontend project is built in ReactJS, interacting with a RESTful API provided by a backend team. The goal is to create a seamless user experience for both guests and hosts, adhering to high UI, UX, and accessibility standards.

## Features Overview

### 1. Admin Auth

- **Login Screen**: Unique route, email and password entry, error handling, submission button.
- **Register Screen**: Unique route, email, password, name entry, confirm password, error handling, submission button.
- **Logout Button**: Allows logging out and returns to landing screen.
- **Common Items**: Logout button, buttons for viewing hosted listings and all listings.

### 2. Creating & Editing & Publishing a Hosted Listing

- **Hosted Listings Screen**: Displays user's listings, clickable elements for editing/deleting listings.
- **Hosted Listing Create**: Create new listing with various details.
- **Edit AirBrB Listing**: Edit existing listing details.
- **Publishing a Listing**: Make a listing visible to other users, define availability ranges.

### 3. Landing Page: Listings and Search

- **Listings Screen**: Display all listings, search filters by title, city, bedrooms, date range, price, and review ratings.
- **Search Filters**: Input fields for search parameters, search button to apply filters.

### 4. Viewing and Booking Listings

- **View a Selected Listing**: Display detailed information about a listing, book the listing, view booking status.
- **Making a Booking and Checking its Status**: Book a listing, confirmation message, leave reviews.
- **Leaving a Listing Review**: Logged-in users can leave reviews for listings they've booked.

### 5. Removing a Listing, Managing Booking Requests

- **Removing a Live Listing**: Unpublish a listing, affect bookings' visibility.
- **Viewing Booking Requests and History**: Display booking requests, accept/deny requests, show listing stats.

### 6. Advanced Features

- **Advanced Listing Rating Viewing**: Tooltips for ratings, detailed reviews view.
- **Listing Profits Graph**: Display user's profit from listings in the past month.
- **Listing Upload**: Upload listing data via JSON file.
- **YouTube Listing Thumbnail**: Use a YouTube video as a listing thumbnail.

### Additional Requirements

- **Linting**: Run `yarn lint` from `frontend` folder.
- **Testing**: Component testing with excellent coverage, clarity, and design. UI testing for user paths.

## Running the Project

1. Clone the repository.
2. Navigate to the `frontend` folder.
3. Run `yarn install` to install dependencies.
4. Run `yarn start` to start the development server.
5. Run `yarn test` for component and UI testing.

## Project Structure

- `src`: Contains all React components and related files.
- `public`: Contains public assets like index.html.
- `tests`: Contains component and UI testing files.
- `README.md`: Project overview and setup instructions.
- `TESTING.md`: Testing rationale and details.

