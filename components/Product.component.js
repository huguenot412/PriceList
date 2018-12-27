const Product = ko.components.register('product', {
    viewModel: function(params) {
        this.name = params.product.name;
        this.MSRP = params.product.MSRP;
        this.distiPrice = params.product.distiPrice;
        this.platforms = params.product.platforms;
        this.sku = params.product.sku;
        this.qty = params.product.qty;
        this.addQty = ko.observable(1);
        this.addToQuote = function() {
            this.qty(Number(this.qty()) + Number(this.addQty()));
            this.addQty(1);
            console.log(`Added ${this.name} to quote`);
        }
    },
    template: `
        <div class="product">
            <h2 class="product__name" data-bind="text: name"></h2>
            <p class="product__info"><span class="bold">SKU:</span> <span data-bind="text: sku"></span></span>
            <p class="product__info"><span class="bold">MSRP:</span> $<span data-bind="text: MSRP"></span></p>
            <p class="product__info"><span class="bold">Distribution Price:</span> $<span data-bind="text: distiPrice"></span></p>
            <p class="product__info"><span class="bold">Platforms:</span></p>
            <ul class="product__platforms" data-bind="foreach: platforms">
                <li class="product__platform"data-bind="text: $data"></li>        
            </ul>
            <div class="product__button" data-bind="click: addToQuote">
                <i class="fas fa-plus"></i>
                Add To Quote
            </div>
            <div class="product__addQty-wrapper">
                <span class="product__qty-label">Qty: </span>
                <input type="number" class="product__add-qty" data-bind="value: addQty" min="0">
            </div>
        </div>
    `
});

export { Product }