import img1 from '../../../../../images/img1.jpeg'

export const MainSectionTrending = () => {
    return (
        <div className="trending">
            <div className="left">
                <h5>Trending New Song</h5>
                <div className="info">
                    <h2>New Jeans</h2>
                    <h4>Kim Minji</h4>
                    <h5>100 Million Plays</h5>
                    <div className="buttons">
                        <button>Listen Now</button>
                        <i className="fa-solid fa-heart"></i>
                    </div>
                </div>
            </div>
            <img src={ img1 } alt="" />
        </div>
    )
}
