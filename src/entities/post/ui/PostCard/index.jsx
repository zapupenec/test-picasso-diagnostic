import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routes } from "../../../../shared";

export const PostCard = ({ post }) => (
  <Card>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.body}</Card.Text>
      <Link to={routes.pages.posts()}>
        <Button variant="primary">К постам</Button>
      </Link>
    </Card.Body>
  </Card>
);
