class Node{
    value;
    nextNode;
    constructor(value){
        this.value= value
        this.nextNode=null;
    }
}

class LinkedList{
        rootNode = null;
        count = 0;
        addElement(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value);
                }else{
                    let temp = this.rootNode;
                    while(temp.nextNode != null){
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
            index0(value)
            {
                let node=new Node(value)
                if (this.empty())
                {
                    this.rootNode=node
                }
                
                else
                {
                    node.nextNode=this.rootNode
                    this.rootNode=node
                }
                this.count++

            }
            addelement1(value,index)
            {
                if( index==0)
                {

                    this.index0(value)
                }
                if (index>0)
                {
                    let prev;
                    let node=new Node(value)
                    let curr=this.rootNode
                    for(let i=0;i<index;i++)
                    {
                        prev=curr;
                        curr=curr.nextNode;

                    }
                    node.nextNode=curr
                    prev.nextNode=node
                    this.count++;


                }
            }

        removes(index)
        {
            if (index==0)
            {
                this.rootNode=this.rootNode.nextNode;
            }
            else{
            let previous;
            let current=this.rootNode;
            for(let i=0;i<index;i++)
            {
                previous=current;
                current=current.nextNode;
            }
            previous.nextNode=current.nextNode;
        }
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


let list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.printElements();
list.index0(5);
list.printElements();
list.addelement1(6,1);
list.printElements();
list.removes(2);
list.printElements();
