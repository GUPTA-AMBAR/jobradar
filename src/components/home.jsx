import React from 'react';
import dreamjob   from './images/dreamjob2.jpg';
import styles from "./companies.module.css";
import amazon   from './images/amazon.png';
import glandpharma from './images/glandpharma.gif';
import google from './images/google.png';
import hitachi from './images/hitachi.gif';
import meta from './images/meta.png';
import springernature from './images/springernature.gif';
import star from './images/star.png';
import Footer from './footer';

const Home = () => {
  return (
    <>
    <div>hello</div>
    <body className="bg-white">
      <header>
        <nav className="p-6">
          <div className="flex justify-between items-center">
            <h1 className="pr-6 border-r-2 text-2xl font-bold text-gray-500"></h1>
            <div className="flex justify-between flex-grow">
              <div className="flex ml-6 items-center">
                
              </div>
            </div>
          </div>
        </nav>
        {/* Section Hero */}
        <div className="container mx-auto bg-gray-400 h-96 rounded-md flex items-center">
          <img src={dreamjob} alt="" />
        </div>
      </header>
      <main className="py-16 container mx-auto px-6 md:px-0">

      <h1 className="text-3xl font-bold text-gray-600 mb-10">
            <center><b>Popular Companies</b></center>
          </h1>

      <div className={`${styles.all}`}>
<div className={`card mb-3 ${styles.card}`} style={{maxWidth:"400px" , border:"2px solid red" , borderRadius:"6px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={glandpharma} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title" style={{background:"yellow"}}><b>Gland Pharma</b></h5>
                    <img src={star} className="img-fluid rounded-start" alt="..."/>4.5
                    <p className="card-text">Together, we can build a healthier world!.</p>
                    <p className="card-text"><small className="text-body-secondary"><i>(821 reviews)</i></small></p>
                </div>
                </div>
            </div>
</div>



<div className={`card mb-3 ${styles.card}`} style={{maxWidth:"400px" , border:"2px solid red" , borderRadius:"6px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={google} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title" style={{background:"yellow"}}><b>Google</b></h5>
                    <img src={star} className="img-fluid rounded-start" alt="..."/>4.8
                    <p className="card-text">don't be evil.</p>
                    <p className="card-text"><small className="text-body-secondary"><i>(945 reviews)</i></small></p>
                </div>
                </div>
            </div>
</div>


<div className={`card mb-3 ${styles.card}`} style={{maxWidth:"400px" , border:"2px solid red" , borderRadius:"6px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={amazon} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title" style={{background:"yellow"}}><b>Amazon</b></h5>
                    <img src={star} className="img-fluid rounded-start" alt="..."/>4.3
                    <p className="card-text">Work hard, Have fun, Make history.</p>
                    <p className="card-text"><small className="text-body-secondary"><i>(1214 reviews)</i></small></p>
                </div>
                </div>
            </div>
</div>



<div className={`card mb-3 ${styles.card}`} style={{maxWidth:"400px" , border:"2px solid red" , borderRadius:"6px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={meta} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title" style={{background:"yellow"}}><b>Meta</b></h5>
                    <img src={star} className="img-fluid rounded-start" alt="..."/>3.9
                    <p className="card-text">Meta, metamates, me.</p>
                    <p className="card-text"><small className="text-body-secondary"><i>(963 reviews)</i></small></p>
                </div>
                </div>
            </div>
</div>


<div className={`card mb-3 ${styles.card}`} style={{maxWidth:"400px" , border:"2px solid red" , borderRadius:"6px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={springernature} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title" style={{background:"yellow"}}><b>Springer Nature</b></h5>
                    <img src={star} className="img-fluid rounded-start" alt="..."/>4.5
                    <p className="card-text">180 years of progress - 180 years of discovery.</p>
                    <p className="card-text"><small className="text-body-secondary"><i>(2478 reviews)</i></small></p>
                </div>
                </div>
            </div>
</div>


<div className={`card mb-3 ${styles.card}`} style={{maxWidth:"400px" , border:"2px solid red" , borderRadius:"6px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={hitachi} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title" style={{background:"yellow"}}><b>Hitachi</b></h5>
                    <img src={star} className="img-fluid rounded-start" alt="..."/>4.8
                    <p className="card-text">Inspire the Next.</p>
                    <p className="card-text"><small className="text-body-secondary"><i>(1011 reviews)</i></small></p>
                </div>
                </div>
            </div>
</div>
        </div>



        <section>
          <center><h1 className="inline-block text-gray-600 font-bold text-3xl">
            <br />
            What we Actually Does?
          </h1></center>
          <br />

          {/* <div className="grid grid-cols-3 gap-4 mt-10"> */}
          <center>
          <div>
            Job-Radar is an intuitive and user-friendly platform designed to consolidate and provide all relevant information about company hiring processes in one centralized location. It aims to simplify the job search experience for users by offering a seamless interface and comprehensive details about job opportunities.

          </div>
          <br />
          </center>
          <div> 
          <b>   1-</b><b>Features of Job-Radar:</b>
            <br />
          <i style={{marginLeft:"29px"}}>A detailed database of companies actively hiring, categorized by industry, role, and location.</i>
          </div>

          <div> 
          <b>   2-</b><b>Job Postings:</b>
          <br />
          <i style={{marginLeft:"29px"}}>AUpdated listings of available positions with key information such as job description, required qualifications, salary range, and application deadlines.</i>
          </div>
          
        </section>
        {/* <div className="mt-14">
          <p>Ps. You can also become a Saunatime host in few clicks!</p>
        </div> */}
      </main>
    
      </body> 

      
    <Footer></Footer>
    
    </>


  );
};

export default Home;
