import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Input from 'antd/lib/input';
import Tag from 'antd/lib/tag';
import Icon from 'antd/lib/icon';

import useControlledState from '../../../modules/use-controlled-state';
import styles from './index.less';

function SearchTagBar({ tags, onChange }) {
  const [tagState, setTagState] = useState({ showInput: false, tag: '' });
  const [tagList, setTagList] = useControlledState(tags, onChange, []);

  const inputRef = useRef();

  const handleAddTag = () => {
    const { tag } = tagState;

    if (tag) {
      const newTagList = [...tagList, tag];
      setTagList(newTagList);
    }

    setTagState({ showInput: false, tag: '' });
  };

  const handleDeleteTag = tag => {
    const newTagList = tagList.filter(t => t !== tag);
    setTagList(newTagList);
  };

  const handleTagChange = value => {
    const newTagState = { ...tagState, tag: value };
    setTagState(newTagState);
  };

  const handleToogleShowInput = () => {
    setTagState({ showInput: !tagState.showInput, tag: '' });
  };

  useEffect(() => {
    if (tagState.showInput) {
      inputRef.current.focus();
    }
  });

  const { showInput, tag } = tagState;

  return (
    <div className={styles.container}>
      {tagList.map((t, i) => (
        <span key={t} style={{ display: 'inblock' }}>
          <Tag
            closable
            onClose={() => handleDeleteTag(t)}
            style={{ marginTop: 3 }}
          >
            {t}
          </Tag>
        </span>
      ))}
      {showInput && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={tag}
          onChange={e => handleTagChange(e.target.value)}
          onPressEnter={handleAddTag}
        />
      )}
      {!showInput && (
        <Tag
          onClick={handleToogleShowInput}
          style={{ background: '#fff', borderStyle: 'dashed' }}
        >
          <Icon type="plus" /> New Tag
        </Tag>
      )}
    </div>
  );
}

SearchTagBar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default SearchTagBar;
