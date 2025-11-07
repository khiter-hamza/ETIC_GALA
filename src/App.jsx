import React from 'react'
import './index.css'
import torchImage from './images/torch.png'
import logoImage from './images/Layer_1.png'
import aboutUsImage from './images/about_us.JPG'
import anisImage from './images/anis.png'
import melisaImage from './images/melisa.png'
import aminaImage from './images/amina.png'
import etic_logo from "./images/etic_logo_colore.png"
import insgram_logo from "./images/logo-instagram.png"
import facebook_logo from "./images/icone-medias.png"
import twitter_logo from "./images/download.png"  

function App() {
  return (
    <div className="App">
      <div className='background'>
        {/* Header */}
        <header className="header">
          <div className="header-container">
            <img id="logo" src={logoImage} alt="ETIC GALA Logo" className="logo" />
            <nav>
              <ul className="heading">
                <li className="li"><a href="#about">À PROPOS DE NOUS?</a></li>
                <li className="li"><a href="#alumni">ALUMNI</a></li>
                <li className="li"><a href="#contact">CONTACTEZ-NOUS</a></li>
              </ul>
            </nav>
            <a id="rlink" href="#register">
              <button id="register">S'INSCRIRE</button>
            </a>
          </div>
        </header>

        {/* Hero Section - "C'est quoi ETIC GALA ?" */}
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-content-left">
              <h1 className="hero-title">C'est quoi ETIC GALA ?</h1>
              <p className="hero-description">
                ETIC GALA est un événement d'une journée pour les anciens membres et les membres actuels 
                du club pour les aider dans leur parcours professionnel, avec des activités et du networking. 
                Inscrivez-vous maintenant.
              </p>
              <button className="btn-primary">En savoir plus</button>
            </div>
            <div className="hero-content-right">
              <div className="hero-image-frame">
                <img src={torchImage} alt="ETIC GALA Torch" className="hero-image" />
                <div className="arrow-icon">→</div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="introduction-section">
          <div className="section-container">
            <div className="introduction-content">
              <div className="introduction-header">
                <h2 className="introduction-heading">
                  introduction <span className="intro-arrow">→</span> AU ETIC GALA
                </h2>
              </div>
              <div className="introduction-text">
                <p>
                  Le Gala ETIC est un événement prestigieux annuel qui réunit les membres du club ETIC, 
                  les anciens élèves, les clubs partenaires et les collaborateurs stratégiques des startups 
                  et des grandes entreprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-section">
          <div className="section-container">
            <h2 className="section-title">ABOUT US</h2>
            <div className="about-content">
              <div className="about-image-container">
                <img src={aboutUsImage} alt="ETIC GALA Group" className="group-image" />
                <div className="speech-bubble">WE ACT FOR IMPACT</div>
              </div>
              <div className="about-text">
                <p>
                  Le Gala ETIC est une occasion unique de partager des expériences et une plateforme 
                  d'échange de compétences, encourageant les personnes talentueuses à se développer 
                  et à contribuer à l'écosystème technologique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        <section id="alumni" className="alumni-section">
          <div className="section-container">
            <h2 className="section-title">ALUMNI</h2>
            <div className="alumni-grid">
              <div className="alumni-card">
                <img src={anisImage} alt="Aniss Bessalah" className="alumni-avatar-img" />
                <h3 className="alumni-name">Aniss Bessalah</h3>
                <p className="alumni-title">Graduate DESI, Master Thesis @IBM Research</p>
                <p className="alumni-role">RESPO DEV 2023-2024</p>
              </div>
              <div className="alumni-card">
                <img src={melisaImage} alt="Melissa Tessa" className="alumni-avatar-img" />
                <h3 className="alumni-name">Melissa Tessa</h3>
                <p className="alumni-title">State engineer in computer science, ESI ex-INI</p>
                <p className="alumni-role">Data passionate</p>
              </div>
              <div className="alumni-card">
                <img src={aminaImage} alt="Amina LAGGOUN" className="alumni-avatar-img" />
                <h3 className="alumni-name">Amina LAGGOUN</h3>
                <p className="alumni-title">Esi graduate</p>
                <p className="alumni-role">RESPO REL 2023-2024</p>
              </div>
            </div>
            <div className="alumni-button-container">
             <a href="https://meylicya.github.io/ETIC-Gala-Map/" > <button className="btn-see-more">Alumni Map...</button></a> 
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="section-container">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-content">
              <div className="contact-form-container">
                <form className="contact-form">
                  <div className="form-group-underline">
                    <input type="text" id="fullname" name="fullname" placeholder="Full Name" required />
                  </div>
                  <div className="form-group-underline">
                    <input type="email" id="email" name="email" placeholder="E-mail" required />
                  </div>
                  <div className="form-group-underline">
                    <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <button type="submit" className="btn-contact">Contact Us</button>
                </form>
              </div>
              <div className="contact-info">
                <div className="etic-logo-box">
                  <img src={etic_logo} alt="ETIC GALA Logo" className="group-image1" />
                </div>
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <h3 className="contact-label">Contact</h3>
                    <p className="contact-value">etic@esi.dz</p>
                  </div>
                  <div className="contact-detail-item">
                    <h3 className="contact-label">Based in</h3>
                    <p className="contact-value">ESI - Ecole nationale Supérieure d'Informatique</p>
                  </div>
                </div>
                <div className="social-media-icons">
                  <a href="#" className="social-icon"><img src={insgram_logo} alt="Melissa Tessa" className="alumni-avatar-img" /></a>
                  <a href="#" className="social-icon"><img src={facebook_logo} alt="Melissa Tessa" className="alumni-avatar-img" /></a>
                  <a href="#" className="social-icon"><img src={twitter_logo} alt="Melissa Tessa" className="alumni-avatar-img" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
