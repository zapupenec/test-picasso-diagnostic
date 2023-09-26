import { Container, Spinner } from "react-bootstrap";
import { postModel } from "../../entities/post";
import { PostsList } from "../../widgets/index";

export const PostsPage = () => {
  const { isLoading } = postModel.useGetPostsQuery();

  return (
    <Container className="h-100 overflow-hidden">
      <h1>Посты</h1>
      <div className="h-100">
        {isLoading
          ? (
            <Spinner className="mx-auto" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : <PostsList />
        }
      </div>
    </Container>
  );
};
