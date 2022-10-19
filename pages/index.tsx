import type { NextPage } from 'next'
import GuestList from '../components/state/GuestList';
import UserSearch from '../components/state/UserSearch';

const Home: NextPage = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
    </div>
  )
}

export default Home
