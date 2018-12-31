const NumberInput = ko.components.register('number-input', {
    viewModel: function(params) {
        this.number = params.number;
        this.increaseNumber = function() {
            this.number(this.number() + 1);
        }
        this.decreaseNumber = function() {
            this.number(this.number() - 1);
        }
    },
    template: `
        <div class="number-input-container">
            <input type="number" class="number-input" data-bind="value: number">
            <span class="number-input-controls">
                <i class="fas fa-chevron-up" data-bind="click: increaseNumber"></i>
                <i class="fas fa-chevron-down" data-bind="click: decreaseNumber"></i>
            </span>
        </div>
    `
});

export { NumberInput }