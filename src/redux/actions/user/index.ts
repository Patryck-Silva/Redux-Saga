import { GET_USER_REQUEST,GET_USER_FAILURE,GET_USER_SUCCESS,IUser } from "../../types"



export function getUserRequest(name:string):{type:string,payload:string}{
  return {
    type:GET_USER_REQUEST,
    payload:name
  }
}
export function getUserSuccess(user:IUser):{type:string,payload:IUser}{
  return {
    type:GET_USER_SUCCESS,
    payload:user
  }
}
export function getUserFailure(error:string):{type:string,payload:string}{
  return {
    type:GET_USER_FAILURE,
    payload:error
  }
}
