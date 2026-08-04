// ======================================
// SPACE QUIZ GAME - QUESTIONS.JS
// ======================================

const questions = {
  arithmeticSequence: [
    // EASY
    {
      question: "What is the next term? 2, 5, 8, 11, ?",
      choices: ["13", "14", "15", "16"],
      answer: "14",
      difficulty: "easy"
    },
    {
      question: "Find the common difference: 7, 10, 13, 16",
      choices: ["2", "3", "4", "5"],
      answer: "3",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 12, 15, 18, 21, ?",
      choices: ["22", "23", "24", "25"],
      answer: "24",
      difficulty: "easy"
    },
    {
      question: "Find the next term: 30, 25, 20, 15, ?",
      choices: ["5", "10", "12", "15"],
      answer: "10",
      difficulty: "easy"
    },
    {
      question: "Find the common difference: 4, 9, 14, 19",
      choices: ["3", "4", "5", "6"],
      answer: "5",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 100, 90, 80, 70, ?",
      choices: ["60", "65", "75", "50"],
      answer: "60",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 1, 4, 7, 10, ?",
      choices: ["11", "12", "13", "14"],
      answer: "13",
      difficulty: "easy"
    },
    {
      question: "Find the common difference: 15, 20, 25, 30",
      choices: ["4", "5", "6", "7"],
      answer: "5",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 8, 12, 16, 20, ?",
      choices: ["22", "23", "24", "25"],
      answer: "24",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 50, 45, 40, 35, ?",
      choices: ["25", "30", "40", "45"],
      answer: "30",
      difficulty: "easy"
    },

    // MEDIUM
    {
      question: "Find the 10th term of the sequence 3, 7, 11, 15, ...",
      choices: ["35", "37", "39", "41"],
      answer: "39",
      difficulty: "medium"
    },
    {
      question: "Find the 15th term of 8, 13, 18, 23, ...",
      choices: ["73", "78", "83", "88"],
      answer: "78",
      difficulty: "medium"
    },
    {
      question: "Find the common difference: 24, 18, 12, 6, ...",
      choices: ["-4", "-5", "-6", "-7"],
      answer: "-6",
      difficulty: "medium"
    },
    {
      question: "Find the 20th term of 5, 8, 11, 14, ...",
      choices: ["59", "60", "61", "62"],
      answer: "62",
      difficulty: "medium"
    },
    {
      question: "Find the 8th term of 100, 95, 90, 85, ...",
      choices: ["60", "65", "70", "75"],
      answer: "65",
      difficulty: "medium"
    },
    {
      question: "Find the 12th term of 1, 6, 11, 16, ...",
      choices: ["51", "56", "61", "66"],
      answer: "56",
      difficulty: "medium"
    },
    {
      question: "Find the common difference: 40, 34, 28, 22, ...",
      choices: ["-4", "-5", "-6", "-7"],
      answer: "-6",
      difficulty: "medium"
    },
    {
      question: "Find the 9th term of 14, 18, 22, 26, ...",
      choices: ["42", "46", "50", "54"],
      answer: "46",
      difficulty: "medium"
    },
    {
      question: "Find the 7th term of 2, 9, 16, 23, ...",
      choices: ["37", "44", "51", "58"],
      answer: "44",
      difficulty: "medium"
    },
    {
      question: "Find the 11th term of 50, 47, 44, 41, ...",
      choices: ["20", "23", "26", "29"],
      answer: "20",
      difficulty: "medium"
    },

    // HARD
    {
      question: "Find the 25th term of the sequence 4, 9, 14, 19, ...",
      choices: ["119", "124", "129", "134"],
      answer: "124",
      difficulty: "hard"
    },
    {
      question: "If a₁ = 12 and d = -4, find a₂₀.",
      choices: ["-60", "-64", "-68", "-72"],
      answer: "-64",
      difficulty: "hard"
    },
    {
      question: "Find the 30th term of 7, 10, 13, 16, ...",
      choices: ["91", "94", "97", "100"],
      answer: "94",
      difficulty: "hard"
    },
    {
      question: "The first term is 15 and the common difference is 8. Find the 18th term.",
      choices: ["143", "147", "151", "155"],
      answer: "151",
      difficulty: "hard"
    },
    {
      question: "Find the common difference if a₁ = 9 and a₁₀ = 54.",
      choices: ["4", "5", "6", "7"],
      answer: "5",
      difficulty: "hard"
    },
    {
      question: "Find a₁₅ if a₁ = -8 and d = 6.",
      choices: ["70", "72", "74", "76"],
      answer: "76",
      difficulty: "hard"
    },
    {
      question: "What is the 40th term of 2, 5, 8, 11, ...",
      choices: ["116", "117", "118", "119"],
      answer: "119",
      difficulty: "hard"
    },
    {
      question: "If a₁ = 25 and d = -3, find a₂₅.",
      choices: ["-44", "-45", "-46", "-47"],
      answer: "-47",
      difficulty: "hard"
    },
    {
      question: "Find the 16th term of 30, 27, 24, 21, ...",
      choices: ["-12", "-15", "-18", "-20"],
      answer: "-15",
      difficulty: "hard"
    },
    {
      question: "Find the value of n if a₁ = 6, d = 4, and aₙ = 82.",
      choices: ["18", "19", "20", "21"],
      answer: "20",
      difficulty: "hard"
    }
  ],

  arithmeticSeries: [
    // EASY
    {
      question: "Find the sum of the first 5 terms: 2 + 4 + 6 + 8 + 10",
      choices: ["25", "30", "35", "40"],
      answer: "30",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 5 + 10 + 15 + 20",
      choices: ["45", "50", "55", "60"],
      answer: "50",
      difficulty: "easy"
    },
    {
      question: "Find the sum of the first 4 terms: 3 + 6 + 9 + 12",
      choices: ["24", "30", "36", "42"],
      answer: "30",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 8 + 12 + 16 + 20 + 24",
      choices: ["70", "75", "80", "85"],
      answer: "80",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 1 + 3 + 5 + 7 + 9",
      choices: ["20", "25", "30", "35"],
      answer: "25",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 10 + 20 + 30 + 40",
      choices: ["90", "100", "110", "120"],
      answer: "100",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 7 + 14 + 21 + 28",
      choices: ["63", "70", "77", "84"],
      answer: "70",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 4 + 8 + 12 + 16 + 20",
      choices: ["50", "55", "60", "65"],
      answer: "60",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 9 + 12 + 15 + 18",
      choices: ["48", "50", "54", "56"],
      answer: "54",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 11 + 22 + 33 + 44",
      choices: ["100", "110", "120", "130"],
      answer: "110",
      difficulty: "easy"
    },

    // MEDIUM
    {
      question: "Find the sum of the first 10 terms of 3, 6, 9, ...",
      choices: ["155", "165", "175", "185"],
      answer: "165",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 15 terms of 2, 5, 8, ...",
      choices: ["330", "345", "360", "375"],
      answer: "345",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 12 terms of 5, 10, 15, ...",
      choices: ["360", "390", "420", "450"],
      answer: "390",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 20 terms of 4, 8, 12, ...",
      choices: ["800", "840", "880", "920"],
      answer: "840",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 8 terms of 7, 11, 15, ...",
      choices: ["160", "168", "176", "184"],
      answer: "168",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 25 terms of 1, 3, 5, ...",
      choices: ["600", "625", "650", "675"],
      answer: "625",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 6 terms of 9, 13, 17, ...",
      choices: ["104", "114", "126", "132"],
      answer: "114",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 18 terms of 10, 15, 20, ...",
      choices: ["900", "945", "990", "1035"],
      answer: "945",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 10 terms of 12, 14, 16, ...",
      choices: ["190", "210", "220", "230"],
      answer: "210",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 9 terms of 6, 9, 12, ...",
      choices: ["150", "162", "171", "180"],
      answer: "162",
      difficulty: "medium"
    },

    // HARD
    {
      question: "Find the sum of the first 30 terms of 2, 5, 8, ...",
      choices: ["1305", "1365", "1395", "1425"],
      answer: "1365",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 25 terms of 4, 8, 12, ...",
      choices: ["1200", "1250", "1300", "1350"],
      answer: "1300",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 20 terms of 5, 10, 15, ...",
      choices: ["1000", "1050", "1100", "1150"],
      answer: "1050",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 40 terms of 1, 3, 5, ...",
      choices: ["1520", "1560", "1600", "1640"],
      answer: "1600",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 18 terms of 6, 12, 18, ...",
      choices: ["918", "972", "1026", "1080"],
      answer: "1026",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 15 terms of 8, 16, 24, ...",
      choices: ["900", "960", "1020", "1080"],
      answer: "960",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 12 terms of 9, 18, 27, ...",
      choices: ["648", "702", "756", "810"],
      answer: "702",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 50 terms of 3, 6, 9, ...",
      choices: ["3750", "3825", "3900", "3975"],
      answer: "3825",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 35 terms of 7, 14, 21, ...",
      choices: ["4280", "4410", "4530", "4660"],
      answer: "4410",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 22 terms of 10, 20, 30, ...",
      choices: ["2420", "2530", "2640", "2750"],
      answer: "2530",
      difficulty: "hard"
    }
  ],

  geometricSequence: [
    // EASY
    {
      question: "What is the next term? 2, 4, 8, 16, ?",
      choices: ["24", "30", "32", "36"],
      answer: "32",
      difficulty: "easy"
    },
    {
      question: "What is the common ratio of 3, 6, 12, 24?",
      choices: ["2", "3", "4", "6"],
      answer: "2",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 5, 10, 20, 40, ?",
      choices: ["60", "70", "80", "90"],
      answer: "80",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 1, 3, 9, 27, ?",
      choices: ["54", "72", "81", "90"],
      answer: "81",
      difficulty: "easy"
    },
    {
      question: "Find the common ratio: 7, 14, 28, 56",
      choices: ["2", "3", "4", "5"],
      answer: "2",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 4, 12, 36, 108, ?",
      choices: ["216", "324", "432", "540"],
      answer: "324",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 6, 12, 24, 48, ?",
      choices: ["72", "84", "96", "100"],
      answer: "96",
      difficulty: "easy"
    },
    {
      question: "Find the common ratio: 9, 27, 81, 243",
      choices: ["2", "3", "4", "5"],
      answer: "3",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 10, 20, 40, 80, ?",
      choices: ["120", "140", "160", "180"],
      answer: "160",
      difficulty: "easy"
    },
    {
      question: "What is the next term? 8, 16, 32, 64, ?",
      choices: ["96", "112", "128", "144"],
      answer: "128",
      difficulty: "easy"
    },

    // MEDIUM
    {
      question: "Find the 6th term of the sequence 2, 4, 8, 16, ...",
      choices: ["32", "64", "128", "256"],
      answer: "64",
      difficulty: "medium"
    },
    {
      question: "Find the 5th term of 3, 9, 27, 81, ...",
      choices: ["162", "243", "324", "486"],
      answer: "243",
      difficulty: "medium"
    },
    {
      question: "Find the common ratio of 5, 15, 45, 135, ...",
      choices: ["2", "3", "4", "5"],
      answer: "3",
      difficulty: "medium"
    },
    {
      question: "Find the 7th term of 2, 6, 18, 54, ...",
      choices: ["486", "729", "972", "1458"],
      answer: "1458",
      difficulty: "medium"
    },
    {
      question: "Find the 8th term of 1, 2, 4, 8, ...",
      choices: ["64", "128", "256", "512"],
      answer: "128",
      difficulty: "medium"
    },
    {
      question: "Find the 6th term of 4, 8, 16, 32, ...",
      choices: ["64", "128", "256", "512"],
      answer: "128",
      difficulty: "medium"
    },
    {
      question: "Find the 5th term of 7, 14, 28, 56, ...",
      choices: ["98", "112", "120", "140"],
      answer: "112",
      difficulty: "medium"
    },
    {
      question: "Find the common ratio of 10, 20, 40, 80, ...",
      choices: ["2", "3", "4", "5"],
      answer: "2",
      difficulty: "medium"
    },
    {
      question: "Find the 6th term of 9, 27, 81, 243, ...",
      choices: ["729", "1458", "2187", "6561"],
      answer: "2187",
      difficulty: "medium"
    },
    {
      question: "Find the 7th term of 5, 10, 20, 40, ...",
      choices: ["160", "320", "640", "1280"],
      answer: "320",
      difficulty: "medium"
    },

    // HARD
    {
      question: "Find the 10th term of the sequence 2, 4, 8, 16, ...",
      choices: ["512", "1024", "2048", "4096"],
      answer: "1024",
      difficulty: "hard"
    },
    {
      question: "Find the 8th term of 3, 9, 27, 81, ...",
      choices: ["2187", "6561", "19683", "729"],
      answer: "6561",
      difficulty: "hard"
    },
    {
      question: "If a₁ = 5 and r = 3, find a₇.",
      choices: ["3645", "2430", "10935", "1215"],
      answer: "3645",
      difficulty: "hard"
    },
    {
      question: "Find the 9th term of 7, 14, 28, 56, ...",
      choices: ["896", "1792", "3584", "7168"],
      answer: "1792",
      difficulty: "hard"
    },
    {
      question: "Find the 11th term of 1, 2, 4, 8, ...",
      choices: ["512", "1024", "2048", "4096"],
      answer: "1024",
      difficulty: "hard"
    },
    {
      question: "If a₁ = 8 and r = 2, find a₉.",
      choices: ["1024", "2048", "4096", "8192"],
      answer: "2048",
      difficulty: "hard"
    },
    {
      question: "Find the 12th term of 4, 12, 36, 108, ...",
      choices: ["708588", "531441", "354294", "944784"],
      answer: "708588",
      difficulty: "hard"
    },
    {
      question: "If a₁ = 6 and r = 4, find a₆.",
      choices: ["6144", "4096", "5120", "8192"],
      answer: "6144",
      difficulty: "hard"
    },
    {
      question: "Find the 10th term of 9, 27, 81, 243, ...",
      choices: ["59049", "19683", "177147", "531441"],
      answer: "177147",
      difficulty: "hard"
    },
    {
      question: "Find the 8th term of 10, 20, 40, 80, ...",
      choices: ["640", "1280", "2560", "5120"],
      answer: "1280",
      difficulty: "hard"
    }
  ],

  geometricSeries: [
    // EASY
    {
      question: "Find the sum of the first 4 terms: 2 + 4 + 8 + 16",
      choices: ["28", "30", "32", "34"],
      answer: "30",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 3 + 6 + 12 + 24",
      choices: ["42", "45", "48", "51"],
      answer: "45",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 1 + 2 + 4 + 8 + 16",
      choices: ["29", "30", "31", "32"],
      answer: "31",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 5 + 10 + 20 + 40",
      choices: ["65", "70", "75", "80"],
      answer: "75",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 4 + 8 + 16 + 32",
      choices: ["56", "60", "64", "68"],
      answer: "60",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 6 + 12 + 24 + 48",
      choices: ["84", "90", "96", "100"],
      answer: "90",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 7 + 14 + 28 + 56",
      choices: ["98", "105", "112", "119"],
      answer: "105",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 8 + 16 + 32 + 64",
      choices: ["112", "120", "128", "136"],
      answer: "120",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 9 + 18 + 36 + 72",
      choices: ["126", "135", "144", "153"],
      answer: "135",
      difficulty: "easy"
    },
    {
      question: "Find the sum: 10 + 20 + 40 + 80",
      choices: ["130", "140", "150", "160"],
      answer: "150",
      difficulty: "easy"
    },

    // MEDIUM
    {
      question: "Find the sum of the first 6 terms of 2, 4, 8, ...",
      choices: ["126", "128", "130", "132"],
      answer: "126",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 5 terms of 3, 9, 27, ...",
      choices: ["363", "364", "365", "366"],
      answer: "363",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 7 terms of 1, 2, 4, ...",
      choices: ["126", "127", "128", "129"],
      answer: "127",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 5 terms of 5, 10, 20, ...",
      choices: ["150", "155", "160", "165"],
      answer: "155",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 6 terms of 4, 12, 36, ...",
      choices: ["1452", "1456", "1460", "1464"],
      answer: "1456",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 5 terms of 6, 18, 54, ...",
      choices: ["720", "726", "730", "736"],
      answer: "726",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 6 terms of 7, 14, 28, ...",
      choices: ["434", "438", "441", "445"],
      answer: "434",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 5 terms of 8, 16, 32, ...",
      choices: ["240", "248", "252", "256"],
      answer: "248",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 6 terms of 9, 18, 36, ...",
      choices: ["558", "561", "567", "570"],
      answer: "567",
      difficulty: "medium"
    },
    {
      question: "Find the sum of the first 5 terms of 10, 20, 40, ...",
      choices: ["300", "310", "320", "330"],
      answer: "310",
      difficulty: "medium"
    },

    // HARD
    {
      question: "Find the sum of the first 10 terms of 2, 4, 8, ...",
      choices: ["2046", "2047", "2048", "2049"],
      answer: "2046",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 8 terms of 3, 9, 27, ...",
      choices: ["3279", "3280", "3281", "3282"],
      answer: "3280",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 9 terms of 5, 10, 20, ...",
      choices: ["2550", "2555", "2560", "2565"],
      answer: "2555",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 7 terms of 4, 12, 36, ...",
      choices: ["4372", "4376", "4380", "4384"],
      answer: "4372",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 8 terms of 6, 18, 54, ...",
      choices: ["19680", "19682", "19683", "19684"],
      answer: "19680",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 9 terms of 7, 14, 28, ...",
      choices: ["3570", "3577", "3584", "3591"],
      answer: "3577",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 8 terms of 8, 16, 32, ...",
      choices: ["2032", "2040", "2048", "2056"],
      answer: "2040",
      difficulty: "hard"
    },
    {
      question: "Find the sum of the first 7 terms of 9, 18, 36, ...",
      choices: ["1134", "1143", "1152", "1161"],
      answer: "1134",
      d
