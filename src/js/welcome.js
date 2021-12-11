$(document).ready(function () {

    try {
        // document.querySelector("span").innerHTML=sessionStorage.getItem("userName1");
        const idUser1 = sessionStorage.getItem("userId1");
        if (idUser1) {
            const x = document.getElementById("resultado").innerHTML = sessionStorage.getItem("userName1");
            // const y = document.getElementById("resultado1").innerHTML = sessionStorage.getItem("userEmail1");

            console.log(x,idUser1);
            // loadUser1(idUser1);
        }
    } catch (error) {
        console.log(`error`, error)
    }

});

