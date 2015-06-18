# TodoSwagger
- This holds the Documentation for a simple Todo app using Swagger

# Installing Swagger
- npm install -g swagger

# Creating Swagger project
- In command line enter: swagger project create project_name
- Then replace the app.js file with your app.js, add your controllers to the controllers folder and then import anything else your project needs.  

# Editing swagger project
- In command line while in directory of your project enter: swagger project edit
- This will open up a browser page and allow you to create your documentation, look at my project for an example. all you will need to do is swagger project edit in the directory and you can view my documentation and change things to see how it works.  
- My yaml file:
```
swagger: '2.0'

# This is your document metadata
info:
  version: "0.0.1"
  title: Todo App
host: localhost:3000
schemes:
  - http
  - https
consumes:
  - application/json
produces:
  - application/x-www-form-urlencoded
basePath: /

# Describe your paths here
paths:
  # This is a path endpoint. Change it.
  /tasks:
  
    # This is a HTTP operation
    get:
      # Describe this verb here. Note: you can use markdown
      description: |
        Gets All `Task` objects.
      responses:
        # Response code
        200:
          description: Successful response
          # A schema describing your response object.
          # Use JSON Schema format
          schema:
            title: ArrayOfTasks
            type: array
            items:
              title: Tasks
              type: object
              properties:
                id:
                  type: string
                  example: "1"
                name:
                  type: string
                  example: "task1"
                description:
                  type: string
                  example: "Mow the lawn"
                date_created:
                  type: string
                  example: "2015-06-03T23:49:18.059Z"
        500:
          description: Error
          schema: 
            type: string
            example: "Cannot find Tasks"
    
    post:
      description: |
        Add 'Task' object.
        
      parameters:
        # An example parameter that is in query and is required
        -
          name: name 
          in: query
          description: unique object task name
          required: true
          type: string
          name: description
          in: query
          description: utask description
          required: true
          type: string
     
      responses:
        # Response code
        200: 
          description: Successful response
          # A schema describing your response object.
          # Use JSON Schema format
          schema:
              title: Return String
              type: string
              example: "Task added succesfully"
        500:
          description: Error
          schema: 
            type: string
            example: "Could not add Task"
           
    put: 
      description: |
        Update `Task` object.
        
         # This is array of GET operation parameters:
      parameters:
        # An example parameter that is in query and is required
        -
          name: id 
          in: query
          description: unique object id
          required: true
          type: string
      
      responses:
        # Response code
        200:
          description: Successful response
          # A schema describing your response object.
          # Use JSON Schema format
          schema:
              title: Return String
              type: string
              example: "Task updated succesfully"
        500:
          description: Error
          schema: 
            type: string
            example: "Could not update Task"
    
    delete: 
      description: |
        Delete `Task` object.
        
         # This is array of GET operation parameters:
      parameters:
        # An example parameter that is in query and is required
        -
          name: id 
          in: query
          description: unique object id
          required: true
          type: string
      
      responses:
        # Response code
        200:
          description: Successful response
          # A schema describing your response object.
          # Use JSON Schema format
          schema:
              title: Return String
              type: string 
              example: "Task removed succesfully"
        400:
          description: Error
          schema: 
            type: string
            example: "Cannot find Task"
  
  /task?task_name=:
    get:
      description: |
        Gets `Task` object by id.
        
         # This is array of GET operation parameters:
      parameters:
        # An example parameter that is in query and is required
        -
          name: name
          in: query
          description: unique object name
          required: true
          type: string
          
     
      responses:
        # Response code
        200:
          description: Successful response
          # A schema describing your response object.
          # Use JSON Schema format
          schema:
              title: TaskObject
              type: object
              properties:
                id:
                  type: string
                  example: "1"
                name:
                  type: string
                  example: "task1"
                description:
                  type: string
                  example: "Mow the lawn"
                date_created:
                  type: string
                  example: "2015-06-03T23:49:18.059Z"
        500:
          description: Error
          schema: 
            type: string
            example: "Cannot find Task"


  /tasks/:
    get:
    
      description: |
        Gets `Task` object by id.
        
         # This is array of GET operation parameters:
      parameters:
        # An example parameter that is in query and is required
        -
          name: id
          in: query
          description: unique object id
          required: true
          type: string
          
     
      responses:
        # Response code
        200:
          description: Successful response
          # A schema describing your response object.
          # Use JSON Schema format
          schema:
              title: TaskObject
              type: object
              properties:
                id:
                  type: string
                  example: "1"
                name:
                  type: string
                  example: "task1"
                description:
                  type: string
                  example: "Mow the lawn"
                date_created:
                  type: string
                  example: "2015-06-03T23:49:18.059Z"
                  
        500:
          description: Error
          schema: 
            type: string
            example: "Cannot find Task"
``` 


# Information on Swagger
- http://swagger.io/
- https://github.com/swagger-api/swagger-node
- started 2011

