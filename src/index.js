import './style.css';
import ui from './ui';
import {createProject, projectsList } from './project';
(()=>{
    if (projectsList.length < 3){
        const defaultProjectNames = ['Home', 'Today', 'This Week'];
        defaultProjectNames.forEach(project => {
            createProject(project);
        });
    }
    ui();
})()