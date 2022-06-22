/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('addition-element')
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
  @query('#text1')
  _text1!: HTMLLIElement
    ;
  @query('#text2')
  _text2!: HTMLLIElement
    ;

  override render() {
    return html`
    <div>
      <input id="text1" />
      <input id="text2" />
      <button @click=${this._onClick} part="button">
          add
      </button>
    </div>
    `;
  }

  private _onClick() {
    const inp1: number = this._text1.value as number;
    const inp2: number = this._text2.value as number;
    this.count = +(inp1) + +(inp2) ;
    this.dispatchEvent(new CustomEvent('add',{detail: this.count, bubbles: true, composed: true, cancelable: true}));
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
