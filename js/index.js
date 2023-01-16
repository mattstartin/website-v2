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
    bodyStyles.setProperty('--background', '#'+Math.floor(Math.random()*16777215).toString(16));
    bodyStyles.setProperty('--background-tint2', '#'+Math.floor(Math.random()*16777215).toString(16));
    bodyStyles.setProperty('--text-highlight', '#'+Math.floor(Math.random()*16777215).toString(16));
    bodyStyles.setProperty('--text-contrast', '#'+Math.floor(Math.random()*16777215).toString(16));
    bodyStyles.setProperty('--text-main', '#'+Math.floor(Math.random()*16777215).toString(16));
    bodyStyles.setProperty('--text-sub', '#'+Math.floor(Math.random()*16777215).toString(16));
}