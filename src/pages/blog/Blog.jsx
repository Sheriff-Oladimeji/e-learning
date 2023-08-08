import HeraderImg from '../../assets/Background.png'
import BlogCard from '../../components/Blog/Blog-card'

const Blog = () => {
  return (
    <main className=' md:mt-4 w-[90%] mx-auto'>
     <div>
     <img src={HeraderImg} alt="" />
     <BlogCard />
     </div>
    </main>
  )
}

export default Blog