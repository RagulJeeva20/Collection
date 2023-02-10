class Node{
    value;
    nextNode;
    constructor(value){
        this.value= value
        this.nextNode=null;
    }
}
class Stack
{
    rootNode = null;
    count = 0;
    addElementt(value)
    {
            if(this.rootNode == null)
            {
                this.rootNode= new Node(value);
            }
            else
            {
                let temp = this.rootNode;
                while(temp.nextNode != null)
                {
                    temp = temp.nextNode;
                }
                    temp.nextNode=new Node(value);
               
            }
            this.count++;
        }
        size()
            {
                return this.size
            }
        empty()
            {
                return this.count==0
            }
            

            sta()
            {
                let prev;
                let curr=this.rootNode;
                for(let i=0;i<this.count-1;i++)
                {
                    prev=curr;
                    curr=curr.nextNode;
                }
                prev.nextNode=null;
                this.count--;
            
            }
        printElements()
        {
            let temp = this.rootNode;
            if(temp == null)
            {
                console.log("Is empty!")
            }
            else
            {
                let curr=this.rootNode;
                let listval="";
            while(curr )
            {
                listval+=curr.value + " ";
                curr=curr.nextNode;
            }
            console.log(listval);
            }
        }
        


        
}
let lists=new Stack()
lists.addElementt(1);
lists.addElementt(2);
lists.addElementt(3);
lists.addElementt(4);

lists.sta();
lists.printElements();
