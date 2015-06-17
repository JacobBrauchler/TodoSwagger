var Task = require('../models/task').Task; 

/*
 * Tasks Routes
 */
exports.index = function(req, res) {
  Task.find({}, function(err, docs) {
    if(!err) {
      res.json(200, { tasks: docs });  
    } else {
      res.json(500, { message: err });
    }
  });
}

exports.show = function(req, res) {
  
  var id = req.params.id; 
  Task.findById(id, function(err, doc) {
    if(!err && doc) {
      res.json(200, doc);
    } else if(err) {
      res.json(500, { message: "Error loading task." + err});
    } else {
      res.json(404, { message: "Task not found."});
    }
  });
}

exports.create = function(req, res) {

  var task_name = req.body.task_name; // Name of task. 
  var description = req.body.task_description;  // Description of the task

  //Task.findOne({ name: task_name }, function(err, doc) {  // This line is case sensitive.
  Task.findOne({ name: { $regex: new RegExp(task_name, "i") } }, function(err, doc) {  // Using RegEx - search is case insensitive
    if(!err && !doc) {
      
      var newTask = new Task(); 

      newTask.name = task_name; 
      newTask.description = description; 
      
      newTask.save(function(err) {

        if(!err) {
          res.json(201, {message: "Task created with name: " + newTask.name });    
        } else {
          res.json(500, {message: "Could not create task. Error: " + err});
        }

      });

    } else if(!err) {
      
      // User is trying to create a task with a name that already exists. 
      res.json(403, {message: "Task with that name already exists, please update instead of create or create a new task with a different name."}); 

    } else {
      res.json(500, { message: err});
    } 
  });

}

exports.update = function(req, res) {
  
  var id = req.body.id; 
  var task_name = req.body.task_name;
  var task_description = req.body.task_description; 

  Task.findById(id, function(err, doc) {
      if(!err && doc) {
        doc.name = task_name; 
        doc.description = task_description; 
        doc.save(function(err) {
          if(!err) {
            res.json(200, {message: "Task updated: " + task_name});    
          } else {
            res.json(500, {message: "Could not update task. " + err});
          }  
        });
      } else if(!err) {
        res.json(404, { message: "Could not find task."});
      } else {
        res.json(500, { message: "Could not update task." + err});
      }
    }); 
}

exports.delete = function(req, res) {

  var id = req.body.id; 
  Task.findById(id, function(err, doc) {
    if(!err && doc) {
      doc.remove();
      res.json(200, { message: "Task removed."});
    } else if(!err) {
      res.json(404, { message: "Could not find task."});
    } else {
      res.json(403, {message: "Could not delete task. " + err });
    }
  });
}

function parseRegExpProperties(obj) {
   var newObject = {};
   for(var propName in obj) {
      if(typeof(obj[propName]) != "undefined") {
        newObject[propName] = {'$regex': obj[propName], '$options': "i"};
      }
   }
   return newObject;
}

exports.search = function(req, res) {
	var name = req.query.name;
	Task.findByName(name, function(err, doc) {
	      if(!err && doc) {
	        res.json(200, doc);
	      } else if(err) {
	        res.json(500, { message: "Error loading task." + err});
	      } else {
	        res.json(404, { message: "Task not found."});
	      }
	    });
	  }
	
  
	
	
   
	//var task_name = req.query.task_name;
    //Task.findByName(task_name, function(err, doc) {
      //if(!err && doc) {
        //res.json(200, doc);
      //} else if(err) {
        //res.json(500, { message: "Error loading task." + err});
      //} else {
        //res.json(404, { message: "Task not found."});
      //}
    //});
  //}
	
	
	
   
	    
	   
	