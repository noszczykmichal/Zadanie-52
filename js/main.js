function takeData(){
    let firstname=window.prompt('Podaj imię: ').trim();
    let lastname=window.prompt('Podaj nazwisko: ').trim();
    let email=window.prompt('Podaj adres E-mail: ').trim();

    // console.log(firstname);

    let inputFirstName=document.getElementById('firstname');
    inputFirstName.value=firstname;

    let inputLastName=document.getElementById('lastname');
    inputLastName.value=lastname;

    let inputEmail=document.getElementById('email');
    inputEmail.value=email;

    if(firstname === '' ){
        inputFirstName.value= 'Błąd';
    }
    if(lastname === ''){
        inputLastName.value= 'Błąd';
    }
    if(email === ''){
        inputEmail.value= 'Błąd';
    }
 }

takeData();