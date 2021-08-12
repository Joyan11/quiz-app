import { Quiz } from "./type";

export const quiz: Quiz = {
  quizName: "harry potter quiz",
  spells: {
    name: "Spells",
    questions: [
      {
        questionNo: 1,
        question: "What spell did Harry use to kill Lord Voldemort?",
        choices: [
          { option: "Expelliarmus", isRight: false },
          { option: "Expecto Patronum", isRight: false },
          { option: "Avada Kedavra", isRight: true },
          { option: "Accio", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 2,
        question:
          "At the first meeting of the Duelling Club, Draco Malfoy summoned what animal with the spell ‘Serpensortia’?",
        choices: [
          { option: "Frog", isRight: false },
          { option: "Snake", isRight: true },
          { option: "Dragon", isRight: false },
          { option: "Bear", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 3,
        question: "“It’s Levi-O-sa, not…”",
        choices: [
          { option: "Levi-o-SA", isRight: true },
          { option: "LEVI-o-sa", isRight: false },
          { option: "Levi-sa", isRight: false },
          { option: "Levi-ON-sa", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 4,
        question: "Which Patronus belongs to Luna Lovegood?",
        choices: [
          { option: "Doe", isRight: false },
          { option: "Rabbit", isRight: true },
          { option: "Dog", isRight: false },
          { option: "Horse", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 5,
        question:
          " The spell ‘Piertotum Locomotor’ gives life to what types of objects?",
        choices: [
          { option: "Locks", isRight: false },
          { option: "Chocolate Frogs", isRight: false },
          { option: "Ghosts", isRight: false },
          { option: "Statues", isRight: true },
        ],
        point: 5,
      },
      {
        questionNo: 6,
        question:
          "Lumos is the spell that produces light from the user’s wand. What spell turns it off?",
        choices: [
          { option: "Flipendo", isRight: false },
          { option: "Nox", isRight: true },
          { option: "Accio", isRight: false },
          { option: "Sectumsempra", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 7,
        question: "Select all of the 3 ‘Unforgivable Curses’",
        choices: [
          { option: "Imperius, Cruciatus, Avada Kedavra", isRight: true },
          { option: "Confundo, Bombardo, Cruciatus", isRight: false },
          { option: "Oppugno, Spongify, Accio", isRight: false },
          { option: "Bombardo, Imperius, Avada Kedavra", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 8,
        question:
          "Which spell Conjures and projects Lord Voldemort's Dark Mark?",
        choices: [
          { option: "Renneverate", isRight: false },
          { option: "Levicorpus", isRight: false },
          { option: "Morsmordre", isRight: true },
          { option: "Disapparate", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 9,
        question: "The ‘Felifors’ spell turns a cat into a what?",
        choices: [
          { option: "Hat", isRight: false },
          { option: "Bat", isRight: false },
          { option: "MatchBox", isRight: false },
          { option: "Cauldron", isRight: true },
        ],
        point: 5,
      },
      {
        questionNo: 10,
        question:
          "Who wrote the 7-book series titled ‘The Standard Book of Spells’?",
        choices: [
          { option: "Miranda Goshawk", isRight: true },
          { option: "Rita Skeeter", isRight: false },
          { option: "Bathilda Bagshot", isRight: false },
          { option: "Kennilworthy Whisp", isRight: false },
        ],
        point: 5,
      },
    ],
  },
  houseofhogwards: {
    name: "Houses of Hogwarts",
    questions: [
      {
        questionNo: 1,
        question: "What was the first name of the founder of Slytherin house?",
        choices: [
          { option: "Godric Gryffindor", isRight: false },
          { option: "Helga Hufflepuff", isRight: false },
          { option: "Rowena Ravenclaw", isRight: false },
          { option: "Salazar Slytherin", isRight: true },
        ],
        point: 5,
      },
      {
        questionNo: 2,
        question: "Which element is associated with Hufflepuff?",
        choices: [
          { option: "Fire", isRight: false },
          { option: "Earth", isRight: true },
          { option: "Air", isRight: false },
          { option: "Water", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 3,
        question:
          "Who was Gryffindor’s Quidditch-obsessed keeper between 1987 and 1994?",
        choices: [
          { option: "Katie Bell", isRight: false },
          { option: "Oliver Wood", isRight: true },
          { option: "Charlie Weasley", isRight: false },
          { option: "Angelina Johnson", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 4,
        question: "What position does Harry play on his Quidditch team?",
        choices: [
          { option: "Chaser", isRight: false },
          { option: "Bludger", isRight: false },
          { option: "Keeper", isRight: false },
          { option: "Seeker", isRight: true },
        ],
        point: 5,
      },
      {
        questionNo: 5,
        question:
          " What must the user of the Marauder’s Map say after using it, in order to reset it?",
        choices: [
          { option: "Mischief done", isRight: false },
          { option: "Mischief made", isRight: false },
          { option: "Mischief managed", isRight: true },
          { option: "Mischief executed", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 6,
        question: "What magical talent does Harry share with Voldemort?",
        choices: [
          { option: "Being an Animagus", isRight: false },
          { option: "Being a Parselmouth", isRight: true },
          { option: "Being an Auror", isRight: false },
          { option: "Being a Death Eater", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 7,
        question:
          "Finish the inscription on Dobby’s tombstone: ‘Here lies Dobby…?",
        choices: [
          { option: "‘Master of socks’", isRight: false },
          { option: "A free Elf", isRight: true },
          { option: "Master of socks", isRight: false },
          { option: "The best servant", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 8,
        question: "What is Nearly Headless Nick's full name?",
        choices: [
          { option: "Sir Nicholas Marvolo", isRight: false },
          { option: "Sir Nicholas flamel", isRight: false },
          { option: "Sir Nicholas de Mimsy-Porpington", isRight: true },
          { option: "Sir Nicholas Radcliff", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 9,
        question: "Albus Dumbledore destroyed which Horcrux?",
        choices: [
          { option: "Slytherin’s locket", isRight: false },
          { option: "Nagini", isRight: false },
          { option: "Hufflepuff’s cup", isRight: false },
          { option: "Marvolo Gaunt’s ring", isRight: true },
        ],
        point: 5,
      },
      {
        questionNo: 10,
        question:
          "Who poses as Mad-Eye Moody, Harry’s 4th year Defense Against the Dark Arts professor?",
        choices: [
          { option: "Barty Crouch Jr.", isRight: true },
          { option: "Sirius Black", isRight: false },
          { option: "Peter Pettigrew", isRight: false },
          { option: "Voldemort", isRight: false },
        ],
        point: 5,
      },
    ],
  },
  fantasticbeasts: {
    name: "Fantastic Beasts",
    questions: [
      {
        questionNo: 1,
        question:
          "What’s the name of Hagrid’s 3-headed dog that protects the Philosopher’s Stone?",
        choices: [
          { option: "Cornell", isRight: false },
          { option: "Dobby", isRight: false },
          { option: "Fluffy", isRight: true },
          { option: "Bart", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 2,
        question: "What was the name of the Black family’s house elf?",
        choices: [
          { option: "Tobby", isRight: false },
          { option: "Kreacher", isRight: true },
          { option: "Lucious", isRight: false },
          { option: "Kripki", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 3,
        question: "What is a thestral?",
        choices: [
          { option: "A half-giant", isRight: false },
          { option: "An invisible winged horse", isRight: true },
          { option: "A shrunken head", isRight: false },
          { option: "A pixie", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 4,
        question:
          "What was the name of the animal that acted as the snitch in early Quidditch games?",
        choices: [
          { option: "Golden Steen", isRight: false },
          { option: "Golden Snidget", isRight: true },
          { option: "Golden Stonch", isRight: false },
          { option: "Golden Snackett", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 5,
        question: " What was the first name of the founder of Slytherin house?",
        choices: [
          { option: "Helga", isRight: false },
          { option: "Albus", isRight: false },
          { option: "Godric", isRight: false },
          { option: "Salazar", isRight: true },
        ],
        point: 5,
      },
      {
        questionNo: 6,
        question: "WWhen unearthed, a mandrake will do what?",
        choices: [
          { option: "Dance", isRight: false },
          { option: "Scream", isRight: true },
          { option: "Burp", isRight: false },
          { option: "Laugh", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 7,
        question:
          "Cedric Diggory faced what breed of dragon in the Triwizard Tournament?",
        choices: [
          { option: "Swedish Short-Snout", isRight: true },
          { option: "Peruvian Vipertooth", isRight: false },
          { option: "Common Welsh Green", isRight: false },
          { option: "Norwegian Ridgeback", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 8,
        question:
          "The tears of which animal are the only known antidote to basilisk venom?",
        choices: [
          { option: "Billywig", isRight: false },
          { option: "Hippogriff", isRight: false },
          { option: "Phoenix", isRight: true },
          { option: "Boggart", isRight: false },
        ],
        point: 5,
      },
      {
        questionNo: 9,
        question: "Select the centaurs named in the Harry Potter books",
        choices: [
          { option: "Braddy", isRight: false },
          { option: "Ronan", isRight: false },
          { option: "Bane", isRight: false },
          { option: "Aragog", isRight: true },
        ],
        point: 5,
      },
      {
        questionNo: 10,
        question: "Who was Winky?",
        choices: [
          { option: "House-elf", isRight: true },
          { option: "Ghost", isRight: false },
          { option: "Wizard", isRight: false },
          { option: "Muggle", isRight: false },
        ],
        point: 5,
      },
    ],
  },
};
