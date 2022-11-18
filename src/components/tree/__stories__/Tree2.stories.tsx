// import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Tree, { TreeProps } from '../index';
import Template1 from './Tree2.demo';
import { Title, Subtitle } from '@storybook/addon-docs';
/* eslint-disable import/no-webpack-loader-syntax */
import code from '!!raw-loader!./Tree2.demo';

export default {
  title: '组件/Tree/Tree - 受控',
  component: Tree,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>树结构(受控)。</Subtitle>
          <Template1 dirName="tree" code={code} />
        </>
      ),
    },
  },
} as Meta;

const Treetory: Story<TreeProps> = (args) => {
  return (
    <div style={{ height: 300 }}>
      <Tree {...args} />
    </div>
  );
};
export const DefaultStory = Treetory.bind({});
DefaultStory.args = {
  checkedKeys: ['0-0-0', '0-0-1'],
  checkable: true,
  treeData: [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true,
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [
            { title: <span style={{ color: '#1890ff' }}>我是自定义颜色</span>, key: '0-0-1-0' },
          ],
        },
      ],
    },
  ],
};
DefaultStory.storyName = 'Tree - 受控';
