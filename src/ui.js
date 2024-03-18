import { createProject, projectsList, getProjectByName } from './project';

export default function initializeApp() {
    createHeader();
    createFooter();
    updateProjectsListUi();
    clickHomeButton();

    function createHeader() {
        const header = document.querySelector('header');
        const showAsideBtn = document.createElement('button');
        showAsideBtn.innerHTML = '≡';
        showAsideBtn.addEventListener('click', () => {
            const aside = document.querySelector('aside');
            aside.classList.toggle('active-aside');
        });
        const h1 = document.createElement('h1');
        h1.textContent = 'To-Do List';

        header.append(h1, showAsideBtn);
    }

    function createFooter() {
        const content = document.querySelector('#content');
        const footer = document.querySelector('footer');
        const copyrightParagraph = document.createElement('p');
        copyrightParagraph.innerHTML = `Copyright &copy;<span id='year'>${new Date().getFullYear()}</span> sebastianmsz`;
        const githubLink = document.createElement('a');
        githubLink.href = 'https://github.com/sebastianmsz';
        githubLink.target = '_blank';
        githubLink.innerHTML = '<i class="fa fa-github" aria-hidden="true"></i>';
        copyrightParagraph.appendChild(githubLink);
        footer.appendChild(copyrightParagraph);
    }

    function clickHomeButton() {
        const homeProjectBtn = document.querySelector('#homeProjectBtn');
        homeProjectBtn.dispatchEvent(new Event('click'));
    }

    function createForm(formType, submitHandler, updater, addBtn) {
        const formattedType = formType[0].toUpperCase() + formType.slice(1);
        const form = document.createElement('div');
        form.className = 'add-' + formType + '-form';

        const input = document.createElement('input');
        input.placeholder = `${formattedType} Name`;
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                submitHandler(input.value);
                updater();
            }
        });

        const cancelBtn = createButton('Cancel', () => form.replaceWith(addBtn()));
        const confirmBtn = createButton('Confirm', () => {
            submitHandler(input.value);
            updater();
        });

        const buttons = document.createElement('div');
        buttons.append(cancelBtn, confirmBtn);

        form.append(input, buttons);
        return form;
    }

    function createButton(buttonText, clickHandler) {
        const button = document.createElement('button');
        button.textContent = buttonText;
        button.addEventListener('click', clickHandler);
        return button;
    }

    function createAddProjectBtn() {
        const addProjectBtn = document.createElement('button');
        addProjectBtn.textContent = 'Add Project';
        addProjectBtn.className = 'add-project-btn';
        addProjectBtn.addEventListener('click', addProjectBtnHandler);

        function addProjectBtnHandler() {
            addProjectBtn.replaceWith(createForm('project', createProject, updateProjectsListUi, createAddProjectBtn));
        }

        return addProjectBtn;
    }

    function projectBtnTemplate(name) {
        const projectBtn = document.createElement('button');
        const project = getProjectByName(name);
        projectBtn.className = 'project';
        projectBtn.textContent = project.name;
        projectBtn.addEventListener('click', () => {
            updateTasksListUi();
            setActiveProjectBtnClass();
        });

        function setActiveProjectBtnClass() {
            const projectsBtn = document.querySelectorAll('.project');
            projectsBtn.forEach(btn => btn.className = 'project');
            projectBtn.classList.add('active-project-btn');
        }

        function updateTasksListUi() {
            const content = document.querySelector('#content');
            content.textContent = '';
            const h2 = document.createElement('h2');
            h2.textContent = project.name;
            content.appendChild(h2);

            project.tasks.forEach(task => {
                content.appendChild(taskElementTemplate(task));
            });

            content.append(createAddTaskBtn());
            if (projectsList.indexOf(project) > 2) {
                makeNameEditable(h2, project);
                content.append(createDeleteProjectBtn());
            }
        }

        function createDeleteProjectBtn() {
            const deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.textContent = 'Delete Project';
            deleteProjectBtn.addEventListener('click', () => {
                project.deleteProject();
                updateProjectsListUi();
                clickHomeButton();
            });
            return deleteProjectBtn;
        }

        function createAddTaskBtn() {
            const addTaskBtn = document.createElement('button');
            addTaskBtn.className = 'add-task-button';
            addTaskBtn.textContent = 'Add Task';
            addTaskBtn.addEventListener('click', () => {
                addTaskBtn.replaceWith(createForm('task', (taskName) => project.addTask(taskName), updateTasksListUi, createAddTaskBtn));
            });
            return addTaskBtn;
        }

        function taskElementTemplate(task) {
            const taskElement = document.createElement('div');
            const inputsContainer = document.createElement('div');
            const taskNameContainer = document.createElement('h3');
            taskNameContainer.append(makeNameEditable(document.createElement('span'), task));

            const taskDescriptionContainer = document.createElement('div');
            const taskDescriptionLabel = document.createElement('label');
            taskDescriptionLabel.textContent = 'Task Description:';
            const taskDescription = document.createElement('textarea');
            taskDescription.placeholder = 'Add Task Description...';
            taskDescription.addEventListener('change', () => task.description = taskDescription.value);
            if (task.description) taskDescription.value = task.description;
            taskDescriptionContainer.append(taskDescriptionLabel, taskDescription);

            const taskPriorityContainer = document.createElement('div');
            const taskPriorityLabel = document.createElement('label');
            taskPriorityLabel.textContent = 'Priority:';
            const taskPriority = document.createElement('select');
            ['Low', 'Medium', 'High'].forEach(priority => {
                const option = document.createElement('option');
                option.value = priority;
                option.text = priority;
                taskPriority.appendChild(option);
            });
            taskPriority.value = task.priority || 'Medium';
            taskPriority.addEventListener('change', () => task.priority = taskPriority.value);
            taskPriorityContainer.append(taskPriorityLabel, taskPriority);

            const taskDueDateContainer = document.createElement('div');
            const taskDueDateLabel = document.createElement('label');
            taskDueDateLabel.textContent = 'Due-Date:';
            const taskDueDate = document.createElement('input');
            taskDueDate.type = 'date';
            taskDueDate.value = task.dueDate;
            taskDueDate.addEventListener('change', () => task.dueDate = taskDueDate.value);
            taskDueDateContainer.append(taskDueDateLabel, taskDueDate);

            taskElement.className = 'task';
            inputsContainer.append(taskDueDateContainer, taskPriorityContainer);
            taskElement.append(taskNameContainer, taskDescriptionContainer, inputsContainer, createDeleteTaskBtn());

            function createDeleteTaskBtn() {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '✕';
                deleteBtn.addEventListener('click', () => {
                    project.removeTask(task.name);
                    updateTasksListUi();
                });
                return deleteBtn;
            }

            return taskElement;
        }

        return projectBtn;
    }

    function makeNameEditable(element, type) {
        element.contentEditable = true;
        element.textContent = type.name;

        function objectClickHandler() {
            if (element.textContent) type.modifyName(element.textContent);
            updateProjectsListUi();
            updateTasksListUi();
        }

        element.addEventListener('blur', objectClickHandler);
        element.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                objectClickHandler();
            }
        });
        return element;
    }

    function updateProjectsListUi() {
        const aside = document.querySelector('aside');
        aside.textContent = '';
        const homeProjectBtn = projectBtnTemplate('Home');
        homeProjectBtn.id = ('homeProjectBtn');
        const todayProjectBtn = projectBtnTemplate('Today');
        const thisWeekProjectBtn = projectBtnTemplate('This Week');
        aside.append(homeProjectBtn, todayProjectBtn, thisWeekProjectBtn);

        const h2 = document.createElement('h2');
        h2.textContent = 'Projects';
        aside.appendChild(h2);
        aside.appendChild(createAddProjectBtn());

        if (projectsList.length > 3) {
            const elements = projectsList.slice(3).map(project => projectBtnTemplate(project.name));
            aside.append(...elements.reverse());
            elements[0].dispatchEvent(new Event('click'));
        }
    }
}
