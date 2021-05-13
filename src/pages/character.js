import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const poke = getHash();
    const pokemon = await getData(poke);
    if (pokemon) {
        const { id, abilities, name, types, weight, height, stats } = pokemon;
        const view = `
        <div class="Characters-inner">

            <article class="Characters-card_img">
                <h2>${name}</h2>
                <img src='https://pokeres.bastionbot.org/images/pokemon/${id}.png' alt="${name}" />
            </article>

            <article class="Characters-card_stats">
                <h3 class="Titulo-h3">Tipos:</h3>

                <ul class="Tipos">
                    ${types.map( type => '<li>' + type.type.name + '</li>').join('')}
                </ul>

                <h3 class="Titulo-h3">Habilidades:</h3>

                <ul class="Habilidades">
                    ${abilities.map(
                        ability => `<li>${ability.ability.name} ${ability.is_hidden ? '(Oculta)':''}</li>`
                    ).join('')}
                </ul>

                <h3 class="Titulo-h3">Estadísticas base:</h3>
                <ul class="StatsBase">

                    ${stats.map(
                        stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`
                    ).join('')}
                </ul>

                <p>Peso: ${weight/10} Kg.</p>

                <p>Altura: ${height/10} m.</p>
            </article>

        </div>
        `;
        return view;
    }
}

export default Character;