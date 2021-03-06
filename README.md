# Week 3 Assignment: Life Tracker

Submitted by: **William Huang**

LINK TO LifeTracker-Backend : https://github.com/WilliamHuangg/lifetracker-api

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [X] If the user is logged in, it should display a **Sign Out** button. 
  - [X] If no user is logged in, it should display **Login** and **Register** buttons
  - [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [X] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [X] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [X] The detailed activity page should display a feed of all previous tracked activities.
- [X] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [X] The activity tracked should be given a unique id for easy lookup.

  * [Table Schema](https://github.com/WilliamHuangg/lifetracker-api/blob/main/lifetracker-schema.sql) 

### Stretch Features

Implement any of the following features to improve the application:
- [X] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

`https://recordit.co/JF8MuWvWtT`
`https://recordit.co/o2GR9aGGUS`
`https://recordit.co/M5Ljv7jxLd`
`https://recordit.co/oFVEJ84hI2`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I felt the week 3 labs and lectures really prepared me for completing the assignment. I rewatched videos to fully understand how components work before beginning the lab which helped.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time I would try to implement tests and custom hooks to my application. I felt I was not able to use what I learned during week 4's lectures/labs in completing my assignment. I would also like to tackle the stretch features such as user following. As I'm not that experienced in sql, if I had more time, I would like to take on a challenge to improve my skills. I would also fix how my page navigation is, as right now after submitting a new nutrition post, the app does not send the user back to the main page but stays on the form page. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

What went well is that I was able to share the core functionalities of my app such as login/logout/register and adding/viewing posts to the nutrition page. I noticed my peers had different layouts and color schemes to their app which I would like to try next time. Some of my peers also mentioned working on front-end before back-end and maybe I could try this sequence in the future as I started with backend first but felt frontend took more time.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout out to my capstone pod groupmates(Elias & Shayan) for catching the small errors I had in my code. They were able to find where I was missing commas or typos.
