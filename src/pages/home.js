import getData from '../utils/getData'

const Home = async () => {
    const characters = await getData();
    const view = `
        <div class='Characters'>
        ${characters.results.map( (pokemon, index) => `

            <article class='Characters-item'>
                <a href='#/${pokemon.name}/'>
                    <img src='https://pokeres.bastionbot.org/images/pokemon/${index+1}.png' alt='${pokemon.name}' />
                    <h2>${pokemon.name}</h2>
                </a>
            </article>
        `).join('')}

        </div>
    `;
    return view;
};

export default Home;