const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);

    const bmi = weight / (height * height);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5){
        description = "Você está abaixo do peso!";
    }else if(bmi >= 18.5 && bmi <= 25){
        description = "Você está no peso ideal!";
    }else if(bmi > 25 && bmi <= 30){
        description = "Você está com sobrepeso";
    }else if(bmi > 30 && bmi <= 35){
        description = "Cuidado! Você está com obesidade moderada!";
    }else if(bmi > 35 && bmi <= 40){
        description = "Cuidado! Você está com obesidade severa!";
    }else{
        description = "Cuidado! Você está com obesidade mórbida!";
    }

    value.textContent = bmi.toFixed(2).replace('.', ',');
    document.querySelector('#description span').textContent = description;

});
