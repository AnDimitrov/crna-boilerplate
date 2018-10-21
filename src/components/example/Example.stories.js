import React from 'react'

import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Example from './Example'
import '../../index.css'

storiesOf('Example', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      header: false,
      text: `
        Example component
      `
    }
  })
  .add('with text', () => <Example />)
