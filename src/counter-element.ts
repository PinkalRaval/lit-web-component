/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('counter-element')
export class MyElement extends LitElement {
    static override styles = css`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;

    @property({ type: Number })
    count = 0;
    override render() {
        return html`
     <div>
     <button @click=${this._onInc}>+</button>
     <button @click=${this._onDec}>-</button>
     </div>
     `;
    }
    private _onInc() {
        this.common(1);
    }
    private _onDec() {
        this.common(-1);
    }
    private common(num:number) {
        this.count += num
        this.dispatchEvent(new CustomEvent('counter', { detail: this.count, bubbles: true, composed: true, cancelable: true }));
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'counter-element': MyElement;
    }
}