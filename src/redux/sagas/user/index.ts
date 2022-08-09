import { GET_USER_FAILURE,GET_USER_SUCCESS,GET_USER_REQUEST,IUser } from "../../types";
import {all, call,put,takeLatest} from 'redux-saga/effects'
import { getUserFailure, getUserSuccess } from "../../actions";


let userApi:IUser

const userRequest = async (name:string) => {
  try{
    const response = await fetch(`https://api.github.com/users/${name}`)
    const data = await response.json()
    userApi = data
    return true
  } catch(e){
    return false
  }
}

export function* userData(action:{type:string,payload:string}){
  try{
    yield call(userRequest,action.payload)
    yield put(getUserSuccess(userApi))
  } catch(e){
    yield put(getUserFailure("falha ao requisitar"))
  }
}

export default all([takeLatest(GET_USER_REQUEST,userData)]);
