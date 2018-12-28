import { Store } from '../store/data.js';
import { Product } from './Product.component.js';

const PriceList = ko.components.register('pricelist', {
    viewModel: function(params) {
        this.products = ko.computed(function() {
            return (Store.products().sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
            }));
        });
        
        this.searchQuery = ko.observable('');
        this.searchBy = ko.observable('name');
        this.selectedProduct = ko.observable();
        this.searchedProducts = ko.computed(function() {
            if(this.searchBy() === 'platform') {
                return this.products().filter(product => {
                    return product.platforms
                        .map(platform => platform.toLowerCase())
                        .reduce((accum, current) => `${accum} ${current}`)
                        .includes(this.searchQuery().toLowerCase());
                });
            } else {
                return this.products().filter(product => {
                    return product[this.searchBy()].toLowerCase().includes(this.searchQuery().toLowerCase());
                });
            }
        }, this);
    },
    template: `
        <div class="pricelist">
            <div class="pricelist__header">
                <h1 class="pricelist__title">Products</h1>
                <input type="search" class="pricelist__search" placeholder="Search Products" data-bind="textInput: searchQuery">
                <i class="fas fa-search pricelist__search-icon"></i>
                <div class="pricelist__search-by-options">
                    <label for="SearchByName">
                    <input type="radio" id="SearchByName" name="searchOptions" data-bind="checked: searchBy" value="name" checked>Name</label>
                    <label for="SearchBySKU">
                        <input type="radio" id="SearchBySKU" name="searchOptions" data-bind="checked: searchBy" value="sku">SKU</label>
                    <label for="SearchByPlatform">
                        <input type="radio" id="SearchByPlatform" name="searchOptions" data-bind="checked: searchBy" value="platform">Platform</label>
                </div>
            </div>
            <div class="products">
                <p class="products__no-results" data-bind="if: searchedProducts().length == 0">No search results found.</p>
                <ul class="products__list" data-bind="foreach: { data: searchedProducts, as: 'product'}">
                    <li>
                        <product params="product: product, selectedProduct: product"></product>
                    </li>
                </ul>
            </div>
        </div>
    `
});

export { PriceList }