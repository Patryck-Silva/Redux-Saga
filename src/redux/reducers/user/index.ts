import { IUser } from '../../types'
import {GET_USER_SUCCESS, GET_USER_FAILURE,GET_USER_REQUEST} from "../../types";

export interface UserState {
  user?:IUser,
  loading?:boolean,
  error?:string,
}

const initialState:UserState = {
  user: {
    html_url: '',
    name: '',
  },
  loading: false,
  error: 'deu ruim', 
}

export const userReducer = (state:UserState = initialState, action:any) => {
  switch (action.type){
    case GET_USER_REQUEST:
      return {
        ...state,
        loading:true,
        user:action.payload,
        error:'',
      }
    case GET_USER_SUCCESS:
      return{
        ...state,
        loading:false,
        user:action.payload,
        error:'',
      }
    case GET_USER_FAILURE:
      return{
        ...state,
        loading:false,
        error:action.payload,
      }
    default:
      return state;

  }
}