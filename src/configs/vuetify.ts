import { createVuetify } from 'vuetify';
import {
  VCheckbox,
  VListItem,
  VListItemAction,
  VSystemBar,
  VContainer,
  VMain,
  VList,
  VApp,
  VListItemTitle,
} from 'vuetify/components';
import '@mdi/font/css/materialdesignicons.css';

export const vuetify = createVuetify({
  components: {
    VApp,
    VCheckbox,
    VListItem,
    VListItemAction,
    VListItemTitle,
    VSystemBar,
    VContainer,
    VMain,
    VList,
  },
});
