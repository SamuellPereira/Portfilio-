window.onload = function(){



    // =========================
    // EFEITO DIGITAÇÃO VS CODE
    // =========================

    const code = document.getElementById("code");
    const lines = document.getElementById("lines");
    const terminal = document.getElementById("terminal-text");

const developerCode = `const developer = {

    name: "Samuel Pereira",
    location: "Embu das Artes - SP",

    stack: [

        "HTML",
        "CSS",
        "JavaScript",
        "React"

    ]

}

console.log("Hello, World!");`;


const designerCode = `const designer = {

    name: "Samuel Pereira",

    focus: [

        "UI Design",
        "UX Experience",
        "Design Systems",
        "Prototyping"

    ]

}

console.log("Creating experiences...");`;


const developerSkills = [
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 85 },
    { name: "JavaScript", progress: 75 },
    { name: "React", progress: 65 },
    { name: "SQL", progress: 80 },
    { name: "Python", progress: 60 }
];

const designerSkills = [
    { name: "Figma", progress: 95 },
    { name: "UI Design", progress: 90 },
    { name: "UX Research", progress: 85 },
    { name: "Design Systems", progress: 92 },
    { name: "Prototyping", progress: 88 },
    { name: "Photoshop", progress: 70 }
];



    let activeCode = developerCode;

    let isDesignerMode = false;

    let i = 0;

    let currentCode = "";

    let codeFinished = false;

    let typingTimer;



function updateLines(){

    let totalLines = code.textContent.split("\n").length;

    let numbers = "";

    for(let i = 1; i <= totalLines; i++){

        numbers += i + "<br>";

    }

    lines.innerHTML = numbers;

}



function writeCode(){

    if(i < activeCode.length){

        currentCode += activeCode[i];

        code.textContent = currentCode;

        updateLines();

        i++;

        typingTimer = setTimeout(writeCode,50);

    }else{

        codeFinished = true;


    }

}




    function restartCode(){

    clearTimeout(typingTimer);

    currentCode = "";

    i = 0;

    codeFinished = false;


    code.textContent = "";

    lines.innerHTML = "";


    terminal.innerHTML = "";

    terminalIndex = 0;

    charIndex = 0;


    writeCode();

}



        // =========================
        // TERMINAL
        // =========================


        const developerMessages = [
            "loading skills...",
            "✓ HTML loaded",
            "✓ CSS loaded",
            "✓ JavaScript loaded",
            "✓ React loaded",
            "✓ SQL loaded",
            "Skills initialized successfully."
        ];

        const designerMessages = [
            "loading designer tools...",
            "✓ Figma loaded",
            "✓ UI Design loaded",
            "✓ UX Research loaded",
            "✓ Design Systems loaded",
            "✓ Prototyping loaded",
            "Designer workspace ready."
        ];

        let messages = developerMessages;



        let terminalIndex = 0;
        let charIndex = 0;


        function startTerminal(){

            terminal.innerHTML = "";

            terminalIndex = 0;

            charIndex = 0;

            terminalWrite();

        }




        function terminalWrite(){


            if(terminalIndex < messages.length){


                let message = messages[terminalIndex];



                if(charIndex < message.length){


                    terminal.innerHTML += message.charAt(charIndex);


                    charIndex++;


                    setTimeout(terminalWrite,50);



                }else{


                    terminal.innerHTML += "<br>";


                    terminalIndex++;

                    charIndex = 0;


                    setTimeout(terminalWrite,500);


                }



            }else{


                startSkills();


            }



        }






        // =========================
        // BARRAS DE SKILL
        // =========================

        function updateSkills(skills){

    const titles = document.querySelectorAll(".skill-card h3");
    const bars = document.querySelectorAll(".bar span");
    const percents = document.querySelectorAll(".skill-card p:last-child");

    skills.forEach((skill, index)=>{

        titles[index].textContent = skill.name;

        percents[index].textContent = skill.progress + "%";

        bars[index].dataset.progress = skill.progress;

        bars[index].style.width = "0%";

    });

}

        function startSkills(){


            const skills = document.querySelectorAll(".bar span");



            skills.forEach((skill,index)=>{


                setTimeout(()=>{


                    let progress = skill.dataset.progress;


                    skill.style.width = progress + "%";



                }, index * 300);



            });



        }

    const path = document.getElementById("terminal-path");

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 150;

            if(scrollY >= top){

                current = section.id;

            }

        });

        switch(current){

            case "sobre":
                path.innerHTML = "samuel@Portfolio:~/about$";
                break;

            case "stack":
                path.innerHTML = "samuel@Portfolio:~/skills$";
                break;

            case "career":
                path.innerHTML = "samuel@Portfolio:~/career$";
                break;

            case "projetos":
                path.innerHTML = "samuel@Portfolio:~/projects$";
                break;

            case "contato":
                path.innerHTML = "samuel@Portfolio:~/contact$";
                break;

            default:
                path.innerHTML = "samuel@Portfolio:~$";

        }

    });

    // =========================
