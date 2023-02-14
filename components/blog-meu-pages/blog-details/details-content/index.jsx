import CommentBox from "./CommentBox";
import Form from "./Form";
import Pagination from "./Pagination";
import SocialShare from "./SocialShare";
import Tag from "./Tag";

const index = ({ data }) => {
  return (
    <div className="auto-container">
      <div dangerouslySetInnerHTML={{ __html: data }}></div>

      <div className="other-options">
        <div className="social-share">
          <h5>Share this post</h5>
          <SocialShare />
        </div>
        {/* End social-share */}

        <Tag />
      </div>
      {/* End other share */}

      <div className="post-control">
        <Pagination />
      </div>
      {/* <!-- Post Control --> */}

      <div className="comments-area">
        <CommentBox />
      </div>

      {/* <!-- Comments area --> */}

      {/* <!-- Comment Form --> */}
      <div className="comment-form default-form">
        <h4>Leave your thought here</h4>
        <Form />
      </div>
      {/* <!--End Comment Form --> */}
    </div>
  );
};

export default index;
