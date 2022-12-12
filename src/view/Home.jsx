import pastel from '../assets/img/pastel1.jpg'
import Title from '../components/Title';

const Home = () => {
	return (
		<div >
			<div className='home-top'>
			<Title text ='Bienvenido a' span=' Happy Cake'/>
			<Title parrafo='El lugar  de los pasteles Felices'/>
			
<img className='image' src={pastel}alt="" />

		</div>
		</div>
	)
};

export default Home;
