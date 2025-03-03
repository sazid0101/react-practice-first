export default function User({user}){
    console.log(user)
    const {name,email,id} = user
    return(
        <div className="box">
            <h3>Id: {id}</h3>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}