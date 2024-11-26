import '../styles/ContactCard.css'

const ContactCard = props => { 
    const {cont} = props
    const {title, details, iconImage} = cont
    return (
    <li className='contact-card'>
        <img className='contact-icon' src={iconImage} />
        <div className='contact-details'>
            <p className='contact-para'>
                {title}
            </p>
            <p className='contact-para'>
                {details}
            </p>
        </div>
    </li>
)}

export default ContactCard