const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 200,
        amount: 0,
        get Sum() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 300,
        amount: 0,
        get Sum() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 350,
        amount: 0,
        get Sum() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    }
}


// product[plainBurger].amount


const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 1000,
        kcall: 50
    },
    lettuce: {
        name: 'Салатный лист',
        price: 500,
        kcall: 5
    },
    cheese: {
        name: 'Сыр',
        price: 1000,
        kcall: 20
    }
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');

btnPlusOrMinus.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        plusOrMinus(this);
    })
})



function plusOrMinus(element) {
    /* 
        closest() - метод объекта. Который подключается и получает своего родителя.
        getAttribute() - Получает значение указанного аттрибута с HTML
    */

    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        productAmount = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        symbol = element.getAttribute('data-symbol');

        if(symbol == '+') {
            product[parentId].amount++;
        }else if(symbol == '-' && product[parentId].amount > 0) {
            product[parentId].amount--;
        }
        
        productAmount.innerHTML = product[parentId].amount;
        price.innerHTML = product[parentId].Sum;
        kcall.innerHTML = product[parentId].Kcall;
}


const time = 15000; //ms
const step = 1;

function header__timer(num, elem) {
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    }, 
        t);
}

header__timer(100, 'header-timer');