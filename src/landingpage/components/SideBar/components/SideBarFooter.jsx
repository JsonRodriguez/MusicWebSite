import imgProfile from '../../../../../images/profile.avif';

export const SideBarFooter = () => {
    return (
        <>
            <div className="playing">
            <div className="top">
                <img src={ imgProfile } alt="" />
                <h4>Apple<br />Homepod</h4>
            </div>
            <div className="bottom">
                <i className="fa-solid fa-podcast"></i>
                <p>Playing On Device</p>
            </div>
            </div>
        </>
    )
}
