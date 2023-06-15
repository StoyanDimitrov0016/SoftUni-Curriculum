function solution(n1) {
    
    function add(n2) {
        return n2 + n1;
    }
    return add;
};

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3)); 