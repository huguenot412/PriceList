import { Store } from "../store/data.js";

const ProductPage = ko.components.register('product-page', {
    viewModel: function(params) {
        this.name = Store.selectedProduct().name;
        this.MSRP = Store.selectedProduct().MSRP;
        this.distiPrice = Store.selectedProduct().distiPrice;
        this.platforms = Store.selectedProduct().platforms;
        this.sku = Store.selectedProduct().sku;
        this.qty = Store.selectedProduct().qty;
        this.addQty = ko.observable(1);
        this.description = Store.selectedProduct().description;
        this.testimonials = Store.selectedProduct().testimonials;
        this.videos = Store.selectedProduct().videos;
        this.features = Store.selectedProduct().features;
        this.addToQuote = function() {
            this.qty(Number(this.qty()) + Number(this.addQty()));
            this.addQty(1);
            console.log(`Added ${this.name} to quote`);
        }
        this.returnToPriceList = function(){
            Store.selectedComponent("pricelist");
        }
    },
    template: `
        <div class="product product-page">
            <div class="product-page__info product-page__info--details">
                <div class="product__button product__button--margin-bottom" data-bind="click: returnToPriceList">
                    <i class="fas fa-arrow-left"></i> Return To Price List
                </div>
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
            <div class="product-page__info product-page__info--description" data-bind="if: description">
                <h2 class="info__section-title">Product Description</h2>
                <p data-bind="text: description"></p>
            
            </div>
            <div class="product-page__info product-page__info--testimonials" data-bind="if: testimonials && testimonials.length > 0">
                <h2 class="info__section-title">Testimonials</h2>
                <ul data-bind="foreach: testimonials">
                    <li class="testimonial">
                        <span class="testimonial__quote" data-bind="text: text"></span>
                        <span class="testimonial__quotee" data-bind="text: quotee"></span>
                    </li>
                </ul>
            </div>
            <div class="product-page__info product-page__info--videos" data-bind="if: videos && videos.length > 0">
                <h2 class="info__section-title">Videos</h2>
                <ul data-bind="foreach: videos">
                    <li data-bind="text: title"></li>
                </ul>
            </div>
            <div class="product-page__info product-page__info--features"data-bind="if: features && features.length > 0">
                <h2 class="info__section-title">Features</h2>
                <ul data-bind="foreach: features">
                    <li data-bind="text: $data"></li>
                </ul>
            </div>
            
        </div>
    `
});

export { ProductPage }