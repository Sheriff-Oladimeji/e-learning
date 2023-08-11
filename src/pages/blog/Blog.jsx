import HeraderImg from '../../assets/Background.png'
import BlogCard from '../../components/Blog/Blog-card'
import ArticleCard from '../../components/Blog/article-card'

const Blog = () => {
  return (
    <main className="mt-28 md:mt-6 w-[90%] mx-auto">
      <div>
        <img src={HeraderImg} alt="" />
        <BlogCard />
        <ArticleCard />
      </div>
    </main>
  );
}

export default Blog