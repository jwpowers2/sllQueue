// Queue using SLL

function Node(val){
  this.val = val;
  this.next = null;
}

function SLL(){

  this.length = 0;
  this.head = null;
  this.tail = null;
  
  this.find = function(val){
  
    //var node = new Node(val);

    if(this.head === null){

      return false;

    } else {

      runner = this.head;

      while(runner){

        if (runner.val === val){
          return true;
        }
        runner = runner.next;     
      }
      return false;      

    }


  }

  this.info = function(){
    return `head is: ${JSON.stringify(this.head)}, 
            tail is: ${JSON.stringify(this.tail)},
            length is: ${JSON.stringify(this.length)}`;
  }

  this.enqueue = function(val){

    let node = new Node(val);

    if(this.head === null){

      this.head = node;
      this.tail = node;
      this.length++;

    } else {
        
    this.tail.next = node;
    this.tail = this.tail.next;
    this.length++;

    }
  }

  this.dequeue = function(){
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return temp;
  }

}

module.exports = SLL;
