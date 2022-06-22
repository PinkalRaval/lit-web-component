import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('input-element')
export class MyElement extends LitElement {
    @property({ type: Number })
    count = 0;
    @query('#input1')
    _input1!: HTMLLIElement
      ;
    @query('#input2')
    _input2!: HTMLLIElement
      ;
    protected override render() {
        return html`
      <slot id="input1" name="input1"></slot>
      <slot id="input2" name="input2"></slot>
      <button @click=${this._onClick} part="button">
      add
      </button>
    `;
    }
    private _onClick() {
        const inp1 = this._input1;
        console.log(inp1)
        const inp2 = this._input2;
        this.count = +(inp1) + +(inp2) ;
        this.dispatchEvent(new CustomEvent('sum',{detail: this.count, bubbles: true, composed: true, cancelable: true}));
      }

      
      
    
}
