import { RightSectionHeader, RightSectionMusicActions, RightSectionTop } from './components'

export const RightSection = () => {
    return (
        <div className="right-section">
            <RightSectionHeader />

            <div className="music-player">
                <RightSectionTop />
                <RightSectionMusicActions />
            </div>
        </div>
    )
}
