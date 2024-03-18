let projectsList = [];

if (localStorage.getItem('projectsList')){
	projectsList = JSON.parse(localStorage.getItem('projectsList'));
	projectsList.forEach(project => {
		project.addTask = addTask;
		project.removeTask = removeTask;
		project.deleteProject = deleteProject;
		project.modifyName = modifyName;
		project.tasks.forEach(task => {
			task.modifyName = modifyName;
		});
	});
}

function task(name, description, dueDate, priority) {
    return {
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        modifyName: modifyName
    };
}
function project(name) {
	return {
		name: name,
		tasks: [],
		addTask: addTask,
		removeTask: removeTask,
		deleteProject: deleteProject,
		modifyName: modifyName
	};
}

function modifyName(newName) {
	if (!newName || typeof newName !== 'string') {
	  throw new Error('Invalid project name. Please provide a valid name.');
	}
	this.name = newName;
	updateLocalStorage();
}

function addTask(name, description, dueDate, priority) {
	if (!name || typeof name !== 'string') {
	  throw new Error('Invalid task name. Please provide a valid name.');
	}
	const existingTask = this.tasks.find(task => task.name === name);
	if (existingTask) {
	  throw new Error('A task with the same name already exists.');
	}
	try {
	  const newTask = task(name, description, dueDate, priority);
	  this.tasks.push(newTask);
	  updateLocalStorage();
	} catch (error) {
	  console.error('Error creating task:', error.message);
	  throw error;
	}
}

function removeTask(taskName) {
	this.tasks = this.tasks.filter(task => task.name !== taskName);
	updateLocalStorage();
}

function deleteProject() {
	const index = projectsList.findIndex(proj => proj === this);
	if (index !== -1) {
	  projectsList.splice(index, 1);
	  updateLocalStorage();
	}
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
    updateLocalStorage();
    return newProject;
  } catch (error) {
    console.error('Error creating project:', error.message);
    throw error;
  }
}

function getProjectByName(name) {
  return projectsList.find(project => project.name === name);
}

function updateLocalStorage() {
  try {
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
  } catch (error) {
    console.error('Error saving to local storage:', error.message);
  }
}

export { createProject, projectsList, getProjectByName };