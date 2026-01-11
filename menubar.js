class MenubarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div id="menubar">
        <center>
        <a href="index.html" class="links">Home</a><br><br>
        <label class="links">Darkmode: </label><button class="links" id="dmon" onclick="darkmodeon()">On</button><button class="links" id="dmoff" onclick="darkmodeoff()">Off</button>
        <br><br><br><br><label class="links">Credits: Omkar Suhas Indulkar</label>

        </center>
    </div>
    `;
  }
}
customElements.define('menubar-component', MenubarComponent);