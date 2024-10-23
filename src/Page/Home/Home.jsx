import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
function Home() {
    return (
        <div className='Home-container'>
            <div className='card-container'> 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/_multipages/src/assets/IMG_9245.jpg" />
                <Card.Body>
                    <Card.Title>
                        <span className='bi bi-person-circle'>&nbsp;Kannisa Intra</span>
                        
                        </Card.Title>
                    <Card.Text>
                    <span className='bi bi-check-lg'>&nbsp;Computer Science student</span>
                    </Card.Text>
                </Card.Body>
            </Card>


           <div className='text-container'>
            <span>My name is Kannisa Intra. I am a second-year student at Sripatum University, currently studying Frontend and UX/UI design.</span>
           </div>
            </div>
            

        </div>
    );
}

export default Home;