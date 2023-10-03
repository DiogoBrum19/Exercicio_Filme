const filmes = [
    {
        nome: "Lobo de Wall Street",
        genero: "Comedia/Drama",
        indicacaoIdade: 18,
        dataLançamento: 2013,
        poster : "https://br.web.img3.acsta.net/r_1280_720/pictures/210/604/21060483_20131125114549726.jpg",
        atores: [
            "Leonardo DiCaprio",
            "Jonah Hill",


        ]
    },
    {
        nome: "Interestelar",
        genero: "Ficção científica/Aventura",
        indicacaoIdade: 10,
        dataLançamento: 2014,
        poster: "https://uauposters.com.br/media/catalog/product/4/1/411320150509-uau-posters-filmes-interestelar-interestellar.jpg",
        atores: [
            "Matthew McConaughey",
            "Anne Hathaway",
        ]
    },
    {
        nome: "Joker",
        genero: "Drama/Crime",
        indicacaoIdade: 16,
        dataLançamento: 2019,
        poster: "https://img.elo7.com.br/product/main/2A1A4B7/big-poster-filme-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg",
        atores: [
            "Joaquin Phoenix",
            "Robert De Niro",
        ]
    },
]
const htmlList = document.querySelector("#Filmes");
const anoReferencia = new Date().getFullYear();
for (let filme of filmes){

    const idadeFilme = anoReferencia - filme.dataLançamento;
    
    const pNome = document.createElement('p');
    pNome.textContent = `Nome do filme: ${filme.nome}`;
    htmlList.appendChild(pNome);
    
    const pIdade = document.createElement('p');
    pIdade.textContent = `${filme.nome} tem ${idadeFilme} anos`;
    htmlList.appendChild(pIdade);
    const img = document.createElement("img");
    img.src = filme.poster;
    htmlList.appendChild(img)
}
    