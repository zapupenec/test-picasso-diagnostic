import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => (
  <Card>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.body}</Card.Text>
      <Link to='/'>
        <Button variant="primary">Назад</Button>
      </Link>
    </Card.Body>
  </Card>
);
