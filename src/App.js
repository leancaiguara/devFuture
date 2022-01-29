import './App.css';
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import closeButton from './assets/images/close-svgrepo-com.svg'
import {BsCheck2Circle} from 'react-icons/bs'
import downArrow from './assets/images/arrow-down-svgrepo-com.svg'
import hamburguerMenu from './assets/images/menu-svgrepo-com.svg'


function App() {
  return (
    <div className="app-container">
      <div className="app__hero-image"></div>
      {/* Header */}
      <header className='app__header'>
        <div className="app__logo" >
          <Link to='home' className="logo" href="#">dev<span>.</span>Future<span>.</span></Link>
        </div>

        <nav className="app__nav" >
        <img class="nav__close-btn" src={closeButton} alt="close-menu"/>
          <ul>            
            <li><Link className="nav__link" to='#'>Alumnos</Link></li>
            <li><Link className="nav__link" to='#'>Voluntarios</Link></li>
            <li><Link className="nav__link" to='#'>Nosotros</Link></li>           
          </ul>
        </nav>

        <img className="app__nav__hamburguer-menu" src={hamburguerMenu} alt="hamburguer-menu" />

        </header>

        <section className="hero-section" >
          <h1>Vos sos el <span className="colored" >Futuro</span>!</h1>
          <p className="subhead">El mundo está cambiando, sé parte del cambio!</p>
       
          <div className="cta-div" >
            
        <button className='hero-section__cta-btn' >
          {/* <BsCheck2Circle/> */} Quiero ser voluntario</button>
         </div>

         <img className="hero-section__down-arrow" src={downArrow} alt="down-arrow" />

        </section>

        <section className='programa-desc' > 
        <div class="feature">
        <div class="content">
          <p class="title">Title</p>
          <p class="desc">
            Caminito con SVG explicando el programa 
          </p>
        </div>
        <img src="images/shoe2.jpg" alt="Nike black shoe" />
        </div>
        </section>

        <footer className='footer'>
          <div>
          <p>¿Quienes somos?</p>
          <p>Contactanos</p>
          <p>trabaja con nosotros</p>
          </div>
          <div>
          <p>Políticas de privacidad</p>
          <Link to="#">Donaciones</Link>
          </div>
        </footer>
        
    </div>
  );
}

export default App;
