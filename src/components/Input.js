const Input = ({ text, result }) => {
    return (
        <div className='landscape'>
            <p className='result'>{result}</p>
            <p className='text'>{text}</p>
        </div>
    )
};

export default Input;