import {I18nextProvider} from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import {ReactNode} from 'react';
import {render} from '@testing-library/react';

export const renderComponent = (component: ReactNode) => {
   render(
      <I18nextProvider i18n={i18nForTest}>
         {component}
      </I18nextProvider>,
   );
};
