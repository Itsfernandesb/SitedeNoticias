class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<header class="cabecalho">
                <div class="logo">
            Diário Gaúcho
                 </div>
                <nav class="navegacao">
                     <a href="#">Política</a>
                    <a href="#">Esportes</a>
                    <a href="#">Economia</a>
                    <a href="#">Famosos</a>
                </nav>
            </header>`
    }
}

customElements.define('site-header', SiteHeader);