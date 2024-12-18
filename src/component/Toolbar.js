function AlertButton({ message, children, onSmash }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onSmash();
          }}>
            {children}
          </button>
    )
}
function Button({ onSmash, children }) {

    return (
        <button onClick={onSmash}>{children}</button>
    );
}


function PlayButton({ message }) {

    function handleClick() {
        alert(message)
    }

    return (
        <Button onSmash={handleClick} >
            {message}
        </Button>
    );


}

export default function Toolbar({ onPlayMovie, onUploadImage }) {

    return (
        <div onClick={() => alert("你点击了toolbar")} style={{ width: 220, height: 100, backgroundColor: 'red' }}>
            <AlertButton message="正在播放" onSmash={onPlayMovie}>
                播放电影
            </AlertButton>
            <PlayButton message="播放魔女宅急便"   ></PlayButton>
            <AlertButton message="正在上传" onSmash={onUploadImage} >
                上传图片
            </AlertButton>
        </div>
    );





}



