import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {
   const {t} = useTranslation();

   const onReloadPage = () => {
      location.reload();
   };

   return (
      <div className={classNames(cls.PageError, {}, [className])}>
         <h1 className={cls.title}>{t('An error has occurred')}</h1>
         <Button
            theme={ThemeButton.OUTLINE}
            onClick={onReloadPage}
         >
            {t('Reload Page')}
         </Button>
      </div>
   );
};
