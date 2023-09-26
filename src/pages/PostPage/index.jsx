import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { postModel, PostCard } from '../../entities/post';

export const PostPage = () => {
  const { id } = useParams();
  const { data: post = {}, isLoading } = postModel.useGetPostQuery(id);

  return (
    <Container className="h-100 overflow-hidden">
      <h1>{`Пост ${id}`}</h1>
      {isLoading
        ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : <PostCard post={post} />}
    </Container>
  );
};
