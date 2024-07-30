import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'
const PostDetails = () => {
    return (
        <section className="post-detail">
            <div className="container post-detail__container">
                <div className="post-detail__header">
                    <PostAuthor />
                    <div className="post-detail__buttons">
                        <Link to={`/posts/shdak/edit`} className='btn sm primary'>Edit</Link>
                        <Link to={`/posts/shdak/delete`} className='btn sm danger'>Delete</Link>
                    </div>
                </div>

                <h1>This is the post title!</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail} alt="" srcset="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ullam dolorem asperiores, quasi deserunt quos repellat perspiciatis consequatur in saepe at sint, animi voluptatibus. Tempora nulla hic dolores et aspernatur. Nihil dolorum quaerat ea, quo rem sunt voluptate ut illum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vel soluta ipsa amet? Perferendis dolorem eaque at in fugiat cum, odio, voluptatibus quas minus tenetur accusamus! Animi facere iure soluta doloremque odio illum cupiditate, voluptates, deserunt corrupti, distinctio voluptatem? Ducimus enim magnam natus unde, distinctio sapiente facilis reprehenderit vero est aliquam, harum eos excepturi impedit.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus doloribus eius enim recusandae dolor officia tenetur voluptatum neque, nisi impedit id dolorem est ipsam? Corporis, fugit voluptas neque consequatur pariatur, tempora dolorum, hic deserunt quisquam incidunt recusandae! Incidunt aliquam nesciunt explicabo itaque doloremque. Animi voluptate quaerat aliquam error, inventore maxime reiciendis eaque repudiandae fuga nihil quae ullam consequuntur consequatur, itaque voluptas perferendis illo voluptatem veniam quisquam? Soluta explicabo temporibus consequatur eaque a laboriosam perspiciatis iusto veritatis earum possimus ratione voluptatem illum repellendus, eligendi culpa officiis hic veniam neque ab recusandae dignissimos quisquam. Eveniet rerum explicabo sequi adipisci beatae eos maiores velit quisquam, quam enim excepturi facere laudantium suscipit dolorum ullam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, tenetur odio! Nihil, excepturi! Voluptatum, hic! Quidem exercitationem libero facilis sequi.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, deserunt aspernatur. Laborum in et qui, culpa eum ad fugit quod laudantium nesciunt odio, assumenda deleniti obcaecati soluta quae praesentium repudiandae iure dolor nihil dolorem debitis sapiente quaerat atque harum omnis! Molestiae ducimus fugit cupiditate perferendis autem nemo consequatur minus animi accusantium neque, aperiam rerum magni id dolorum ratione cum quibusdam unde. Quia quis et natus, ducimus itaque laborum sed neque quo, perferendis eius labore libero dolorum sunt, illum accusantium odit. Magnam, consectetur qui libero deleniti nihil, cumque ipsum eos dolor nemo placeat praesentium voluptas dolore minima enim. Natus unde, sint quasi temporibus labore ab dolorem perferendis aspernatur ducimus sequi rerum soluta eligendi nam! Nam culpa deserunt nulla asperiores tempore quasi omnis, ex mollitia dignissimos similique aperiam? Veniam sequi pariatur eligendi corporis voluptatum numquam porro beatae officia delectus voluptatibus, nesciunt aut, architecto laboriosam minima, iste quaerat quasi? Voluptatem tenetur dolorum veniam beatae excepturi aperiam officiis quod maiores molestias consequatur alias numquam accusantium ut optio unde, inventore sit. Beatae doloremque quas saepe repellat nam fugit nemo, ut voluptate pariatur repellendus animi accusantium aut, atque eligendi, similique consequatur facere repudiandae ducimus alias deleniti omnis. Labore perspiciatis voluptates voluptatibus, quas optio esse dicta iure!
                </p>
            </div>
        </section>
    )
}

export default PostDetails