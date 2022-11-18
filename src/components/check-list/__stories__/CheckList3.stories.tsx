import { Meta, Story } from '@storybook/react';
import { Title, Subtitle } from '@storybook/addon-docs';
import CheckList, { CheckListProps } from '../CheckList';
import Demo3 from './CheckList3.demo';
// eslint-disable-next-line import/no-webpack-loader-syntax
import raw3 from '!!raw-loader!./CheckList3.demo';

const list: string[] = [];
const values: string[] = [];
let sum = 0;
for (let i = 0; i < 50; i++) {
  sum += i;
  const val = `中文中文${sum}`;
  list.push(val);
  if (i % 2 === 0) {
    values.push(`英文英文${sum}`);
    list.push(`英文英文${sum}`);
  }
}

export default {
  title: '组件/CheckList/3.CheckList-高度弹性',
  component: CheckList,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>复选框列表自适应高度</Subtitle>
          <Demo3 dirName="check-list" code={raw3} />
        </>
      ),
    },
  },
} as Meta;

const BadgeStory: Story<CheckListProps> = (args) => {
  return <CheckList {...args} />;
};
export const DefaultStory = BadgeStory.bind({});
DefaultStory.args = {
  flexHeight: true,
  loading: false,
  value: values,
  options: list,
};
DefaultStory.storyName = '3.CheckList-高度弹性';
