//insert first node2

class Node{
    constructor(data,nextKaAdress=null){
      this.data = 100;
      this.nextKaAdress=nextKaAdress;
    }
}



class LinkedList {
    constructor() {
        this.head=null;
        this.size = 0;
      }
    
      //Insert Function for insert node
      insertFirst(data){
          this.head = new Node (data , this.head)
      }
}
            // use insertfirst function
    let ll = new LinkedList();

        ll.insertFirst(100);
    
        console.log(ll);




    //insert first node 
 
    //insert last node 

    //insert at index

    //get at index

    //Remove at index

    //clear list

    //print list data


