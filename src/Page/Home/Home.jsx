import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
function Home() {
    return (
        <div className='Home-container'>
            <div className='card-container'> 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/883701887424147536/1298671825777197149/IMG_9245.jpg?ex=671a69e3&is=67191863&hm=23d49082f8130a969479cdd1a4bff8c4a6cb330bbfae96a9b4b99ea3bd54e578&" />
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