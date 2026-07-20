async function login(email, password) {

    try {

        const response = await fetch(CONFIG.API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                action: "login",

                email_emp: email,

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
