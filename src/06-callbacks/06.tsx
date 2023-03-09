export const User = () => {

    const deleteUser = () => {
        alert('user have been deleted')
    }
    const saveUser = () => {
        alert('user have been save')
    }


    return (
        <div>
            Dimych
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )

}