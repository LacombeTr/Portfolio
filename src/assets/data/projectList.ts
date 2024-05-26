import { projectTemplate } from "./projectTemplate";

export const projectsList: projectTemplate[] = [
    {
        title: 'Stubborn button',
        desc: 'Un bouton qui se déplace quand on essaie de le cliquer et se moque du joueur',
        pic: '../../assets/imgs/projects/stubButton.jpg',
        techs: ['HTML','CSS','Javascript']
    },
    {
        title: 'Sudoku Pokemon',
        desc: 'Le clone du Jeu PokeDoku, le joueur doit trouver quel Pokémon correspond aux conditions qui lui sont imposées',
        pic: '../../assets/imgs/projects/sitePokedoku.png',
        techs: ['HTML','CSS','Typescript','Angular']
    },
    {
        title: 'Maison Prunières',
        desc: 'Remise au gout du jour du site web de l\'Hotel Restaurant Prunières à Aumont-Aubrac',
        pic: '../../assets/imgs/projects/sitePruniere.png',
        techs: ['HTML','CSS','Javascript']
    }
]