import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px' />} />
          <Button text='VIA CALL' icon={<FaPhoneAlt fontSize='24px' />} />
        </div>
        <Button text='VIA EMAIL FORM' icon={<HiMail fontSize='24px' />} isOutline={true}/>
        <form>
        <div className={styles.form_control}>
        <label htmlFor='name'>
            Name
        </label>
        <input type="text" name="name"/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor='email'>
            Email
        </label>
        <input type="text" name="email"/>
        </div>

        <div className={styles.form_control}>
        <label htmlFor='text'>
            Message
        </label>
        <textarea name="text" rows="7"/>
        </div>
        <div style={{display: "flex", justifyContent: 'end'}}>
        <Button text='SUBMIT BUTTON'/>
        </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/contact.svg" alt="contact image"/>
      </div>
    </section>
  )
}

export default ContactForm