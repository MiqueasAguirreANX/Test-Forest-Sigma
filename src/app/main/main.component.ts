import { Component, OnInit } from '@angular/core';

interface Question {
  id:number,
  order:number,
  question:string
}

var subcategories = [
  'SELF-ANALYSIS',
  'INTUITION',
  'MEDITATION',
  'AMBITION',
  'PRIDE',
  'LEADERSHIP',
  'CONVERSATION',
  'AFFILIATION',
  'SOLIDARITY',
  'AUTONOMY',
  'FREEDOM',
  'SOLITUDE',
  'AMUSEMENT',
  'EROTICISM',
  'PLAYFULNESS',
  'ORDERLINESS',
  'PLANNING',
  'PRECISION',
  'INNOVATION',
  'ABSTRACTION',
  'REFLECTION',
  'CONFORMITY',
  'TRADITION',
  'SECURITY',
  'DEVOTION',
  'HARMONY',
  'RESPECT',
  'RESPONSE',
  'REVENGE',
  'ANGER',
  'TEMERITY',
  'ADVENTURE',
  'VARIETY',
  'JOVIALITY',
  'VIVACITY',
  'OPTIMISM',
  'NEUROSIS'
]

var questions = [
  { order:1, id: 233, question: 'Abide by guidelines' },
  { order:2, id: 94,  question: 'Act by mututal consent' },
  { order:3, id: 240, question: 'Behave like the majority' },
  { order:4, id: 296, question: 'Respect old people' },
  { order:5, id: 227, question: 'Admire philosophers' },
  { id: 284,	question: 'Adopt compromises', order:	6},
  { id: 237, question: 	'Advocate for conformity', order: 7},
  { id: 274, question: 	'Alleviate suffering', order: 	8},
  { id: 43	, question: 'Always aim higher	', order: 9},
  { id: 264, question: 	'Avoid all dangers	', order: 10},
  { id: 167, question: 	'Always be orderly	', order: 11},
  { id: 185, question: 	'Always be prepared', order: 	12},
  { id: 161, question: 	'Often clown around', order: 	13},
  { id: 112, question: 	'Always do as I please	', order: 14},
  { id: 41	, question: 'Always outdo myself	', order: 15},
  { id: 177, question: 	'Strictly plan my day', order: 	16},
  { id: 208, question: 	'Try to renew myself	', order: 17},
  { id: 127, question: 	'Often stay behind	', order: 18},
  { id: 391, question: 	'Always trust in life', order: 	19},
  { id: 211, question: 	'Study abstract ideas', order: 	20},
  { id: 226, question: 	'Compare different ideas', order: 	21},
  { id: 19	, question: 'Analyze facial features', order: 	22},
  { id: 10	, question: 'Deepen my feelings', order: 	23},
  { id: 255, question: 	'Ask for protection', order: 	24},
  { id: 228, question: 	'Ask myself questions', order: 	25},
  { id: 313, question: 	'Avenge a grave insult', order: 	26},
  { id: 261, question: 	'Avoid any mishap', order: 	27},
  { id: 354, question: 	'Escape boring routines', order: 	28},
  { id: 276, question: 	'Apease painful quarrels', order:	29},
  { id: 125, question: 	'Avoid public places', order:	30},
  { id: 242, question: 	'Banish originality', order:	31},
  { id: 392, question: 	'Bask in serenity', order:	32},
  { id: 79	, question: 'Be a member of a club', order:	33},
  { id: 188, question: 	'Be a perfectionist', order:	34},
  { id: 332, question: 	'Be a real daredevil', order:	35},
  { id: 214, question: 	'Be able to theorize', order:	36},
  { id: 337, question: 	'Be afraid of nothing', order:	37},
  { id: 205, question: 	'Be at the leading edge', order:	38},
  { id: 294, question: 	'Be aware of others', order:	39},
  { id: 389, question: 	'Be born for happiness', order:	40},
  { id: 394, question: 	'Be extremely happy', order:	41},
  { id: 292, question: 	'Be extremely polite', order:	42},
  { id: 336, question: 	'Be foolishly reckless', order:	43},
  { id: 117, question: 	'Be free from duties', order:	44},
  { id: 330, question: 	'Be furious sometimes', order:	45},
  { id: 50	, question: 'Be greatly appreciated', order:	46},
  { id: 390, question: 	'Be in a good mood', order: 	47},
  { id: 369, question: 	'Have a joyful spirit', order:	48},
  { id: 63	, question: 'Be obeyed promptly', order:	49},
  { id: 26	, question: 'Be one with nature', order:	50},
  { id: 367, question: 	'Be overtly cheerful', order:	51},
  { id: 300, question: 	'Be quick on the draw', order:	52},
  { id: 64	, question: 'Be quite authoritarian', order:	53},
  { id: 376, question: 	'Be quite full of energy', order:	54},
  { id: 87	, question: 'Be really sociable', order:	55},
  { id: 384, question: 	'Be remarkably alert', order:	56},
  { id: 259, question: 	'Be safe from danger', order:	57},
  { id: 262, question: 	'Be protected from threats', order: 58},
  { id: 104, question: 	'Be self-supporting', order:	59},
  { id: 272, question: 	'Be sensitive to misery', order:	60},
  { id: 291, question: 	'Be tactful in society', order:	61},
  { id: 378, question: 	'Be the lively type', order:	62},
  { id: 349, question: 	'Be very adventurous', order:	63},
  { id: 365, question: 	'Be very enthusiastic', order:	64},
  { id: 189, question: 	'Be very meticulous', order:	65},
  { id: 295, question: 	'Be very respectful', order:	66},
  { id: 325, question: 	'Be vocally aggressive', order:	67},
  { id: 258, question: 	'Be well protected', order:	68},
  { id: 47	, question: 'Be worthy of admiration', order:	69},
  { id: 345, question: 	'Become a globetrotter', order:	70},
  { id: 45	, question: 'Become very popular', order:	71},
  { id: 86	, question: 'Belong to a group', order:	72},
  { id: 137, question: 	'Bite eagerly into life', order:	73},
  { id: 341, question: 	'Brave a threat', order:	74},
  { id: 35	, question: 'Break a new record', order:	75},
  { id: 355, question: 	'Break the monotony', order:	76},
  { id: 379, question: 	'Burst with dynamism', order:	77},
  { id: 20	, question: 'Capture an  innuendo', order:	78},
  { id: 329, question: 	'Chafe for no reason', order:	79},
  { id: 363, question: 	'Change my activities ', order:	80},
  { id: 357, question: 	'Change my mind often', order:	81},
  { id: 77	, question: 'Chat around the fire', order:	82},
  { id: 68	, question: 'Chat with strangers', order: 	83},
  { id: 191, question: 	'Check minute details', order:	84},
  { id: 175, question: 	'Classify objects', order:	85},
  { id: 168, question: 	'Clean my room', order:	86},
  { id: 172, question: 	'Clean thoroughly', order:	87},
  { id: 173, question: 	'Clean up a mess', order:	88},
  { id: 270, question: 	'Comfort the afflicted', order:	89},
  { id: 74	, question: 'Communicate orally', order:   	90},
  { id: 32	, question: 'Connect with the cosmos', order:	91},
  { id: 70	, question: 'Converse with others', order:	92},
  { id: 92	, question: 'Cooperate with others', order:	93},
  { id: 195, question: 	'Correct deficiencies', order:	94},
  { id: 100, question: 	'Count only on myself', order:	95},
  { id: 97	, question: 'Cowork in a team', order:	96},
  { id: 165, question: 	'Crack a funny joke', order:	97},
  { id: 201, question: 	'Create an original work', order:	98},
  { id: 31	, question: 'Cultivate my innerness', order:	99},
  { id: 206, question: 	'Daydream creatively', order:	100},
  { id: 219, question: 	'Decode abstractions', order:	101},
  { id: 14	, question: 'Decode body language', order:	102},
  { id: 33	, question: 'Deepen my faith', order:	103},
  { id: 129, question: 	'Delimit my territory', order:	104},
  { id: 49	, question: 'Deserve great praise', order:	105},
  { id: 22	, question: 'Detect people’s moods', order:	106},
  { id: 183, question: 	'Develop a strategy', order:	107},
  { id: 82	, question: 'Develop camaraderie', order:	108},
  { id: 213, question: 	'Develop concepts', order:	109},
  { id: 202, question: 	'Devise a special gadget', order:	110},
  { id: 8	, question:   'Discover my strengths', order:	111},
  { id: 382, question: 	'Display great vigor', order:	112},
  { id: 364, question: 	'Show intense joy', order:	113},
  { id: 387, question: 	'Display optimism', order:	114},
  { id: 339, question: 	'Display recklessness', order:	115},
  { id: 356, question: 	'Diversify my activities', order:	116},
  { id: 169, question: 	'Do a major cleaning', order:	117},
  { id: 118, question: 	'Do anything I feel like', order:	118},
  { id: 105, question: 	'Do without others', order:	119},
  { id: 149, question: 	'Dream of hot love', order:	120},
  { id: 342, question: 	'Embark on adventure', order:	121},
  { id: 286, question: 	'Endure in silence', order:	122},
  { id: 76	, question: 'Engage in a dialogue', order:	123},
  { id: 55	, question: 'Enhance my reputation', order:	124},
  { id: 140, question: 	'Attend a great feast', order:	125},
  { id: 145, question: 	'Savour erotic pleasure', order:	126},
  { id: 138, question: 	'Afford exciting leasure', order:	127},
  { id: 120, question: 	'Exercize my liberty', order:	128},
  { id: 111, question: 	'Enjoy total freedom', order:	129},
  { id: 29	, question: 'Enrich my spiritual life', order: 130},
  { id: 84	, question: 'Establish friendships', order:	131},
  { id: 247, question: 	'Evoke the old days', order:	132},
  { id: 1	, question:   'Examine my inner world', order:	133},
  { id: 56	, question: 'Exercise leadership', order:	134},
  { id: 61	, question: 'Exert strong influence', order:	135},
  { id: 383, question: 	'Explode with energy', order:	136},
  { id: 218, question: 	'Explore a theory', order:	137},
  { id: 3	, question:   'Explore my inner self', order:	138},
  { id: 348, question: 	'Explore new horizons', order:	139},
  { id: 322, question: 	'Express my irritation', order:	140},
  { id: 366, question: 	'Express my joviality', order:	141},
  { id: 368, question: 	'Express my jubilation', order:	142},
  { id: 377, question: 	'Express my liveliness', order:	143},
  { id: 146, question: 	'Express my sexuality', order:	144},
  { id: 95	, question: 'Express my solidarity', order: 	145},
  { id: 333, question: 	'Face daring challenges', order:	146},
  { id: 331, question: 	'Face the worst dangers', order:	147},
  { id: 154, question: 	'Fantasize sensually', order:	148},
  { id: 147, question: 	'Feel a fiery passion', order:	149},
  { id: 374, question: 	'Feel enjoyment', order:	150},
  { id: 115, question: 	'Feel free as a bird', order:	151},
  { id: 171, question: 	'Feel like tidying up', order: 	152},
  { id: 256, question: 	'Feel very secure', order:	153},
  { id: 144, question: 	'Find sexual fulfillment', order:	154},
  { id: 260, question: 	'Find solid protection', order:	155},
  { id: 190, question: 	'Fine-tune each work', order:	156},
  { id: 151, question: 	'Flirt and seduce', order:	157},
  { id: 340, question: 	'Flirt with danger', order:	158},
  { id: 148, question: 	'Flourish sexually', order:	159},
  { id: 327, question: 	'Fly into a rage', order:	160},
  { id: 234, question: 	'Follow each instruction', order:	161},
  { id: 236, question: 	'Follow the mainstream', order:	162},
  { id: 249, question: 	'Follow traditional rites', order:163},
  { id: 182, question: 	'Foresee everything', order:	164},
  { id: 80	, question: 'Form a united group', order:	165},
  { id: 96	, question: 'Foster mutual help', order:	166},
  { id: 53	, question: 'Gain great prestige', order:	167},
  { id: 24	, question: 'Gaze at the Universe	', order:168},
  { id: 278, question: 	'Get along with others', order:	169},
  { id: 323, question: 	'Get angry if necessary	', order:170},
  { id: 360, question: 	'Go out for a change', order:	171},
  { id: 301, question: 	'Give a scathing reply', order:	172},
  { id: 58	, question: 'Give clear orders', order:	173},
  { id: 60	, question: 'Give instructions', order:	174},
  { id: 152, question: 	'Give sensual kisses', order:	175},
  { id: 271, question: 	'Give some of my time	', order:176},
  { id: 65	, question: 'Give sound advice', order:	177},
  { id: 361, question: 	'Give up a dull routine	', order:178},
  { id: 266, question: 	'Give willingly of myself', order:179},
  { id: 351, question: 	'Go off to explore', order: 	180},
  { id: 21	, question: 'Grasp people’s motives	', order:181},
  { id: 210, question: 	'Grasp theoretical ideas', order:	182},
  { id: 290, question: 	'Greet everybody', order:	183},
  { id: 15	, question: 'Guess intimate secrets', order:	184},
  { id: 371, question: 	'Have a cheerful heart', order:	185},
  { id: 204, question: 	'Have a creative spirit', order:	186},
  { id: 134, question: 	'Have a fabulous time', order:	187},
  { id: 396, question: 	'Have a fulfilled life', order:	188},
  { id: 267, question: 	'Have a heart of gold', order:	189},
  { id: 18	, question: 'Have a keen intuition', order:	190},
  { id: 133, question: 	'Have a lot of fun', order:	191},
  { id: 283, question: 	'Have a peaceful spirit	', order:192},
  { id: 40	, question: 'Have ambition', order:	193},
  { id: 67	, question: 'Have easy speech', order:	194},
  { id: 119, question: 	'Have free rein', order:	195},
  { id: 113, question: 	'Have freedom at heart', order:	196},
  { id: 114, question: 	'Have freedom of action', order:	197},
  { id: 57	, question: 'Have great power	', order:198},
  { id: 62	, question: 'Have leadership skills	', order:199},
  { id: 73	, question: 'Have long discussions', order: 	200},
  { id: 372, question: 	'Have outbursts of joy', order:	201},
  { id: 393, question: 	'Have positive views', order:	202},
  { id: 375, question: 	'Have sparkling vitality', order:	203},
  { id: 315, question: 	'Have strong grievances', order:	204},
  { id: 269, question: 	'Help the needy', order:	205},
  { id: 312, question: 	'Hold a grudge', order:	206},
  { id: 253, question: 	'Honour ancestors', order:	207},
  { id: 303, question: 	'Humble a boaster', order:	208},
  { id: 4	, question:   'Identify my motivations', order:	209},
  { id: 241, question: 	'Imitate my neighbours', order:	210},
  { id: 200, question: 	'Initiate a novel project', order: 211},
  { id: 207, question: 	'Innovate brilliantly	', order:212},
  { id: 93	, question: 'Integrate into society	', order:213},
  { id: 99	, question: 'Interact with others', order:	214},
  { id: 16	, question: 'Interpret a long silence', order: 215},
  { id: 212, question: 	'Interpret a symbol', order:	216},
  { id: 11	, question: 'Interpret my behaviour', order:	217},
  { id: 306, question: 	'Interrupt a chatterer', order:	218},
  { id: 209, question: 	'Invent abundantly', order:	219},
  { id: 199, question: 	'Invent something new', order:	220},
  { id: 231, question: 	'Investigate an issue ', order: 	221},
  { id: 78	, question: 'Join an association', order:	222},
  { id: 130, question: 	'Keep my distance', order:	223},
  { id: 248, question: 	'Keep track of the past', order:	224},
  { id: 5	, question:   'Know myself thoroughly', order:	225},
  { id: 7	, question:   'Know who I really am', order:	226},
  { id: 160, question: 	'Laugh out loud', order:	227},
  { id: 122, question: 	'Lead a solitary life', order:	228},
  { id: 343, question: 	'Leap into the unknown', order:	229},
  { id: 230, question: 	'Learn how to reflect', order:	230},
  { id: 268, question: 	'Lend a hand often', order:	231},
  { id: 321, question: 	'Let my anger out', order:	232},
  { id: 288, question: 	'Let people speak', order:	233},
  { id: 132, question: 	'Limit my friendships	', order:234},
  { id: 289, question: 	'Listen very carefully', order:	235},
  { id: 126, question: 	'Live in isolation', order:	236},
  { id: 281, question: 	'Live in total peace', order:	237},
  { id: 257, question: 	'Live in total safety	', order:238},
  { id: 124, question: 	'Live like a hermit', order:	239},
  { id: 116, question: 	'Live my life as I fancy', order:	240},
  { id: 395, question: 	'Live optimistically', order:	241},
  { id: 385, question: 	'Live with intensity', order:	242},
  { id: 285, question: 	'Live without conflict', order:	243},
  { id: 121, question: 	'Live without restraint', order:	244},
  { id: 254, question: 	'Look for my safety', order:	245},
  { id: 263, question: 	'Look for safeness', order:	246},
  { id: 358, question: 	'Look for sheer variety', order:	247},
  { id: 373, question: 	'Look overjoyed', order:	248},
  { id: 326, question: 	'Lose my temper', order:	249},
  { id: 59	, question: 'Maintain command', order:	250},
  { id: 318, question: 	'Maintain resentment', order:	251},
  { id: 109, question: 	'Maintain self-sufficiency', order: 252},
  { id: 51	, question: 'Make a good impression', order:	253},
  { id: 203, question: 	'Make a great discovery', order:	254},
  { id: 106, question: 	'Make it by myself', order:	255},
  { id: 107, question: 	'Make my own decisions', order:	256},
  { id: 280, question: 	'Make peace willingly', order:	257},
  { id: 164, question: 	'Make people laugh', order:	258},
  { id: 163, question: 	'Make practical jokes', order:	259},
  { id: 102, question: 	'Manage without help', order:	260},
  { id: 28	, question: 'Meditate every day', order:	261},
  { id: 85	, question: 'Meet many people', order:	262},
  { id: 81	, question: 'Mingle with a crowd', order:	263},
  { id: 353, question: 	'Modify my projects', order:	264},
  { id: 196, question: 	'Notice any defect', order:	265},
  { id: 12	, question: 'Notice subtle gestures', order:	266},
  { id: 232, question: 	'Obey established rules', order:	267},
  { id: 238, question: 	'Observe conventions', order:	268},
  { id: 6	, question:   'Observe my reactions', order:	269},
  { id: 90	, question: 'Offer my collaboration', order:	270},
  { id: 350, question: 	'Often go abroad', order:	271},
  { id: 338, question: 	'Often play with fire', order:	272},
  { id: 174, question: 	'Organize a drawer', order:	273},
  { id: 186, question: 	'Organize a program', order:	274},
  { id: 180, question: 	'Organize my activities', order:	275},
  { id: 229, question: 	'Outline my thinking', order:	276},
  { id: 108, question: 	'Owe nothing to anyone', order:	277},
  { id: 135, question: 	'Party quite frequently', order:	278},
  { id: 143, question: 	'Party without limit', order:	279},
  { id: 252, question: 	'Pass down values', order:	280},
  { id: 197, question: 	'Pay attention to details', order: 281},
  { id: 136, question: 	'Play to amuse myself', order:	282},
  { id: 34	, question: 'Play to be winner', order:	283},
  { id: 156, question: 	'Play tricks often', order:	284},
  { id: 316, question: 	'Plot harsh revenge	', order:285},
  { id: 25	, question: 'Ponder the meaning of life', order: 286},
  { id: 30	, question: 'Practice meditation', order:	287},
  { id: 250, question: 	'Practise ancient rituals', order: 288},
  { id: 162, question: 	'Practise self-derision', order:	289},
  { id: 251, question: 	'Praise traditionalism', order:	290},
  { id: 27	, question: 'Pray in absolute silence', order: 291},
  { id: 187, question: 	'Establish a schedule', order: 292},                            
  { id: 178, question: 	'Prepare a work plan', order:	293},
  { id: 277, question: 	'Prevent bitter conflicts', order:294},
  { id: 216, question: 	'Propose clear concepts', order:	295},
  { id: 103, question: 	'Protect my autonomy', order:	296},
  { id: 131, question: 	'Protect my privacy ', order:	297},
  { id: 158, question: 	'Provoke laughter	', order:298},
  { id: 176, question: 	'Put away utensils', order:	299},
  { id: 170, question: 	'Put things in order', order:	300},
  { id: 388, question: 	'Radiate happiness', order:	301},
  { id: 381, question: 	'Radiate my inner fire', order:	302},
  { id: 38	, question: 'Reach the very top', order:	303},
  { id: 222, question: 	'Read great thinkers', order:	304},
  { id: 13	, question: 'Read people’s minds', order:	305},
  { id: 334, question: 	'Really risk a lot', order:	306},
  { id: 52	, question: 'Receive compliments', order:	307},
  { id: 221, question: 	'Reflect about mankind', order:	308},
  { id: 215, question: 	'Reformulate concepts', order:	309},
  { id: 370, question: 	'Release exuberance ', order:	310},
  { id: 314, question: 	'Remember an affront', order:	311},
  { id: 298, question: 	'Reply to insults', order:	312},
  { id: 220, question: 	'Resort to abstraction', order:	313},
  { id: 235, question: 	'Respect any authority', order:	314},
  { id: 297, question: 	'Respect etiquette', order:	315},
  { id: 245, question: 	'Respect old customs', order:	316},
  { id: 305, question: 	'Respond at once', order:	317},
  { id: 302, question: 	'Respond tit for tat', order:	318},
  { id: 310, question: 	'Retaliate harshly', order:	319},
  { id: 299, question: 	'Retort if provoked', order:	320},
  { id: 307, question: 	'Retort tooth and nail', order:	321},
  { id: 308, question: 	'Reply very promptly', order:	322},
  { id: 275, question: 	'Sacrifice willingly', order:	323},
  { id: 243, question: 	'Safeguard traditions', order:	324},
  { id: 150, question: 	'Satisfy my libido', order:	325},
  { id: 153, question: 	'Savour eroticism', order:	326},
  { id: 9	, question:   'Scan my unconscious', order:	327},
  { id: 181, question: 	'Schedule an activity	', order:328},
  { id: 139, question: 	'Seek distractions', order:	329},
  { id: 44	, question: 'Look for excellence', order:	330},
  { id: 83	, question: 'Seek out company	', order:331},
  { id: 279, question: 	'Foster sweet harmony	', order:332},
  { id: 17	, question: 'Sense things unsaid', order:	333},
  { id: 311, question: 	'Settle accounts coldly', order:	334},
  { id: 91	, question: 'Share a common goal', order:	335},
  { id: 98	, question: 'Share an objective', order:	336},
  { id: 293, question: 	'Have consideration', order:	337},
  { id: 287, question: 	'Show great respect', order:	338},
  { id: 282, question: 	'Have great tolerance ', order:	339},
  { id: 273, question: 	'Show my generosity', order:	340},
  { id: 386, question: 	'Express my love of life', order:	341},
  { id: 46	, question: 'Show pride in myself', order:	342},
  { id: 304, question: 	'Shut up a braggart', order:	343},
  { id: 88	, question: 'Socialize with others', order:	344},
  { id: 380, question: 	'Sparkle with life', order:	345},
  { id: 71	, question: 'Speak very often', order:	346},
  { id: 110, question: 	'Stand on my own feet', order:	347},
  { id: 48	, question: 'Stand out socially', order:	348},
  { id: 69	, question: 'Start a conversation', order:	349},
  { id: 128, question: 	'Stay in my cocoun', order:	350},
  { id: 123, question: 	'Stay on the outside', order:	351},
  { id: 246, question: 	'Stay true to the past', order:	352},
  { id: 179, question: 	'Remain in my cocoon', order:	353},
  { id: 244, question: 	'Stick to old values', order:	354},
  { id: 39	, question: 'Strive for success', order:	355},
  { id: 54	, question: 'Strongly aspire to fame', order:  356},
  { id: 217, question: 	'Study abstract systems', order:	357},
  { id: 239, question: 	'Submit to fulfill orders', order:358},
  { id: 42	, question: 'Succeed at all costs', order:	359},
  { id: 66	, question: 'Supervise subordinates', order:	360},
  { id: 141, question: 	'Take a long vacatiion', order:	361},
  { id: 347, question: 	'Undertake a long trip', order:	362},
  { id: 319, question: 	'Take hard revenge', order:	363},
  { id: 309, question: 	'Take ruthless reprisal', order:	364},
  { id: 335, question: 	'Dare wild risks', order:	365},
  { id: 75	, question: 'Talk about everything', order:	366},
  { id: 72	, question: 'Talk for a long time', order:	367},
  { id: 159, question: 	'Tease my friends', order:	368},
  { id: 155, question: 	'Tell funny stories', order:	369},
  { id: 157, question: 	'Tell good jokes', order:	370},
  { id: 225, question: 	'Think hard and long', order:	371},
  { id: 223, question: 	'Think profoundly', order:	372 },  
  { id: 328, question: 	'Throw a tantrum', order:	373 }, 
  { id: 166, question: 	'Tidy up my things', order:	374 },
  { id: 346, question: 	'Travel over the world	', order:375},
  { id: 142, question: 	'Truly be fun-loving', order: 	376},
  { id: 362, question: 	'Try different activities', order: 377},
  { id: 2	, question:   'Understand my emotions', order:	378},
  { id: 320, question: 	'Vent my frustration', order:	379},
  { id: 352, question: 	'Venture far away', order:	380},
  { id: 194, question: 	'Verify and reverify', order:	381},
  { id: 344, question: 	'Visit exotic countries', order:	382},
  { id: 324, question: 	'Voice my annoyance	', order:383},
  { id: 265, question: 	'Volunteer my services', order:	384},
  { id: 224, question: 	'Weigh up an idea	', order: 385},
  { id: 359, question: 	'Welcome change', order:	386},
  { id: 36	, question: 'Win a competition', order:	387},
  { id: 37	, question: 'Win first place', order:	388},
  { id: 317, question: 	'Withold forgiveness', order:	389},
  { id: 23	, question: 'Wonder about afterlife	', order:390},
  { id: 184, question: 	'Work methodically', order:	391},
  { id: 193, question: 	'Proceed meticulously', order:	392},
  { id: 89	, question: 'Work with a partner', order:	393},
  { id: 192, question: 	'Work with great care', order:	394},
  { id: 101, question: 	'Do without support', order:395},
  { id: 397, question:	'IMPULSIVITY'	, order: 396},
  { id: 398, question:	'MOOD SWING'	, order: 397},
  { id: 399, question:	'NERVOUSNESS'	, order: 398},
  { id: 400, question:	'INSTABILITY'	, order: 399},
  { id: 401, question:	'SHYNESS'	, order: 400},
  { id: 402, question:	'VULNERABILITY'	, order: 401},
  { id: 403, question:	'SADNESS'	, order: 402},
  { id: 404, question:	'DEPRESSION	', order: 403},
  { id: 405, question:	'STRESS'	, order: 404},
  { id: 406, question:	'WORRY' , order: 405},
  { id: 407, question:	'CULPABILITY'	, order: 406},

]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  questions: Array<Question>;
  actual_question_id: number;
  actual_question_order: number;
  actual_question: string;
  completed:boolean;
  subcategories = subcategories;
  timer;
  ranking: any[];

  constructor() { 
      this.questions = questions
      if ( localStorage.getItem('actual_question_order') ) {
        let _actualQuestion = localStorage.getItem('actual_question_order')
        console.log(_actualQuestion)
        if (_actualQuestion ) {
          this.actual_question_order = parseInt(_actualQuestion)
          this.actual_question_id = this.getId(this.actual_question_order)
          localStorage.setItem('actual_question_order', this.actual_question_order.toString())

        } else {
          this.actual_question_order = 1
          this.actual_question_id = this.getId(this.actual_question_order)
          localStorage.setItem('actual_question_order', this.actual_question_order.toString())
        }
      }
      else {
        this.actual_question_order = 1
        this.actual_question_id = this.getId(this.actual_question_order)
        localStorage.setItem('actual_question_order', this.actual_question_order.toString())
      }
      this.ranking = []
      this.actual_question = this.getQuestion(this.actual_question_order)
      if (this.actual_question_order - 1 >= 406) {
        this.completed = true
      } else this.completed = false

      this.timer = setTimeout(() => alert('Please answer the question'), 5000)
  }

  ngOnInit(): void {

  }

  getId(n:number) {
    for(let question of this.questions) {
      if (n == question.order) return question.id
    }
    return 0
  }

  getQuestion(n: number) {
    for(let question of this.questions) {
      if (n == question.order) return question.question
    }
    return ""
  }
  updateQuestion(answer: number) {
    clearTimeout(this.timer)
    this.actual_question_id = this.getId(this.actual_question_order)
    localStorage.setItem(this.actual_question_id.toString(), answer.toString())
    this.actual_question_order += 1
    localStorage.setItem('actual_question_order', this.actual_question_order.toString())
    this.actual_question = this.getQuestion(this.actual_question_order)
    this.timer = setTimeout(() => alert('Please answer the question'), 5000)
    if (this.actual_question_order - 1 >= 406) {
      this.completed = true
    } else this.completed = false
  }
  getScore(sub: number) {
    if (this.completed) {
      let _answers: Array<number> = []
      for (let x = (sub*11)+1; x <= (sub+1)*11 ; x++) {
          let _answer: string | null;
          if (localStorage.getItem(x.toString()) != null) {
            _answer = localStorage.getItem(x.toString())
            if (_answer)
              _answers.push(parseInt(_answer, 10))
            else _answers.push(0)
          } else _answers.push(0)
      }
      let sum = 0;
      for (let _answer of _answers) {
        sum+= _answer
      }
      this.ranking.push({ name: this.subcategories[sub], score: sum/11})
      return (sum/11).toFixed(2)
    } else return 0.0.toFixed(2)
  }

  getListSub(sub: number) {
    if (this.completed) {
      let _ranking = []
      let r = this.ranking
      let ind_max = 0
      let indices: Array<number> = []
      function isInIndices(n:number) {
        for (let i of indices) {
          if (n == i) {
            return true
          }
        }
        return false
      }
      
      for (let j = 0; j < 37; j++) {
        let max = 0
        for(let _item of r) {
          if (_item.score > max && !isInIndices(j)) {
            max = _item.score
            ind_max = j
          } 
        }
        _ranking.push(this.ranking[ind_max].name)
        indices.push(ind_max)
      }
      switch (sub) {
        case 1:
          console.log('First', _ranking.slice(0, 5))
          return _ranking.slice(0, 5)
        case 2:
          console.log('Second',_ranking.slice(5, 13))
          return _ranking.slice(5, 13)
        case 3:
          console.log('Third',_ranking.slice(13, 23))
          return _ranking.slice(13, 23)
        case 4:
          console.log('Fourth',_ranking.slice(23, 31))
          return _ranking.slice(23, 31)
        case 5:
          return _ranking.slice(31, 36)
        default:
          return _ranking.slice(36)
      }
    } else return []
  }

  

}
