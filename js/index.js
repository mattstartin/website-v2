function companyClick(name) {
    document.getElementById('tpDetails').classList.remove('on')
    document.getElementById('tpDetails').classList.add('off')
    document.getElementById('tpName').classList.remove('companyOn')
    document.getElementById('tpName').classList.add('companyOff')
    document.getElementById('osName').classList.remove('companyOn')
    document.getElementById('osName').classList.add('companyOff')
    document.getElementById('osDetails').classList.remove('on')
    document.getElementById('osDetails').classList.add('off')

    document.getElementById(name+'Details').classList.add('on')
    document.getElementById(name+'Name').classList.add('companyOn')
    document.getElementById(name+'Name').classList.remove('companyOff')

}

function themeClick() {
    updateColour('schema-bg', '--background', randomHex());
    updateColour('schema-tint', '--background-tint', randomHex());
    updateColour('schema-hl', '--text-highlight', randomHex());
    updateColour('schema-cont', '--text-contrast', randomHex());
    updateColour('schema-main', '--text-main', randomHex());
    updateColour('schema-sub', '--text-sub', randomHex());
}

function paletteClick(el) {
    const element = document.getElementById(el);
    if(element.dataset.locked =='true') {
        element.dataset.locked = 'false'
        element.children[0].classList.remove('fa-lock')
        element.children[0].classList.add('fa-lock-open')
    }
    else {
        element.dataset.locked = 'true'
        element.children[0].classList.remove('fa-lock-open')
        element.children[0].classList.add('fa-lock')
    }
}
function randomHex() { return Math.floor(Math.random()*16777215).toString(16) }

function updateColour(elementId, property, colour) {
    var bodyStyles = document.body.style;
    const pageElement = document.getElementById(elementId);
    if(pageElement.dataset.locked != 'true') {
        bodyStyles.setProperty(property, '#'+colour);
        pageElement.setAttribute('style', 'background-color: #' + colour);
    }
}