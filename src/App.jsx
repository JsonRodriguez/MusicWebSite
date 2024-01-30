import './App.css'
import imgProfile from '../images/profile.avif'
import imgPro from '../images/imgPro.jpg'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.webp'
import img6 from '../images/img6.jpg'

function App() {

  return (
    <div className='main'>
      <aside className='sidebar'>
        <div className='logo'>
          <button className='menu-btn' id='menu-close'>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <i className="fa-solid fa-heart-pulse"></i>
          <a href="#">Music Player</a>
        </div>

        <div className="menu">
          <h5>Menu</h5>
          <ul>
            <li>
              <i className="fa-solid fa-bolt"></i>
              <a href="#">Explore</a>
            </li>
            <li>
              <i className="fa-solid fa-volume-low"></i>
              <a href="#">Genres</a>
            </li>
            <li>
              <i className="fa-solid fa-compact-disc"></i>
              <a href="#">Albums</a>
            </li>
            <li>
              <i className="fa-solid fa-microphone"></i>
              <a href="#">Artists</a>
            </li>
            <li>
              <i className="fa-solid fa-radio"></i>
              <a href="#">Poddcasts</a>
            </li>
          </ul>
        </div>

        <div className="menu">
          <h5>Library</h5>
          <ul>
            <li>
              <i className="fa-solid fa-rotate-left"></i>
              <a href="#">Recent</a>
            </li>
            <li>
              <i className="fa-solid fa-images"></i>
              <a href="#">Albums</a>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
              <a href="#">Favourites</a>
            </li>
            <li>
              <i className="fa-solid fa-folder"></i>
              <a href="#">Local</a>
            </li>
          </ul>
        </div>

        <div className="menu">
          <h5>Playlist</h5>
          <ul>
            <li>
              <i className="fa-solid fa-square-plus"></i>
              <a href="#">Create New</a>
            </li>
            <li>
              <i className="fa-solid fa-circle-play"></i>
              <a href="#">Best of 2023</a>
            </li>
            <li>
              <i className="fa-solid fa-circle-play"></i>
              <a href="#">Best of 2022</a>
            </li>
            <li>
              <i className="fa-solid fa-circle-play"></i>
              <a href="#">Kael Fischer</a>
            </li>
          </ul>
        </div>

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

      </aside>

      <main>
        <header>
          <div className="nav-links">
            <button className='menu-btn' id='menu-open'>
              <i className="fa-solid fa-bars"></i>
            </button>
            <a href="">Music</a>
            <a href="">Live</a>
            <a href="">Podcast</a>
          </div>

          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Type here to search' />
          </div>
        </header>

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

        <div className="playlist">
          <div className="genres">
            <div className="header">
              <h5>Genres</h5>
              <a href="">See all</a>
            </div>

            <div className="items">
              <div className="item">
                <p>Electro<br />Pop</p>
              </div>
              <div className="item">
                <p>Dance<br />Beeat</p>
              </div>
              <div className="item">
                <p>Clubhouse<br />Remix</p>
              </div>
              <div className="item">
                <p>Hip Hop<br />Rap</p>
              </div>
              <div className="item">
                <p>Alternative<br />Indie</p>
              </div>
              <div className="item">
                <p>Classical<br />Period</p>
              </div>
            </div>

          </div>

          <div className="music-list">
            <div className="header">
              <h5>Top Songs</h5>
              <a href="#">See all</a>
            </div>
            <div className="items">
              <div className="item">
                <div className="info">
                  <p>01</p>
                  <img src={ img3 } alt="" />
                  <div className="details">
                    <h5>Flowers</h5>
                    <p>Miley Cyrus</p>
                  </div>
                </div>
                <div className="actions">
                  <p>03:20</p>
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <i className="fa-solid fa-square-plus"></i>
                </div>
              </div>
              {/*  */}
              <div className="item">
                <div className="info">
                  <p>02</p>
                  <img src={ img4 } alt="" />
                  <div className="details">
                    <h5>Limón y Sal</h5>
                    <p>Julieta Venegas</p>
                  </div>
                </div>
                <div className="actions">
                  <p>03:25</p>
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <i className="fa-solid fa-square-plus"></i>
                </div>
              </div>
              {/*  */}
              <div className="item">
                <div className="info">
                  <p>03</p>
                  <img src={ img5 } alt="" />
                  <div className="details">
                    <h5>GODS</h5>
                    <p>NewJeans</p>
                  </div>
                </div>
                <div className="actions">
                  <p>03:40</p>
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <i className="fa-solid fa-square-plus"></i>
                </div>
              </div>
              {/*  */}
              <div className="item">
                <div className="info">
                  <p>04</p>
                  <img src={ img6 } alt="" />
                  <div className="details">
                    <h5>Super Shy</h5>
                    <p>NewJeans</p>
                  </div>
                </div>
                <div className="actions">
                  <p>02:34</p>
                  <div className="icon">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <i className="fa-solid fa-square-plus"></i>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>

      <div className="right-section">

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

        <div className="music-player">
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

          <div className="player-actions">
            <div className="buttons">
              <i className="fa-solid fa-repeat"></i>
              <i className="fa-solid fa-backward-step"></i>
              <i className="fa-solid fa-play"></i>
              <i className="fa-solid fa-forward-step"></i>
              <i className="fa-solid fa-right-left"></i>
            </div>
            <div className="lyrics">
              <i className="fa-solid fa-chevron-up"></i>
              <h5>LYRICS</h5>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
