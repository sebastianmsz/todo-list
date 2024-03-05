export default function(){
    const body = document.querySelector('body');

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'To-Do List';
    header.append(h1);
    
    const aside = document.createElement('aside');
    const homeBtn = document.createElement('button');
    const todayBtn = document.createElement('button');
    const thisWeekBtn = document.createElement('button');
    const projectsH2 = document.createElement('h2');
    const addTaskBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    todayBtn.textContent = 'Today';
    thisWeekBtn.textContent = 'This Week';
    projectsH2.textContent = 'Projects';
    addTaskBtn.textContent = 'Add task';
    aside.append(homeBtn, todayBtn, thisWeekBtn, projectsH2, addTaskBtn);

    const main = document.createElement('main');
    const footer = document.createElement('footer');
    const copyrightParagraph = document.createElement('p');
    copyrightParagraph.textContent = 'Copyright ';
    const copyrightSpan = document.createElement('span');
    copyrightSpan.classList.add('copy');
    copyrightSpan.innerHTML = '&copy;';
    copyrightParagraph.appendChild(copyrightSpan);
    const currentYearSpan = document.createElement('span');
    currentYearSpan.id = 'year';
    currentYearSpan.textContent = new Date().getFullYear();
    copyrightParagraph.appendChild(currentYearSpan);
    copyrightParagraph.textContent += ' sebastianmsz ';
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/sebastianmsz';
    githubLink.target = '_blank';
    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa', 'fa-github');
    githubIcon.setAttribute('aria-hidden', 'true');
    githubLink.appendChild(githubIcon);
    copyrightParagraph.appendChild(githubLink);
    footer.appendChild(copyrightParagraph);
    main.appendChild(footer);

    body.append(header,aside,main)
}