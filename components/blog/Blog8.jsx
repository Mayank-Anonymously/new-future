import Link from "next/link";

const Blog8 = ({ data }) => {
  return (
    <>
      {data.slice(0, 6).map((item) => (
        <div className="news-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img
                  src={"/images/background/american-plane.webp"}
                  alt="blog post"
                />
              </figure>
            </div>

            <div className="lower-content">
              <ul className="post-meta">
                <li>
                  <a href="#">August 31, 2021</a>
                </li>
                <li>
                  <a href="#">12 Comment</a>
                </li>
              </ul>
              <h3>
                <Link href={`/blog/${item.url}`}>{item.title}</Link>
              </h3>
              <p className="text">{item.blogText}</p>
              <Link href={`/blog/[url]`} className="read-more">
                Read More <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog8;
