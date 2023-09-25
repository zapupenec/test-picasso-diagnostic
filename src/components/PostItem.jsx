import { useEffect, useRef } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PostItem = ({ post, paramsRW }) => {
  const { index, style, setRowHeight } = paramsRW;
  const rowRef = useRef(null);

  useEffect(() => {
    if (rowRef.current) {
      setRowHeight(index, rowRef.current.clientHeight);
    }
  }, [index, rowRef, setRowHeight]);

  return (
    <ListGroup.Item ref={rowRef} key={post.id} style={style}>
      <span className="fw-bold">{`${post.id}. ${post.title}:`}</span>
      <p className="text-truncate">{post.body}</p>
      <Link to={`${post.id}`}>
        <Button>Читать полностью</Button>
      </Link>
    </ListGroup.Item>
  );
};
