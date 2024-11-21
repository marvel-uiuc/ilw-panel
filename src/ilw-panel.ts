import { LitElement, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './ilw-panel.styles.css?inline';
import './ilw-panel.css';
import { customElement, property } from "lit/decorators.js";

@customElement("ilw-panel")
export default class Panel extends LitElement {

    @property()
    theme = "";

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ilw-panel": Panel;
    }
}
