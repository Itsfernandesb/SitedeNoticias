class SiteHeader extends HTMLElement {
    connectedCallback() {

        const mostrarBotao = this.hasAttribute("show-login-button");
        const usuarioLogado = localStorage.getItem("usuarioLogado") === "true";

        this.innerHTML = `
            <header class="cabecalho">
                <div class="logo">
                    <a href="../pages/index.html">Diário Gaúcho</a>
                </div>

                <nav class="navegacao">
                    <a href="#">Política</a>
                    <a href="#">Esportes</a>
                    <a href="#">Economia</a>
                    <a href="#">Famosos</a>

                    ${
                        mostrarBotao
                            ? usuarioLogado
                                ? `
                                    <a href="#" class="btn btn--primary" id="btnLogout">
                                        Sair
                                    </a>
                                  `
                                : `
                                    <a href="../pages/login.html" class="btn btn--primary">
                                        Entrar
                                    </a>
                                  `
                            : ""
                    }
                </nav>
            </header>
        `;

        // Evento de logout
        const btnLogout = this.querySelector("#btnLogout");

        if (btnLogout) {
            btnLogout.addEventListener("click", (e) => {
                e.preventDefault();

                localStorage.removeItem("usuarioLogado");

                window.location.href = "../pages/index.html";
            });
        }
    }
}

customElements.define("site-header", SiteHeader);