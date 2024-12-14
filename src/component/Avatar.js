import getImageUrl from "../util/util"
export default function Avatar({ person, size }) {
    return (<img
        src={getImageUrl(person)}
        alt="Hedy Lamarr"
        className="photo"
        width={size}
        height={size}
    />
    )
}