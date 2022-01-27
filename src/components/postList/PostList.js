import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/Post";
import { Container, ListGroup } from "react-bootstrap";
import "./postList.css";

const PostList = () => {
  const postList = useSelector((state) => state.postsList.data);

  return (
    <Container className="mt-5 contain">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <div className="card-header-tab card-header" />
            <div style={{ position: "static" }} className="ps ps--active-y">
              <div className="ps-content">
                <ListGroup as="ul" className="list-group">
                  {postList.map((post) => {
                    return (
                      <ListGroup.Item as="li" className="list-group-item ">
                        <Post
                          key={post.id}
                          userId={post.userId}
                          id={post.id}
                          title={post.title}
                          body={post.body}
                        />
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </div>
            </div>

            <div className="d-block text-right card-footer"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostList;
