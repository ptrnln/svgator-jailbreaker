import { useSelector } from "react-redux"

export default function DownloadMessage() {
    const downloads = useSelector((state) => {
        return Object.values(state);
    })
    const handleClick = (e) => {

    }
    return (
        <>
            {downloads.length > 0 && (
            <>
            <h1>Download Detected</h1>
            <p>
                Extension svgator-jailbreaker has detected a download from SVGator,<br/>
                Would you like to open this file in the sidepanel?
            </p>
            <button onClick={handleClick}>
                Open
            </button>
            </>
            )}
        </>
    )
}