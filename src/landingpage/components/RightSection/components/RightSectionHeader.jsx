import imgPro from '../../../../../images/imgPro.jpg'

export const RightSectionHeader = () => {
    return (
        <div className="profile">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-gear"></i>
            <div className="user">
                <div className="left">
                    <img src={ imgPro } alt="" />
                </div>
                <div className="right">
                    <h5>Maia Lima</h5>
                </div>
            </div>
        </div>
    )
}
