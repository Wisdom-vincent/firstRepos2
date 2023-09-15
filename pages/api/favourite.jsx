export default function Favourite(props){
    //props (properity)(ask about props)
    //we use props in react
    //pass data from component to another
    // In React, "props" is short for "properties," and it is a mechanism for passing data from a parent component to a child component. Props are one of the fundamental concepts in React, and they allow you to make your components dynamic and reusable.
    let myname='wisdom'

    return(
        <>
    <p> my name is {myname}</p>
    
        <h1>My name is {props.name}, wisdom vincent</h1>
        </>
    )
}