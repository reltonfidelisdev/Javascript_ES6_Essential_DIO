this.name = 'Nome no contexto da criação'; 

const getNameArrowFn = () => this.name;
console.log(this.name)

function getName() {
    console.log('log do getName',this.name);
    return this.name;
}
getName(); // undefined : this.name não esta definido

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn()); // this.name aponta para linha 1 - contexto de arrow function
console.log(user.getName());        // this.name aponta para linha 13 - contexto de função