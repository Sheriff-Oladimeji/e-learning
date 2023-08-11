import imgHeader from '../../assets/Title Backgrounds.png'
import CardForm from '../../components/Contact/contact_form'
import ContactInfo from '../../components/Contact/contact_info'
const Contact = () => {
  return (
    <main className=' md:mt-4 w-[90%] mx-auto'>
      <img src={imgHeader} alt="" />
      <ContactInfo />
      <CardForm />
      

    </main>
  )
}

export default Contact