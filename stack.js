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
    addElement(value)
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
        empty()
            {
                return this.count==0
            }
            size()
            {
                return this.size
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

        
}
let lists=new Stack()
lists.addElement(1);
lists.addElement(2);
lists.addElement(3);
lists.addElement(4);

lists.sta();
lists.printElements();
