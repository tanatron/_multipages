const users = [
    {
        user: 'user',
        pass: 'pass',
        role: 'admin',
        token: '123'
    }
]

export function verityUser(user , pass) {
    const userFound = users.find((u) => { 
        return u.user === user && u.pass === pass
    })

    return  userFound  ? {
        role: userFound.role,
        token: userFound.token
    } : null
}