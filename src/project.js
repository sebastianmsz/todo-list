import task from './task';

const projectsList = [];

function project(name) {
	return {
		name: name,
		tasks: [],
		addTask(name, description, dueDate, priority) {
			const existingTask = this.tasks.find(task => task.name === name);
			if(!name || typeof name !== 'string'){
				throw new Error('Invalid task name. Please provide a valid name.');
			}
			if (existingTask) {
				alert('A project with the same name already exists.');
				throw new Error('A project with the same name already exists.');
			}
			try{
				const newTask = task(name, description, dueDate, priority);
				this.tasks.push(newTask);
			} catch (error) {
				console.error('Error creating task:', error.message);
				throw error;
			}
		},
		removeTask(taskName) {
			this.tasks = this.tasks.filter(task => task.name !== taskName);
		},
		deleteProject() {
			const index = projectsList.findIndex(proj => proj === this);
			if (index !== -1) {
				projectsList.splice(index, 1);
			}
		},
		modifyName(newName) {
			if (!newName || typeof newName !== 'string') {
			  throw new Error('Invalid project name. Please provide a valid name.');
			}
			if (this.name !== newName) {
			  this.name = newName;
			  const projectIndex = projectsList.findIndex(proj => proj === this);
			  if (projectIndex !== -1) {
				projectsList[projectIndex].name = newName;
			  }
			}
		  }
	};
}

function createProject(name) {
	if (!name || typeof name !== 'string') {
		throw new Error('Invalid project name. Please provide a valid name.');
	}
	const existingProject = projectsList.find(project => project.name === name);
	if (existingProject) {
		alert('A project with the same name already exists.');
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