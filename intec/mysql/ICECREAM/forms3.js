function buttonClicked() {
    const lastname = document.getElementById('lastname').value;
    document.getElementById('nameLabel').innerHTML = lastname;

    const Firstname = document.getElementById('Firstname').value;
    document.getElementById('FirstnameLabel').innerHTML = Firstname;

    const phone = document.getElementById('phone').value;
    document.getElementById('phoneLabel').innerHTML = phone;

    const email = document.getElementById('email').value;
    document.getElementById('emailLabel').innerHTML = email;



    var e = document.getElementById("parfums1");
    var parfums1 = e.options[e.selectedIndex].value;

    var f = document.getElementById("parfums2");
    var parfums2 = f.options[f.selectedIndex].value;

    var g = document.getElementById("parfums3");
    var parfums3 = g.options[g.selectedIndex].value;

    var parfumtotal = Number(parfums1) + Number(parfums2) + Number(parfums3);


    if (parfumtotal > 3) {
        alert("Maximum 3 boules !!!");

    }

    let parfumReca = '';

    const vanilleChecked = document.getElementById('Vanille').checked;

    if (vanilleChecked == true) {
        parfumReca += 'Vanille : ' + parfums1 + ',';
    }

    const chocolatChecked = document.getElementById('Chocolat').checked;

    if (chocolatChecked == true) {
        parfumReca += 'Chocolat : ' + parfums2 + ',';
    }

    const mokaChecked = document.getElementById('Moka').checked;


    if (mokaChecked == true) {
        parfumReca += 'Moka : ' + parfums3 + ',';
    }


    document.getElementById('ParfumLabel').innerHTML = parfumReca;


    const cornetChecked = document.getElementById('Cornet').checked;


    if (cornetChecked == true) {
        document.getElementById('FormatLabel').innerHTML = 'Cornet'

    }
    const galetteChecked = document.getElementById('Galette').checked;

    if (galetteChecked == true) {
        document.getElementById('FormatLabel').innerHTML = 'Galette'

    }
    const petitpotChecked = document.getElementById('PetitPot').checked;

    if (petitpotChecked == true) {
        document.getElementById('Format3Label').innerHTML = 'Petit Pot'


    }
    const cremeChecked = document.getElementById('Crème').checked;

    if (cremeChecked == true) {
        document.getElementById('CrèmeLabel').innerHTML = 'Crème fraîche'


    }










}