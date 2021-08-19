import React , {Component} from 'react';
import './css/skins/orange.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import './css/main.css';
import './css/select2.min.css' ;
import './css/style.css';
import './css/styleswitcher.css'



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component{
  render() {
    const mysavv = {
      color: "white",
      border: " 2px solid white",
    };
    const bringto ={
      position:'relative',
       left:'0px',
       padding:'0px',
    };
    return (
     <div className="App">
      <div className="wrapper" >
        {/* <!-- Header Starts --> */}
        <header className="header">
           
            {/* Navigation Menu Starts  */}
            <nav className="site-navigation navigation" id="site-navigation">
                <div className="container">
                    <div className="site-nav-inner">
                        {/* <!-- Logo For ONLY Mobile display Starts --> */}
                        <a className="logo-mobile" href="index-2.html">
							<img id="logo-mobile" className="img-responsive" src="images/logo-dark.png" alt="" />
						</a>
                        {/* <!-- Logo For ONLY Mobile display Ends -->
                        <!-- Toggle Icon for Mobile Starts --> */}
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" >
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
                        {/* <!-- Toggle Icon for Mobile Ends --> */}
                        <div className="collapse navbar-collapse navbar-responsive-collapse">
                            {/* <!-- Main Menu Starts --> */}
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">HomePage</a></li>
                                <li><a href="#">Parachains</a></li>
                                <li><a href="#">Auctions</a></li>
                                <li><a href="#">Guide</a></li>
								<li><a href="#">Claim</a></li>
								<li><a href="#">KSM</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">LogIn</a></li> 
                               
                            </ul>
                            {/* <!-- Main Menu Ends --> */}
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- Navigation Menu Ends --> */}
        </header>
        {/* <!-- Header Ends -->
        <!-- Slider Starts --> */}
        <div id="main-slide" className="carousel slide carousel-fade" data-ride="carousel" style={{backgroundImage: 'url(images/slider/bg1.jpg)'}}>
            {/* <!-- Indicators Starts --> */}
            <ol className="carousel-indicators visible-lg visible-md">
                <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                
            </ol>
            {/* <!-- Indicators Ends -->
            <!-- Carousel Inner Starts --> */}
            <div className="carousel-inner">
                {/* <!-- Carousel Item Starts --> */}
                <div className="item active bg-parallax item-1">
                    <div className="slider-content">
                        <div className="container">
                            <div className="slider-text text-center">
                                <h3 className="slide-title">Parachains<br />Are  Here..</h3>
                                <p>
                                    <a href="about.html" className="slider btn btn-primary" style={mysavv}>Get Started</a>&nbsp;&nbsp;&nbsp;
                                    <a href="about.html" className="slider btn btn-primary" style={mysavv}>Choose Your Wallet</a>&nbsp;&nbsp;&nbsp;
                                    <a href="about.html" className="slider btn btn-primary" style={mysavv}>Ready To Buy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Carousel Item Ends --> */}
                
            </div>
            {/* <!-- Carousel Inner Ends --> */}
           
        </div>
        {/* <!-- Slider Ends --> */}
        <div className="container">
            <div className="row">
                {/* <!-- Logo Starts --> */}
                <div className="main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs">
                    <a href="index-2.html">
                        <img id="logo" className="img-responsive" src="images/logo-dark.png" alt="logo" />
                    </a>
                </div>
                {/* <!-- Logo Ends -->
                <!-- Statistics Starts --> */}
                <div className="col-md-7 col-lg-7">
                    <ul className="unstyled bitcoin-stats text-center">
                        <li>
                            <h6>9,450 USD</h6><span>Last trade price</span></li>
                        <li>
                            <h6>+5.26%</h6><span>24 hour price</span></li>
                        <li>
                            <h6>12.820 BTC</h6><span>24 hour volume</span></li>
                        <li>
                            <h6>2,231,775</h6><span>active traders</span></li>
                        <li>
                            <div className="btcwdgt-price" data-bw-theme="light" data-bw-cur="usd"></div>
                            <span>Live Bitcoin price</span>
                        </li>
                    </ul>
                </div>
                {/* <!-- Statistics Ends --> */}
            </div>
        </div>
     <br /><br />
        {/* <!-- About Section Starts --> */}
        <section className="about-us">
            <div className="container">
                {/* <!-- Section Title Starts --> */}
                <div className="row text-center">
                    <h2 className="title-head">About Us</h2>
                    <div className="title-head-subtitle">
                        <p>The Scalable, Multichain Network for Radical Innovation.</p>
                    </div>
                {/* <!-- Section Title Ends -->
                <!-- Section Content Starts --> */}
                <div className="row about-content">
                    {/* <!-- Image Starts --> */}
                    <div className="col-sm-12 col-md-5 col-lg-5 text-center">
                        
                        <p className="about-text">Kusama is a scalable network of specialized blockchains built using Substrate and nearly the same codebase as Polkadot. The network is an experimental development environment for teams who want to move fast and innovate on Kusama, or prepare for deployment on Polkadot.

                            <br />Kusama was founded in 2019 by Gavin Wood, founder of Polkadot and co-founder and former CTO of Ethereum.</p>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-1 text-center">                        
                    </div>
                    {/* <!-- Content Starts --> */}
                    <br />
                    <div className="col-sm-12 col-md-7 col-lg-6">
                        <h3 className="title-about">Launch your custom blockchain</h3>
                       
                        <ul className="nav nav-tabs">
                            <li className="active"><a data-toggle="tab" href="#menu1">Community</a></li>
                            <li><a data-toggle="tab" href="#menu2">Valuable Experience</a></li>
                            <li><a data-toggle="tab" href="#menu3">Fast Iteration</a></li>
                        </ul>
                        <div className="tab-content">
                            
                            <div id="menu1" className="tab-pane fade in active">
                                <p>Leverage Polkadot’s global brand and developer community for your parachain, parathread or dApp.</p>
                            </div>
                            <div id="menu2" className="tab-pane fade">
                                <p>For teams looking to move to Polkadot after fine-tuning on Kusama, begin building your community and brand on Kusama before deployment.</p>
                            </div>
                            <div id="menu3" className="tab-pane fade">
                                <p>Move fast and ship your product. Kusama’s risk-taking and nimble mentality allows developers to move swiftly through the governance and upgrade process, enabling rapid progress and growth.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Content Ends --> */}
                </div>
                {/* <!-- Section Content Ends --> */}
            </div>
            </div>
        </section>
        {/* <!-- About Section Ends --> */}
        <br /><br /><br />
        <center><a className="btn btn-primary" href="#" style={mysavv}>Know More About Kusama</a></center>
        
        <br /><br />
        {/* <!-- Features and Video Section Starts --> */}
        <section className="image-block"  style={{backgroundImage: 'url(images/slider/bg9.jpg)'}}>
            <div className="container-fluid">
                <div className="row">
                    {/* <!-- Features Starts --> */}
                    <div className="col-md-12 ts-padding img-block-left" style={bringto}>
                        <section id="process-block" >
                            <div className="container section-content anim section section-wrapper">
                                <div className="title-desc title-margin text-center">
                          
                                  <div className="row text-center">
                                    <h2 className="title-head">..Bring To Your Project</h2>
                                    <div className="title-head-subtitle">
                                        <p>Scroll through the timeline</p>
                                    
                                    </div>
                                {/* <!--/section-title--> 
                                <!--process tab--> */}
                                
                                 
                                  {/* <!--tab nav--> */}
                                  <ul className="nav nav-tabs flex-column flex-sm-row" >
                                    
                                      <li ><a href="#concept" data-toggle="tab">
                                          <h3 style={{color:'white'}}> Innovation           </h3>
                                          </a>
                                          
                                      </li>
                                      <li><a href="#prototype" data-toggle="tab">
                                          <h3 style={{color: '#fd961a'}}>Scalability       </h3>
                                          </a>
                                      </li>
                                      <li><a href="#design" data-toggle="tab">
                                          <h3 style={{color:'white'}}>Interoperability        </h3>
                                          </a>
                                      </li>
                                      <li><a href="#development" data-toggle="tab">
                                          <h3 style={{color: '#fd961a'}}>Customisation   </h3>
                                          </a>
                                      </li>
                                      <li><a href="#final" data-toggle="tab">
                                        <h3 style={{color:'white'}}>Barriers   </h3>
                                        </a>
                                    </li>
                                      
                                  </ul>
                                  {/* <!--/tab nav--> 
                                  <!--tab container--> */}
                                  <div className="tab-content"> 
                                    
                                    {/* <!--tab nav item 1--> */}
                                    <div id="concept" className="tab-pane active">
                                      <div className="row flex-column flex-sm-row">
                                      
                                      
                                      <div className="col-md-6 col-lg-12 text-center">
                                        {/* <!-- title and description --> */}
                                        <div className="title-desc anim-4" id="vision">
    
                                          <p className="fontadjusted">
                                              <br />
                                            Kusama is built by the same teams as Polkadot, using nearly the same code and tools. The network places the latest tech from Parity Technologies and Web3 Foundation in the hands of developers, even before those features make it to Polkadot. </p>
                                       
                                        </div>
                          
                                      </div>
                                      {/* <!--/tab content--> */}
                                    </div>             
                                    </div>
                                    {/* <!--/tab nav item 1--> 
                                    
                                    <!--tab nav item 2--> */}
                                    <div id="prototype" className="tab-pane"> 
                                      {/* <!--tab img--> */}
                                      <div className="row">
                                      
                                      <div className="col-md-6 col-lg-12 text-center">
                                        {/* <!-- title and description --> */}
                                        <div className="title-desc anim-4" id="vision">
                                          <p className="fontadjusted"><br />
                                            Kusama’s sharded blockchains and open governance provide a scalable and future-proof infrastructure for businesses, marketplaces and applications to deploy and mature. </p>
                                       
                                        </div>
                          
                                      </div>
                                      {/* <!--/tab content-->              */}
                                    </div>
                                  </div>
                                    {/* <!--/tab nav item 2--> 
                                
                                     <!--tab nav item 3--> */}
                                    <div id="design" className="tab-pane"> 
                                      <div className="row">
                                     
                                      {/* <!--tab content--> */}
                                      <div className="col-md-6 col-lg-12 text-center">
                                        {/* <!-- title and description --> */}
                                        <div className="title-desc anim-4" id="vision">
                                          <p className="fontadjusted"><br />
                                            Kusama brings multiple blockchains together into one sharded network, freeing developers from the siloes created by legacy blockchain networks.
                                            <br />Kusama brings multiple blockchains together into one sharded network, freeing developers from the siloes created by legacy blockchain networks.
                                          </p>
                                       
                                        </div>
                          
                                      </div>
                                      {/* <!--/tab content-->              */}
                                    </div>
                                  </div>
                                    {/* <!--/tab nav item 3-->     
                                
                                    <!--tab nav item 4--> */}
                                    <div id="development" className="tab-pane">
                                      <div className="row"> 
                                      {/* <!--tab content--> */}
                                      <div className="col-md-6 col-lg-12 text-center">
                                        {/* <!-- title and description --> */}
                                        <div className="title-desc anim-4" id="vision">
                                          
                                          <p className="fontadjusted"><br />
                                            With Substrate, developers can build their own app-specific blockchain and connect it to Kusama.
                                        <br />
                                        Kusama is a network built as a risk-taking, fast-moving ‘canary in the coal mine’ for its cousin Polkadot. It's a living platform built for change agents to take back control, spark innovation and disrupt the status quo.</p>
                                       
                                        </div>
                          
                                      </div>
                                      {/* <!--/tab content-->              */}
                                    </div>
                                  </div>
                                    {/* <!--/tab nav item 4-->  */}
                                    <div id="final" className="tab-pane"> 
                                        <div className="row">
                                       
                                        {/* <!--tab content--> */}
                                        <div className="col-md-6 col-lg-12  text-center">
                                          {/* <!-- title and description --> */}
                                          <div className="title-desc anim-4" id="vision">
                                           
                                            <p className="fontadjusted"><br />
                                                Kusama is owned and governed by a community of network participants who vote on and control the evolution of the network. Have a voice and make your mark in the evolution of the network. </p>
                                         
                                          </div>
                            
                                        </div>
                                        {/* <!--/tab content-->              */}
                                      </div>
                                    </div>                                   
                                    
                                   
                                  </div>
                                  {/* <!--/tab container-->  */}
                                  
                                </div>
                                {/* <!--process tab-->  */}
                                
                              </div>
                            </div> 
                          </section>
                    </div>
                    {/* <!-- Features Ends --> */}
                    
                </div>
            </div>
        </section>
        {/* <!-- Features and Video Section Ends -->
        
        <!-- Bitcoin Calculator Section Starts --> */}
        <section className="bitcoin-calculator-section">
            <div className="container">
                <div className="row" style={{backgroundImage: 'url(images/slider/bg9.jpg)'}}>
                    {/* <!-- Section Heading Starts --> */}
                    <div className="col-md-12">
                        <h2 className="title-head text-center"><span>Kusama</span> Calculator</h2>
                        <p className="message text-center">Find out the current Kusama value with our easy-to-use converter</p>
                    </div>
                    {/* <!-- Section Heading Ends -->
                    <!-- Bitcoin Calculator Form Starts --> */}
                    <div className="col-md-12 text-center">
                        <form className="bitcoin-calculator" id="bitcoin-calculator">
                            {/* <!-- Input #1 Starts --> */}
                            <input className="form-input" name="btc-calculator-value" value="1" />
                           
                            <div className="form-equal">=</div>
                            {/* <!-- Input/Result Starts --> */}
                            <input className="form-input form-input-result" name="btc-calculator-result" />
                            {/* <!-- Input/Result Ends -->
                            <!-- Select Currency Starts --> */}
                            <div className="form-wrap">
                                <select id="currency-select" className="form-input select-currency select-primary" name="btc-calculator-currency" data-dropdown-className="select-primary-dropdown" ></select>
                            </div>
                            {/* <!-- Select Currency Ends --> */}
                        </form>
                        <p className="info"><i>* Data updated every 15 minutes</i></p>
                    </div>
                    {/* <!-- Bitcoin Calculator Form Ends --> */}
                </div>
            </div>
        </section>
        {/* <!-- Bitcoin Calculator Section Ends -->
        <!-- Quote and Chart Section Starts --> */}
        <section className="image-block2" >
            <div className="container-fluid" >
                <div className="row" style={{backgroundImage: 'url(images/slider/bg9.jpg)'}} >
                    {/* <!-- Quote Starts --> */}
                    <div className="col-md-4 img-block-quote bg-image-2">
                        <blockquote>
                            <p>Kusama is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
                            <footer>Marc Smith - CEO</footer>
                        </blockquote>
                    </div>
                    {/* <!-- Quote Ends -->
                    <!-- Chart Starts --> */}
                    <div className="col-md-8 bg-grey-chart" >
                        <div className="chart-widget dark-chart chart-1">
                            <div>
                                <div className="btcwdgt-chart" data-bw-theme="dark"></div>
                            </div>
                        </div>
						<div className="chart-widget light-chart chart-2">
                            <div>
                                <div className="btcwdgt-chart" bw-theme="light"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Chart Ends --> */}
                </div>
            </div>
        </section>
        {/* <!-- Quote and Chart Section Ends -->
       
        <!-- Call To Action Section Starts --> */}
        <section className="call-action-all">
			<div className="call-action-all-overlay">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							{/* <!-- Call To Action Text Starts --> */}
							<div className="action-text">
								<h2>Get Started Today With Kusama</h2>
								<p className="lead">Open account for free and start trading Kusama!</p>
							</div>
							{/* <!-- Call To Action Text Ends -->
							<!-- Call To Action Button Starts -->
							<!-- <p className="action-btn"> --> */}
                                <br />
                                <center><p><a className="slider btn btn-primary" href="#" style={mysavv}>Register Now</a></p></center> 
							{/* <!-- Call To Action Button Ends --> */}
						</div>
					</div>
				</div>
			</div>
        </section>
        {/* <!-- Call To Action Section Ends -->
        <!-- Footer Starts --> */}
        <footer className="footer">
            {/* <!-- Footer Top Area Starts --> */}
            <div className="top-footer">
                <div className="container">
                    <div className="row">
                        {/* <!-- Footer Widget Starts --> */}
                        <div className="col-sm-4 col-md-2">
                            <h4 style={{color: 'white'}}>Our Company</h4>
                            <div className="menu">
                                <ul>
                                    <li><a href="index-2.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Footer Widget Ends -->
                        <!-- Footer Widget Starts --> */}
                        <div className="col-sm-4 col-md-2">
                            <h4 style={{color: 'white'}}>Help and Support</h4>
                            <div className="menu">
                                <ul>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="terms-of-services.html">Terms of Services</a></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Footer Widget Ends -->
                        <!-- Footer Widget Starts --> */}
                        <div className="col-sm-4 col-md-3">
                            <h4 style={{color: 'white'}}>Contact Us </h4>
                            <div className="contacts">
                                <div>
                                    <span>contact@website.com</span>
                                </div>
                                <div>
                                    <span>00216 21 184 010</span>
                                </div>
                                <div>
                                    <span>London, England</span>
                                </div>
                                <div>
                                    <span>mon-sat 08am &#x21FE; 05pm</span>
                                </div>
                            </div>
			
                            <div className="social-footer">
                                <ul>
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
						
                        </div>
                        {/* <!-- Footer Widget Ends --> */}
						{/* <!-- Footer Widget Starts --> */}
                        <div className="col-sm-12 col-md-5">
							{/* <!-- Facts Starts --> */}
							<div className="facts-footer">
								<div>
									<h5 style={{color: 'white'}}>$198.76B</h5>
									<span>Market cap</span>
								</div>
								<div>
									<h5 style={{color: 'white'}}>243K</h5>
									<span>daily transactions</span>
								</div>
								<div>
									<h5 style={{color: 'white'}}>369K</h5>
									<span>active accounts</span>
								</div>
								<div>
									<h5 style={{color: 'white'}}>127</h5>
									<span>supported countries</span>
								</div>
							</div>
							{/* <!-- Facts Ends --> */}
							<hr />
							{/* <!-- Supported Payment Cards Logo Starts --> */}
							<div className="payment-logos">
								<h4 className="payment-title">supported payment methods</h4>
								<img src="images/icons/payment/american-express.png" alt="american-express" />
								<img src="images/icons/payment/mastercard.png" alt="mastercard" />
								<img src="images/icons/payment/visa.png" alt="visa" />
								<img src="images/icons/payment/paypal.png" alt="paypal" />
								<img className="last" src="images/icons/payment/maestro.png" alt="maestro" />
							</div>
							{/* <!-- Supported Payment Cards Logo Ends --> */}
                        </div>
                        {/* <!-- Footer Widget Ends --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Footer Top Area Ends -->
            <!-- Footer Bottom Area Starts --> */}
            <div className="bottom-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {/* <!-- Copyright Text Starts --> */}
                            <p className="text-center">Copyright © </p>
                            {/* <!-- Copyright Text Ends --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer Bottom Area Ends --> */}
        </footer>
        {/* <!-- Footer Ends -->
		<!-- Back To Top Starts  --> */}
        <a href="#" id="back-to-top" className="back-to-top fa fa-arrow-up"></a>
		{/* <!-- Back To Top Ends  --> */}
		
        {/* <!-- Template JS Files --> */}
        <script src="js/jquery-2.2.4.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/select2.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/custom.js"></script>
		
		{/* <!-- Live Style Switcher JS File - only demo --> */}
		<script src="js/styleswitcher.js"></script>

    </div>


    </div>
    );
  }
}
export default App;
