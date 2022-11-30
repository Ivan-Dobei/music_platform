import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

describe('Button.test', () => {
   test('render test', () => {
      render(<Button>Test</Button>);
      expect(screen.getByText('Test')).toBeInTheDocument();
   });
});
