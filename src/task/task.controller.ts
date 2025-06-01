import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service'; // Importing the TaskService to use its methods

@Controller('task') // The @Controller decorator defines a controller for handling requests to the 'task' route
export class TaskController {
    // This controller will handle task-related routes
    // You can define methods here to handle specific HTTP requests
    // For example, you might have methods for creating, retrieving, updating, and deleting tasks

    constructor(private readonly taskService: TaskService) {} // Injecting the TaskService to use its methods
    // “Cuando construyas esta clase (TaskController), necesito que me entregues una instancia de TaskService, 
    // y guárdala como una propiedad privada llamada taskService para que pueda usarla en mis métodos.”

    @Get() // Other Http methods like @Post, @Put, @Delete can be used for other operations
    getTasks() {
        return this.taskService.getTasks();
    }
}
