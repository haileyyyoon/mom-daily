// =============================================================
//  Messages for Mom  💌
// =============================================================
//
//  HOW THIS WORKS:
//  - Set START_DATE below to the day you leave for college.
//  - Each day away, the site shows the NEXT message in the list.
//    (Day 1 = the start date, Day 2 = the next day, and so on.)
//  - Your mom can only see today's message and earlier ones —
//    future days stay a surprise until they arrive.
//
//  TO ADD A MESSAGE:
//  - Copy one of the { ... } blocks below and change the text.
//
//  TO ADD PHOTOS (optional):
//  - Put your image files in the "photos" folder.
//  - For ONE photo:   photos: ["beach.jpg"]
//  - For SEVERAL:     photos: ["beach.jpg", "sunset.jpg", "us.jpg"]
//  - For NONE:        photos: []
//
// =============================================================

// The day you leave. Format: "YEAR-MONTH-DAY" (month and day are 2 digits).
// NOTE: set to a past date for PREVIEW mode (unlocks every message so you
// can flip through them). Change this back to your real move-in day before
// you share the link with Mom, or she'll see them all at once!
const START_DATE = "2026-08-24";

// A little passcode your mom types to get in. Keep it easy for her!
// Numbers work best — they type the same on any keyboard.
// (This keeps casual visitors out. Leave it as "" for no passcode.)
const PASSCODE = "Newport";

// Your messages, in order. The first one shows on START_DATE.
const MESSAGES = [
  {
    text: "나 다람쥐 봤다 :D 우헤헤",
    photos: [squirrel1.jpeg,squirrel2.jpeg],
  },
  {
    text: "Day two. ",
    photos: [],
  },
  {
    text: "I also programmed this to have photos :) Are you proud of me? This is my favorite picture from when I was little.",
    photos: ["babypic1.jpg"],
  },
  {
    text: "How time flies. I just finished my CASE exam. I hope there are good results",
    photos: [],
  },
  {
    text: "Almost the weekend. Eat well, rest, and don't work too hard. I'll call you soon. Love always.",
    photos: [],
  },
  // ↓↓↓ Add as many more days as you like, one block each ↓↓↓
];
