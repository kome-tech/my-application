// action = {
//     type: 'CREATE_TASK',
//     task: '買い物',
//     content: 'カレーの具を買います。',
//     priority: 'Low'
// }

const todo_reducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TASK":
      const todo = {
        task: action.task,
        content: action.content,
        priority: action.priority,
      };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id: id, ...todo }];
    case "DELETE_TASK":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default todo_reducer;
