function getElement(selection){
    const element = document.querySelector(selection)
    if(element){
        return element
    }
    throw new Error(`Please Check "${selection}" selector , no such element exists`);
}
class Counter{
    constructor(element , value){
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
increase(){
    this.value++;
    this.valueDOM.textContent = this.value
}

rest(){
    this.value = 0;
    this.valueDOM.textContent = this.value
}

decrease(){
     this.value--;
    this.valueDOM.textContent = this.value
}
}


const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);

