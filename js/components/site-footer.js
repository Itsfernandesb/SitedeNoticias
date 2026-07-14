class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="rodape">
            <div class="coluna">
                <h4><strong>Diário Gaucho</strong></h4>
                <p>Alta credibilidade</p>
            </div>
            <div class="coluna">
                <h4>Editoriais</h4>
                <a href="#">Economia</a>
                <a href="#">Política</a>
                <a href="#">Esportes</a>
                <a href="#">Famosos</a>
            </div>
            <div class="coluna">
                <h4>Institucional</h4>
                <a href="#">Termos de uso</a>
                <a href="#">Privacidade</a>
                <a href="#">Quem Somos</a>
                <a href="#">Contato</a>
            </div>
        </footer> `;
    }
}

customElements.define('site-footer', SiteFooter)