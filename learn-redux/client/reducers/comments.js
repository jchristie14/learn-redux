function postComments(state = [], action) {
	switch(action.type){
		case 'ADD_COMMENT':
      //return existing state plus new comment
      return [...state,{
      	user: action.author,
      	text: action.comment,
      }];
		case 'REMOVE_COMMENT':
		  console.log("removing");
		  //return without deleted comment
		  return [
		    //from start to deleted
        ...state.slice(0,action.i),
        //from deleted to end
        ...state.slice(action.i + 1)
		  ]
		default:
		  return state;
	}
	return state;

}

function comments(state = [], action) {
	if (typeof action.postId !== 'undefinied') {
		return {
			//take current state
			...state,
			//overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;