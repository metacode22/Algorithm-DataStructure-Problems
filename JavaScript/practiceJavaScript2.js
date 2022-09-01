var value = 1;

const obj = {
    value: 100,
    foo() {
        setTimeout(function() {
            console.log(this);
            console.log(this.value);
        }, 100);
    }
}

obj.foo();