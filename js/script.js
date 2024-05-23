const containerEl = document.querySelector('section#output')
const members = 
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

for (let index= 0; index <members.length; index++){
    const member = members[index]
    console.log(member.name, member.role, member.image);
    const cardEl = document.createElement('article')

    const titleEl = document.createElement('h2')
    titleEl.append(member.name)
    
    const roleEl = document.createElement('p')
    roleEl.append(member.role)

    const imageEl = document.createElement('img')
    imageEl.src= `./imgs/${member.image}`

    cardEl.appendChild(imageEl)
    cardEl.appendChild(titleEl)
    cardEl.appendChild(roleEl)
    
    containerEl.appendChild(cardEl)
};