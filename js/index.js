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


    if(document.getElementById('schema-bg').innerText != "L") {
        bodyStyles.setProperty('--background', '#'+bgColour);
        document.getElementById('schema-bg').setAttribute('style', 'background-color: #' + bgColour);
    }
    
    if(document.getElementById('schema-tint').innerText != "L") {
        bodyStyles.setProperty('--background-tint2', '#'+tintColour);
        document.getElementById('schema-tint').setAttribute('style', 'background-color: #' + tintColour);
    }
    
    if(document.getElementById('schema-hl').innerText != "L") {
        bodyStyles.setProperty('--text-highlight', '#'+hlColour);
        document.getElementById('schema-hl').setAttribute('style', 'background-color: #' + hlColour);
    }

    if(document.getElementById('schema-cont').innerText != "L") {
        bodyStyles.setProperty('--text-contrast', '#'+contColour);
        document.getElementById('schema-cont').setAttribute('style', 'background-color: #' + contColour);
    }

    if(document.getElementById('schema-main').innerText != "L") {
        bodyStyles.setProperty('--text-main', '#'+mainColour);
        document.getElementById('schema-main').setAttribute('style', 'background-color: #' + mainColour);
    }

    if(document.getElementById('schema-sub').innerText != "L") {
        bodyStyles.setProperty('--text-sub', '#'+subColour);
        document.getElementById('schema-sub').setAttribute('style', 'background-color: #' + subColour);
    }
}

function paletteClick(el) {
    if(document.getElementById(el).innerText != "L") 
        document.getElementById(el).innerText = "L"
    else
        document.getElementById(el).innerText = ""
}