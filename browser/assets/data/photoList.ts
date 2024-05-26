import { photoTemplate } from "./photoTemplate";

export const photoList: photoTemplate[] = [
    {
        title: 'Photo de rue',
        pic: '../../assets/imgs/photoPortfolio/DSC09099.jpg',
        description: 'Il existe autant de définition de la photo de rue que de photographes. Pour moi il s\'agit de capturer la vie quotidienne et de faire ressortir de l\'ordinaire l\'extraordinaire.',
        routingKey: 'StreetPhoto'
    },
    {
        title: 'Drag shows',
        pic: '../../assets/imgs/photoPortfolio/DSC03481.jpg',
        description: 'Depuis quasiment un an je fréquente la scène drag clermontoise, j\'ai eu la chance de prendre en photo au cours de leurs performances bons nombre d\'artistes clermontoix',
        routingKey: 'DragShows'
    },
    {
        title: 'Paysages',
        pic: '../../assets/imgs/photoPortfolio/IMG_1861.jpg',
        description: 'Passionné par la nature et les sciences naturelles il m\est très courant aussi de photographier les grands espaces auvergnats, les cieux déchirés par les orages ou encore les profondeurs du ciel étoilé.',
        routingKey: 'Landscape'
    }
]

// {
//     title: '',
//     pic: '',
//     description: '',
//     routingKey: ''
// }