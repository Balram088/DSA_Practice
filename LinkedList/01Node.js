// LinkedList is the dynamic data structure, as we can add or remove elements at ease,
//  and it can even grow as needed. Just like arrays, linked lists store elements sequentially,
//  but don’t store the elements contiguously like an array. 
// Now, Let’s see an example of a Linked List Node: 
//Basic code useing what's Node
const n1={
    data:"kuch bhi aa skta hai",
    d:43,

}
const n2={
    data:200
}
const n3 = {
    data:300
}
const n4 = {
    data:400
}
n1.nextKaAdress=n2;
n2.nextKaAdress=n3;
n3.nextKaAdress=n4;
console.log(n1);
