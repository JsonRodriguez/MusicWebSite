
import { MainSectionGenres, MainSectionHeader, MainSectionMusicList, MainSectionTrending } from './components'


// eslint-disable-next-line react/prop-types
export const MainSection = ({ onClickMenuOpen }) => {
    return (
        <main>
            <MainSectionHeader onClickMenuOpen={ onClickMenuOpen } />
            <MainSectionTrending />

            <div className="playlist">
                <MainSectionGenres />
                <MainSectionMusicList />
            </div>
        </main>
    )
}
