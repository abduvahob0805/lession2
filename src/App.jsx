import './App.css'
import hero from './assets/hero.png'
import Clients from './assets/Logo.png'
import icon from './assets/Icon.png'
import frame from './assets/frame.png'


function App() {

  return (
    <>

          <div className="container">
           <header>
           <img src="https://nextcent-silk.vercel.app/nexcent-logo.png" alt="" />
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
              <button className="btn">Register Now <i class="fa-solid fa-arrow-right"></i></button>
            </nav>
           </header>

          </div>
          
          <main>

      <section className='hero'>
  <div className="container">
  <div className="hero-text">
   <h1>Lessons and insights <span>from 8 years</span></h1>
   <p>Where to grow your business as a photographer: site or social media?</p>
   <button className='hero-btn'>Register</button>
 </div>
 <div className="hero-img">
   <img src={hero} alt="" />
 </div>
  </div>
 
      </section>

      <section className='clients'>
        <div className="container">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="logos">
          <img src={Clients} alt="" />
          <img src={Clients} alt="" />
          <img src={Clients} alt="" />
          <img src={Clients} alt="" />
          <img src={Clients} alt="" />
          <img src={Clients} alt="" />
          <img src={Clients} alt="" />
        </div>
        </div>
      </section>

      <section className='entire'>
         <div className="container">
          <h2>Manage your entire community in a single system</h2>
          <div className="card-ota">
            <div className="card">
              <img src={icon} alt="" />
              <h3>Membership Organisations</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="card">
              <img src={icon} alt="" />
              <h3>Membership Organisations</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="card">
              <img src={icon} alt="" />
              <h3>Membership Organisations</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
         </div>
      </section>

      <section className='hero-end'>
  <div className="container">
  <div className="hero-img">
   <img src={frame} alt="" />
 </div>
  <div className="hero-text">
   <h1>The unseen of spending three years at Pixelgrade</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
   <button className='hero-btn'>Register</button>
 </div>
 
  </div>
 
      </section>


</main>
    </>
  )
}

export default App
