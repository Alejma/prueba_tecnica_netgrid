function inventoryList(){
    let inventory = [];

    function add(prenda) {
        if (inventory.indexOf(prenda) === -1)
            inventory.push(prenda);

    }
    function remove(prenda) {
        let i = inventory.indexOf(prenda);
        if (i!== -1)
            inventory.splice(i, 1);
    }

    function getList(){
        if (inventory.length == 0)
            console.log('La lista esta vacia');
        return inventory;
    }

    return{ add, remove, getList };
}

let prueba = inventoryList();

prueba.add('camisa')
prueba.add('pantalón')
console.log('Primera validacion', prueba.getList())
console.log('Se eliminan un elementos')
prueba.remove('pantalón')
console.log('Segunda validación', prueba.getList())
console.log('Se elimina el ultimo elemnto')
prueba.remove('camisa')
prueba.getList()


