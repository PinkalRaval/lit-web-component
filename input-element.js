var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `
      <slot id="input1" name="input1"></slot>
      <slot id="input2" name="input2"></slot>
      <button @click=${this._onClick} part="button">
      add
      </button>
    `;
    }
    _onClick() {
        const inp1 = this._input1;
        console.log(inp1);
        const inp2 = this._input2;
        this.count = +(inp1) + +(inp2);
        this.dispatchEvent(new CustomEvent('sum', { detail: this.count, bubbles: true, composed: true, cancelable: true }));
    }
};
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
__decorate([
    query('#input1')
], MyElement.prototype, "_input1", void 0);
__decorate([
    query('#input2')
], MyElement.prototype, "_input2", void 0);
MyElement = __decorate([
    customElement('input-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=input-element.js.map