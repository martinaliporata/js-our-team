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

function workers(peopleArray) {
    container.innerHTML = '';
    
    for (let key in workers){

        const peopleIn = document.createElement('div');
        
        peopleIn.textContent = `Name: ${workers.name}, Job-title: ${workers.job-title}, Img: ${workers.img}`;
        
        container.appendChild(peopleIn);
    };
}

workers(persone);

for (let index = 0; index < 6; index++) {
    const AddImage = document.getElementById("photos");
    const img = document.createElement("img");
    img.src = "";
    photos.appendChild(img);
    }