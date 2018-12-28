const Store = {
    products: ko.observableArray([
        {
            name: 'Breath of the Wild',
            MSRP: 60,
            distiPrice: 50,
            sku: 'AD897FJA0JA3098',
            platforms: ['Switch'],
            qty: ko.observable(0)
        },
        {
            name: 'Nier Automata',
            MSRP: 40,
            distiPrice: 35,
            sku: 'AD89KJDF0893098',
            platforms: ['PS4', 'XBOX One', 'PC'],
            qty: ko.observable(0)
        },
        {
            name: 'Injustice 2',
            MSRP: 50,
            distiPrice: 40,
            sku: '398LKJGA0JA3098',
            platforms: ['PS4', 'XBOX One', 'PC'],
            qty: ko.observable(0)
        },
        {
            name: 'Heroes of the Storm',
            MSRP: 100,
            distiPrice: 80,
            sku: 'AD897987KLKJ8',
            platforms: ['PC'],
            qty: ko.observable(0)
        },
        {
            name: 'Super Smash Bros.',
            MSRP: 60,
            distiPrice: 50,
            sku: '120984A0JA3098',
            platforms: ['Switch'],
            qty: ko.observable(0)
        },
        {
            name: 'Cuphead',
            MSRP: 30,
            distiPrice: 25,
            sku: 'AD8909870098',
            platforms: ['XBOX One', 'PC'],
            qty: ko.observable(0)
        },
        {
            name: 'Dark Souls: Remastered',
            MSRP: 60,
            distiPrice: 50,
            sku: 'AD89098987097',
            platforms: ['Switch', 'PS4', 'XBOX One', 'PC'],
            qty: ko.observable(0)
        },
        {
            name: 'Return of the Obra Dinn',
            MSRP: 20,
            distiPrice: 15,
            sku: '332958A0JA3098',
            platforms: ['PC'],
            qty: ko.observable(0)
        },
        {
            name: 'Monster Hunter: World',
            MSRP: 60,
            distiPrice: 50,
            sku: '23662340JA3098',
            platforms: ['PC'],
            qty: ko.observable(0)
        },
        {
            name: 'The Witcher 3: Wild Hunt',
            MSRP: 60,
            distiPrice: 50,
            sku: '332958A0JA3098',
            platforms: ['PC', 'PS4', 'XBOX One'],
            qty: ko.observable(0)
        },
        {
            name: 'Assassin\'s Creed: Odyssey',
            MSRP: 60,
            distiPrice: 50,
            sku: '90888A0JA3098',
            platforms: ['PC', 'PS4', 'XBOX One'],
            qty: ko.observable(0)
        },
        {
            name: 'Hollow Knight',
            MSRP: 25,
            distiPrice: 20,
            sku: '89790JA3098',
            platforms: ['PC', 'PS4', 'XBOX One', 'Switch'],
            qty: ko.observable(0)
        },
        {
            name: 'Forza: Horizon 4',
            MSRP: 60,
            distiPrice: 50,
            sku: '23560JA3098',
            platforms: ['PC', 'XBOX One'],
            qty: ko.observable(0)
        },
        {
            name: 'Assassin\'s Creed: Origins',
            MSRP: 60,
            distiPrice: 50,
            sku: '6345430JA3098',
            platforms: ['PC', 'PS4', 'XBOX One'],
            qty: ko.observable(0)
        },
        {
            name: 'God of War',
            MSRP: 60,
            distiPrice: 50,
            sku: '23456654A3098',
            platforms: ['PS4'],
            qty: ko.observable(0)
        },
        {
            name: 'Mario Odyssey',
            MSRP: 60,
            distiPrice: 50,
            sku: '9089DGF0JA3098',
            platforms: ['Switch'],
            qty: ko.observable(0)
        },
        {
            name: 'Into the Breach',
            MSRP: 20,
            distiPrice: 15,
            sku: '9078469JA3098',
            platforms: ['Switch', 'PC'],
            qty: ko.observable(0)
        },
        {
            name: 'Batman: Arkham Knight',
            MSRP: 50,
            distiPrice: 40,
            sku: '13566F0JA3098',
            platforms: ['PC', 'PS4', 'XBOX One'],
            qty: ko.observable(0)
        }
    ]),
    selectedComponent: ko.observable('pricelist'),
    selectedProduct: ko.observable()
}

export { Store }