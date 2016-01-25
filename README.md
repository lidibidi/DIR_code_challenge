









# Developer in Residence Code Challenge



## The Problem: Task Management

Everyone has tasks they complete every day. Everyone also stores information in different ways. Maybe you use Evernote but I use Google Drive. Perhaps your instructor uses Github and your partner uses Excel. We'd like to research who uses **x** platform. This survey application allows *respondents* to fill out data about their **task management & habbits**. 

## Task Management Survey

##### Asks the following questions
* What is your name?
* What is your age?
* What is your gender?
* What software do you use to store tasks/items to do?
* Have you used any other software than the above? If so, what?
* What feature(s) do you love about your software?
* What feature(s) do you wish you could have?

## Technical

This very simple but effective Task Management Survey is written in Node+Express. Respondent data is stored in MongoDB. 

## How to use the Task Management Survey

####In your terminal and folder of your choosing:

Step 1
```
git clone git@github.com:lidibidi/DIR_code_challenge.git
```
Step 2
```
cd DIR_code_challenge  
```
Step 3


run `npm install`

Step 4


`command + t` and run `mongod` or `sudo mongod` in new terminal tab

Step 4


go back to original terminal tab and hit `command + t` then `npm start` or `nodemon` in that new tab

Step 5

* In your Browser navigate to http://localhost:3000/ and answer the questions! :smile:


* To see responses go to http://localhost:3000/survey/responses
