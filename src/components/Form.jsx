import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

const Form = () => {
	const [correo, setCorreo] = useState("");
	const [text, setText] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
	
		//Validación;
		if (correo === "" || text === "") {
		  setError("escriba algo 😍");
		} else {
		  alert("mensaje enviado")
	
		
		 
		  setCorreo("");
		  setText("");
		 
		}
	  };
	return (
		<div>
			<form onSubmit={handleSubmit}>
			{error ? <p>{error}</p> : null}
				<Title label='Correo:'/>
				<Input type='email' placeholder='name@example.com' className='input-form' onChange={(e) => setCorreo(e.target.value)}
            value={correo} />
				<Title label='Descripción:'/>
				<Input type='text'  className='input-text'onChange={(e) => setText(e.target.value)}
            value={text} />
<Button type='submit' children='enviar' className='btn-form'/>
			</form>
		</div>
	)
};

export default Form;
