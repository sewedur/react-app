# React To-Do List App Documentation

## Introduction

This documentation explains the features and functionalities of the To-Do List App built with React and deployed on AWS Amplify at https://main.d2350prmcvbwf1.amplifyapp.com/.

## Application Overview

The To-Do List App is a simple, user-friendly web application that enables users to create, view, manage, and archive tasks. It uses state-of-the-art technology - React for frontend and AWS Amplify for hosting and continuous deployment.

The application is made up of several components:

1. **List Name:** At the top of the page, the user can define the name of the to-do list. This is particularly useful when managing multiple lists.

2. **Add Task:** Users can add new tasks to the list. Each task starts with a "pending" status.

3. **Task Status:** Users can manually update the status of each task between "Pending", "In Progress", and "Complete".

4. **Task Archive:** Once tasks are completed, users have the option to archive these tasks. Archived tasks are moved from the main task list to the history table.

5. **Task History:** A separate table where users can view their completed (archived) tasks.

## Pre-deployment

Before deploying the application on AWS Amplify, make sure your application is ready for production. React has built-in scripts for testing, development, and production. 

To create a production-ready version of your application, run the following command in the root directory of your project:

```
npm run build
```

This command will create a `build` directory with a production build of your app. Static files will be minified and the filenames will include a hash for cache busting.

## Deployment

This application is deployed using AWS Amplify, a set of tools and services that can be used together or independently to help front-end web developers build scalable full stack applications.

The steps to deploy a React application on AWS Amplify are as follows:

1. **Push your application to a Git provider:** This can be GitHub, Bitbucket, or AWS CodeCommit.

2. **Create a new app in AWS Amplify:** Go to the AWS Amplify Console, and then choose "Connect app".

3. **Connect your repository:** In the Connect App page, select your Git provider and then select the repository and branch to deploy.

4. **Configure build settings:** AWS Amplify should automatically detect that it's a React application and suggest a configuration for you. You can review and adjust these settings as needed.

5. **Save and deploy:** Click on "Save and deploy". AWS Amplify will then start the process of building and deploying your application.

Once the application is deployed, AWS Amplify will provide a default domain for your application. You can also set up a custom domain in the AWS Amplify console.

## Post Deployment

After deploying the application, you should regularly check and monitor the application's performance. AWS Amplify provides continuous deployment - any time you push to the connected repository branch, a new build will start, and upon successful build, the app will be deployed and accessible at the provided URL. You can also use Amplify's Analytics feature to monitor the usage of your app.

## Conclusion

The React To-Do List App provides a simple yet powerful way to manage tasks. It is a perfect example of a modern, scalable, and robust web application built with React and deployed on AWS Amplify.