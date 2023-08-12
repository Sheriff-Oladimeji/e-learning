import imgHeader from '../../assets/Title Backgrounds.png'
import CardForm from '../../components/Contact/contact_form'
import ContactInfo from '../../components/Contact/contact_info'
import Faq from '../../components/Contact/faq'
const Contact = () => {
  return (
    <main className=' md:mt-4 w-[90%] mx-auto'>
      <img src={imgHeader} alt="" />
      <ContactInfo />
      <CardForm />
      <Faq />
      

    </main>
  )
}

export default Contact