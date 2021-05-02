import './index.css';
import { AUTHOR, COPYRIGHT, RELEASE_YEAR, TITLE } from '../../config/constants';
import dateUtil from '../../utils/date';

export const App = () => {

  const currentYear = dateUtil.getCurrentDate().getFullYear();

  const copyrightYear = (currentYear === RELEASE_YEAR ? '' : `-${currentYear}`);
  const copyright = <>
    {COPYRIGHT} &copy; {AUTHOR} - {RELEASE_YEAR}{copyrightYear}
  </>

  return (
    <>
      <header>
        <span>{TITLE}</span>
      </header>
      <footer>
        {copyright}
      </footer>
    </>
  );
}
