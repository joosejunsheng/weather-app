

function Button(props){

    const { label, submitButton } = props;

    return (
        
        <>
            <button className="m-1 bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded" onClick={submitButton}>{label}</button>
        </>

    )

}

export default Button;