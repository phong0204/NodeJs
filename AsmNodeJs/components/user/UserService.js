

const login = async (email, password) => {
    const user = users.find(u => u.email == email);
    if (user && user.password == password){
        return user;
    }
    return null;

}

module.exports = {login};

var users = [
    {_id: 1, email: '1@gmail.com', password: '1', name: 'Nguyen van 1'},
    {_id: 2, email: '2@gmail.com', password: '2', name: 'Nguyen van 2'},
    {_id: 3, email: '3@gmail.com', password: '3', name: 'Nguyen van 3'} 
]