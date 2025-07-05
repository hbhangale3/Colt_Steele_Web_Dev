
const list=[];
while(true){
    let userInput = prompt("What action do you wish to perform");

    //new 
    if(userInput==='new'){
        let task = prompt("enter the TODO");
        list.push(task);
        console.log('Task added successfully in your TODO list');
    }

    //list
    else if(userInput==='list'){
        console.log('********************');
        for(let i=0; i<list.length;i++){
            console.log(`task ${i}: ${list[i]}`);
        }
        console.log('********************');
    }

    //delete
    else if(userInput==='delete'){
        if(list.length===0){
            console.log('list is empty, nothing to delete');
            continue;
        }

        console.log('********************');
        for(let i=0; i<list.length;i++){
            console.log(`task ${i}: ${list[i]}`);
        }
        console.log('********************');
        let taskNum= Number(prompt('Select the task index you wish to delete'))
        if(taskNum>0 || taskNum<list.length){
            list.splice(taskNum,1);
        console.log('task deleted successfully below is the updated list');
        console.log('********************');
        for(let i=0; i<list.length;i++){
            console.log(`task ${i}: ${list[i]}`);
        }
        console.log('********************');
        }else{
            console.log('invalid task index');
            continue;
        }
        
        
    }
    //quit
    else if(userInput==='quit'){
        console.log('Ok you quit');
        break;
    }
    
}