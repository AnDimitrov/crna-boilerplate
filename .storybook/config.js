import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { withKnobs } from '@storybook/addon-knobs'
import { withOptions, setOptions } from '@storybook/addon-options'
import { themes } from '@storybook/components'

const req = require.context('../src/components', true, /\.stories\.js$/)

addDecorator(
  withBackgrounds([
    { name: 'light', value: '#fff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
    { name: 'dark', value: '#222' }
  ])
)

addDecorator(withKnobs)

addDecorator(
  withOptions({
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Example app',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://github.com/AnDimitrov/crna-boilerplate',
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: 'storybook-addon-background/background-panel' // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  })
)

setOptions({
  theme: themes.dark,
});

addDecorator(story => (
  <div style={{ padding: 15 }}>
    {story()}
  </div>
))

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
