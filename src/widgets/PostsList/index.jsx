import { useRef } from 'react';
import { ListGroup } from 'react-bootstrap';
import { VariableSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { postModel, PostItem } from '../../entities/post';

export const PostsList = () => {
  const { data: posts = [] } = postModel.useGetPostsQuery();

  const listRef = useRef(null);
  const rowHeights = useRef({});

  const getRowHeight = (index) => rowHeights.current[index] || 130;

  const setRowHeight = (index, size) => {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  };

  const getRow = ({ index, style }) => (
    <PostItem post={posts[index]} paramsRW={{ index, style, setRowHeight }} />
  );

  return (
    <ListGroup variant="flush" className="h-75 shadow">
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
            {getRow}
          </VariableSizeList>
        )}
      </AutoSizer>
    </ListGroup>
  );
};
