/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

$(document).ready(function() {
  $('form').on('submit', function(e){
    $('.all-tasks').empty();
    e.preventDefault();
    var person = people[$('form').find('input').val()];
    var personTasks = ToDoList.describeTasksForPerson(person, tasks);
    console.log("Here are Diane's tasks: ");
    for(var task of personTasks){
      $('.all-tasks').append("<p>"+task+"</p>");
    };
  });
  $('#workTasks').on('click', function() {
    $('.all-tasks').empty();
    var certainTasks = ToDoList.getTasks("WorkTask");
    for(var task of certainTasks) {
      $('.all-tasks').append("<p>"+task.description+"</p>");
    }
  })

  $('#homeTasks').on('click', function() {
    $('.all-tasks').empty();
    var certainTasks = ToDoList.getTasks("HomeTask");
    for(var task of certainTasks) {
      $('.all-tasks').append("<p>"+task.description+"</p>");
    }
  })

  $('#hobbyTasks').on('click', function() {
    $('.all-tasks').empty();
    var certainTasks = ToDoList.getTasks("HobbyTask");
    for(var task of certainTasks) {
      $('.all-tasks').append("<p>"+task.description+"</p>");
    }
  })

  $('#highTasks').on('click', function() {
    $('.all-tasks').empty();
    var certainTasks = ToDoList.getTasksByPriority("High");
    for(var task of certainTasks) {
      $('.all-tasks').append("<p>"+task.description+"</p>");
    }
  })

});
