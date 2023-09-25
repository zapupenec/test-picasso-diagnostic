import { useRef } from "react";
import { ListGroup } from "react-bootstrap";
import { VariableSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { useGetPostsQuery } from "../store";
import { PostItem } from "./PostItem";

export const PostsList = () => {
  const { data: posts = [] } = useGetPostsQuery();

  const listRef = useRef(null);
  const rowHeights = useRef({});

  const getRowHeight = (index) => {
    return rowHeights.current[index] || 130;
  };

  const setRowHeight = (index, size) => {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  };

  return (
    <ListGroup variant="flush" className="h-75">
      <AutoSizer>
        {({ height, width }) => (
          <VariableSizeList
            height={height}
            width={width}
            itemCount={posts.length}
            itemSize={getRowHeight}
            ref={listRef}
            estimatedItemSize={125}
          >
            {({ index, style }) => <PostItem post={posts[index]} paramsRW={{ index, style, setRowHeight }}/>}
          </VariableSizeList>
        )}
      </AutoSizer>
    </ListGroup>
  );
};
