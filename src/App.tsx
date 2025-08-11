
import type {RootState} from './app/store';
import {useSelector} from 'react-redux';
import './App.css'
import { getJokes } from './features/joke/JokeSelector';
import TableComponent from './components/Table';

function App() {
  // use selector or any other hook can only be used inside a functional component.
  const jokeState = useSelector((state:RootState) => state.joke); // getting the global state.
  //const dispatch = useDispatch(); // dispatching actions
  // using a query hook automatically fetches the data and returns query values.
  // const {data,error,isLoading} = useGetAnyJokeQuery('Any');

  const jokes = getJokes(jokeState);

  return (
    <div className="mt-10 mx-auto w-1/2">
      <div className='flex justify-between'>
        <h1>Jokes Table</h1>
        <button className='bg-blue-600 px-10'>Add Joke</button>
      </div>
      <TableComponent 
      data = {jokes}
      columns={[
        {
          key:"setup",
          label:"Setup",
          render:(value,row) => value.toString()
        },
         {
          key:"delivery",
          label:"Delivery",
          render:(value,row) => value.toString()
        },
         {
          key:"category",
          label:"Category",
          render:(value,row) => value.toString()
        }
      ]}
      />
    </div>
  )
}

export default App
