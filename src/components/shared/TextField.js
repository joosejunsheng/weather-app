

function TextField(props){

    const { label, value, changeInput } = props;

    return (

        <>
            <div className="grid grid-cols-6">
                <label className="col-span-2 block text-gray-700 text-sm font-bold vertically-center">{label}</label>
                <input className="col-span-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={value} onChange={(e) => changeInput(e.target.value)}/>
            </div>
        </>

    )
}

export default TextField;