import { useEffect, useRef } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from '../../../../shared';

export const PostItem = ({ post, paramsRW }) => {
  const { index, style, setRowHeight } = paramsRW;
  const rowRef = useRef(null);

  useEffect(() => {
    if (rowRef.current) {
      setRowHeight(index, rowRef.current.clientHeight);
    }
  }, [index, rowRef, setRowHeight]);

  return (
    <ListGroup.Item ref={rowRef} style={style}>
      <span className="fw-bold">{`${post.id}. ${post.title}:`}</span>
      <p className="text-truncate">{post.body}</p>
      <Link to={routes.pages.post(post.id)}>
        <Button>Просмотр</Button>
      </Link>
    </ListGroup.Item>
  );
};
