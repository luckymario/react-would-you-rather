# Would You Rather Project

Would You Rather Project is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In the app, users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

The provided starter code included `_DATA.js` file which represents a fake database and methods that let you access the data. The Create React App was used to bootstrap the project.

This project was created in order to solidify my understanding of React and Redux.

## Installation

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React icon.
│   └── index.html
└── src
		├── actions # App actions.
		│  	├── authedUser.js
		│   ├── questions.js
		│   ├── shared.js
		│   └── users.js
		├── components # React components.
		│  	├── App.js # A root of the app.
		│  	├── Dashboard.js # Renders home page containing questions divided in unanswered and answered categories.
		│  	├── LeaderBoard.js # Shows ranking of users sorted in descending order based on the sum of answered and created questions.
		│  	├── Nav.js # Contains app navigation bar.
		│  	├── NewQuestion.js # Allows to add new question.
		│  	├── Page404.js # Page 404 is displayed when user opens a question with id that does not exist.
		│  	├── Question.js # Component representing a particular question visible in Dashboard component.
		│   ├── QuestionPage.js # Displays QuestionPoll or QuestionsResults components depending on whether a user answered a question.
		│   ├── QuestionPoll.js # Enables to vote in a poll.
		│   ├── QuestionResults.js # Shows results of a poll.
		│   └── SignIn.js # Allows to log in to the app.
		├── middleware # App middlewares.
		│   ├── index.js
		│   └── logger.js
		├── reducers # App reducers.
		│  	├── authedUser.js
		│   ├── index.js
		│   ├── questions.js
		│   └── users.js
		├── utils
		│  	├── _DATA.js # Starter database used in the app.
		│   ├── api.js # Contains getInitialData, saveQuestion and saveQuestionAnswer functions.
		│   └── helpers.js # Includes formatUser function returning formatted user object.
		├── index.css # General app styles.
		├── index.js
		└── logo.svg # React logo.

```

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|