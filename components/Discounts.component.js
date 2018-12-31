const Discounts = ko.components.register('discounts', {
    viewModel: function(params) {
        this.hasDealReg = params.hasDealReg;
        this.partnerLevel = params.partnerLevel;
        this.additionalDiscount = params.additionalDiscount;
        this.partnerLevelDiscount = ko.computed(function() {
                return !this.hasDealReg() ? Number(0) : Number(this.partnerLevel());
            }, this);
        this.partnerMargin = ko.computed(function() {
                return Number(this.partnerLevelDiscount()) + Number(this.additionalDiscount());
            }, this);
        this.increaseAdditionalDiscount = function() {
            this.additionalDiscount(this.additionalDiscount() + 1);
        }
        this.decreaseAdditionalDiscount = function() {
            this.additionalDiscount(this.additionalDiscount() - 1);
        }
    },
    template: `
        <div class="deal-reg">
            <div class="has-deal-reg">
                <label class="has-deal-reg-label" for="hasDealReg" data-bind="css: { highlighted: hasDealReg() }">
                    <input id="hasDealReg" class="deal-reg-checkbox" name="hasDealReg" type="checkbox" data-bind="checked: hasDealReg"> I have registered this opportunity
                </label>
            </div>
            <div data-bind="if: hasDealReg">
                <h3>Partner Level:</h3>
                <select class="partner-level-select" data-bind="selectedOptions: partnerLevel">
                    <option value="0" selected>&mdash; Select Partner Level &mdash;</option>
                    <option value="10">Bronze (10%)</option>
                    <option value="15">Silver (15%)</option>
                    <option value="25">Platinum (25%)</option>
                </select>
            </div>
        </div>
        <div class="additional-discounts">
            <h2>Calculate Additional Discounts:</h2>
            <div class="additional-discount-container">
                <number-input params="number: additionalDiscount"></number-input>
                <span class="additional-discount__percentage">%</span>
            </div>
        </div>
    `
});

export { Discounts }