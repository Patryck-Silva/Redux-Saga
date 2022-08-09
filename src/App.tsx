import { useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux'
import { getUserRequest } from './redux/actions'
import { UserState } from './redux/reducers/user'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch()
function App() {
  const userGlobalState: UserState = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const handleUser = () => {
    dispatch(getUserRequest(name))
  }
  return (
    <div>
      <h1>User {userGlobalState.user?.name}</h1>
      <span>URL:</span>
      <a href={userGlobalState.user?.html_url} target="_Blank" rel="noreferrer">
        {userGlobalState.user?.html_url}
      </a>

      <br />
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button onClick={handleUser}>User Request</button>
    </div>
  )
}

export default App
