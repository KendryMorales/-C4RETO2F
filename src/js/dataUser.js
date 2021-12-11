$('.hide_nav').addClass("disabled");

$(document).ready(function () {

    try {
        // document.querySelector("span").innerHTML=sessionStorage.getItem("userName1");
        const idUser1 = sessionStorage.getItem("userId1");
        if (idUser1) {
            const x = document.getElementById("resultado").innerHTML = sessionStorage.getItem("userName1");
            // const y = document.getElementById("resultado1").innerHTML = sessionStorage.getItem("userEmail1");

            console.log(x,idUser1);
            loadUser1(idUser1);
        }
    } catch (error) {
        console.log(`error`, error)
    }

});




function loadUser1(idUser1) {
    console.log("el id es", idUser1);
    $.ajax({
        type: 'GET',
        datatype: "JSON",
        url: 'http://129.158.37.103:8082/api/user/' + idUser1,
        success: function (response) {
            console.log(response);
            let myTable = "<tr>"
            // myTable += "<th>Id</th>";
            // myTable += "<td>" + response.id + "</td>";
            // myTable += "</tr>";
            // myTable += "<tr>";
            myTable += "<th>Identificación</th>";
            myTable += "<td>" + response.identification + "</td>";
            myTable += "</tr>"
            myTable += "<tr>";
            myTable += "<th>Nombre</th>";
            myTable += "<td>" + response.name + "</td>";
            myTable += "</tr>"
            myTable += "<tr>";
            myTable += "<th>Direccion</th>";
            myTable += "<td>" + response.address + "</td>";
            myTable += "</tr>"
            myTable += "<tr>";
            myTable += "<th>Telefono</th>";
            myTable += "<td>" + response.cellPhone + "</td>";
            myTable += "</tr>"
            myTable += "<tr>";
            myTable += "<th>Correo</th>";
            myTable += "<td>" + response.email + "</td>";
            myTable += "</tr>"
            myTable += "<tr>";
            myTable += "<th>Contraseña</th>";
            myTable += "<td>" + "******" + "</td>";
            myTable += "</tr>"
            myTable += "<tr>";
            myTable += "<th>Zona</th>";
            myTable += "<td>" + response.zone + "</td>";
            myTable += "</tr>"
            myTable += "<tr>";
            myTable += "<th>Tipo</th>";
            myTable += "<td>" + response.type + "</td>";
            myTable += "</tr>"
            $("#list").html(myTable);

            showNav(response.type);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Ha ocurrido un error");
        }
    });
}

function showNav(typeUser){
    if(typeUser=="administrador"){
        $('.hide_nav').removeClass("disabled");
    }else{
        $("#msg").html("*No tiene permiso como administrador*");
    }
}