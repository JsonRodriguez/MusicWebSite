import img2 from '../../../../../images/img2.jpeg'

export const RightSectionTop = () => {
    return (
        <div className="top-section">
            <div className="header">
                <h5>Player</h5>
                <i className="fa-solid fa-music"></i>
            </div>
            <div className="song-info">
                <img src={ img2 } alt="" />
                <div className="description">
                    <h3>Unstoppable</h3>
                    <h5>Sia</h5>
                    <p>Best of 2024</p>
                </div>
                <div className="progress">
                    <p>2:45</p>
                    <div className="active-line"></div>
                    <div className="deactive-line"></div>
                    <p>1:02</p>
                </div>
            </div>
        </div>
    )
}
