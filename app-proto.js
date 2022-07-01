function getElement(selection){
    const element = document.querySelector(selection)
    if(element){
        return element
    }
    throw new Error(`Please Check "${selection}" selector , no such element exists`);
}
function Counter(element , value){
    this.counter = element;
    this.value = value;
    this.increaseBtn = element.querySelector('.increase');
    this.restBtn = element.querySelector('.rest');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    // bind this to all of function
    this.increase = this.increase.bind(this);
    this.rest = this.rest.bind(this);
    this.decrease = this.decrease.bind(this);

    this.increaseBtn.addEventListener('click',this.increase);
    this.restBtn.addEventListener('click',this.rest);
    this.decreaseBtn.addEventListener('click',this.decrease);
}

Counter.prototype.increase = function (){
    this.value++;
    this.valueDOM.textContent = this.value
}
Counter.prototype.rest = function (){
    this.value = 0;
    this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function (){
    this.value--;
    this.valueDOM.textContent = this.value
}

const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);

