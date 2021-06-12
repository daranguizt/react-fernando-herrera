
const initialState = [{
    id: 1,
    todo: 'buy bread',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if(action?.type === 'add'){
        return [...state, action.payload];
    }

    return state;
}

const newTodo = {
    id: 2,
    todo: 'buy milk',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}



let todos = todoReducer(initialState, addTodoAction);

console.log(todos);