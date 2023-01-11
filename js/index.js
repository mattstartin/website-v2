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