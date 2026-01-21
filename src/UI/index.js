import UIInput from './UIInput.vue';
import UIButton from './UIButton.vue';
import UIFile from './UIFile.vue';
import UIRow from './UIRow.vue';
import UILabel from './UILabel.vue';
import UIDelete from './UIDelete.vue';
import UICheckbox from './UICheckbox.vue';
import UIArrow from './UIArrow.vue';
import UISelect from './UISelect.vue';
import UIClose from './UIClose.vue';
import UIAbbr from './UIAbbr.vue';
import UILink from './UILink.vue';

// Для определений
import OCRDef from '../definition/OCRDef.vue';
import SnilsDef from '../definition/SnilsDef.vue';
import BlueCardDef from '../definition/BlueCardDef.vue';
import Base64dDef from '../definition/Base64Def.vue';
import APIDef from '../definition/APIDef.vue';
import NIIDef from '../definition/NIIDef.vue';

export default [
  {
    name: 'base64-def',
    ...Base64dDef
  },
  {
    name: 'blue-card-def',
    ...BlueCardDef
  },
  {
    name: 'ocr-def',
    ...OCRDef
  },
  {
    name: 'snils-def',
    ...SnilsDef
  },
  {
    name: 'api-def',
    ...APIDef
  },
  {
    name: 'nii-def',
    ...NIIDef
  },
  {
    name: 'ui-abbr',
    ...UIAbbr
  },
  {
    name: 'ui-link',
    ...UILink
  },
  {
    name: 'ui-close',
    ...UIClose
  },
  {
    name: 'ui-select',
    ...UISelect
  },
  {
    name: 'ui-arrow',
    ...UIArrow
  },
  {
    name: 'ui-checkbox',
    ...UICheckbox
  },
  {
    name: 'ui-delete',
    ...UIDelete
  },
  {
    name: 'ui-input',
    ...UIInput
  },
  {
    name: 'ui-button',
    ...UIButton
  },
  {
    name: 'ui-file',
    ...UIFile
  },
  {
    name: 'ui-row',
    ...UIRow
  },
  {
    name: 'ui-label',
    ...UILabel
  }
];