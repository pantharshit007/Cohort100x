/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)
  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123
    - For any other route not defined in the server return 404
  Testing the server - run `npm run test-todoServer` command in terminal
 */

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const todos = [{
    id: 1,
    title: "cooking",
    completed: true,
    description: "Khana Pakana hai",
},{
    id: 2,
    title: "walking",
    completed: true,
    description: "Sehat Banan hai",
},{
    id: 3,
    title: "coding",
    completed: false,
    description: "1000 bugs ko theek karna hai",
}
]

// 1
app.get('/todos', (req, res) => {
    res.json({
        todos
    })
})

// 2
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const filteredTodo = todos.filter(todo => todo.id === id);

    if (filteredTodo.length>0){
        res.json({
            todo: filteredTodo[0]
        });
    }else{
        res.status(404).json({
            msg: "Not a valid id"
        })
    }
})

//3
app.post('/todos', function(req, res) {
    const newTodo = {
        id: Math.floor(Math.random() * 100), // unique random id
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description
      };

    todos.push(newTodo);

    res.status(201).json({
        message: "Todo added successfully",
        todo: newTodo
    });

    // -- Request
    // {
    //     "title": "Buy groceries",
    //     "completed": false,
    //     "description": "I should buy groceries"
    // }
});

//4
app.put('/todos/:id', function (req, res) {
    const todoId = parseInt(req.params.id)
    const todoIdx = todos.findIndex(t => t.id === todoId);
    if (todoIdx === -1) {
        res.status(404).json({
            msg: 'Invalid'
        })
    }else{
        todos[todoIdx].title = req.body.title;
        todos[todoIdx].description = req.body.description;
        todos[todoIdx].completed = req.body.completed;
        res.json(todos[todoIdx]);
    }

    // -- Request
    // {
    //     "title": "Updated title",
    //     "completed": false,
    //     "description": "Updated description"
    // }
      
})

//5
app.delete('/todos/:id', function(req, res) {
    const todoId = parseInt(req.params.id)
    const todoIdx = todos.findIndex(t => t.id === todoId);

    if (todoIdx === -1) {
        res.status(404).json({
            msg: 'Invalid ID'
        })
    }else {
        todos.splice(todoIdx, 1);
        res.status(200).json({
            msg: `ID ${todoIdx+1} Found and Deleted`
        })
    }
})

app.listen(3000, function(){
    console.log('listening on port 3000');
})