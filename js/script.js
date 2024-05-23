const containerEl = document.querySelector('section#output')
const workers = 
    [
        {
            name : 'Wayne Barnett',
            role : 'Founder & CEO',
            image : 'wayne-barnett-founder-ceo.jpg'
        },
        {
            name : 'Angela Caroll',
            'job-title' : 'Chief Editor',
            image : 'angela-caroll-chief-editor.jpg'
        },
        {
            name : 'Walter Gordon',
            role : 'Office Manager',
            image : 'walter-gordon-office-manager.jpg'
        },
        {
            name : 'Angela Lopez',
            role: 'Social Media Manager',
            image : 'angela-lopez-social-media-manager.jpg'
        },
        {
            name : 'Scott Estrada',
            role : 'Developer',
            image : 'scott-estrada-developer.jpg'
        },
        {
            name : 'Barbara Ramos',
            role : 'Graphic Designer',
            image : 'barbara-ramos-graphic-designer.jpg'
        }
    ]

for (let index= 0; index <workers.length; index++){
    const worker = workers[index]
    console.log(worker.name, worker.role, worker.image);
    // containerEl.append(worker.name, worker.role, '---');
    const cardEl = document.createElement('article')

    const titleEl = document.createElement('h2')
    titleEl.append(worker.name)
    
    const roleEl = document.createElement('p')
    roleEl.append(member.role)

    const imageEl = document.createElement('img')
    imageEl.src= `./img${member.image}`

    cardEl.appendChild(imageEl)
    cardEl.appendChild(titleEl)
    cardEl.appendChild(roleEl)
    
    containerEl.appendChild(cardEl)
};