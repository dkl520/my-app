
export default function Profile({user}) {
        return(
            <>
                <h1> {user.name}  </h1>  
                <img className="avatar" src={user.imageUrl}  style={
                    {
                        width: user.imageSize,
                        height: user.imageSize
                    }
                }></img>   
                
            </>
        )
}