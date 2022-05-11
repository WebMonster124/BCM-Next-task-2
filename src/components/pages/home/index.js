import React from 'react';
import { useNavigate } from 'react-router-dom';

import Back_image_1 from '../../../images/background1.png';
import Back_image_2 from '../../../images/background2.png';
import Image1 from '../../../images/image1.png';
import Image2 from '../../../images/image2.png';
import Vector from '../../../images/Vector.png';

import './Home.scss';

const Home = () => { 
    const navigate = useNavigate();

    return (
        <div className="home-main">
            <div className='choose-option'>Choose an option below to continue</div>
            <div className='title'>
                <div>How would you like us to</div>
                <div>help you today?</div>
            </div>
            <div className='background'>
                <div className='background-1'>
                    <div className='image1-div'><img src={Back_image_2}  alt="back-2"/></div>
                    <div className='underline'></div>              
                    <div className='description'>
                        <div className='title'>IAM IN CRISIS!</div>
                        <div className='d-flex justify-content-between align-items-center'>                            
                            <div className='content'>
                                <div>Help me with a step-by step</div>
                                <div>checklist of recovery steps</div>
                            </div>
                            <div className='confirm-images'>
                                <img src={Image2} alt="image2" />
                            </div>                            
                        </div> 
                    </div>
                </div>
                <div className='background-2'>
                    <div className='image2-div'><img src={Back_image_1}  alt="back-1"/></div>                    
                    <div className='description'>
                        <div className='title-1'>IAM IN CRISIS!</div>
                        <div className='d-flex justify-content-between align-items-center'>                            
                            <div className='content'>
                                <div>Help me with a step-by step</div>
                                <div>checklist of recovery steps</div>
                            </div>
                            <div className='confirm-images'>                                
                                <img src={Vector} alt="image2" className='vector'/>
                                <img src={Image1} alt="image2" />
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn' onClick={() => navigate('/page1')}>NEXT
                <img src={Vector} />
            </button>
        </div>
    )    
};

export { Home };