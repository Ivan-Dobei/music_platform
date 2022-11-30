import {fireEvent, screen} from '@testing-library/react';
import {SideBar} from 'widgets/SideBar';
import {renderComponent} from 'shared/config/render/renderComponent/rednerComponent';

describe('SideBar.test', () => {
   test('render test', () => {
      renderComponent(<SideBar/>);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });

   test('button toggle test', () => {
      renderComponent(<SideBar/>);
      const toggleBtn = screen.getByTestId('toggle-btn');
      fireEvent.click(toggleBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
   });
});
