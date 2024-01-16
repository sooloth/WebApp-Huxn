//props

const User = (props) =>{
  console.log(props)
  return <section></section>
}



function App () {
  // example 1 list
  /*const userinfo = [
    {
      'username': 'sooloth',
      'email': 'sooloth@gmail.com',
      'city': 'Laos'
    },
    {
      'username': 'boun',
      'email': 'boun@gmail.com',
      'city': 'Thailand'
    },
    {
      'username': 'phonekham',
      'email': 'phonekham@gmail.com',
      'city': 'Cambodia'
    }
  ]
*/
  return (
    <>
    {/* list 
    {userinfo.map(user => (
      <ul key={Math.random() * 10}>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.city}</li>
      </ul>
    ))}
    */}

    {/* props  */}
    <User
    name = "sooloth"
    img=""
    age={18}
    hobbies={['coding','sleeping','reading']}
    />
    </>

)}

export default App;