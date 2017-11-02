/**
 * Test EmailLogin component default theming with props
*/

import variable from './../variables/platform'

export default (variables = variable) => {
  const emailLoginTheme = {
    'Makeme.EmailLogin': {
      '.customStyleProp': {
        backgroundColor: 'yellow'
      },
      backgroundColor: 'yellow'
    }
  }
  return emailLoginTheme
}
