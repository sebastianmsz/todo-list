import task from './task'

export default function(name){
    return {
        name: name,
        tasks: [],
        addTask(name, description, dueDate, priority){
            const newTask = task(name, description, dueDate, priority);
            this.tasks.push(newTask)
        }
    }
}