const Title = ({text, span, parrafo, label}) => {
	return (
		<div >
			<h1 className="title">{text}<span className="title-span">{span}</span></h1>
			<p>{parrafo}</p>
			<label >{label}</label>
		
		</div>
	)
};

export default Title;
