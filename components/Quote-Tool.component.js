import { Store } from '/store/data.js';
import { Discounts } from './Discounts.component.js';
import { QuoteItem } from './Quote-Item.component.js';


const QuoteTool = ko.components.register('quote-tool', {
    viewModel: function(params) {
        this.selectedProducts = ko.computed(function() {
            return Store.products().filter(product => product.qty() > 0);
        });
        this.totalMSRP = ko.computed(function() {
            return this.selectedProducts()
                .map(product => product.MSRP * product.qty() * this.partnerMarginPercentage())
                .reduce((x, y) => {
                    return (x + y);
                }, 0)
                .toFixed(2);
        }, this);
        this.totalDisti = ko.computed(function() {
            return this.selectedProducts()
                .map(product => product.distiPrice * product.qty() * Number(this.partnerMarginPercentage()))
                .reduce((x, y) => {
                    return (x + y);
                }, 0)
                .toFixed(2);
        }, this);
        this.hasDealReg = ko.observable(false);
        this.partnerLevel = ko.observable(0);
        this.additionalDiscount = ko.observable(0);
        this.partnerLevelDiscount = ko.computed(function() {
            return !this.hasDealReg() ? Number(0) : Number(this.partnerLevel());
        }, this);
        this.partnerMargin = ko.computed(function() {
            return Number(this.partnerLevelDiscount()) + Number(this.additionalDiscount());
        }, this);
        this.partnerMarginPercentage = ko.computed(function() {
            return (100 - this.partnerMargin()) * .01;
        }, this);
        this.partnerMarginAmount = ko.computed(function() {
            return this.selectedProducts().map(product => (product.MSRP - (product.MSRP * this.partnerMarginPercentage())) * product.qty())
                .reduce((x, y) => {
                    return (x + y);
                }, 0)
                .toFixed(2);
        }, this);
    },
    template: `
        <div class="quote-tool">
            <div class="quote-tool__header"><h1>Quote Tool</h1></div>
            <div class="quote__dashboard">
                <h2 class="dashboard__label">Total MSRP:</h2>
                <div class="dashboard__amount">$<span data-bind="text: totalMSRP()"></span></div>  
                <h2 class="dashboard__label">Total Distribution:</h2>
                <div class="dashboard__amount">$<span data-bind="text: totalDisti()"></span></div> 
                <h2 class="dashboard__label">Partner Margin:</h2>
                <div class="dashboard__amount"><span data-bind="text: partnerMargin()"></span> points / $<span data-bind="text: partnerMarginAmount()"></span></div>
            </div>
            <div class="discounts">
                <discounts 
                    params="hasDealReg: hasDealReg,
                            partnerLevel: partnerLevel,
                            additionalDiscount: additionalDiscount">
                </discounts>
            </div>
            <div class="quote-items">
                <ul data-bind="foreach: { data: selectedProducts, as: 'product' }">
                    <quote-item params="product: product"></quote-item>
                </ul>
            </div>
        </div>   
    `
});

export { QuoteTool }