// GIT LOG
// =========================

const git = document.getElementById("git-log");


const developerGitText = `samuel@PortfolioOS:~$ git log --career

commit code-first

Author: Samuel Pereira
Date: 2022

✔ Primeiro contato com programação
✔ Curiosidade sobre como sistemas funcionam
✔ Primeiros estudos em tecnologia

------------------------------------

commit web-foundations

Author: Samuel Pereira
Date: 2023

✔ HTML
✔ CSS
✔ JavaScript
✔ Primeiros projetos web
✔ Início da graduação em ADS

------------------------------------

commit database-development

Author: Samuel Pereira
Date: 2024

✔ SQL
✔ Banco de Dados
✔ Projetos acadêmicos
✔ Evolução como desenvolvedor

------------------------------------

commit fullstack-learning

Author: Samuel Pereira
Date: 2025

✔ React
✔ Python
✔ Power BI
✔ Projetos pessoais

------------------------------------

commit PortfolioOS-v1.0

Author: Samuel Pereira
Date: 2026

✔ Conclusão da graduação em ADS
✔ Desenvolvimento do PortfolioOS
✔ Front-end Developer
✔ Building the next version...`;


const designerGitText = `samuel@UIStudio:~$ git log --design

commit ux-first-contact

Author: Samuel Pereira
Date: 2022

✔ Primeiro contato com UI/UX Design
✔ Interesse por experiências digitais
✔ Estudos sobre interfaces

------------------------------------

commit design-foundations

Author: Samuel Pereira
Date: 2023

✔ Curso UI/UX Alura + Oracle
✔ Design Thinking
✔ Experiência do usuário
✔ Criação de interfaces

------------------------------------

commit academic-design

Author: Samuel Pereira
Date: 2024

✔ Projetos acadêmicos
✔ Aplicação de conceitos UX/UI
✔ Prototipação de soluções digitais

------------------------------------

commit data-visualization

Author: Samuel Pereira
Date: 2025

✔ Criação de dashboards Power BI
✔ Organização visual de informações
✔ Interfaces orientadas a dados

------------------------------------

commit UIStudio-v1.0

Author: Samuel Pereira
Date: 2026

✔ Design & Experience
✔ UI/UX Designer
✔ Criação de experiências digitais
✔ Building the next version...`;


