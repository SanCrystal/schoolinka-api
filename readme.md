# Schoolinka Blog API with Prisma ORM, Postgresql and Node.js (TypeScript)

A simple blog API built with Prisma ORM, Postgresql Node.js, and TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Running the API](#running-the-api)
  - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a RESTful API for a Schoolinka blogging platform. It uses Prisma as the database ORM,Postgresql as Database, Node.js as the server runtime, and TypeScript for type safety.

## Features

- Create, read, update, and delete blog posts.
- Create, read, update, and delete users.
- Pagination and sorting of posts, and searching.
- Error handling and validation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 20.X.X)
- npm or yarn package manager
- PostgreSQL database

## Getting Started

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/sanCrystal/schoolinka-api.git
    ```
2. Install the project dependencies

    ``` 
        cd blogInterview
        npm install
    ```
    or with yarn package manager
    ```
        cd blogInterview
        yarn install
    ```
### Configuration

1. Create a .env file in the project root and configure the following environment variables:

    ```
        DATABASE_URL=postgresql://username:password@localhost:5432/blog
        APPLICATION_STATE=development
        PORT=7900
    ```
    Replace username and password, with your own values.

2. Run database migrations (on terminal or bash):

    ```
        npx prisma migrate dev
    ```

    ```
        #view current state of database
        npx prisma studio
    ```

## Usage

### Running the application

Start development server (on terminal or bash):

```
    npm run dev
