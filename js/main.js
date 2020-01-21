function takeData(){
    let firstname=window.prompt('Podaj imię: ');
    let lastname=window.prompt('Podaj nazwisko: ');
    let email=window.prompt('Podaj adres E-mail: ');

    // console.log(firstname);

    let inputFirstName=document.getElementById('firstname');
    inputFirstName.value=firstname;

    let inputLastName=document.getElementById('lastname');
    inputLastName.value=lastname;

    let inputEmail=document.getElementById('email');
    inputEmail.value=email;
 }

takeData();