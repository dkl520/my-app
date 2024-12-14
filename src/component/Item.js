export default function Item({name,isPacked,key}){

      return(
        
        <li className="item"  key={key}> 
        {name} {isPacked && 'U•ェ•*'}
         </li>
      );


}