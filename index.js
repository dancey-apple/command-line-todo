import prompts from 'prompts';

const main = async () => {
    const nextToDo = async() => {
        return await prompts({
            type: 'text',
            name: 'value',
            message: 'What is your next todo item?',
        })
    };

    var message = await nextToDo();
    console.log(message);
};

const message = main().catch(console.error);
