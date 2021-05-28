export function Person () {
    this.name = 'jack'
    this.sum = () => {
        console.log(this.name)
    }
}
Person.prototype.age = 10

export function content(obj) {
    function F(){}
    F.prototype = obj
    
    return new F()
}