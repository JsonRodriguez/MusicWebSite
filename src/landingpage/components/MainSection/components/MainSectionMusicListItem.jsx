import { musicListItems } from '../data/musicList'

export const MainSectionMusicListItem = () => {
    return (
        <div className="items">
        {
            musicListItems.map((item) => {
                return(
                    <div key={item.key} className="item">
                        <div className="info">
                            <p>{ item.key }</p>
                            <img src={ item.img } alt="" />
                            <div className="details">
                                <h5>{ item.Song }</h5>
                                <p>{ item.Artist }</p>
                            </div>
                        </div>
                        <div className="actions">
                            <p>{ item.duration }</p>
                            <div className="icon">
                                <i className="fa-solid fa-play"></i>
                            </div>
                            <i className="fa-solid fa-square-plus"></i>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}
