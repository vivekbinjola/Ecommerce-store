import bcrypt from 'bcryptjs';


const users=[
    {
        name:'Vivek Admin',
        email:'vivek@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name:'Ankit Phondani',
        email:'Ankit@example.com',
        password: bcrypt.hashSync('123456', 10),

       
    },
    {
        name:'Palak Rajput',
        email:'Palak@example.com',
        password: bcrypt.hashSync('123456', 10),
       
        
    },
]



export default users