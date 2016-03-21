/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var getTasks = function(task_type: string) {
    var arr: array = [];
    for (var task of tasks) {
      if (task.constructor.name === task_type) {
        arr.push(task);
      }
    }
    return arr;
  }

  export var getTasksByPriority = function (priority: string) {
    var arr: array = [];
    for (var task of tasks) {
      if (task.priority === priority) {
        arr.push(task);
      }
    }
    return arr;
  }
}
