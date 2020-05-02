function newEvent(emails, title) {
  var emailsarray=emails.map(e=>{return {"email":e}});
  var start=new Date();
  var end=new Date(start.getTime() + (15*60 * 1000));
  var start = start.toISOString();
  var end=end.toISOString();
  var event = {
    "summary": "Breakout "+title,
    "end": {
      "dateTime": end
    },
    "start": {
      "dateTime": start
    },
    "conferenceData": {
      "createRequest": {
        "conferenceSolutionKey": {
          "type": "hangoutsMeet"
        },
        "requestId": "kdb-atdx-exx"
      }
    },
    "attendees": emailsarray
  };

  var tmp=Calendar.Events.insert(event, 'primary', {
    "conferenceDataVersion": 1,
    "sendUpdates": "all"});
  
    
//  Logger.log(tmp.hangoutLink);
  return tmp;
}


function getCurrentEvent(){
  var now = new Date();
  var twoHoursFromNow = new Date(now.getTime() + (60 * 1000));
  var event = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow)[0];
  var guests=event.getGuestList().map(g=>g.getEmail());
  Logger.log(guests);
  var guests2=guests.splice(0,2);
  Logger.log(guests);
  Logger.log(guests2);
  newEvent(guests);
  newEvent(guests2);
  }

function launchServer(groups){
  var now = new Date();
  var twoHoursFromNow = new Date(now.getTime() + (60 * 1000));
  var events=groups.map((g,i)=>newEvent(g,i));
  return events.map(e=>{return {"link":e.hangoutLink}});
  }
  
function doGet(){
  var now = new Date();
  var oneMinuteFromNow = new Date(now.getTime() + (60 * 1000));
  var events = CalendarApp.getDefaultCalendar().getEvents(now, oneMinuteFromNow);
  if (events.length == 0) {
    return HtmlService.createHtmlOutput("sorry, no events right now");
    }
  var names=events.map(e=>e.getTitle());
  var guestslists = events.map(e=>e.getGuestList().map(g=>g.getEmail()));
  var t=HtmlService.createTemplateFromFile("main");
  t.names=names;
  t.guestslists=guestslists;
  return t.evaluate();
  }
