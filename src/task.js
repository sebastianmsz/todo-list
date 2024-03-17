export default function(name, description, dueDate, priority) {
    return {
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        modifyName(newName) {
            this.name = newName;
        }
    };
}