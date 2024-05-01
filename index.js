import prompts from 'prompts';
import { color, log, cyan, magenta} from "console-log-colors";

var todoList = [];

const main = async () => {
    const toDoMenu = async() => {
        return await prompts({
            type: 'select',
            name: 'value',
            message: 'What would you like to do?',
            choices: [
                { title: 'View Todos', value: 'view' },
                { title: 'Add Todo', value: 'add' },
                { title: 'Delete', value: 'delete' },
                { title: 'Exit', value: 'exit' }
            ],
        })
    };

    const addTodo = async() => {
        return await prompts({
            type: 'text',
            name: 'value',
            message: 'What is your new todo item?',
        })
    };
    //var message = await nextToDo();
    //console.log(message);
    const showTodo = () => {
        console.log("====================================");
        todoList.forEach( (x) => console.log(x.value));
        console.log("====================================");
    }
    
    var option = {};
    do {
        option = await toDoMenu();
        switch(option.value){
            case 'view':
                showTodo();
                break;
            case 'add':
                todoList.push(await addTodo());
                break;
        }
    } while (option.value != 'exit');
};

main().catch(console.error);


