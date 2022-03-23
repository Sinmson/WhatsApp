
import {Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy} from "@angular/core";


@Pipe({
	name:'onDay',
	pure: true
})
export class OnDayPipe implements PipeTransform {

	transform(value: Date | string) {
    console.log("OnDayPipe transform | value", value);


    if(!value) { return ""; }

		const d = new Date(value);    
    const now = new Date();

    // check if now - d is > 5 days
  
    const diffInMs = now.getTime() - d.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    console.log("OnDayPipe transform | diffInDays", diffInDays);

    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      era: undefined,
      hour12: undefined,
      hour: undefined,
      minute: undefined,
      month: "2-digit",
      second: undefined,
      weekday: undefined,
      year: "numeric"
    };

    
    if(diffInDays < 6) {
      dateTimeFormatOptions.weekday = "long";
      dateTimeFormatOptions.year = undefined;
      dateTimeFormatOptions.month = undefined;
      dateTimeFormatOptions.day = undefined;
    }

    
    const dateStr = d.toLocaleDateString([ navigator.language, "en-US" ], dateTimeFormatOptions);
    return  dateStr;
	}
}
	