# Title: Learning Moments 

## Description:
This is a simple blog application built with React that fetches posts and topics from an API and displays them in a user-friendly interface. The application includes filters to sort posts by topic and search for specific keywords within the content. Users can also edit posts directly on the page, save changes, and delete posts as needed.

## Contents:
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [License](#license)
5. [Version](#version)
6. [Date](#date)

## Installation:
1. First, make sure you have Node.js installed on your system.
2. Create a new directory for the project and navigate to it in the terminal.
3. Run `npm init` to create a package.json file and follow the prompts.
4. Install the required dependencies by running:
```
npm install react react-dom axios bootstrap
```
5. Clone the repository from GitHub (replace `<username>` with your GitHub username):
```
git clone https://github.com/<username>/react-blog-app.git
```
6. Navigate to the project directory and run the application:
```
cd react-blog-app
npm start
```
7. Make sure to provide a database for the app to pull from, the original [faux database](https://github.com/soyuz43/learning-moments-api) is in a seperate git repo

## Usage:
1. The application opens in your default web browser.
2. You can view all posts or filter them by topic using the dropdown menu at the top right corner of the screen.
3. Search for specific keywords within the content using the search bar located above the post list.
4. Click on a post title to view its details and edit the content directly on the page.
5. To save changes, click the "Save" button.
6. To delete a post, click the "Delete" button next to it.
7. Additional usage tips:
   * Press Ctrl+S to quickly search for posts using keywords within the content.
   * Press Enter to submit changes or close dialogs.
   * Press Esc to close dialogs and return to the main page.

## Contributing:
1. Fork the repository from GitHub by clicking on the "Fork" button in the upper right corner of the project page.
2. Create a new branch for your changes by running:
```
git checkout -b <branch-name>
```
3. Make your changes and commit them using:
```
git add .
git commit -m "commit message"
```
4. Push your changes to the forked repository:
```
git push origin <branch-name>
```
5. Submit a pull request to merge your changes into the main branch.
6. Code review process: Changes will be reviewed by the project maintainer(s).

## License:
This application is not licensed.

## Version:
The version of this application is `v0.1`.
## Date:
2024-04-15
