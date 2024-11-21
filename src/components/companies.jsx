import styles from "./companies.module.css";
import amazon   from './images/amazon.png';
import glandpharma from './images/glandpharma.gif';
import google from './images/google.png';
import hitachi from './images/hitachi.gif';
import meta from './images/meta.png';
import springernature from './images/springernature.gif';
import star from './images/star.png';


const Companies = ()=>{
    return (
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
    )
}

export default Companies;