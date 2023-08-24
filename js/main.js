const team = [

    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    }


]



// individuo il paragrafo dove scrivere all'interno del DOM

const member = document.getElementById('member')


// capire come scrivere ciclo con forma abbreviata
for(let i=0; i< 6; i++){



member.innerHTML += "Nome:"+team[i].nome+"<br> Ruolo: "+team[i].ruolo+"<br>"+team[i].photo+"<br><br>"

}



