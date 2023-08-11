import HeraderImg from '../../assets/Background.png'
import BlogCard from '../../components/Blog/Blog-card'
import ArticleCard from '../../components/Blog/article-card'

const Blog = () => {
  return (
    <main className=' md:mt-4 w-[90%] mx-auto'>
     <div>
     
     <img className='hidden md:block' src={HeraderImg} alt="" />
     <BlogCard />
     <ArticleCard />
     </div>
    </main>
  )
}

export default Blog