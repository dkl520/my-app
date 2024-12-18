

export default function AlertButton(){

    
 function handlClick(){
    alert('点我了！')
 }

    return (
        <button onClick={handlClick}>
            点 我
        </button>
    )
}