let gitText = developerGitText;
let gitIndex = 0;
let gitStarted = false;

    function writeGit(){

        if(gitIndex < gitText.length){

            git.textContent += gitText.charAt(gitIndex);

            gitIndex++;

            setTimeout(writeGit,15);

        }

    }

    // =========================
    // ANIMAÇÃO GIT LOG
    // =========================

    const careerSection = document.getElementById("career");

    if(careerSection && git){

        const gitObserver = new IntersectionObserver((entries)=>{

            if(entries[0].isIntersecting && !gitStarted){

                gitStarted = true;

            writeGit();

}
        },{
            threshold: 0.4
        });

        gitObserver.observe(careerSection);

    }

        // =========================
        // STACK LOADER
        // =========================

        const stackSection = document.getElementById("stack");

        let stackLoaded = false;


        const stackObserver = new IntersectionObserver((entries)=>{

            if(entries[0].isIntersecting){

                stackLoaded = true;

                startTerminal();

            }

        },{
            threshold:0.4
        });


        if(stackSection){

            stackObserver.observe(stackSection);

        }

    // =========================
    // SCROLL REVEAL
    // =========================


    const reveals = document.querySelectorAll(".reveal");


    const revealObserver = new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("active");


            }


        });


    },{


        threshold:0.15


    });



    reveals.forEach(section=>{


        revealObserver.observe(section);


    });

        writeCode();

    // =========================
    // Preto / Branco
    // =========================

    const theme = document.getElementById("theme");
    const themeText = document.querySelector(".theme-text");
    const terminalPath = document.getElementById("terminal-path");
    const heroTitle = document.getElementById("hero-title");
    const heroRole = document.getElementById("hero-role");
    const fileName = document.querySelector(".file-name");
    const bioTitle = document.getElementById("bio-title");
    const profileRole = document.getElementById("profile-role");
    const profileInfo = document.getElementById("profile-info");
    const profileImage = document.getElementById("profile-image");
    const bioText1 = document.getElementById("bio-text-1");
    const bioText2 = document.getElementById("bio-text-2");
    const bioText3 = document.getElementById("bio-text-3");
    

themeText.innerHTML = "⚡ Experimente modo Branco";

    theme.addEventListener("change",()=>{


        document.body.classList.toggle("light");


        isDesignerMode = document.body.classList.contains("light");



        if(isDesignerMode){

        themeText.innerHTML = "⚡ Voltar para modo Preto";

        terminalPath.style.color = "#111";

    terminalPath.innerHTML =
    "samuel@UIStudio:~$";


    heroTitle.innerHTML =
    "Design & Experience";


    heroRole.innerHTML =
    "UI/UX Designer";


    fileName.innerHTML =
    "design.fig";


    activeCode = designerCode;
    updateSkills(designerSkills);
    messages = designerMessages;
    

    git.textContent = "";
    gitIndex = 0;
    gitText = designerGitText;
    gitStarted = false;


    profileRole.innerHTML = "UI/UX Designer";

    profileInfo.innerHTML = `
    <p>🎨 Figma</p>
    <p>✨ Design Systems</p>
    <p>📱 UX Experience</p>
    `;

    profileImage.src = "assets/img/designer.png";

        }else{

        themeText.innerHTML = "Experimente usar o modo Branco";

            terminalPath.style.color = "";

    terminalPath.innerHTML =
    "samuel@PortfolioOS:~$";


    heroTitle.innerHTML =
    "Meu Portfólio";


    heroRole.innerHTML =
    "Front-end Developer";


    fileName.innerHTML =
    "developer.js";


    activeCode = developerCode;
    updateSkills(developerSkills);
    messages = developerMessages;


    git.textContent = "";
    gitIndex = 0;
    gitText = developerGitText;
    gitStarted = false;


    profileRole.innerHTML = "Front-end Developer";

            profileInfo.innerHTML = `
            <p>📍 São Paulo - SP</p>
            <p>🎓 Análise e Desenvolvimento de Sistemas</p>
            <p>💻 JavaScript | React</p>
            `;
            profileImage.src = "assets/img/samuel.jpg";


            bioTitle.innerHTML = "Olá, eu sou Samuel Pereira";

            bioText1.innerHTML =
            "Desenvolvedor Front-end apaixonado por tecnologia, interfaces modernas e criação de experiências digitais.";

            bioText2.innerHTML =
            "Atualmente desenvolvo projetos utilizando HTML, CSS, JavaScript e React, buscando transformar ideias em soluções funcionais e intuitivas.";

            bioText3.innerHTML =
            "Minha jornada começou pela curiosidade de entender como as coisas funcionam. Hoje transformo essa curiosidade em código e continuo evoluindo a cada projeto.";

        }


            restartCode();

    terminal.innerHTML = "";

    terminalIndex = 0;

    charIndex = 0;

    stackLoaded = false;
        
    });

};