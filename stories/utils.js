import { storiesOf } from '@storybook/react';

export function addStories(name, stories) {
  const kind = storiesOf(name, module);

  if (stories.decorator) {
    kind.addDecorator(stories.decorator);
  }

  stories.forEach(story => kind.add(story.name, story.render));
}