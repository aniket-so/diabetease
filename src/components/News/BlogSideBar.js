import React from 'react';
import BlogImg1 from '../../assets/images/blog/p1.jpg';
import BlogImg2 from '../../assets/images/blog/p2.jpg';
import BlogImg3 from '../../assets/images/blog/p3.jpg';
import BlogImg4 from '../../assets/images/blog/p4.jpg';

function BlogSideBar() {
    return (
        <div className="blog-sidebar">
            <aside className="widget widget-search">
                <form className="search-form" action="#" method="post">
                    <input type="search" name="s" placeholder="Search..." />
                    <button type="submit">
                        <i className="fal fa-search"></i>
                    </button>
                </form>
            </aside>
            <aside className="widget widget-categories">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    <li>
                        <a href="#">Lorem Ipsum</a>
                        <span>(24)</span>
                    </li>
                    <li>
                        <a href="#">Lorem Ipsum</a>
                        <span>(15)</span>
                    </li>
                    <li>
                        <a href="#">Lorem Ipsum</a>
                        <span>(8)</span>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget-trend-post">
                <h3 className="widget-title">Popular Posts</h3>
                <div className="popular-post">
                    <a href="#">
                        <img src={BlogImg1} alt="" />
                    </a>
                    <h5>
                        <a href="#">Contrary to popular belief, Lorem Ipsum</a>
                    </h5>
                    <span>March 10, 2024</span>
                </div>
                <div className="popular-post">
                    <a href="#">
                        <img src={BlogImg2} alt="" />
                    </a>
                    <h5>
                        <a href="#">Contrary to popular belief, Lorem Ipsum</a>
                    </h5>
                    <span>Jan 14, 2024</span>
                </div>
                <div className="popular-post">
                    <a href="#">
                        <img src={BlogImg3} alt="" />
                    </a>
                    <h5>
                        <a href="#">Contrary to popular belief, Lorem Ipsum</a>
                    </h5>
                    <span>April 12, 2024</span>
                </div>
                <div className="popular-post">
                    <a href="#">
                        <img src={BlogImg4} alt="" />
                    </a>
                    <h5>
                        <a href="#">Contrary to popular belief, Lorem Ipsum</a>
                    </h5>
                    <span>July 4, 2024</span>
                </div>
            </aside>
            <aside className="widget">
                <h3 className="widget-title">Popular Tags</h3>
                <div className="tags">
                    <a href="#">Lorem</a>
                    <a href="#">Ipsum</a>
                    <a href="#">Lorem</a>
                    <a href="#">Ipsum</a>
                    <a href="#">Lorem</a>
                    <a href="#">Ipsum</a>
                    <a href="#">Lorem</a>
                    <a href="#">Ipsum</a>
                </div>
            </aside>
        </div>
    );
}

export default BlogSideBar;
