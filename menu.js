class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav>
    <div class="menu">
        <span id="title">Prayer Counter P7</span>
        <div class="container" id="boxing">  
 <input id="checkbox" type="checkbox" onclick="check()">
    <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
    </label>

</div>

    </div></nav>
    </header>
    `;
  }
}
customElements.define('header-component', HeaderComponent);