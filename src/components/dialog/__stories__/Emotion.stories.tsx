// import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Emotion, EmotionProps } from '../index';
import Template1 from './Emotion.demo';
import Button from '@/components/button';
import { useArgs } from '@storybook/client-api';
import { Title, Subtitle } from '@storybook/addon-docs';
/* eslint-disable import/no-webpack-loader-syntax */
import code from '!!raw-loader!./Emotion.demo';

export default {
  title: '组件/Dialog/Emotion',
  component: Emotion,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>带有状态的模态对话框。</Subtitle>
          <Template1 dirName="dialog" noDefault subDirNames={['Emotion']} code={code} />
        </>
      ),
    },
  },
} as Meta;

const Dialogtory: Story<EmotionProps> = (args) => {
  const [, updateArgs] = useArgs();
  return (
    <>
      <Button
        onClick={() => {
          updateArgs({ ...args, visible: true });
        }}
      >
        点我打开Emotion
      </Button>
      <Emotion
        {...args}
        onCancel={() => {
          updateArgs({ ...args, visible: false });
        }}
        onOk={() => {
          updateArgs({ ...args, visible: false });
        }}
      />
    </>
  );
};
export const DefaultStory = Dialogtory.bind({});
DefaultStory.args = {
  visible: false,
  title: 'Emotion',
  emotion: 'chart',
  okText: '确定',
  cancelText: '取消',
};
DefaultStory.storyName = 'Emotion';
