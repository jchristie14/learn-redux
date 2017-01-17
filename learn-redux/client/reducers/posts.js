// a reducer takes in two things: the action & copy of current state

function posts(state = [], action) {
	console.log(state, action);
	return state;
}

export default posts;