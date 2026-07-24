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
const START_DATE = "2020-01-01";

// A little passcode your mom types to get in. Keep it easy for her!
// Numbers work best — they type the same on any keyboard.
// (This keeps casual visitors out. Leave it as "" for no passcode.)
const PASSCODE = "1234";

// Your messages, in order. The first one shows on START_DATE.
const MESSAGES = [
  {
    text: "Hi Mom. If you're reading this, it's my first day away — and I already miss you. I made this little site so you'll hear from me every single day I'm gone. Love you. ❤️",
    photos: [],
  },
  {
    text: "Day two. I'm settling in okay. Thank you for everything you did to get me here — I don't say it enough.",
    photos: [],
  },
  {
    text: "Remember when we used to have coffee together in the mornings? I thought about that today. Save me a cup for when I visit.",
    photos: [],
  },
  {
    text: "Here are a couple of pictures I wanted you to see. Thinking of you. 🌸",
    photos: ["example1.jpg", "example2.jpg"], // <- put these files in the "photos" folder, or change the names
  },
  {
    text: "Almost the weekend. Eat well, rest, and don't work too hard. I'll call you soon. Love always.",
    photos: [],
  },
  // ↓↓↓ Add as many more days as you like, one block each ↓↓↓
];