```
The API will be available at http://localhost:7900.

## API Endpoints

- GET /blogs: Retrieve a list of blog posts (paginated with maximun of 4 posts per page).
    Curl Request:
  
        ```
            curl -X GET -H "Content-Type: application/json" -d '{
                "pageNumber":1,
                "pageSize":4
            }' http://localhost:7900/blogs                 
        ```
    Response:
  
        ```
            {
                "message": "Blogs fetched successfully",
                "data": [
                    {
                        "id": "c65bf367-60bf-4a11-80df-28eabe332996",
                        "userId": "bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                        "title": "My first blog 5",
                        "imageUrl": "https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                        "text": "How to japa, a comprehensive approach5",
                        "createdAt": "2023-09-08T02:48:39.043Z",
                        "updatedAt": "2023-09-08T02:48:39.043Z"
                    },
                    {
                        "id": "b147ebe2-cb12-4089-802c-f4ecc97e6b23",
                        "userId": "bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                        "title": "My first blog 4",
                        "imageUrl": "https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                        "text": "How to japa, a comprehensive approach4",
                        "createdAt": "2023-09-08T02:46:10.817Z",
                        "updatedAt": "2023-09-08T02:46:10.817Z"
                    },
                    {
                        "id": "3d73d0ba-e5bb-4731-b50e-82b1eaf75053",
                        "userId": "bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                        "title": "My first blog 3",
                        "imageUrl": "https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                        "text": "How to japa, a comprehensive approach3",
                        "createdAt": "2023-09-08T02:46:02.656Z",
                        "updatedAt": "2023-09-08T02:46:02.656Z"
                    },
                    {
                        "id": "9805fc1d-09b7-477a-a407-49eb9f9ae193",
                        "userId": "bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                        "title": "My first blog 2",
                        "imageUrl": "https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                        "text": "How to japa, a comprehensive approach2",
                        "createdAt": "2023-09-08T02:45:54.995Z",
                        "updatedAt": "2023-09-08T02:45:54.995Z"
                    }
                ]
            }
        ```
  
- GET /blogs?searchQuery=query: Retrieve a list of blog posts containing search query and sorting according to frequency of occurrence (paginated with maximun of 4 posts per page)

    Curl Request(id: set to fit your data):
  
        ``` 
            curl -X GET -H "Content-Type: application/json" -d '{
                "pageNumber":1,
                "pageSize":4
            }'  http://localhost:7900/blogs?searchQuery=2                
        
        ```
  
    Response:
  
        ```
           {
                "message": "Blogs successfully retrieved",
                "data": [
                    {
                        "id": "761ea5bf-1b21-4258-92fd-dd5e73370b10",
                        "userId": "bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                        "title": "My first blog 12322 should be first on search",
                        "imageUrl": "https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                        "text": "How to japa, a comprehensive approach 123",
                        "createdAt": "2023-09-08T07:56:22.809Z",
                        "updatedAt": "2023-09-08T07:56:22.809Z"
                    },
                    {
                        "id": "4dc518d0-ce54-4d20-bbd1-42cc8e9082f3",
                        "userId": "bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                        "title": "My first blog 1234",
                        "imageUrl": "https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                        "text": "How to japa, a comprehensive approach 1233",
                        "createdAt": "2023-09-08T04:03:06.348Z",
                        "updatedAt": "2023-09-08T04:07:20.533Z"
                    },
                    {
                        "id": "9805fc1d-09b7-477a-a407-49eb9f9ae193",
                        "userId": "bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                        "title": "My first blog 2",
                        "imageUrl": "https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                        "text": "How to japa, a comprehensive approach2",
                        "createdAt": "2023-09-08T02:45:54.995Z",
                        "updatedAt": "2023-09-08T02:45:54.995Z"
                    }
                ]
            }
        ```

- GET /blogs/:id: Retrieve a specific blog post by ID.

     Curl Request(id: set to fit your data):
  
        ``` 
            curl -X GET -H "Content-Type: application/json"  http://localhost:7900/blogs/9805fc1d-09b7-477a-a407-49eb9f9ae193                
        
        ```
  
    Response:
  
        ```
            {
                "message": "Blog was fetched successfully",
                "data": {
                    "id": "9805fc1d-09b7-477a-a407-49eb9f9ae193",
                    "userId": "bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                    "title": "My first blog 2",
                    "imageUrl": "https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                    "text": "How to japa, a comprehensive approach2",
                    "createdAt": "2023-09-08T02:45:54.995Z",
                    "updatedAt": "2023-09-08T02:45:54.995Z"
                }
            }
        ```
  
- POST /blogs: Create a new blog post.

    Curl Request:
  
        ``` 
            curl -X POST -H "Content-Type: application/json" -d '{
                "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                "title":"My first blog 123",
                "text":"How to japa, a comprehensive approach 123",
                "userId":"bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d"
            }' http://localhost:7900/blogs              
        
        ```
  
    Response:
  
        ```
            {
                "message":"Blog was created successfully",
                "data":{
                    "id":"4dc518d0-ce54-4d20-bbd1-42cc8e9082f3",
                    "userId":"bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                    "title":"My first blog 123",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","text":"How to japa, a comprehensive approach 123",
                    "createdAt":"2023-09-08T04:03:06.348Z",
                    "updatedAt":"2023-09-08T04:03:06.348Z"
                }
            }
        ```
  
- PATCH /blogs/:id: Update an existing blog post.

     Curl Request(id: set to fit your data):
  
        ``` 
            curl -X PATCH -H "Content-Type: application/json" -d '{
                "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207",
                "title":"My first blog 1234",
                "text":"How to japa, a comprehensive approach 1233"
            }' http://localhost:7900/blogs/4dc518d0-ce54-4d20-bbd1-42cc8e9082f3            
        
        ```
  
    Response:
  
        ```
            {
                "message":"Blog was updated successfully",
                "data":{
                    "id":"4dc518d0-ce54-4d20-bbd1-42cc8e9082f3",
                    "userId":"bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                    "title":"My first blog 1234",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","text":"How to japa, a comprehensive approach 1233",
                    "createdAt":"2023-09-08T04:03:06.348Z",
                    "updatedAt":"2023-09-08T04:07:20.533Z"
                }
            }
        ```
  
- DELETE /blogs/:id: Delete a blog post by ID.

     Curl Request(id: set to fit your data):
        ``` 
            curl -X DELETE -H "Content-Type: application/json" http://localhost:7900/blogs/4dc518d0-ce54-4d20-bbd1-42cc8e9082f3            
        
        ```
  
    Response:
  
        ```
            {
                "message":"Blog was deleted successfully",
                "data":{
                    "id":"4dc518d0-ce54-4d20-bbd1-42cc8e9082f3",
                    "userId":"bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                    "title":"My first blog 1234",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","text":"How to japa, a comprehensive approach 1233",
                    "createdAt":"2023-09-08T04:03:06.348Z",
                    "updatedAt":"2023-09-08T04:07:20.533Z"
                }
            }
        ```
  
- POST /users: Create a new user.

    Curl Request:
  
        ``` 
            curl -X POST -H "Content-Type: application/json" -d '{
                "email":"santa12@fmail.com",
                "firstName":"jaque",
                "lastName":"papper",
                "userName":"pappa00",
                "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207"
            }' http://localhost:7900/users              
        
        ```
  
    Response:
  
        ```
            {
                "message":"User was created successfully",
                "data":{
                    "id":"c3ba11af-27ca-4cca-b57f-54d44da08f3f",
                    "userName":"pappa00",
                    "firstName":"jaque",
                    "lastName":"papper",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","email":"santa12@fmail.com",
                    "createdAt":"2023-09-08T04:14:39.000Z",
                    "updatedAt":"2023-09-08T04:14:39.000Z"}
            }
        ```
  
- GET /users: Retrieve a list of users.

    Curl Request:
  
        ``` 
            curl -X GET -H "Content-Type: application/json" http://localhost:7900/users                 
        
        ```
  
    Response:
  
        ```
           {
            "message":"Users fetched successfully",
            "data":[
                {
                    "id":"5111ce17-0a62-4738-86eb-c9c51ab4f43c",
                    "userName":"santa",
                    "firstName":"baby",
                    "lastName":"baby child",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","email":"santa@gmail.com",
                    "createdAt":"2023-09-07T19:09:56.764Z",
                    "updatedAt":"2023-09-07T19:09:56.764Z"
                },
                {
                    "id":"bb3cefa9-bcae-4b1c-b78d-04ecc1a7bc2d",
                    "userName":"pappa1","firstName":"jaque",
                    "lastName":"papper",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","email":"santa1@fmail.com",
                    "createdAt":"2023-09-07T21:38:00.611Z",
                    "updatedAt":"2023-09-07T21:38:00.611Z"
                },
                {
                    "id":"c3ba11af-27ca-4cca-b57f-54d44da08f3f",
                    "userName":"pappa00",
                    "firstName":"jaque",
                    "lastName":"papper",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","email":"santa12@fmail.com",
                    "createdAt":"2023-09-08T04:14:39.000Z",
                    "updatedAt":"2023-09-08T04:14:39.000Z"
                }
            ]
            }
        ```
  
- GET /users/:id: Retrive a specific user.

    Curl Request:
  
        ``` 
            curl -X GET -H "Content-Type: application/json" http://localhost:7900/users/5111ce17-0a62-4738-86eb-c9c51ab4f43c               
        
        ```
  
    Response:
  
        ```
          {
                "message":"User was fetched successfully",
                "data":{
                    "id":"5111ce17-0a62-4738-86eb-c9c51ab4f43c",
                    "userName":"santa",
                    "firstName":"baby",
                    "lastName":"baby child",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","email":"santa@gmail.com",
                    "createdAt":"2023-09-07T19:09:56.764Z",
                    "updatedAt":"2023-09-07T19:09:56.764Z"
                }
            }
        ```
  
- PATCH /users/:id: Update an existing user.


     Curl Request(id: set to fit your data):
  
        ``` 
            curl -X PATCH -H "Content-Type: application/json" -d '{
                "email":"santa1@fmail.com",
                "firstName":"jaque1212",
                "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207"
            }' http://localhost:7900/users/5111ce17-0a62-4738-86eb-c9c51ab4f43c            
        
        ```
  
    Response:
  
        ```
           {
                "message":"User was updated successfully",
                "data":{
                    "id":"5111ce17-0a62-4738-86eb-c9c51ab4f43c",
                    "userName":"santa",
                    "firstName":"jaque1212",
                    "lastName":"baby child",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","email":"santa@gmail.com",
                    "createdAt":"2023-09-07T19:09:56.764Z",
                    "updatedAt":"2023-09-08T07:01:18.806Z"
                }
            }
        ```
  
- DELETE /users/:id: Delete a user by ID.

     Curl Request(id: set to fit your data):
        ``` 
            curl -X DELETE -H "Content-Type: application/json"  http://localhost:7900/users/5111ce17-0a62-4738-86eb-c9c51ab4f43c            
        
        ```
  
    Response:
  
        ```
           {
                "message":"User was deleted successfully",
                "data":{
                    "id":"5111ce17-0a62-4738-86eb-c9c51ab4f43c",
                    "userName":"santa",
                    "firstName":"jaque1212",
                    "lastName":"baby child",
                    "imageUrl":"https://ik.imagekit.io/ub0zwxszt/default-image.jpg?updatedAt=1694113468207","email":"santa@gmail.com",
                    "createdAt":"2023-09-07T19:09:56.764Z",
                    "updatedAt":"2023-09-08T07:01:18.806Z"
                }
            }
        ```


## License

This project is licensed under the MIT License 
