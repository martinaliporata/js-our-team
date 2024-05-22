const workers = 
    [
        {
            name : 'Wayne Barnett',
            'job-title' : 'Founder & CEO',
            img : 'wayne-barnett-founder-ceo.jpg'
        },
        {
            name : 'Angela Caroll',
            'job-title' : 'Chief Editor',
            img : 'angela-caroll-chief-editor.jpg'
        },
        {
            name : 'Walter Gordon',
            'job-title' : 'Office Manager',
            img : 'walter-gordon-office-manager.jpg'
        },
        {
            name : 'Angela Lopez',
            'job-title' : 'Social Media Manager',
            img : 'angela-lopez-social-media-manager.jpg'
        },
        {
            name : 'Scott Estrada',
            'job-title' : 'Developer',
            img : 'scott-estrada-developer.jpg'
        },
        {
            name : 'Barbara Ramos',
            'job-title' : 'Graphic Designer',
            img : 'barbara-ramos-graphic-designer.jpg'
        }

    ]

console.log(workers)

const container = document.getElementById('list');

// Funzione per visualizzare le informazioni delle persone sul DOM
function workers(peopleArray) {
    // Svuota il contenitore prima di aggiungere nuovi elementi
    container.innerHTML = '';
    
    // Itera attraverso l'array di persone
    for (let key in workers){

        const peopleIn = document.createElement('div');
        
        peopleIn.textContent = `Name: ${workers.name}, Job-title: ${workers.job-title}, Img: ${workers.img}`;
        
        container.appendChild(peopleIn);
    };
}

// Chiama la funzione per visualizzare le persone
workers(persone);