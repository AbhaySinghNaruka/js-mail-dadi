const qEmail = prompt('Scrivi la tua email');

const allowedEmail = ['abhaysingh.naruka@gmail.com', 'name.surname@gmail.com'];

if (qEmail == allowedEmail) {
    console.log(qEmail[allowedEmail]);
} else {
    console.log('Non hai il permesso')
}