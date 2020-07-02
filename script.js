let get_out = false;
let arraylist = [];

// El while ingresa solo números, ignora caracteres, cuando ingresa un espacio en blanco sale del array e imprime los resultados
while (!get_out) {
    let number = prompt('Enter your number');

    // Ignora los caracteres
    if (!isNaN(parseInt(number))) {
        arraylist.push(number);
    } else {
        // Imprime el array cuando el usuario digita un espacio en blanco
        if (number == "") {
            get_out = true;
            console.log(arraylist);
            
            //Saca promedio del array
           let sum = 0;
           let cant_numbers = arraylist.length;

           for(let i = 0; i < arraylist.length; i++){
                sum = sum + arraylist[i];
           }
           let avg = sum / cant_numbers;
           console.log(`AVG is :${avg} `);

             //A comodar en orden el array
            arraylist.sort((a, b) => a - b);

            //Sacar el número menor del array
            let minun = Math.min.apply(null,arraylist); // sacar el menor numero de un arreglo
            console.log(`The lower number is :${minun}`);

            //Sacar el número mayor del array
            let plus = Math.max.apply(null,arraylist); // saca el mayor numero de un arreglo
            console.log(`The higher number is :${plus}`);

            //Sacar la mediana del array
            let lownumber = Math.floor((arraylist.length - 1) / 2); // redondea el valor bajo y busca primer valor del medio
            let highnumber = Math.ceil((arraylist.length - 1) / 2); // redondea el numero al valor alto y buscar el segundo valor medio
            let median = (arraylist[lownumber] + arraylist[highnumber]) / 2; // suma los valores escogidos y los divide entre dos
            console.log(`The median is :${median}`); 
        }
    }
} 
                
