import React from 'react'
import ContactContext from '../../context/contact/contactContext'
import { useContext,useRef,useEffect } from 'react'

const ContactFilter = () => {
const contactContext = useContext(ContactContext)
const {filtered,filterContacts,clearFilter} = contactContext;
const text = useRef('');

useEffect(()=>{
    if(filtered === null){
       text.current.value = '';
    }
    else{

    }
})

const onChange = e =>{
 if(text.current.value !== '') {
    filterContacts(e.target.value);
 }else {
    clearFilter()
 }
}

    return (
        <form>
            <input onChange={onChange}ref={text}type="text"placeholder='Filter Your  Contacts'/>
            
        </form>
    )
}

export default ContactFilter;
