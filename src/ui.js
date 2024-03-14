import {createProject, projectsList, getProjectByName} from './project';

export default function(){
    function createHeader(){
        const header = document.querySelector('header');
        const h1 = document.createElement('h1');
        h1.textContent = 'To-Do List';
        header.append(h1);
    }
    function createFooter(){
        const content = document.querySelector('#content');
        const footer = document.querySelector('footer');
        const copyrightParagraph = document.createElement('p');
        copyrightParagraph.innerHTML = `Copyright &copy;<span id="year">${new Date().getFullYear()}</span> sebastianmsz`;
        const githubLink = document.createElement('a');
        githubLink.href = 'https://github.com/sebastianmsz';
        githubLink.target = '_blank';
        githubLink.innerHTML = '<i class="fa fa-github" aria-hidden="true"></i>';
        copyrightParagraph.appendChild(githubLink);
        footer.appendChild(copyrightParagraph);
        content.appendChild(footer);
    }
    function clickHomeButton(){
        let homeProjectBtn = document.querySelector('#homeProjectBtn');
        homeProjectBtn.dispatchEvent(new Event('click'));
    }
    createHeader();
    createFooter();
    updateProjectsListUi();
    clickHomeButton();

    function createAddProjectBtn(){
        const addProjectBtn = document.createElement('button');
        addProjectBtn.textContent = 'Add Project';
        addProjectBtn.className = 'add-project-btn';
        addProjectBtn.addEventListener('click', addProjectBtnHandler)
        
        function addProjectBtnHandler(){
            this.replaceWith(createAddProjectForm());
        }

        return addProjectBtn;
    }

    function createForm(formType, submitHandler, updater) {
        const form = document.createElement('div');
        form.className = 'add-' + formType + '-form';
      
        const input = document.createElement('input');
        input.placeholder = `${formType[0].toUpperCase() + formType.slice(1)} Name`;
      
        function createButton(buttonText, clickHandler) {
          const button = document.createElement('button');
          button.textContent = buttonText;
          button.addEventListener('click', clickHandler);
          return button;
        }
      
        const cancelBtn = createButton('Cancel', () => form.replaceWith(createAddProjectBtn()));
      
        const confirmBtn = createButton('Confirm', () => {
          submitHandler(input.value);
          updater();
        });
      
        const buttons = document.createElement('div');
        buttons.append(cancelBtn, confirmBtn);
      
        form.append(input, buttons);
        return form;
    }
      
    function createAddProjectForm() {
    return createForm('project', createProject, updateProjectsListUi);
    }

    function projectBtnTemplate(name){
        const projectBtn = document.createElement('button');
        const project = getProjectByName(name);
        const content = document.querySelector('#content');
        projectBtn.textContent = project.name;
        projectBtn.addEventListener('click', updateTasksListUi);
        function updateTasksListUi(){
            content.textContent = '';
            const h2 = document.createElement('h2')
            h2.textContent = project.name;
            content.appendChild(h2);
            project.tasks.forEach(task => {
                content.appendChild(taskElementTemplate(task.name))
            });
            content.append(createAddTaskBtn());
            if (projectsList.indexOf(project)>2){
                content.append(createDeleteProjectBtn());
            }

            function createDeleteProjectBtn(){
                const deleteProjectBtn = document.createElement('button');
                deleteProjectBtn.textContent = 'Delete Project';
                deleteProjectBtn.addEventListener('click', deleteProjectBtnHandler);
                function deleteProjectBtnHandler(){
                    project.deleteProject();
                    updateProjectsListUi();
                    clickHomeButton();
                }
                return deleteProjectBtn;
            }
            function createAddTaskBtn(){
                const addTaskBtn = document.createElement('button');
                addTaskBtn.textContent = 'Add Task';
                addTaskBtn.addEventListener('click',addTaskBtnHandler);
                function addTaskBtnHandler(){
                    this.replaceWith(createAddTaskForm(project))
                }
                return addTaskBtn;
            }
            function taskElementTemplate(taskName){
                const taskElement = document.createElement('div');
                const taskNameContainer = document.createElement('div')
                taskNameContainer.textContent = taskName;
                taskElement.className = 'task';
                taskElement.append(taskNameContainer, createDeleteTaskBtn());
                function createDeleteTaskBtn(){
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'X';
                    deleteBtn.addEventListener('click', deleteBtnHandler);
                    function deleteBtnHandler(){
                        project.removeTask(taskName);
                        updateTasksListUi();
                    }
                    return deleteBtn;
                }
                return taskElement;
            }
            function createAddTaskForm(project) {
                return createForm('task', (taskName) => project.addTask(taskName), updateTasksListUi);
            }
        }
        return projectBtn;
    }
    function updateProjectsListUi(){
        const aside = document.querySelector('aside');       
        aside.textContent = '';
        const homeProjectBtn = projectBtnTemplate('Home');
        homeProjectBtn.id = ('homeProjectBtn');
        const todayProjectBtn = projectBtnTemplate('Today');
        const thisWeekProjectBtn = projectBtnTemplate('This Week');
        aside.append(homeProjectBtn, todayProjectBtn, thisWeekProjectBtn)
        const h2 = document.createElement('h2');
        h2.textContent = 'Projects';
        aside.appendChild(h2);
        aside.appendChild(createAddProjectBtn());
        if (projectsList.length>3){
            for (let i = 3; i < projectsList.length; i++) {
                const element = projectBtnTemplate((projectsList[i]).name);
                aside.appendChild(element)
            }
        }
    }
}
