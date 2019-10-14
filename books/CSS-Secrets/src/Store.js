
const initialState = {
  posts:[],
  todos: [
    {
      id: 0,
      text: 'First',
      completed: true
    },
    {
      id: 1,
      text: 'Second',
      completed: false
    },
    {
      id: 2,
      text: 'Third',
      completed: true
    }
  ],
  counters: {
    'first': 0,
    'second': 10,
    'third': 20
  }

}


export default initialState;

