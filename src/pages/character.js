import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const poke = getHash();
    const pokemon = await getData(poke);
    if (pokemon) {
        const { id, abilities, name, types, weight, height, stats } = pokemon;
        const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src='https://pokeres.bastionbot.org/images/pokemon/${id}.png' alt="${name}" />
                <h2>${name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Tipos:</h3>
                <ul>
                    ${types.map( type => '<li>' + type.type.name + '</li>').join('')}
                </ul>
                <h3>Habilidades:</h3>
                <ul>
                    ${abilities.map(
                        ability => `<li>${ability.ability.name} ${ability.is_hidden ? '(Oculta)':''}</li>`
                    ).join('')}
                </ul>
                <h3>Estadísticas base:</h3>
                <ul>
                    ${stats.map(
                        stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`
                    ).join('')}
                </ul>
                <h3>Peso: ${weight/10} Kg.</h3>
                <h3>Altura: ${height/10} m.</h3>
            </article>
        </div>
        `;
        return view;
    }
}

export default Character;