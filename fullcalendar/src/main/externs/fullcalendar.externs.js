/**
 * @const
 */
var fullCalendar = {};
/**
 * @typedef {{
 *  name : string,
 *  title: string,
 *  start : Moment,
 *  end : Moment,
 *  intervalStart: Moment,
 *  intervalEnd : Moment
 * }}
 */
fullCalendar.ViewObject;
/**
 * @typedef {{
 * color: (string|undefined),
 * backgroundColor: (string|undefined),
 * borderColor: (string|undefined),
 * textColor: (string|undefined),
 * className :(string|Array.<string>|undefined),
 * editable : (boolean|undefined),
 * startEditable :(boolean|undefined),
 * durationEditable :(boolean|undefined),
 * rendering :(string|undefined),
 * overlap :(boolean|undefined),
 * allDayDefault:(boolean|undefined),
 * eventDataTransform : function(Object):fullCalendar.EventObject,
 * googleCalendarId : (string|undefined),
 * url : (string|undefined),
 * events : (Array.<fullCalendar.EventObject>|function(Moment,Moment,function(Array.<fullCalendar.EventObject>))|undefined)
 * }}
 */
fullCalendar.EventSourceObject;
/**
 * //TODO : rendering enum?
 * @typedef {{
 *  id : string,
 *  title: string,
 *  allDay : (boolean|undefined),
 *  start : Moment,
 *  end : (Moment|undefined),
 *  url: (string|undefined),
 *  className :(string|Array.<string>|undefined),
 *  editable : (boolean|undefined),
 *  startEditable :(boolean|undefined),
 *  durationEditable :(boolean|undefined),
 *  rendering :(string|undefined),
 *  overlap :(boolean|undefined),
 *  constraint : (string|Object|undefined),
 *  source : fullCalendar.EventSourceObject,
 *  color : (string|undefined),
 *  backgroundColor:(string|undefined),
 *  borderColor :(string|undefined),
 *  textColor :(string|undefined)
 * }}
 */
fullCalendar.EventObject;
/**
 * @typedef {{
 *  left : (string|undefined),
 *  center : (string|undefined),
 *  right : (string|undefined)
 * }}
 */
fullCalendar.OptionsHeader;
/**
 * @typedef {{
 *  prev : (string|undefined),
 *  next : (string|undefined),
 *  prevYear : (string|undefined),
 *  nextYear : (string|undefined)
 * }}
 */
fullCalendar.OptionsButtonIcons;
/**
 * @typedef {{
 *  weekends: (boolean|undefined),
 *  dayClick: (function(Moment,Event,fullCalendar.ViewObject)|undefined),
 *  eventClick: (function(Moment,Event,fullCalendar.ViewObject)|undefined),
 *  header : (fullCalendar.OptionsHeader|boolean|undefined),
 *  buttonIcons : (fullCalendar.OptionsButtonIcons|undefined),
 *  slotDuration : (string|undefined),
 *  lang:(string|undefined),
 *  timeFormat:(string|undefined),
 *  axisFormat:(string|undefined),
 *  businessHours:(boolean|undefined),
 *  eventSources : (Array.<fullCalendar.EventSourceObject|string>|undefined)
 *
 * }}
 */
fullCalendar.Options;
/**
 * @param {fullCalendar.Options} opts
 */
jQuery.prototype.fullCalendar = function (opts) {
};
