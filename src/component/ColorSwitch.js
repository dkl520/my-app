export default function ColorSwitch({ onChangeColor }) {
function handleClick(){

}
     
    return (
        <button onClick={e=>{
             e.stopPropagation();
             onChangeColor();
        }}>
            改变颜色
        </button>
    );
}