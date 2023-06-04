import { LogContent, LogPortflio } from '../interfaces';

export function logSiteDetails(logPortflio: LogPortflio): void  {
    let isFirstProperty = true;

      for (const key in logPortflio.logContent) {
        if (Object.prototype.hasOwnProperty.call(logPortflio.logContent, key)) {
          const value: string = logPortflio.logContent[key as keyof LogContent];
          if (logPortflio.logInfo.group) {
            if (isFirstProperty) {
              console.group(`%c ${value}`,logPortflio.logInfo.styles);
              isFirstProperty = false;
            } else {
              console.log(`%c ${value}`,logPortflio.logInfo.styles);
            }
          } else {
            console.log(`%c ${value}`,logPortflio.logInfo.styles);
          }
        }
      }
    
      if (logPortflio.logInfo.group) {
        console.groupEnd();
      }
}
