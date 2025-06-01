import { Injectable } from '@nestjs/common';

@Injectable() // The Injectable decorator marks this class as a provider that can be injected into other classes
export class TaskService {
    // This service will handle the business logic related to tasks
    // For example, it might interact with a database to create, retrieve, update, or delete tasks
    // To interact with a database, you would typically inject a repository or use an ORM like TypeORM or Mongoose
    // For simplicity, we will use a static array to represent tasks in this example

    private tasks = [
        { id: 1, title: 'Task 1', description: 'Description for Task 1' },
        { id: 2, title: 'Task 2', description: 'Description for Task 2' },
        { id: 3, title: 'Task 3', description: 'Description for Task 3' }
    ];

    getTasks() {
        return this.tasks; // We use `this.tasks` to access the private tasks array is like a `self` in Python
    }
}
