/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private _onInc;
    private _onDec;
    private common;
}
declare global {
    interface HTMLElementTagNameMap {
        'counter-element': MyElement;
    }
}
//# sourceMappingURL=counter-element.d.ts.map