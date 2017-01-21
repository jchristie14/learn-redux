// a reducer takes in two things: the action & copy of current state

function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
      console.log(`incrementing likes`);
      const i = action.index;
      return [
        ...state.slice(0,i),//before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1),//after the one we are updating
      ]
    //return updated state
		default:
		  return state;
	}
	console.log(state, action);
	return state;
}

export default posts;