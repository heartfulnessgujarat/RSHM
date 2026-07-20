async function login(email, password) {

    try {
        
      const response = await fetch(CONFIG.API_URL, {

    method: "POST",


          
  body: JSON.stringify({

    action: "login",

    emp_code: email,

    current_password: password

})



          

});

        
        const result = await response.json();

        console.log(result);

    }
    catch(error){

        console.error(error);

    }

}
