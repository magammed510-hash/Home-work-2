import { useState } from 'react'
import img1 from '../assets/undraw_Wireframing_re_q6k6 1 (1).png'
import img2 from '../assets/undraw_Detailed_analysis_re_tk6j 1 (1).png'
import img3 from '../assets/undraw_Design_process_re_0dhf 1 (1).png'

const User1 = [
  { 
  id: 1, 
  foto: img1, 
  name: 'Front-End Developer', 
  coment: '(Sass, Bootstrap, Tailwind)' 
  },

  { 
  id: 2, 
  foto: img2, 
  name: 'Back-End Developer', 
  coment: '(NodeJS, Laravel, Codeigniter)' 
  },
  
  { 
  id: 3, 
  foto: img3, 
  name: 'UI/UX Designer', 
  coment: '(Figma, Zeplin, Adobe XD)' 
  },
]

const Users = () => {
  const [users, setUsers] = useState(User1)
  const [name, setName] = useState('')
  const [coment, setComent] = useState('')
  const [foto, setFoto] = useState('')
  const [editId, setEditId] = useState(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='add-wrap'>
        <button className='btn-main' onClick={() => {
          setName('')
          setComent('')
          setFoto('')
          setEditId(null)
          setOpen(true)
        }}>+ Add user</button>
      </div>

      <div className='div3'>
        {users.map((user) => (
          <div className='box' key={user.id}>
            <div>
              <img src={user.foto} alt={user.name} />
            </div>
            <h2>{user.name}</h2>
            <p>{user.coment}</p>

            <button onClick={() => {
              setName(user.name)
              setComent(user.coment)
              setFoto(user.foto)
              setEditId(user.id)
              setOpen(true)
            }}>Edit</button>

            <button className='btn-del' onClick={() => {
              setUsers(users.filter((u) => u.id !== user.id))
            }}>Delete</button>
          </div>
        ))}
      </div>

      {open && (
        <div className='overlay'>
          <form className='dialog' onSubmit={(e) => {
            e.preventDefault()
            if (editId === null) {
              setUsers([...users, { id: Date.now(), foto: foto , name: name, coment: coment }])
            } else {
              setUsers(users.map((u) => u.id === editId ? { ...u, foto: foto,name: name, coment: coment } : u))
            }
            setOpen(false)
          }}>
            <h3>{editId === null ? 'Add user' : 'Edit user'}</h3>

            <input type='url' placeholder='Photo URL...' value={foto} onChange={(e) => setFoto(e.target.value)} />
            <input placeholder='Name...' value={name} onChange={(e) => setName(e.target.value)} required />
            <input placeholder='Comment...' value={coment} onChange={(e) => setComent(e.target.value)} required />
            <div className='dialog-btns'>
              <button type='button' className='btn-cancel' onClick={() => setOpen(false)}>Cancel</button>
              <button type='submit' className='btn-main'>{editId === null ? 'Add' : 'Save'}</button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Users