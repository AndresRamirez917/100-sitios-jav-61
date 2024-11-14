async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products);
    const productsArr = products.map(elemento => Object.entries(elemento));
    console.log(productsArr);
    const productsArrSliced = productsArr.slice(0,5);
    products.forEach(element => {
        const randData = (min, max) => Math.floor(Math.random() * (min - max + 1) + max);
        const randInt = randData(1, productsArr.length);
        const randIndex = randInt;
        for(i = 0; i < productsArrSliced.length; i++){
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
                <div class="box">
                <a href="${productsArr[randIndex][5][1]}"><img src="${productsArr[randIndex][5][1]}" alt=""></a>
                    
                    <div class="box-text">
                        <h3>Price ${productsArr[randIndex][2][1]}</h3>
                        <p>Category ${productsArr[randIndex][4][1]}</p>
                    </div>
                </div>

                    `)
                    const job_row = document.querySelector('.job-row');
                    job_row.append(box)
            }
        }
    });
}
getData()

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fecha');
    const hora = document.getElementById('hora');
    const mensaje = document.getElementById('mensaje');
    const arr = [nombre, email, fecha, hora, mensaje];
    const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         fecha.value = "";
         hora.value = "";
         mensaje.value = "";
         return true;

}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)

}