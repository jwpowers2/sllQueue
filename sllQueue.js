
function Node(val){
  this.val = val;
  this.next = null;
}

function SLLQueue(){

  this.length = 0;
  this.head = null;
  this.tail = null;
}  
SLLQueue.prototype.find = function(val){

    if(this.head === null){

      return false;

    } else {

      runner = this.head;

      while(runner.next){

        if (runner.val === val){
          return true;
        }
        runner = runner.next;     
      }
      return false;      

    }


}

SLLQueue.prototype.info = function(){
    return `head is: ${JSON.stringify(this.head)}, 
            tail is: ${JSON.stringify(this.tail)},
            length is: ${JSON.stringify(this.length)}`;
}

SLLQueue.prototype.enqueue = function(val){

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

SLLQueue.prototype.dequeue = function(){
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return temp;
}


module.exports = SLLQueue;
