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
    var bodyStyles = document.body.style;
    var bgColour = Math.floor(Math.random()*16777215).toString(16);
    var tintColour = Math.floor(Math.random()*16777215).toString(16);
    var hlColour = Math.floor(Math.random()*16777215).toString(16);
    var contColour = Math.floor(Math.random()*16777215).toString(16);
    var mainColour = Math.floor(Math.random()*16777215).toString(16);
    var subColour = Math.floor(Math.random()*16777215).toString(16);

    bodyStyles.setProperty('--background', '#'+bgColour);
    bodyStyles.setProperty('--background-tint2', '#'+tintColour);
    bodyStyles.setProperty('--text-highlight', '#'+hlColour);
    bodyStyles.setProperty('--text-contrast', '#'+contColour);
    bodyStyles.setProperty('--text-main', '#'+mainColour);
    bodyStyles.setProperty('--text-sub', '#'+subColour);

    document.getElementById('schema-bg').setAttribute('style', 'background-color: #' + bgColour);
    document.getElementById('schema-tint').setAttribute('style', 'background-color: #' + tintColour);
    document.getElementById('schema-hl').setAttribute('style', 'background-color: #' + hlColour);
    document.getElementById('schema-cont').setAttribute('style', 'background-color: #' + contColour);
    document.getElementById('schema-main').setAttribute('style', 'background-color: #' + mainColour);
    document.getElementById('schema-sub').setAttribute('style', 'background-color: #' + subColour);

}