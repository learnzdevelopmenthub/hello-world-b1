const Greeting = ({title, count, increment}) => {
    return (
        <>
            <h2>Welcome to {title} - {count}</h2>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Greeting;