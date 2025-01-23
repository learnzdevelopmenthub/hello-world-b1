const Button = ({title, addUser}) => {
    return (
        <button onClick={addUser}>{title}</button>
    )
}

export default Button