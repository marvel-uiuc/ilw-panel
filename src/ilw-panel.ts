import { LitElement, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './ilw-panel.styles.css?inline';
import './ilw-panel.css';
import { customElement, property, queryAssignedNodes } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("ilw-panel")
export default class Panel extends LitElement {

    @property()
    theme = "";

    @property({state: true, type: Boolean})
    hasFooter = false;

    @queryAssignedNodes({slot: 'footer'})
    footerNodes!: Array<Node>;

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
    }

    /**
     * Tracks the number of graphic elements (images and icons) in the card, so we can
     * hide the graphics container if there's no graphics.
     */
    private slotsChanged() {
        this.hasFooter = this.footerNodes?.length > 0;
    }

    render() {

        let footerClasses = {
            "footer": true,
            "has-content": this.hasFooter
        }

        return html`
            <article class="panel-inner">
                <slot name="heading"></slot>
                <slot></slot>
                <div class=${classMap(footerClasses)}>
                    <div class="border"></div>
                    <div class="footer-inner">
                        <slot name="footer" @slotchange=${this.slotsChanged}></slot>
                    </div>
                </div>
            </article>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ilw-panel": Panel;
    }
}
