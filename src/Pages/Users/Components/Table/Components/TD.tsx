import { User } from '../Table'
import ComponentTD from './ComponentTD'

export interface UsersList {
  fetchedData: User[]
}

const TDComponent = ({ fetchedData }: UsersList) => {
  return (
    <>
      {fetchedData.map((user: User) => (
        <ComponentTD user={user} key={user.id} />
      ))}
    </>
  )
}

export default TDComponent
