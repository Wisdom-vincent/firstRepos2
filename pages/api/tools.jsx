export default function Tools(props){
    return(
        <p>my name {props.name}
            my skills sets are 
            <ul>
            <li>{props.skills1}</li>
            <li>{props.skills2}</li>
            <li>{props.skills3}</li>
            <li>{props.skills4}</li>
            </ul> 
        </p>
        
    )
}