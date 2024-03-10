import task from './task';

const projectsList = [];

function project(name) {
	return {
		name: name,
		tasks: [],
		addTask(name, description, dueDate, priority) {
			const newTask = task(name, description, dueDate, priority);
			this.tasks.push(newTask);
		},
		removeTask(taskName) {
			this.tasks = this.tasks.filter(task => task.name !== taskName);
		},
		modifyTaskName(taskName, newName) {
			const taskToModify = this.tasks.find(task => task.name === taskName);
			if (taskToModify) {
				taskToModify.modifyName(newName);
			}
		},
		modifyTaskDescription(taskName, newDescription) {
			const taskToModify = this.tasks.find(task => task.name === taskName);
			if (taskToModify) {
				taskToModify.modifyDescription(newDescription);
			}
		},
		modifyTaskDueDate(taskName, newDueDate) {
			const taskToModify = this.tasks.find(task => task.name === taskName);
			if (taskToModify) {
				taskToModify.modifyDueDate(newDueDate);
			}
		},
		modifyTaskPriority(taskName, newPriority) {
			const taskToModify = this.tasks.find(task => task.name === taskName);
			if (taskToModify) {
				taskToModify.modifyPriority(newPriority);
			}
		},
		deleteProject() {
			const index = projectsList.findIndex(proj => proj === this);
			if (index !== -1) {
				projectsList.splice(index, 1);
			}
		},
		modifyProjectName(newName){
			this.name = newName;
		}
	};
}

function createProject(name) {
	if (!name || typeof name !== 'string') {
		throw new Error('Invalid project name. Please provide a valid name.');
	}

	const existingProject = projectsList.find(project => project.name === name);
	if (existingProject) {
		throw new Error('A project with the same name already exists.');
	}

	try {
		const newProject = project(name);
		projectsList.push(newProject);
		return newProject;
	} catch (error) {
		console.error('Error creating project:', error.message);
		throw error;
	}
}


function getProjectByName(name) {
	const foundProject = projectsList.find(project => project.name === name);
	return foundProject;
}
export { createProject, projectsList, getProjectByName };