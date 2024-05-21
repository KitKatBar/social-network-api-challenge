# Social Network API Challenge - Definitely Not Reddit!
  
## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data.

The application that I have built this week is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.jsLinks to an external site. and MongooseLinks to an external site.
        
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)


## Installation

Please follow these commands for installation.

1. Clone the repo into your local system.

HTTPS:
```
git clone https://github.com/KitKatBar/social-network-api-challenge.git
```

SSH:
```
git clone git@github.com:KitKatBar/social-network-api-challenge.git
```

2. Download all the required modules for this application.

```
npm i
```

The above should install all the modules used in this application, but if it doesn't work you can do the installations separately using these commands below (make sure to do ALL of them).

```
npm i express@4.17.1
npm i mongoose@7.0.2
npm i nodemon@3.1.0
```

3. Additionally, you will need to download some programs to help setup this project.  The programs that this project requires is MongoDB for the database and Insomnia for testing APIs.  There are also other softwares available, but I recommend using these ones.

MongoDB Installation Guide: https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb

Insomnia Installion Website: https://insomnia.rest/

## Usage

This project performs CRUD operations that interact with an social network database in MongoDB. There are a variety of operations available for querying the users and thoughts and also perform additional operations like adding friends to a user or adding reactions to the thoughts. I have provided a walkthrough video demonstrating how to use this program. Click on [this link](https://drive.google.com/file/d/17yyoEjTF2ZJuZ8HbPE7v3uVJvtmymA2p/view) to access the video.

Additionally, I have provided screenshots of sample responses from Insomnia for each of the routes.  Note that when adding an email for the user, I use a regex validation pattern to make sure that it is a valid email in the required format 'your-name@your-domain.com'.

### GET All Users

![image showing get all users route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-users.png?raw=true)

### POST New User & GET User by ID

![image showing post user route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/post-user.png?raw=true)

![image showing get user by id route after post in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-user-by-id.png?raw=true)

### PUT User & GET User by ID

![image showing put user route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/put-user.png?raw=true)

![image showing get user by id route after put in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-user-by-id-put.png?raw=true)

### DELETE User & GET User by ID

![image showing delete user route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/delete-user.png?raw=true)

![image showing get user by id route after delete in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-user-by-id-delete.png?raw=true)

### Add Friend & GET All Users (to show friendlist)

![image showing delete user route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/post-user-friend.png?raw=true)

![image showing get user by id route after delete in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-users-friends.png?raw=true)

### Delete Friend & GET All Users (to show friendlist)

![image showing delete user route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/delete-user-friend.png?raw=true)

![image showing get user by id route after delete in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-users-friends-delete.png?raw=true)

### GET All Thoughts

![image showing get all thoughts route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-thoughts.png?raw=true)

### POST New Thought & GET Thought by ID

![image showing post thought in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/post-thought.png?raw=true)

![image showing get thought by id route after post in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-thought-by-id.png?raw=true)

### PUT Thought & GET Thought by ID

![image showing put thought in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/put-thought.png?raw=true)

![image showing get thought by id route after put in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-thought-by-id-put.png?raw=true)

### DELETE Thought & GET Thought by ID

![image showing delete thought route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/delete-thought.png?raw=true)

![image showing get thought by id route after delete in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-thought-by-id-delete.png?raw=true)

### Add Reaction & GET All Thoughts (to show reactions)

![image showing delete user route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/post-thought-reaction.png?raw=true)

![image showing get user by id route after delete in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-thoughts-reactions.png?raw=true)

### Delete Reaction & GET All Thoughts (to show reactions)

![image showing delete user route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/delete-thought-reaction.png?raw=true)

![image showing get user by id route after delete in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-thoughts-reactions-delete.png?raw=true)
        
### Bonus Images - Delete Thoughts From Associated User

These images show the before and after of a user's thoughts when deleting an associated thought.  It will also collapse all associated reactions automatically since it is a schema only and not a model.

![image showing get user by id route in Insomnia and showing associated thoughts and reactions](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-user-by-id-thoughts-reactions.png?raw=true)

![image showing get user by id route in Insomnia after deleting thought](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-user-by-id-thoughts-reactions-delete.png?raw=true)

These images show the before and after of all users and all thoughts when deleting a user that has a thought.  It will also collapse all associated thoughts and the logic must be implemented in the back-end since thoughts is also a model.

![image showing get all users route in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-users-before.png?raw=true)

![image showing get all users route after delete in Insomnia](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-users-after.png?raw=true)

![image showing get all thoughts route in Insomnia after deleting a user](https://github.com/KitKatBar/social-network-api-challenge/blob/main/images/get-all-thoughts-after.png?raw=true)

## Credits

MongoDB Installation Guide: https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb

Insomnia for Testing Endpoints: https://insomnia.rest/

Our instructor Drew Hoang for introducing us to MongoDB this week.  It is refreshing to start learning new data structures that we can use like NoSQL where we don't have to worry about the structure of data we store.  He provides good metaphors for how to do exercises and also makes speed-run videos that are very insightful for providing information and for reviewing class material.

Our TA Kyle Vance for his continued guidance during class and taking the time to explain new concepts. He continues to provide direction for students and is straight to the point in his explainations.

Alic Madd and Reyn Takahashi for spending time in Discord tackling this module and providing support to each other when needed (thanks to Alic for providing the date formatter).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project was built using the MIT License. Please refer to the LICENSE in the repo for more information.
          
## How to Contribute

You can contribute to this project by providing a front-end to go with the back-end social network API database!

## Questions

This project was created by KitKatBar.
    
Click on [this link](https://github.com/KitKatBar) to see more of my other works!

Have additional questions about this project?  You can reach out to me with any inquiries at: katriel_chiu@msn.com