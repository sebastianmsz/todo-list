export default function(name, description, dueDate, priority) {
    return {
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        modifyName(newName) {
            this.name = newName;
        },
        modifyDescription(newDescription) {
            this.description = newDescription;
        },
        modifyDueDate(newDueDate) {
            this.dueDate = newDueDate;
        },
        modifyPriority(newPriority) {
            this.priority = newPriority;
        }
    };
}