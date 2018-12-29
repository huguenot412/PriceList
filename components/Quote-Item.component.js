const QuoteItem = ko.components.register('quote-item', {
    viewModel: function(params) {
        this.name = params.product.name;
        this.MSRP = params.product.MSRP;
        this.distiPrice = params.product.distiPrice;
        this.platforms = params.product.platforms;
        this.sku = params.product.sku;
        this.qty = params.product.qty;
        this.increaseQty = function() {
            this.qty(this.qty() + 1);
        };
        this.decreaseQty = function() {
            this.qty(this.qty() - 1);
        };
        this.removeItem = function() {
            this.qty(0);
        }
        this.tooltipMSRP = ko.computed(function() {
            return `${this.MSRP} x ${this.qty()} = $${this.MSRP * this.qty()}`;
        }, this);
        this.tooltipDisti = ko.computed(function() {
            return `${this.distiPrice} x ${this.qty()} = $${this.distiPrice * this.qty()}`;
        }, this);
    },
    template: `
        <li class="quote-item">
            <div class="quote-item__qty">
                <span class="quote-item__qty-num" data-bind="text: qty()"></span>
            </div>
            <div class="quote-item__name">
                <span data-bind="text: name"></span>
                <div class="quote-item__icons">
                    <i class="fas fa-plus quote-item__icon" data-bind="click: increaseQty"></i>
                    <i class="fas fa-minus quote-item__icon" data-bind="click: decreaseQty"></i>
                    <i class="fas fa-trash quote-item__icon" data-bind="click: removeItem"></i>
                </div>
            </div>
            <div class="item-details-tooltip">
                <div class="tooltip-wrapper">
                    <ul>
                        <li>SKU: <span data-bind="text: sku"></span></li>
                        <li>MSRP: $<span data-bind="text: tooltipMSRP"></span></li>
                        <li>Disti: $<span data-bind="text: tooltipDisti"></span></li>
                    </ul>
                </div>
            </div>
        </li>
    `
});

export { QuoteItem }