// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const fs = require('fs');
// import { PDFDocument } from 'pdf-lib'

function floater_fn(){
    let dob = document.getElementById('Date').value.replace(/-/g,'');
    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(4, 2)) - 1;
    var day = Number(dob.substr(6, 2));

    let today = new Date();
    let age = today.getFullYear() - year;
    if(today.getMonth() < month || (today.getMonth() == month && today.getDate()<day)){
        age--;
    }

    console.log(age);
    return age;
}

printFn=(data)=> {
    // window.print()
    // console.log(JSON.stringify(data[0]));
}

// module.exports =  {floater_fn};