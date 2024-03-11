import {createProject, projectsList, getProjectByName} from './project';

export default function(){
    function header(){
        const header = document.querySelector('header');
        const h1 = document.createElement('h1');
        h1.textContent = 'To-Do List';
        header.append(h1);
    }
    function aside(){
        const aside = document.querySelector('aside')
        const homeBtn = document.createElement('button');
        const todayBtn = document.createElement('button');
        const thisWeekBtn = document.createElement('button');

        homeBtn.textContent = 'Home';
        todayBtn.textContent = 'Today';
        thisWeekBtn.textContent = 'This Week';
        
        aside.append(homeBtn, todayBtn, thisWeekBtn);
        
        const projectsH2 = document.createElement('h2');
        const asideUl = document.createElement('ul')

        projectsH2.textContent = 'Projects';

        asideUl.appendChild(createAddProjectBtn())
        aside.append(projectsH2, asideUl);
    }
    function content(){
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

    function createAddProjectBtn(){
        const addProjectBtn = document.createElement('button');
        addProjectBtn.textContent = 'Add Project';
        addProjectBtn.id = 'addProjectBtn';
        addProjectBtn.addEventListener('click', addProjectBtnHandler)
        
        function addProjectBtnHandler(){
            const asideUl = document.querySelector('aside>ul');
            this.remove();
            asideUl.appendChild(createAddProjectForm())
        }

        return addProjectBtn;
    }
    function createAddProjectForm(){
        const asideUl = document.querySelector('aside>ul');
        const addProjectForm = document.createElement('div');
        const input = document.createElement('input');
        const buttons = document.createElement('div');
        
        addProjectForm.className = 'add-project-form';
        input.placeholder = 'Project Name'
        
        function createCancelBtn(){
            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', cancelBtnHandler);
            function cancelBtnHandler(){
                addProjectForm.remove();
                asideUl.appendChild(createAddProjectBtn());
            }
            return cancelBtn;
        }

        function createConfirmBtn(){
            const confirmBtn = document.createElement('button');
            confirmBtn.textContent = 'Confirm';
            confirmBtn.addEventListener('click', confirmBtnHandler);
            function confirmBtnHandler(){
                createProject(input.value);
                updateProjectsListUi();
            }
            return confirmBtn;
        }

        buttons.append(createCancelBtn(), createConfirmBtn())
        addProjectForm.append(input, buttons)

        return addProjectForm;
    }
    function projectBtnTemplate(name){
        const projectBtn = document.createElement('button');
        const project = getProjectByName(name);
        const contentUl = document.querySelector('#content>ul')
        projectBtn.textContent = project.name;
        projectBtn.addEventListener('click', projectBtnHandler);
        function projectBtnHandler(){
            contentUl.textContent = '';
            project.tasks.forEach(task => {
                contentUl.appendChild(taskElementTemplate(task.name))
            });
            contentUl.append(createAddTaskBtn(), createDeleteProjectBtn())

            function createDeleteProjectBtn(){
                const deleteProjectBtn = document.createElement('button');
                deleteProjectBtn.textContent = 'Delete Project';
                deleteProjectBtn.addEventListener('click',()=>{
                    project.deleteProject();
                    updateProjectsListUi()
                    contentUl.textContent = '';
                })
                return deleteProjectBtn;
            }
            function createAddTaskBtn(){
                const addTaskBtn = document.createElement('button');
                addTaskBtn.textContent = 'Add Task';
                addTaskBtn.addEventListener('click',addTaskBtnHandler);
                function addTaskBtnHandler(){
                    updateTaskListUi();
                }
                return addTaskBtn;
            }
            function taskElementTemplate(taskName){
                const taskButton = document.createElement('div');
                taskButton.textContent = taskName;
                return taskButton;
            }
            function updateTaskListUi(){
                const contentUl = document.querySelector('#content>ul');
                updateListUi(project.tasks, contentUl, taskElementTemplate, createAddTaskBtn, createDeleteProjectBtn);
            }
        }
        return projectBtn;
    }
    
    function updateProjectsListUi(){
        const asideUl = document.querySelector('aside>ul')
        updateListUi(projectsList, asideUl, projectBtnTemplate, createAddProjectBtn);
    }
    function updateListUi(array, ul, objTemplate, ...buttons){
        ul.textContent = '';
        array.forEach(obj => {
            ul.appendChild(objTemplate(obj.name))
        });
        buttons.forEach(button => {
            ul.appendChild(button())
        });
    }

    header();
    aside();
    content();
}