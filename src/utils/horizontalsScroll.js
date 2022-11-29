import { isIOS } from 'react-device-detect';

export default function horizontalsScroll(array, tapIdPrefix, scrollWrapperId, buttonIndex, actualElementWidth, leftScrollValue2) {
  const currentPath = window.location.pathname;
  const activeTapId = buttonIndex === 0 ? 0 : buttonIndex || array?.filter((item) => item.path === currentPath)?.[0]?.id
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);

  if (scrollWrapper) {
    if (activeTapId > 2) {
      setTimeout(() => {
        const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetLeft;
        const leftScrollValue = leftScrollValue2 || (elementWidth - 621)
          // console.log('leftScrollValue2 || leftScrollValue leftScrollValue1');
          // console.log('leftScrollValue', leftScrollValue, leftScrollValue2, (elementWidth - 621));
          
            window.uss.scrollXTo(leftScrollValue, scrollWrapper)
          
        if (isIOS) {
          window.uss.setMinAnimationFrame(20)
        }
        // console.log('leftScrollValue2 || leftScrollValue',leftScrollValue2 , '', leftScrollValue, '');
      }, 0)
    } else {
      scrollWrapper.scrollLeft = 0;
    }
  }
}
