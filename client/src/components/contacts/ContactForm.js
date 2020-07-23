import React,{useState,useContext,useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext'

function ContactForm() {
    const contactContext = useContext(ContactContext)

    const {addContact,current,clearCurrent,updateContact} = contactContext;

    useEffect(()=>{
        if(current !== null){
            setContact(current);
        }else{
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal'
            })
        }
    },[contactContext,current])

    const [contact,setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });

    const  {name ,email , phone ,type } = contact;

    const onChange = e =>setContact({
        ...contact,
        [e.target.name]:e.target.value
    });
    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addContact(contact);
        }else{
            updateContact(contact)
        }
      
      
        clearAll()
       
    }

    const clearAll =()=>{
        clearCurrent();
    }

    return (
        <form onSubmit ={onSubmit}>
            <h2 className="text-primary">{current?'Edit Contact':'Add Contact'}</h2>
            <input onChange={onChange} type="text" placeholder='Name/Imię' name='name' value={name}/>
            <input onChange={onChange} type="text" placeholder='email' name='email' value={email}/>
            <input onChange={onChange} type="text" placeholder='Phone/Numer telefonu' name='phone' value={phone}/>
            <h5>Contact Type</h5>
            <input  onChange={onChange} type="radio" name="type" value='personal' checked={type === 'personal'}/> Personal{' '}
            <input onChange={onChange} type="radio" name="type" value='professional' checked={type === 'professional'}/> Professional
            <div>
                <input type='submit' value={current?'Edit Contact':'Add Contact'}className='btn btn-primary btn-block'/>
            </div>
            {current && <div>
                <button onClick={clearAll} className="btn btn-light btn-block">Clear</button>
                </div>}
        </form>
    )
}

export default ContactForm
