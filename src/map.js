export const MAP = {
    name: 'Test map',
    longtitude: 5.20,
    lattitude: 51.91,
    zoom: 8,
    maps: [
        {
            gpx:'https://raw.githubusercontent.com/KoenZwijnenburg/upload/master/1.gpx',
            marker: [5.876122494281, 51.822382883129],
            details: {
                description: 'Vandaag waren we op een hele hoge berg.',
                img: 'https://404store.com/2017/08/15/4949794-random-image.jpg',
                title: 'Hoge berg',
                url: 'link1'
            }
        },
        {
            gpx: 'https://raw.githubusercontent.com/KoenZwijnenburg/upload/master/maaskakker_utrecht.gpx',
            marker: [5.6208591289499, 52.129542668339],
            details: {
                description: 'Vandaag reden we door een hele drukke stad.',
                img: 'https://picsum.photos/256/80',
                title: 'Druke stad',
                url: 'link2'
            }
        },
        {
            gpx:'https://raw.githubusercontent.com/KoenZwijnenburg/upload/master/utrecht_oisterwijk.gpx',
            marker: [5.2735727882385, 52.103694977898],
            details: {
                description: 'Vandaag fietsen we langs een hele lange rivier',
                img: 'https://picsum.photos/256/80',
                title: 'Lange rivier',
                url: 'link3'
            }
        }
    ]
}
