interface AuthType {
    name:Text;
    isLoggedIn: boolean
}

const initialState = {
    isLoggedIn:false,
    name:''
}

const authReducer =(state = initialState, action:AuthType  ) =>{
    switch(action.isLoggedIn){
        // Do something here
        default:
            return state;
    }

}

export default authReducer;