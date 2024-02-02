import { MainSectionMusicListItem } from "./MainSectionMusicListItem"

export const MainSectionMusicList = () => {
    return (
        <div className="music-list">
            <div className="header">
                <h5>Top Songs</h5>
                <a href="#">See all</a>
            </div>

            <MainSectionMusicListItem /> 
        </div>
    )
}
