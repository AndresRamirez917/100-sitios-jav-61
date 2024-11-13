async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products);
    const productsArr = products.map(elemento => Object.entries(elemento));
    console.log(productsArr);
    const productsArrSliced = productsArr.slice(0,5);
    products.forEach(element => {
        const randData= (min, max) => Math.floor(Math.random() * (min - max + 1) + max);
        const randInt = randData(1, productsArr.length);
        const randIndex = randInt;
        for(i = 0; i < productsArrSliced.length; i++){
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
                <div class="box">
                    <img src="${productsArr[randIndex][5][1]}" alt="">
                    <div class="box-text">
                        <h3>Ford</h3>
                        <p>A creative and built project</p>
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